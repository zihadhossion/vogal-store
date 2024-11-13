import { GoChevronDown } from "react-icons/go";
import SubNavList from "./SubNavList";

function Navlist() {

    const navTitles = [
        { title: "HOME", subList: [<SubNavList key={1} />, <SubNavList key={2} />, <NavImage key={3} />] },
        { title: "SHOP", subList: [<SubNavList key={4} />, <SubNavList key={5} />, <SubNavList key={6} />, <SubNavList key={7} />, <NavImage key={8} />] },
        { title: "PRODUCTS", subList: [<SubNavList key={9} />, <SubNavList key={10} />, <SubNavList key={11} />, <SubNavList key={12} />, <NavImage key={13} />] },
        { title: "FEATURES", subList: [<SubNavList key={14} />, <SubNavList key={15} />,] },
        { title: "PORTFOLIO", subList: [<SubNavList key={16} />] },
        { title: "PAGES", subList: [<SubNavList key={17} />] },
        { title: "BUY NOW", subList: [<SubNavList key={18} />] }
    ]

    return (
        <ul className="flex items-center">
            {navTitles?.map((item, index) => (
                <li key={index} className="relative group/navList">
                    <a href="#" className="text-white text-xs font-medium flex items-center gap-[2px] px-3 py-4 xl:px-4 uppercase">
                        <span>{item.title}</span><GoChevronDown style={{ width: "15px", height: "15px" }} />
                    </a>
                    <div className="h-auto bg-white flex justify-between p-[30px_35px_5px] absolute invisible group-hover/navList:visible scale-y-0 group-hover/navList:scale-y-100 opacity-0 group-hover/navList:opacity-100 origin-[0_0] transition ease-in-out">
                        <ul className="flex flex-1 gap-10 relative">
                            {item?.subList}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default Navlist;


function NavImage() {

    return (
        <li>
            <a href="#">
                <img src="./tvBanner.jpg" alt="" className="max-w-[250px]" />
            </a>
        </li>
    )
}