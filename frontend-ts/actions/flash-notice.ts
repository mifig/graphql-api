"use server";

import { cookies } from "next/headers";
import { Flash } from "@/types/types";
import { FlashInput } from "@/types/types";

export async function getFlashNotices() {
  const flashNotice = cookies().get("flash");

  if (flashNotice?.value) {
    return JSON.parse(flashNotice.value);
  }

  return;
}

export async function setFlashNotice({ variant, message }: FlashInput) {  
  const prevFlashes = cookies().get("flash")

  let finalFlashes: Flash[]

  if (prevFlashes === undefined) {
    const newFlash = { variant, message, id: "1" }

    finalFlashes = [newFlash]
  } else {
    let prevFlashesParsed: Flash[] = JSON.parse(prevFlashes.value)
    console.log(prevFlashesParsed)
  
    const lastId = prevFlashesParsed[prevFlashesParsed.length - 1].id
      
    const newFlash = { variant, message, id: (parseInt(lastId) + 1).toString() }
  
    finalFlashes = [
      ...prevFlashesParsed,
      newFlash
    ]
  }

  cookies().set("flash", JSON.stringify(finalFlashes), {
    // maxAge: 5, // Cookie will expire in 5 seconds
    path: "/",
  });
}

export async function deleteFlashNotice(id: string) {
  const flashes = cookies().get("flash")!

  const parsedFlashes = JSON.parse(flashes.value)

  const newFlashes: Flash[] = parsedFlashes.filter((flash: Flash) => flash.id !== id)

  if (newFlashes.length > 0) {
    cookies().set("flash", JSON.stringify(newFlashes), {
      // maxAge: 5, // Cookie will expire in 5 seconds
      path: "/",
    });
  } else {
    cookies().delete("flash")
  }
}
