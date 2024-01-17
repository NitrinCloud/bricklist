import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImprintPage() {
    return (
        <main className="h-screen flex justify-center items-center p-44">
            <Card className="h-full w-full">
                <CardHeader>
                    <CardTitle>Impressum</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <span>Mats Snorre Fischer</span>
                    <span>Ellerbeker Weg 125</span>
                    <span>24147 Kiel</span>
                    <span>Deutschland</span>
                    <br />
                    <span>Tel.: +49 171 5241660</span>
                    <span>E-Mail: m.fischer@nitrin.de</span>
                </CardContent>
            </Card>
        </main>
    )
}