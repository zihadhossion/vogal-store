import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

function Blog({ blog }) {

    const { title, image, date, user, tags, desc } = blog;

    return (
        <>
            <article className="flex-auto md:flex-1">
                <div className="block mb-4 overflow-hidden">
                    <img src={image} alt="" className="w-full md:h-[220px] " />
                </div>
                <div className="text-left">
                    <h1 className="text-sm lg:text-lg font-medium mb-2">{title}</h1>
                    <div className="flex mb-2 gap-4">
                        <p className="flex items-center gap-1"><CiCalendar /> {date}</p>
                        <p className="flex items-center gap-1"><FaRegUserCircle /> {user}</p>
                    </div>
                    <div className="flex gap-3 mb-2">
                        {tags?.map((tag, i) => <Tag key={i} tag={tag} />)}
                    </div>
                    <p>{desc}</p>
                    <button className="border-b-[1px]">Read More</button>
                </div>

            </article>
        </>
    )
};

export default Blog;

function Tag({ tag }) {
    return (
        <>
            <span className="border-[1px] border-solid border-[#999999] rounded-md p-[2px_8px]">{tag}</span>
        </>
    )
}



