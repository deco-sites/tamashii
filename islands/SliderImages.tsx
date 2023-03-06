import { useEffect, useState } from "preact/hooks";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";
import { Image } from "../components/ui/Carousel.tsx";
import getFromResolution from "../func/getFromResolution.ts";
import useScreenResolution from "../components/hooks/useScreenResolution.tsx";
import { ImageBrand } from "../components/ui/BrandCarousel.tsx";

type Img = ImageBrand | Image;

export interface SliderImages {
  // deno-lint-ignore no-explicit-any
  images: any[];
  preload?: boolean;
  itemsPerPage: { desktop: number; tablet: number; mobile: number } | number;
  width?: number;
  height?: number;
}

const SliderImages = (
  { images, preload, itemsPerPage, width, height }: SliderImages,
) => {
  const screenResolution = useScreenResolution();
  const [resItemsPerPage, setResItemsPerPage] = useState(
    getFromResolution(screenResolution, itemsPerPage),
  );
  const [resImageWidthInVw, setResImageWidthInVw] = useState(
    images.length > 1 ? 100 / resItemsPerPage : 100,
  );

  useEffect(() => {
    const newItemsPerPage = getFromResolution(screenResolution, itemsPerPage);
    setResItemsPerPage(newItemsPerPage);
    setResImageWidthInVw(images.length > 1 ? 100 / newItemsPerPage : 100);
  }, [screenResolution]);

  return (
    <ul
      data-slider-content
      class="flex flex-nowrap transition"
      style={{ width: `calc(${images.length}*${resImageWidthInVw}vw)` }}
    >
      {images.map((props, index) => {
        const lcp = index === 0 && preload;
        //if props is an Image

        return (
          <li>
            <a href={props.href}>
              <Picture class={`w-[${resImageWidthInVw}vw] block`} preload={lcp}>
                {props?.mobile && (
                  <Source
                    media="(max-width: 767px)"
                    fetchPriority={lcp ? "high" : "auto"}
                    src={props?.mobile}
                    width={360}
                    height={331}
                  />
                )}
                <Source
                  media={props?.mobile ? "(min-width: 768px)" : ""}
                  fetchPriority={lcp ? "high" : "auto"}
                  src={props.desktop}
                  width={width ? width : 1366}
                  height={height ? height : 517}
                />
                <img
                  class="object-cover w-full"
                  loading={lcp ? "eager" : "lazy"}
                  src={props.desktop}
                  alt={props.alt}
                />
              </Picture>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SliderImages;
