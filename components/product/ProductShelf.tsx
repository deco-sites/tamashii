import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

import ProductList from "./ProductList.tsx";

export interface MultipleProducts {
    products: Product[];
}

export interface Props {
    title: string;
    groups: LoaderReturnType<MultipleProducts[]>;
    quantityProductPerPage?: number;
}

function ProductShelf({
    title,
    groups = [],
    quantityProductPerPage = 4,
}: Props) {
    const id = "product-shelf";

    return (
        <div className="bg-[#1b1b1b] pb-[420px] mb-[-290px]">
            <div className="container mx-auto">
                {title && (
                    <h2 class="text-lg text-white md:text-3xl text-center font-gang">
                        {title}
                    </h2>
                )}

                <div className="my-10 text-center">
                    <button
                        className="bg-[#ED1B23] text-white clip-path-polygon py-2 px-10 focus:outline-none"
                        data-shelf-id="0"
                    >
                        Camisetas
                    </button>
                    <button
                        className="bg-[#ED1B23] text-white clip-path-polygon py-2 px-10 focus:outline-none"
                        data-shelf-id="1"
                    >
                        Exclusívos
                    </button>
                </div>
                {groups.map((group, index) => (
                    <div
                        id={`${id}-${index}`}
                        class="relative w-full overflow-hidden pb-[100px]"
                        data-shelf-active={`${index === 0 ? "true" : "false"}`}
                        data-shelf-id={`shelf-${index}`}
                    >
                        <ProductList
                            products={group.products}
                            index={index}
                            quantityProductPerPage={quantityProductPerPage}
                            id={`${id}-${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductShelf;
