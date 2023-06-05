"use client";
import Link from "next/link";
import useValidation from "@/app/hooks/useValidation";
import validationCreateUser from "@/app/validation/validationCreateUser";

const FormCreateUser = () => {
    const createAccount = () => {
        console.log("Creando cuenta");
    };

    const { value, error, submitForm, handleChange, handleSubmit, handleBlur } =
        useValidation(validationCreateUser, createAccount);

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Registrarse
            </h5>
            {Object.keys(error).length !== 0 ? (
                <div className="flex p-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400">
                    <svg
                        aria-hidden="true"
                        className="flex-shrink-0 inline w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Danger</span>
                    <div>
                        <span className="font-medium">
                            Debe corregir lo siguiente:
                        </span>
                        <ul className="mt-1.5 ml-4 list-disc list-inside">
                            {error.name && <li>{error.name}</li>}
                            {error.email && <li>{error.email}</li>}
                            {error.password && <li>{error.password}</li>}
                        </ul>
                    </div>
                </div>
            ) : null}
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
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                    autoComplete="off"
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
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                    autoComplete="off"
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
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
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
    );
};

export default FormCreateUser;
