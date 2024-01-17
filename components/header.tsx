import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { getUserSession } from "@/lib/server";
import Link from "next/link";
import { Separator } from "./ui/separator";

export async function Header() {
    const session = await getUserSession()

    return (
        <header className="fixed w-full z-10">
            <div className="p-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl font-extrabold">Bricklist | Nitrin.DEV</h1>
                </Link>
                <form>
                    {session ? <Button variant="destructive" formAction={async () => {
                        "use server"
                        await signOut()
                    }}>Ausloggen</Button> : <Button asChild>
                        <Link href="/login">Anmelden</Link>
                    </Button>}
                </form>
            </div>
            <Separator orientation="horizontal" />
        </header>
    )
}