export type FlashInput  = {
  variant: "error" | "notice" | "alert"
  message: string
}

export type Flash = FlashInput & { id: string }