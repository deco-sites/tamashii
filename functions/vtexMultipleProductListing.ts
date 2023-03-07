import { toProduct } from "deco-sites/std/commerce/vtex/transform.ts";

import type { LoaderFunction } from "$live/types.ts";
import type { LiveState } from "$live/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import type { VTEXConfig } from "../sections/vtexconfig.global.tsx";
import type { Sort } from "deco-sites/std/commerce/vtex/types.ts";
import { MultipleProducts } from "../components/product/ProductShelf.tsx";

export interface Props {
  /** @description queries to use on search */
  queries: string[];
  /** @description total number of items to display */
  count: number;
  //* @enumNames ["relevance", "greater discount", "arrivals", "name asc", "name desc", "most ordered", "price asc", "price desc"]
  /**
   * @description search sort parameter
   */
  sort?:
    | ""
    | "price:desc"
    | "price:asc"
    | "orders:desc"
    | "name:desc"
    | "name:asc"
    | "release:desc"
    | "discount:desc";
}

/**
 * @title Multiple Product list loader
 * @description Usefull for shelves and static galleries.
 */
const multipleProductListLoader: LoaderFunction<
  Props,
  MultipleProducts[],
  LiveState<{ vtexconfig: VTEXConfig | undefined }>
> = async (
  _req,
  ctx,
  props,
) => {
  const vtexConfig = ctx.state.global.vtexconfig ?? defaultVTEXSettings;
  const count = props.count ?? 12;
  const queries = props.queries || [];
  const sort: Sort = props.sort || "";
  const url = new URL(_req.url);

  // search products on VTEX. Feel free to change any of these parameters
  const queriesPromise = queries.map((query) =>
    vtex.search.products({
      query,
      page: 0,
      count,
      sort,
      ...vtexConfig,
    })
  );

  const productsGroup = await Promise.all(queriesPromise);

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const groupedProducts = productsGroup.map((group) => ({
    ...group,
    products: group.products.map((p) => toProduct(p, p.items[0], 0,{ url, priceCurrency: vtex.currency() })),
  }));

  return {
    data: groupedProducts,
  };
};

export default multipleProductListLoader;
