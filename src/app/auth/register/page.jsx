import FormCreateUser from "@/app/components/FormCreateUser";

export const metadata = {
    title: "Registrarse",
    description: "Clone Produnt Hunt",
};

const Register = () => {
    return (
        <div className="flex justify-center items-center pt-8">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <FormCreateUser />
            </div>
        </div>
    );
};

export default Register;
