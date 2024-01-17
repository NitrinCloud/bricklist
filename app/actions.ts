"use server"

import { auth } from "@/auth"
import db from "@/lib/db"
import { getUserSession } from "@/lib/server"
import { revalidatePath } from "next/cache"

export async function createWishlist() {
    const session = await getUserSession()

    if (!session || !session.user) {
        return
    }

    return await db.user.update({
        where: {
          id: session.user.id
        },
        data: {
          wishlist: {
            create: {}
          }
        }
    })
}

export async function addSetToWishlist(formData: FormData) {
    const session = await getUserSession()
    const setId = formData.get("set") as string

    await db.wishlist.update({
        where: {
            userId: session?.user?.id
        },
        data: {
            sets: {
                connect: {
                    id: Number(setId)
                }
            }
        }
    })

    revalidatePath("/")
}

export async function removeSetFromWishlist(formData: FormData) {
    const session = await getUserSession()
    const setId = formData.get("set") as string

    await db.wishlist.update({
        where: {
            userId: session?.user?.id
        },
        data: {
            sets: {
                disconnect: {
                    id: Number(setId)
                }
            }
        }
    })

    revalidatePath("/")
}