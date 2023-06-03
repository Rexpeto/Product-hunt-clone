import Link from "next/link";
import Image from "next/image";
import favicon from "../favicon.svg";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4 border-b border-gray-700">
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={favicon} alt="logo" width={42} height={42} />
                    <p className="dark:text-white font-bold uppercase">
                        Clone Product Hunt
                    </p>
                </Link>
                <div className="ml-6 xl:ml-16">
                    <SearchBar />
                </div>
            </div>

            <Navigation />
        </header>
    );
};

export default Header;
