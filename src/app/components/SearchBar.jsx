import { HiOutlineSearch } from "react-icons/hi";

const SearchBar = () => {
    return (
        <form className="relative">
            <input
                type="text"
                className="rounded bg-gray-700 outline-none text-white py-1.5 px-2 pr-7 text-sm"
                placeholder="Buscar"
            />
            <button className="absolute right-2 top-1.5 text-xl text-gray-400">
                <HiOutlineSearch />
            </button>
        </form>
    );
};

export default SearchBar;
