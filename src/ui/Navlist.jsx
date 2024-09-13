import { CiMenuFries } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import SubNavList from "./SubNavList";

function Navlist() {
    return (
        <>
            <ul className="flex items-center">
                <ParentNavlink title={"Home"}>
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
                <ParentNavlink title={"Shop"}>
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
                <ParentNavlink title={"Products"}>
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
                <ParentNavlink title={"Features"}>
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
                <ParentNavlink title={"Portfolio"}>
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
                <ParentNavlink title={"pages"}>
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
                <ParentNavlink title={"Buy Now"}>
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <SubNavList />
                    <li>
                        <a href="#">
                            <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
                        </a>
                    </li>
                </ParentNavlink>
            </ul>
        </>
    )
};

export default Navlist;


function ParentNavlink({ title, children }) {
    return (
        <>
            <li className="relative group/navLink">
                <a href="#" className="text-white text-[12px] font-medium flex items-center relative p-[12px_15px] uppercase">{title} <GoChevronDown /></a>
                <div className="mgmenu">
                    <ul className="menuList">
                        {children}
                    </ul>
                </div>
            </li>
        </>
    )
}