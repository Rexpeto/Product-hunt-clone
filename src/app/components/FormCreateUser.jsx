"use client";
import Link from "next/link";
import useValidation from "@/app/hooks/useValidation";
import validationCreateUser from "@/app/validation/validationCreateUser";

const FormCreateUser = () => {
    const createAccount = () => {
        console.log("Creando cuenta");
    };

    const { value, error, submitForm, handleChange, handleSubmit } =
        useValidation(validationCreateUser, createAccount);

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                    onChange={(e) => handleChange(e)}
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
