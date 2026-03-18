import { ChannelType, MemberRole } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";

const DEMO_BOTS = [
  { userId: "demo:admin", name: "Teamcord Bot", email: "demo+admin@teamcord.local" },
  { userId: "demo:alex", name: "Alex", email: "demo+alex@teamcord.local" },
  { userId: "demo:sam", name: "Sam", email: "demo+sam@teamcord.local" },
  { userId: "demo:jamie", name: "Jamie", email: "demo+jamie@teamcord.local" }
];

const DEMO_SERVERS = [
  { name: "Teamcord HQ", imageUrl: "https://placehold.co/256x256/png?text=HQ" },
  { name: "Gaming Lounge", imageUrl: "https://placehold.co/256x256/png?text=GG" },
  { name: "Study Room", imageUrl: "https://placehold.co/256x256/png?text=STUDY" },
  { name: "Creators Hub", imageUrl: "https://placehold.co/256x256/png?text=CREATE" },
  { name: "Chill Zone", imageUrl: "https://placehold.co/256x256/png?text=CHILL" }
];

function inviteCodeFor(name: string) {
  // Stable across runs to make seeding idempotent.
  return `demo-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export async function ensureDemoServersForProfile(profileId: string) {
  const [adminBot, ...otherBots] = await Promise.all(
    DEMO_BOTS.map((bot, idx) =>
      db.profile.upsert({
        where: { userId: bot.userId },
        update: {},
        create: {
          userId: bot.userId,
          name: bot.name,
          email: bot.email,
          imageUrl: `https://placehold.co/256x256/png?text=${encodeURIComponent(
            idx === 0 ? "BOT" : bot.name.slice(0, 2).toUpperCase()
          )}`
        }
      })
    )
  );

  for (const serverDef of DEMO_SERVERS) {
    const inviteCode = inviteCodeFor(serverDef.name);

    let server = await db.server.findUnique({ where: { inviteCode } });

    if (!server) {
      server = await db.server.create({
        data: {
          profileId: adminBot.id,
          name: serverDef.name,
          imageUrl: serverDef.imageUrl,
          inviteCode,
          channels: {
            create: [
              { name: "general", type: ChannelType.TEXT, profileId: adminBot.id },
              { name: "voice", type: ChannelType.AUDIO, profileId: adminBot.id },
              { name: "video", type: ChannelType.VIDEO, profileId: adminBot.id }
            ]
          },
          members: {
            create: [
              { profileId: adminBot.id, role: MemberRole.ADMIN },
              { profileId, role: MemberRole.ADMIN },
              { profileId: otherBots[0].id, role: MemberRole.GUEST },
              { profileId: otherBots[1].id, role: MemberRole.GUEST },
              { profileId: otherBots[2].id, role: MemberRole.MODERATOR }
            ]
          }
        }
      });

      // Seed a couple of starter messages in #general
      const general = await db.channel.findFirst({
        where: { serverId: server.id, name: "general" }
      });

      if (general) {
        const botMember = await db.member.findFirst({
          where: { serverId: server.id, profileId: adminBot.id }
        });

        if (botMember) {
          await db.message.createMany({
            data: [
              {
                id: uuidv4(),
                content: `Welcome to ${serverDef.name}!`,
                memberId: botMember.id,
                channelId: general.id
              },
              {
                id: uuidv4(),
                content: "This is demo data so you can explore the app right away.",
                memberId: botMember.id,
                channelId: general.id
              }
            ]
          });
        }
      }
    } else {
      // Ensure the signed-in user is a member (avoid duplicates since the schema
      // doesn't enforce a unique constraint on [profileId, serverId]).
      const existing = await db.member.findFirst({
        where: { serverId: server.id, profileId }
      });
      if (!existing) {
        await db.member.create({
          data: { serverId: server.id, profileId, role: MemberRole.ADMIN }
        });
      } else if (existing.role !== MemberRole.ADMIN) {
        await db.member.update({
          where: { id: existing.id },
          data: { role: MemberRole.ADMIN }
        });
      }
    }
  }
}

