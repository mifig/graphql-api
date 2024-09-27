"use server";

import { cookies } from "next/headers";
import { FlashInput } from "@/types/types";

export async function getFlashNotice() {
  const flashNotice = cookies().get("flash");

  if (flashNotice?.value) {
    return JSON.parse(flashNotice.value);
  }

  return;
}

export async function setFlashNotice({ variant, message }: FlashInput) {  
  cookies().set("flash", JSON.stringify({ variant, message }), {
    // maxAge: 5, // Cookie will expire in 5 seconds
    path: "/",
  });
}

export async function deleteFlashNotice() {
  cookies().delete("flash")
}
