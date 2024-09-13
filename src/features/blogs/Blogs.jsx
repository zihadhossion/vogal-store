import React from "react";
import Blog from "./Blog";
import SectionContainer from "../../ui/SectionContainer";
import { useGetBlogsQuery } from "../../services/apiBlogs";


function Blogs() {
    // const { isLoading, blogs, error } = useBlogs();
    const { isLoading, data: blogs } = useGetBlogsQuery();

    if (!blogs) return;
    if (isLoading) return;

    return (<>
        <SectionContainer title={"  latest blogs"}>
            <div className="flex flex-wrap gap-4">
                {blogs?.map((item) => <Blog key={item.id} blog={item} />)}
            </div>
        </SectionContainer>
    </>)
};

export default Blogs;
