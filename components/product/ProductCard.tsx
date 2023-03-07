import { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useOffer } from "../../sdk/useOffer.ts";
import Button from "../ui/Button.tsx";

function ProductCard({
  url,
  productID,
  name,
  image: images,
  offers,
}: Product) {
  const [image] = images ?? [];
  const { price, installments } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="p-2 border border-transparent"
    >
      <a href={url}>
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alternateName}
            width={340}
            height={450}
            loading="lazy"
            decoding="async"
            className="m-auto"
          />
        )}
        <div class="mt-3 text-center">
          {name && (
            <div
              class="block text-md font-bold text-white overflow-hidden whitespace-nowrap mb-3 h-[55px]"
              style={{ textOverflow: "ellipsis" }}
              href={url}
            >
              {name.replace(/(.*)(\-).*$/, "$1$2")}
            </div>
          )}
          <div class="text-xs flex justify-center text-white gap-2 mb-1">
            <span className="text-xl">Por:</span>
            {price && (
              <span class="font-bold text-xl">
                R$ {typeof price === "number" ? price.toFixed(2) : price}
              </span>
            )}
          </div>
          {installments && (
            <div class="text-sm text-white">
              ou <strong>{installments.replace("sem juros", "")}</strong>{" "}
              sem juros
            </div>
          )}
        </div>
        <div className="text-center mt-[20px]">
          <Button as="button" class="w-[160px]">
            <strong>COMPRAR</strong>
          </Button>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
