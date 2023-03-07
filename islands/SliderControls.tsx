import { useEffect, useState } from "preact/hooks";
import Icon from "../components/ui/Icon.tsx";
import getFromResolution from "../func/getFromResolution.ts";
import useScreenResolution from "../components/hooks/useScreenResolution.tsx";
export interface Props {
  dots: boolean;
  items: number;
  itemsToScroll: { desktop: number; tablet: number; mobile: number };
  itemsPerPage: { desktop: number; tablet: number; mobile: number };
}

const SliderControls = (
  { dots, items, itemsToScroll, itemsPerPage }: Props,
) => {
  const screenResolution = useScreenResolution();
  const [resItemsToScroll, setResItemsToScroll] = useState(
    getFromResolution(screenResolution, itemsToScroll),
  );
  const [resItemsPerPage, setResItemsPerPage] = useState(
    getFromResolution(screenResolution, itemsPerPage),
  );
  const [fixItemsToScroll, setFixItemsToScroll] = useState(
    resItemsToScroll > resItemsPerPage || resItemsToScroll == 0
      ? resItemsPerPage
      : resItemsToScroll,
  );
  const [nOfPages, setNOfPages] = useState(
    items > 1
      ? Math.ceil(items / fixItemsToScroll) -
        (resItemsPerPage - resItemsToScroll)
      : 1,
  );

  useEffect(() => {
    const newItemPerPage = getFromResolution(screenResolution, itemsPerPage);
    const newItemToScroll = getFromResolution(screenResolution, itemsToScroll);
    const newFixItemsToScroll =
      newItemToScroll > newItemPerPage || newItemToScroll == 0
        ? newItemPerPage
        : newItemToScroll;
    setResItemsToScroll(newItemToScroll);
    setResItemsPerPage(newItemPerPage);
    setFixItemsToScroll(newFixItemsToScroll);
    setNOfPages(
      items > 1
        ? Math.ceil(items / newFixItemsToScroll) -
          (newItemPerPage - newItemToScroll)
        : 1,
    );
  }, [screenResolution]);
  // 9

  return (
    <>
      {/* Next/Prev button Controls */}
      {nOfPages > 1 && (
        <>
          <button
            aria-label="previous banner image"
            class="absolute bg-[#ffffff] top-1/2 left-[10%] ml-2 text-white outline-none p-2 clip-path-5"
            data-slider-prev
          >
            <Icon
              class="w-6 h-6"
              style={{ transform: "scale(-1, 1)" }}
              id="ChevronRight"
            />
          </button>
          <button
            aria-label="next banner image"
            class="absolute bg-[#ffffff] top-1/2 right-[10%] mr-2 text-white outline-none p-2"
            data-slider-next
            style={{
              clipPath:
                "polygon(5px 0, 100% 0px, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
            }}
          >
            <Icon class="w-6 h-6" id="ChevronRight" />
          </button>
        </>
      )}

      {/* Dots buttons, usually bellow main image */}
      {dots && (
        <div class="absolute w-full top-[90%] flex justify-center flex-nowrap">
          {Array(nOfPages)
            .fill(0)
            .map((_, id) => (
                <button
                aria-label={`Display ${id} banner`}
                class="skew-18 p-2 mx-1 border w-[22px] h-[22px] active:transparent focus:outline-none text-white disabled:bg-[#ffffff] outline-none"
                data-dot
              >
              </button>
            ))}
        </div>
      )}
    </>
  );
};

export default SliderControls;
