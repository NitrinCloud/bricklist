import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen relative">
            <Header />
            {children}
            <Footer />
        </div>
    )
}