import { CiSearch } from "react-icons/ci";

function SearchBox() {
    return (
        <div className="flex flex-1 mgr">
            <form className="w-full rounded-[5px] relative border-[1px] border-solid border-[rgba(0,0,0,0)]">
                <div className="flex">
                    <input type="search" className="w-full h-[42px] text-[14px] text-[#444] bg-[#f5f5f5] rounded-tl-[5px] rounded-bl-[5px] px-[20px] appearance-none" placeholder="Search products" />
                    <button type="submit" className="w-[45px] h-[42px] text-white bg-[#f0ae00] rounded-[0_5px_5px_0]">
                        <CiSearch className="w-[22px] h-[22px]" />
                    </button>
                </div>
            </form>
        </div >
    )
};

export default SearchBox;

