import Link from "next/link";

const Navigation = () => {
    return (
        <div className="flex items-center gap-4">
            <nav className="flex items-center gap-3 dark:text-white">
                <Link
                    href="/"
                    className="hover:text-blue-400 transition duration-150"
                >
                    Inicio
                </Link>
                <Link
                    href="/productos"
                    className="hover:text-blue-400 transition duration-150"
                >
                    Productos
                </Link>
            </nav>
            <Link
                href="/auth/login"
                className="dark:text-gray-400 dark:hover:text-white p-2 border rounded-xl border-gray-600 hover:border-blue-400 transition duration-150"
            >
                Iniciar Sesión
            </Link>
        </div>
    );
};

export default Navigation;
