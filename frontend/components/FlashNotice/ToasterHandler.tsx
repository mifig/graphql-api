import { getFlashNotice, deleteFlashNotice } from "@/actions/flash-notice";
import FlashNotice from "./FlashNotice";

export default async function ToasterHandler() {
  const flashNotice = await getFlashNotice();

  return <FlashNotice flashNotice={flashNotice} deleteFlashNotice={deleteFlashNotice} />;
}