"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-4">
            <nav className="flex items-center gap-3 dark:text-white">
                <Link
                    href="/"
                    className={`${
                        pathname === "/" ? "text-blue-400" : ""
                    } hover:text-blue-400 transition duration-150 `}
                >
                    Inicio
                </Link>
                <Link
                    href="/populares"
                    className={`${
                        pathname === "/populares" ? "text-blue-400" : ""
                    } hover:text-blue-400 transition duration-150 `}
                >
                    Populares
                </Link>
                <Link
                    href="/productos"
                    className={`${
                        pathname === "/productos" ? "text-blue-400" : ""
                    } hover:text-blue-400 transition duration-150 `}
                >
                    Productos
                </Link>
            </nav>
            <Link
                href="/auth/login"
                className={`${
                    pathname === "/auth/login"
                        ? "text-white border-blue-400 hover:border-blue-400"
                        : "border-gray-600  dark:text-gray-400 dark:hover:text-white hover:border-blue-400"
                }  p-2 border rounded-xl transition duration-150`}
            >
                Iniciar Sesión
            </Link>
        </div>
    );
};

export default Navigation;
