import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
    return(
        <footer className="p-4 fixed bottom-0 w-full z-10 flex justify-end items-center">
            <Button variant="link" asChild>
                <Link href="/impressum">Impressum</Link>
            </Button>
            <Button variant="link" asChild>
                <Link href="/datenschutz">Datenschutz</Link>
            </Button>
        </footer>
    )
}