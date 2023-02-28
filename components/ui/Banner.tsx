import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";
import { useEffect } from "preact/hooks";

export interface Image {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
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

function Banner({ title, images = [], preload = true }: Props) {
  useEffect(() => {
    const body = document.querySelector("body");
    console.log("oi: ", body);

    if (body) {
      body.style.backgroundImage = 'url("/bg-desktop.png")';
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "top";
    }
  });
  return (
    <section
      className=""
      style={{
        background: "#1b1b1b",
        // backgroundSize: "cover",
        // backgroundPosition: "top",
      }}
    >
      {title && <h2>{title}</h2>}
      <div className={`grid grid-cols-${images.length}`}>
        {images.map((image) => (
          <a href={image.href}>
            <Picture class="w-screen block max-w-full">
              <Source
                media="(max-width: 767px)"
                fetchPriority={preload ? "high" : "auto"}
                src={image.mobile}
                width={360}
                height={450}
              />

              <Source
                media="(min-width: 768px)"
                fetchPriority={preload ? "high" : "auto"}
                src={image.desktop}
                width={1920}
                height={1092}
              />
              <img
                class="object-cover w-full"
                loading={preload ? "eager" : "lazy"}
                src={image.desktop}
                alt={image.alt}
              />
            </Picture>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Banner;
