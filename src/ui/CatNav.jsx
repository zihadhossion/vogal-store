import SubNavList from "../ui/SubNavList";
import { CiMenuFries } from "react-icons/ci";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function CatNav() {

    return (
        <div className="flex-[1_0_22%] relative border-r-2 border-[#666] pr-[15px] transition">
            <span className="group/catnav text-white hover:text-[#fdd162] inline-flex items-center gap-3 py-4 transition cursor-pointer">
                <CiMenuFries />
                <span className="block text-xs font-medium uppercase">Browse Categories</span>
                <GoChevronDown />
                <CatNavList />
            </span>
        </div>
    )
};

export default CatNav;

function CatNavList() {

    const categories = [
        {
            name: "Smartwatches",
        },
        {
            name: "Smart TVs",
            link: "#",
            icon: <GoChevronRight />,
            subList: [
                <SubNavList key={1} />,
                <SubNavList key={2} />,
                <SubNavList key={3} />,
                <SubNavList key={4} />
            ]
        },
        {
            name: "Laptops & Computers",
            link: "#"
        },
        {
            name: "Audios & Video",
            link: "#"
        },
        {
            name: "Mobile & Tablets",
            link: "#"
        },
        {
            name: "Cameras",
            link: "#"
        },
        {
            name: "Video Games",
            link: "#"
        },
        {
            name: "Printers & Ink",
            link: "#"
        },
        {
            name: "Headphones",
            link: "#"
        },
    ];

    return (
        <>
            <ul className=" w-[250px] h-auto bg-white absolute left-0 top-full py-[12px] mr-[1px] rounded-[0px_0px_6px_6px] z-50 invisible group-hover/catnav:visible scale-y-0 group-hover/catnav:scale-y-100 opacity-0 group-hover/catnav:opacity-100 origin-[0_0] transition ease-in-out">
                {categories?.map((item, index) => (
                    <li key={index} className="group/subCatnav hover:bg-blue-50 transition">
                        <a href="#" className="text-sm p-[8px_20px_8px_25px] flex items-center justify-between transition">
                            <span>{item.name}</span>
                            {item?.icon}
                        </a>
                        {item?.subList && (
                            <div className="max-h-[550px] min-w-[950px] bg-white p-[30px_35px_20px] absolute top-0 left-full invisible group-hover/subCatnav:visible scale-y-0 group-hover/subCatnav:scale-y-100 opacity-0 group-hover/subCatnav:opacity-100 origin-[100_100] transition">
                                <ul className="flex flex-1 gap-10 relative">
                                    {item?.subList}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}