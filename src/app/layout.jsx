import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    title: "Product Hunt Clone",
    description: "Clone Produnt Hunt",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-white dark:bg-gray-900">
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
