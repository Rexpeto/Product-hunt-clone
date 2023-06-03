import Link from "next/link";

export const metadata = {
    title: "Registrarse",
    description: "Clone Produnt Hunt",
};

const Register = () => {
    return (
        <div className="flex justify-center items-center pt-8">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Registrarse
                    </h5>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none transition duration-150 hover:border-blue-400 focus:border-blue-700"
                            placeholder="Nombre@dominio.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Correo Eléctronico
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none transition duration-150 hover:border-blue-400 focus:border-blue-700"
                            placeholder="Nombre@dominio.com"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none transition duration-150 hover:border-blue-400 focus:border-blue-700"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Crear
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        ¿Ya tienes una cuenta?{" "}
                        <Link
                            href="/auth/login"
                            className="text-blue-700 hover:underline dark:text-blue-500 transition duration-150"
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
