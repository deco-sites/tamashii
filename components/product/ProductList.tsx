import type { Product } from "$live/std/commerce/types.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";
import ShelfTabs from "../../islands/ShelfTabs.tsx";
import Icon from "../ui/Icon.tsx";
import Slider from "../ui/Slider.tsx";

type Props = {
  products: Product[];
  quantityProductPerPage: number;
  index: number;
  id: string;
};

function ProductList(
  { products, quantityProductPerPage, id }: Props,
) {
  const imageWidthInVw = products.length > 1
    ? 100 / quantityProductPerPage
    : 100;
  const nOfPages = Math.ceil(products.length / quantityProductPerPage) || 1;

  return (
    <>
      <ul
        data-slider-content
        style={{
          width: `calc(${products.length}*${imageWidthInVw}vw)`,
        }}
        class="flex flex-nowrap transition"
      >
        {products?.map((product, index) => (
          <li
            class="scroll-snap-center"
            style={{ width: "calc(95vw / 4)" }}
          >
            <ProductCard key={index} {...product} />
          </li>
        ))}
      </ul>

      {products.length > 0 && (
        <>
          {/* Next/Prev button Controls */}
          <button
            aria-label="previous banner image"
            class="absolute bg-[#ffffff] top-1/3 left-[0%] ml-2 text-white outline-none p-2 clip-path-5"
            data-slider-prev
          >
            <Icon
              class="w-6 h-6"
              style={{ transform: "scale(-1, 1)" }}
              id="ChevronRight"
            />
          </button>
          <button
            aria-label="next banner image"
            class="absolute bg-[#ffffff] top-1/3 right-[0%] mr-2 text-white outline-none p-2"
            data-slider-next
            style={{
              clipPath:
                "polygon(5px 0, 100% 0px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
            }}
          >
            <Icon class="w-6 h-6" id="ChevronRight" />
          </button>

          {/* Dots buttons, usually bellow main image */}
          <div class="absolute w-full top-[90%] flex justify-center flex-nowrap">
            {Array(nOfPages).fill(0).map((_, id) => (
              <button
                aria-label={`Display ${id} banner`}
                class="p-2 mx-1 border w-[22px] h-[22px] active:transparent focus:outline-none text-white disabled:bg-[#ffffff] outline-none"
                data-dot
                style={{
                  transform: "skew(-18deg);",
                }}
              >
              </button>
            ))}
          </div>

          {/* Effects for transitioning between images */}
          <Slider
            items={products.length}
            id={id}
            delay={5_000}
            nOfPages={nOfPages}
          />
          <ShelfTabs />
        </>
      )}
    </>
  );
}

export default ProductList;
