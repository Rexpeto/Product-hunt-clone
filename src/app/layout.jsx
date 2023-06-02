import "./globals.css";

export const metadata = {
    title: "Product Hunt Clone",
    description: "Clone Produnt Hunt",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
