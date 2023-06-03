import Header from "@/app/components/Header";
import "@/app/globals.css";

export const metadata = {
    title: "Product Hunt Clone",
    description: "Clone Produnt Hunt",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-white dark:bg-gray-900">
                <Header />
                <main className="container mx-auto dark:text-white pt-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
