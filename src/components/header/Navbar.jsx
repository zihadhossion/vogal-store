import { CiMenuFries } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import CatNav from "../../ui/CatNav";
import Navlist from "../../ui/Navlist";

function Navbar() {
    return (
        <div className="bg-[#333]">
            <div className="flex pageWidth">
                <div className="group/cate flex relative transiTion ease-in">
                    <div className="text-white min-w-[220px] flex items-center relative border-r-2 border-solid border-[#666] pr-[15px] mr-[10px] transiTion ease-linear cursor-pointer hover:text-[#fdd162]">
                        <CiMenuFries className="mr-[15px]" />
                        <span className="text-[12px] uppercase">Browse Categories</span>
                        <GoChevronDown className="ml-[auto] mr-[10px]" />
                        <CatNav />
                    </div>
                </div>
                <div className="flex items-center justify-between flex-1">
                    <Navlist />
                    <a href="#" className="text-[#fdd162] uppercase cursor-pointer">🔥 DEAL ZONE</a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;