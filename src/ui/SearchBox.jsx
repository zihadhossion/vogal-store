import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useGetProductsQuery } from "../services/apiProducts";
import Loader from "./Loader";
import { Link } from "react-router-dom";


function SearchBox() {
    const [searchItem, setSearchItem] = useState('');
    const { isLoading, data: products } = useGetProductsQuery();
    const [filteredProducts, setFilteredProducts] = useState();


    function handleInputChange(e) {
        let searchTerm = e.target.value;
        setSearchItem(searchTerm);

        if (searchTerm) {
            let filteredProducts = products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredProducts(filteredProducts);
        } else {
            setFilteredProducts();
        }

    }

    function clearSearch() {
        setSearchItem('');
        setFilteredProducts();
    }

    return (
        <div className="flex flex-1 mgr relative">
            <form className="w-full rounded-[5px] relative border-[1px] border-solid border-[rgba(0,0,0,0)]">
                <div className="flex">
                    <input type="search" className="w-full h-[42px] text-sm text-[#444] bg-[#f5f5f5] rounded-tl-[5px] rounded-bl-[5px] px-5 appearance-none" placeholder="Search products" value={searchItem} onChange={handleInputChange} />
                    <button type="submit" className="w-[45px] h-[42px] text-white bg-[#f0ae00] rounded-[0_5px_5px_0]">
                        <CiSearch className="w-[22px] h-[22px]" />
                    </button>
                </div>
            </form>
            {filteredProducts && (
                <ul className="w-full bg-white p-3 absolute top-[100%] z-10 shadow">
                    <SearchItem product={filteredProducts} onClear={clearSearch} />
                </ul>
            )}
        </div >
    )
};

export default SearchBox;

function SearchItem({ product, onClear }) {
    return (
        <>
            {product?.map((item, index) =>
                <Link to={`/collections/${item.id}`} key={index} onClick={onClear} className="flex items-center my-1">
                    <img src={item.image} alt="product Image" className="w-16" />
                    <h3 className="font-medium">{item.title}</h3>
                </Link>
            )}
        </>
    )
}

