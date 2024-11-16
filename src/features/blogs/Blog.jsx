import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

function Blog({ blog }) {
    const { title, image, date, user, tags, desc } = blog;

    if (!image) return;

    return (
        <article className="flex-auto md:flex-1">
            <div className="block mb-4 overflow-hidden">
                <img src={image} alt="" className="w-full h-40 sm:h-32 md:h-36 lg:h-40 xl:h-44" />
            </div>
            <div className="text-left">
                <h1 className="text-base lg:text-lg font-medium mb-3">{title}</h1>
                <div className="text-sm flex gap-4 mb-3">
                    <p className="flex items-center gap-1"><CiCalendar />{date}</p>
                    <p className="flex items-center gap-1"><FaRegUserCircle />{user}</p>
                </div>
                <div className="flex gap-3 mb-3">
                    {tags?.map((tag, i) => <Tag key={i} tag={tag} />)}
                </div>
                <p className="text-sm md:text-base">{desc}</p>
                <button className="text-sm border-b-[1px] mt-5 uppercase">Read More</button>
            </div>
        </article>
    )
};

export default Blog;

function Tag({ tag }) {
    return (<span className="text-xs md:text-sm hover:text-white hover:bg-gray-700  border border-[#999] rounded-md p-[2px_8px] transition cursor-pointer">{tag}</span>)
}



