import type { Product } from "deco-sites/std/commerce/types.ts";
import { useEffect, useState } from 'preact/hooks';
import ProductCard from "$store/components/product/ProductCard.tsx";
import type { ItemsPerPage } from "$store/components/ui/Carousel.tsx";
import useScreenResolution from "../components/hooks/useScreenResolution.tsx";
import getFromResolution from "../func/getFromResolution.ts";

type Props = {
    products: Product[];
    itemsPerPage: ItemsPerPage;
};

const ProductListItem = ({products,itemsPerPage}:Props) => {
    const screenResolution = useScreenResolution();
    const [resItemsPerPage, setResItemsPerPage] = useState(
      getFromResolution(screenResolution, itemsPerPage),
    );
    console.log(screenResolution)
    const [resImageWidthInVw, setResImageWidthInVw] = useState(
        products.length > 1 ? 100 / resItemsPerPage : 100,
    );

  
    useEffect(() => {
      const newItemsPerPage = getFromResolution(screenResolution, itemsPerPage);
      setResItemsPerPage(newItemsPerPage);
      setResImageWidthInVw(products.length > 1 ? 100 / newItemsPerPage : 100);
    }, [screenResolution]);

  return (
    <ul data-slider-content
    style={{
        width: `calc(${products.length}*${resImageWidthInVw}%)`,
    }}
    class="flex flex-nowrap transition">
    {products?.map((product, index) => (
        <li
            class="scroll-snap-center flex-1"
            style={{ "width": `calc(100% / ${resItemsPerPage})`,"flex-basis":`calc(100% / ${resItemsPerPage})` }}
        >
            <ProductCard key={index} {...product} />
        </li>
    ))}
</ul>
  )
}

export default ProductListItem