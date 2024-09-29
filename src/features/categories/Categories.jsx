import { useGetCategoriesQuery } from "../../services/apiCategories";
import SectionContainer from "../../ui/SectionContainer";
import Category from "./Category";
import Loader from "../../ui/Loader";

function Categories() {
    const { isLoading, data: categories } = useGetCategoriesQuery();

    if (!categories) return;
    if (isLoading) return <Loader />;

    return (
        <>
            <SectionContainer title={"Top Categories"}>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-16">
                    {categories?.map((item) => <Category key={item.id} category={item} />)}
                </div>
            </SectionContainer>
        </>

    )
};

export default Categories;

