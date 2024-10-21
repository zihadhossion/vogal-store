import React from "react";
import { useGetBlogsQuery } from "../../services/apiBlogs";
import Blog from "./Blog";
import SectionContainer from "../../ui/SectionContainer";
import Loader from "../../ui/Loader";


function Blogs() {
    const { isLoading, data: blogs } = useGetBlogsQuery();

    // if (isLoading || !blogs) return <Loader />;

    return (<>
        <SectionContainer title={"latest blogs"}>
            <div className="flex flex-wrap gap-4">
                {blogs?.map((item) => <Blog key={item.id} blog={item} />)}
            </div>
        </SectionContainer>
    </>)
};

export default Blogs;
