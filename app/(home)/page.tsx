import db from "@/lib/db"
import { revalidatePath } from "next/cache"
import Image from "next/image"
import { createWishlist, removeSetFromWishlist } from "../actions"
import { getUserSession } from "@/lib/server"
import logic from "@/public/Logic-pana.svg"
import Link from "next/link"
import { AddSetDialog } from "@/components/add-set-dialog"
import { Button } from "@/components/ui/button"
import BrickLink_Logo from "@/public/BrickLink_glyph-inverted.svg"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

export default async function Home({ searchParams }: { searchParams: { page: number } }) {
  const session = await getUserSession()

  if (!session || !session.user) {
    return (
      <main className="absolute top-0 left-0 h-screen w-screen flex flex-col justify-center items-center">
        <Image src={logic} alt="Login" />
        <span className="text-xl">Hier entsteht deine Liste. <Link className="font-bold underline" href="/login">Melde dich an</Link> um sie zu bearbeiten!</span>
      </main>
    )
  }

  const wishlist = await db.wishlist.findFirst({
    where: {
      userId: session.user.id
    },
    include: {
      sets: true
    }
  })

  if (!wishlist) {
    await createWishlist()
    revalidatePath("/")
    return
  }

  const visualSets = wishlist.sets.map((set) => {
    return (
      <li key={set.id} className="grid grid-cols-2 p-4">
        <div className="flex justify-center">
          {set.image && <div className="aspect-video w-80 relative">
            <Image src={set.image} alt={set.id + " Set Bild"} objectFit="contain" fill />
          </div>}
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <h3>{set.name}</h3>
              <Button variant="ghost" asChild disabled={set.bricklink == null}>
                {set.bricklink && <Link target="_blank" href={set.bricklink} className="relative w-8 h-8">
                  <Image fill src={BrickLink_Logo} alt="BrickLink" />
                </Link>}
              </Button>
            </div>
            <form>
              <input name="set" value={set.id} hidden />
              <Button formAction={removeSetFromWishlist} variant="ghost">
                <X />
              </Button>
            </form>
          </div>
        </div>
      </li>
    )
  })

  return (
    <main className="min-h-screen p-24">
      <div className="flex justify-between items-center my-2">
        <h2 className="text-xl font-bold">Bricklist</h2>
        <AddSetDialog searchParams={searchParams} bricklist={wishlist} />
      </div>
      <ul className="m-12 grid grid-cols-1 divide-y">
        {visualSets}
      </ul>
    </main>
  )
}