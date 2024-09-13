import SubNavList from "../ui/SubNavList"

function CatNav() {
    return (
        <ul className="w-[250px] bg-white absolute left-0 top-[100%] py-[12px] mr-[1px] rounded-[0px_0px_6px_6px] z-50 transition duration-300 ease-in-out  invisible opacity-0 translate-y-[20px] group-hover/cate:visible group-hover/cate:opacity-100 group-hover/cate:translate-y-0">
            <li className="group"><a href="#" className="cateLink">Smartwatches</a></li>
            <li className="group/catNavLink">
                <a href="#" className="cateLink">Smart TVs</a>
                <div className="cmgmenu">
                    <ul className="menuList">
                        <SubNavList />
                        <SubNavList />
                        <SubNavList />
                        <SubNavList />
                    </ul>
                </div>
            </li>
            <li className="group"><a href="#" className="cateLink">Laptops & Computers</a></li>
            <li className="group"><a href="#" className="cateLink">Audios & Video</a></li>
            <li className="group"><a href="#" className="cateLink">Mobile & Tablets</a></li>
            <li className="group"><a href="#" className="cateLink">Cameras</a></li>
            <li className="group"><a href="#" className="cateLink">Video Games</a></li>
            <li className="group"><a href="#" className="cateLink">Printers & Ink</a></li>
            <li className="group"><a href="#" className="cateLink">Headphones</a></li>
            <li className="group"><a href="#" className="cateLink"></a></li>
        </ul>
    )
};

export default CatNav;

// transition ease-in duration-300

