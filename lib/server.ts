"use server"

import { auth } from "@/auth"
import { cache } from "react"

export const getUserSession = cache(auth)