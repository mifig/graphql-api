import { getFlashNotices, deleteFlashNotice } from "@/actions/flash-notice";
import FlashNotice from "./FlashNotice";

export default async function ToasterHandler() {
  const flashNotices = await getFlashNotices();

  return <FlashNotice flashNotices={flashNotices} deleteFlashNotice={deleteFlashNotice} />;
}