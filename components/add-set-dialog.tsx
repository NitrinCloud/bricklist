import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import db from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import BrickLink_Logo from "@/public/BrickLink_glyph-inverted.svg"
import { addSetToWishlist } from "@/app/actions";

export async function AddSetDialog({ searchParams, bricklist }: {
    searchParams: { page?: number }, bricklist: ({
        sets: {
            id: number;
            name: string | null;
            image: string | null;
            bricklink: string | null;
        }[];
    } & {
        id: number;
        userId: string;
    })
}) {
    const sets = await db.set.findMany()
    const currentIndex = ((searchParams.page ?? 1) - 1) * 50
    const filteredSets = sets.filter((set) => {
        return bricklist.sets.find((addedSet) => {
            return set.id == addedSet.id
        }) == undefined
    }).slice(currentIndex, currentIndex + 50)

    const visualSets = filteredSets.map((set) => {
        return (
            <li key={set.id}>
                <div className="grid grid-cols-2">
                    {set.image && <div className="aspect-video w-44 relative my-6">
                        <Image src={set.image} alt={set.id + " Set Bild"} objectFit="contain" fill />
                    </div>}
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-5">
                            <h3>{set.name}</h3>
                            <Button variant="ghost" asChild disabled={set.bricklink == null}>
                                {set.bricklink && <Link target="_blank" href={set.bricklink} className="relative w-8 h-8">
                                    <Image fill src={BrickLink_Logo} alt="BrickLink" />
                                </Link>}
                            </Button>
                        </div>
                        <form className="flex">
                            <input name="set" value={set.id} hidden />
                            <Button className="w-full" formAction={addSetToWishlist}>Hinzufügen</Button>
                        </form>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus />
                </Button>
            </DialogTrigger>
            <DialogContent className="min-w-max">
                <DialogHeader>
                    <DialogTitle>Set hinzufügen</DialogTitle>
                    <DialogDescription>
                        Füge Sets zu deiner Bricklist hinzu
                    </DialogDescription>
                </DialogHeader>
                <ul className="grid grid-cols-1 gap-6 p-4">
                    {visualSets}
                </ul>
            </DialogContent>
        </Dialog>
    )
}