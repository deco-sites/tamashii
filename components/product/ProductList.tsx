import type { Product } from "deco-sites/std/commerce/types.ts";
import ShelfTabs from "../../islands/ShelfTabs.tsx";
import Slider from "../ui/Slider.tsx";
import type { ItemsPerPage } from "../../sections/Carousel.tsx";
import type { ItemsToScroll } from "../../sections/Carousel.tsx";
import SliderControls from "../../islands/SliderControls.tsx";
import ProductListItem from "../../islands/ProductListItem.tsx";

type Props = {
    products: Product[];
    index: number;
    id: string;
    itemsPerPage?: ItemsPerPage;
    itemsToScroll?: ItemsToScroll;
    dots?: boolean;
};

const defaultItemsPerPage = { desktop: 4, tablet: 2, mobile: 1 };
const defaultItemsToScroll = { desktop: 4, tablet: 2, mobile: 1 };

function ProductList(
    { products, id, itemsPerPage = defaultItemsPerPage, itemsToScroll = defaultItemsToScroll, dots = true }: Props,
) {
    return (
        <>
            <ProductListItem products={products} itemsPerPage={itemsPerPage}/>
            <SliderControls dots={dots} items={products.length} itemsPerPage={itemsPerPage || defaultItemsPerPage} itemsToScroll={itemsToScroll || defaultItemsToScroll} />
            {products.length > 0 && (
                <>
                   {/* Effects for transitioning between images */}
                    <Slider
                        items={products.length}
                        id={id}
                        autoPlayDelay={0}
                        itemsPerPage={itemsPerPage || defaultItemsPerPage}
                        itemsToScroll={itemsToScroll || defaultItemsToScroll}
                    // nOfPages={nOfPages}
                    />
                    <ShelfTabs />
                </>
            )}
        </>
    );
}

export default ProductList;
