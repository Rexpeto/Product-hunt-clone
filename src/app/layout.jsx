import Header from "@/app/components/Header";
import "@/app/globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { FirebaseProvider } from "./firebase/context";

export const metadata = {
    title: "Product Hunt Clone",
    description: "Clone Produnt Hunt",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-white dark:bg-gray-900 h-screen">
                <FirebaseProvider>
                    <Header />
                    <Suspense fallback={<Loading />}>
                        <main className="container mx-auto dark:text-white pt-4">
                            {children}
                        </main>
                    </Suspense>
                </FirebaseProvider>
            </body>
        </html>
    );
}
