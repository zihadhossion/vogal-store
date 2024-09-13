import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";


export default function FooterList() {
    const windowWidth = useWindowSize();

    return (

        <>
            {windowWidth > 575 ? <DeskLists /> : <MobLists />}
        </>
    )
}

function DeskLists() {
    return (
        <>
            <DeskList />
            <DeskList />
            <DeskList />
        </>
    )
}
function DeskList() {
    return (
        <div className="footerList col-span-3  lg:col-span-2">
            <h1 className="text-[13px] lg:text-sm font-medium uppercase tracking-[1px] mb-2">Information</h1>
            <ul>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">My Cart</a></li>
                <li><a href="#">Orders and Returns</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    )
}

function MobLists() {
    const [listOpen, setlistOpen] = useState(null);

    function handleListOpen(num) {
        setlistOpen(listOpen === num ? null : num);
    }
    return (
        <>
            <MobList title={"Information"} isOpen={listOpen === 1} onClickList={() => handleListOpen(1)} />
            <MobList title={"POPULAR COLLECTIONS"} isOpen={listOpen === 2} onClickList={() => handleListOpen(2)} />
            <MobList title={"CUSTOMER SERVICE"} isOpen={listOpen === 3} onClickList={() => handleListOpen(3)} />
        </>
    )
}

function MobList({ title, onClickList, isOpen }) {

    return (
        <div className="mb-4 footerList col-span-full">
            <div onClick={onClickList} className="flex justify-between flist">
                <h1 className="text-[13px] lg:text-sm font-medium uppercase tracking-[1px] mb-2">{title}</h1>
                <FaChevronDown className={`${isOpen ? "-rotate-180" : ""} w-3 h-3 transition-transform`} />
            </div>
            {isOpen &&
                (<ul>
                    <li><a href="#">Latest News</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">My Cart</a></li>
                    <li><a href="#">Orders and Returns</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>)
            }
        </div>
    )
}