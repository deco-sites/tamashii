import { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Image {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Image's alt text */
  alt: string;
}

export interface Props {
  title?: string;
  images?: Image[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   * @default false
   */
  preload?: boolean;
  /**
   * @description Breaks the list on mobile
   * @default false
   */
  breakOnMobile?: boolean;
}

function BrandSection({ title, images = [], preload = false,breakOnMobile = false }: Props) {
  return (
    <section className={`container m-0 mt-[110px] md:p-6 ${breakOnMobile?"p-6":''}`}>
      {title && (
        <h2 className="font-gang text-center text-3xl mb-[50px]">{title}</h2>
      )}
      <div className={`flex md:flex-row md:align-center ${breakOnMobile?"flex-col":"flex-row overflow-x-auto"} `}>
        {images.map((image) => (
          <a href={image.href}>
            <img
              class="object-cover w-auto max-w-none"
              loading={preload ? "eager" : "lazy"}
              src={image.desktop}
              alt={image.alt}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default BrandSection;
