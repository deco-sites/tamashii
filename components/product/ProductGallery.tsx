import ProductCard from "$store/components/product/ProductCard.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function ProductGallery({ page }: Props) {
  return (
    <section class="md:mx-auto bg-[#1b1b1b] px-2 md:px-4 py-8 md:py-20">
      <div class="relative grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
        {page?.products?.map((product) => (
          <div class="w-full md:px-2 list-none">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGallery;
