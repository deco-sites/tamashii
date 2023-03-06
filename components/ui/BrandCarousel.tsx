import { useEffect, useId, useState } from "preact/hooks";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Slider from "$store/islands/Slider.tsx";
import SliderControls from "../../islands/SliderControls.tsx";
import SliderImages from "../../islands/SliderImages.tsx";

export interface ImageBrand {
  /** @description brand otimized image */
  desktop: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Image's alt text */
  alt: string;
}

export interface ItemsPerPage {
  /** @description desktop items */
  /** @default 1 */
  desktop: number;
  /** @default 1 */
  /** @description tablet items */
  tablet: number;
  /** @default 1 */
  /** @description mobile items */
  mobile: number;
}

export interface ItemsToScroll {
  /** @description desktop items */
  /** @default 1 */
  desktop: number;
  /** @default 1 */
  /** @description tablet items */
  tablet: number;
  /** @default 1 */
  /** @description mobile items */
  mobile: number;
}

export interface Props {
  images?: ImageBrand[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  dots: boolean;
  itemsPerPage?: ItemsPerPage;
  itemsToScroll?: ItemsToScroll;
  /**
   * @default 0
   */
  autoPlayDelay?: number;
}

const defaultItemsPerPage = { desktop: 6, tablet: 1, mobile: 1 };
const defaultItemsToScroll = { desktop: 6, tablet: 1, mobile: 1 };

function BrandCarousel(
  {
    images = [],
    preload = false,
    dots = true,
    itemsPerPage = defaultItemsPerPage,
    itemsToScroll = defaultItemsToScroll,
    autoPlayDelay = 5000,
  }: Props,
) {
  const id = useId();

  return (
    <div
      id={id + "brand"}
      class="relative w-full overflow-hidden h-32 flex items-center"
    >
      <SliderImages
        images={images}
        preload={preload}
        itemsPerPage={itemsPerPage || defaultItemsPerPage}
        width={222}
        height={115}
      />

      <SliderControls
        dots={dots}
        items={images.length}
        itemsPerPage={itemsPerPage || defaultItemsPerPage}
        itemsToScroll={itemsToScroll || defaultItemsToScroll}
      />
      {/* Effects for transitioning between images */}
      <Slider
        items={images.length}
        id={id + "brand"}
        autoPlayDelay={autoPlayDelay}
        itemsPerPage={itemsPerPage || defaultItemsPerPage}
        itemsToScroll={itemsToScroll || defaultItemsToScroll}
      />
    </div>
  );
}

export default BrandCarousel;
