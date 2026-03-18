import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { ensureDemoServersForProfile } from "@/lib/ensure-demo";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  if (profile) return profile;

  const name = user.firstName
    ? `${user.firstName}${user.lastName ? " " + user.lastName : ""}`
    : user.id;

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });

  // Brand new user: attach them to demo servers so they land
  // directly in the main app instead of being forced to create one.
  await ensureDemoServersForProfile(newProfile.id);

  return newProfile;
};
