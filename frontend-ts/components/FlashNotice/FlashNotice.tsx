"use client";

import React from "react";
import { Flash } from "@/types/types";
import toast from 'react-hot-toast';

export default function FlashNotice({ 
  flashNotices, 
  deleteFlashNotice 
}: {
  flashNotices: Flash[], 
  deleteFlashNotice: (id: string) => Promise<void> 
}) {
  React.useEffect(() => {
    if (flashNotices) {
      flashNotices.forEach((notice) => {
        if (notice.variant === "error") {
          toast.error(notice.message);
        } else if (notice.variant === "notice") {
          toast.success(notice.message);
        } else if (notice.variant === "alert") {
          toast.error(notice.message)
        }
        deleteFlashNotice(notice.id);
      });
    }
  }, [flashNotices]);

  return null;
}
