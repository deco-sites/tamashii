import { Image as LiveImage } from "$live/std/ui/types/Image.ts";

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
   */
  preload?: boolean;
}

function BrandSection({ title, images = [], preload = true }: Props) {
  return (
    <section className="container m-auto mt-[110px]">
      {title && (
        <h2 className="font-gang text-lg md:text-3xl mb-[50px]">{title}</h2>
      )}
      <div className={`grid grid-cols-${images.length}`}>
        {images.map((image) => (
          <a href={image.href}>
            <img
              class="object-cover w-full"
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
