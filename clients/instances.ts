import { createClient as createVTEXClient } from "deco-sites/std/commerce/vtex/client.ts";
import { createClient as createShopifyClient } from "deco-sites/std/commerce/shopify/client.ts";
import { createClient as createOccClient } from "deco-sites/std/commerce/occ/client.ts";
import { VTEXConfig } from "../sections/vtexconfig.global.tsx";

export const defaultVTEXSettings: VTEXConfig = {
  account: "maeztra",
  locale: "pt-BR",
  salesChannel: "1",
};

export const vtex = createVTEXClient({
    account: "maeztraio",
});

export const shopify = createShopifyClient({
  storeName: "gimenesdevstore",
  storefrontAccessToken: "27c1ac16fe30a0fb6c5d634eeb63bf81",
});

export const occ = createOccClient({
  baseUrl: "https://deco.cx.teste/",
});
