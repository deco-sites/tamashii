import ProductCard from "$store/components/product/ProductCard.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import Slider from "../ui/Slider.tsx";
import { useId } from "preact/hooks";
import Icon from "../ui/Icon.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

function ProductShelf({
  title,
  products,
}: Props) {
  const id = useId();
  return (
    <div className="bg-[#1b1b1b] pb-[420px] mb-[-290px]">
      <div className="container mx-auto">
        {title && (
          <h2 class="text-lg text-white md:text-3xl text-center font-gang">
            {title}
          </h2>
        )}

        <div className="my-10 text-center">
          <button className="bg-[#ED1B23] text-white clip-path-polygon py-2 px-10 after-border">
            Camisetas
          </button>
        </div>
        <div id={id} class="relative w-full overflow-hidden pb-[100px]">
          <ul
            data-slider-content
            style={{ width: `calc(${products.length}*100vw)` }}
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
                class="absolute bg-[#ffffff] top-1/2 left-[0%] ml-2 text-white outline-none p-2 clip-path-5"
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
                class="absolute bg-[#ffffff] top-1/2 right-[0%] mr-2 text-white outline-none p-2"
                data-slider-next
                style={{
                  clipPath:
                    "polygon(5px 0, 100% 0px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
                }}
              >
                <Icon class="w-6 h-6" id="ChevronRight" />
              </button>

              <div class="absolute w-full bottom-0 flex justify-center flex-nowrap">
                {products.map((_, id) => (
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
            </>
          )}
          <Slider id={id} items={products.length} />
        </div>
      </div>
    </div>
  );
}

export default ProductShelf;
