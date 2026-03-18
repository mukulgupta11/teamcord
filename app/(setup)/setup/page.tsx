import React from "react";
import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { InitialModal } from "@/components/modals/initial-modal";
import { ensureDemoServersForProfile } from "@/lib/ensure-demo";

export default async function SetupPage() {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (server) return redirect(`/servers/${server.id}`);

  // If the user somehow has no servers (e.g. old account),
  // seed demo data and redirect into the app.
  await ensureDemoServersForProfile(profile.id);

  const seededServer = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (seededServer) return redirect(`/servers/${seededServer.id}`);

  return <InitialModal />;
}
