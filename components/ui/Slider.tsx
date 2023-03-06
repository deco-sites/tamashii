/**
 * This island animates and adds interactivity to sliders.
 * It works by adding interactivity to static markup.
 *
 * 1. Render all your content to html
 * 2. Add data attributes to specific parts of your html. These data attributes
 * wll be used by this component to hydrate and animate the slider on the browser
 * 3. create an id with `useId` hook and place it in a container containing your
 * slider
 *
 * For an example, check out how the VideoCarousel and Alert use this component
 *
 * Why not just add this logic to both VideoCarousel and Alert and make them an island?
 * When doing this, all code they depend on and their markup (html) will be included in
 * the final JavaScript. This will increase the amount of JS shipped to the browser,
 * increasing TBT metric and making your website slow.
 */
import { useEffect, useState } from "preact/hooks";
import getFromResolution from "../../func/getFromResolution.ts";
import useScreenResolution from "../hooks/useScreenResolution.tsx"; 

interface Props {
  items: number;
  id: string;
  autoPlayDelay?: number;
  itemsToScroll?: { desktop: number; tablet: number; mobile: number };
  itemsPerPage?: { desktop: number; tablet: number; mobile: number };
}
const defaultItemsPerPage = { desktop: 1, tablet: 1, mobile: 1 };
const defaultItemsToScroll = { desktop: 1, tablet: 1, mobile: 1 };
function Slider(
  {
    id,
    items,
    autoPlayDelay = 0,
    itemsToScroll = defaultItemsPerPage,
    itemsPerPage = defaultItemsToScroll,
  }: Props,
) {
  const [index, setIndex] = useState(0);
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

  // Timer
  useEffect(() => {
    const id = autoPlayDelay &&
      setInterval(() => setIndex((index + 1) % nOfPages), autoPlayDelay);

    return () => {
      autoPlayDelay && clearInterval(id);
    };
  }, [index, autoPlayDelay, items]);

  // Focus the right content
  useEffect(() => {
    const content = document.getElementById(id)?.querySelector(
      "[data-slider-content]",
    ) as HTMLDivElement;

    if (content) {
      //offset so that when the remaining items are less than the items to scroll, the slider just show the remaining items
      //which means that if the slider has 5 items and we want to scroll 2 items, the last page will only show the last 2 items
      const offset = index == nOfPages - 1 ? items % resItemsToScroll : 0;
      //unit is the percentage of the slider that each page moves
      const unit = 100 / (items / resItemsToScroll);
      //now we need a new unit that will calculate how much one slider moves, and subtract it from the final result
      //so that the slider will move the right amount of items
      const offsetUnit = offset
        ? (unit / resItemsToScroll) * (resItemsPerPage - offset)
        : 0;
      const move = unit * index - offsetUnit;
      console.log("offsetUnit", offsetUnit);
      console.log("unit", unit);
      console.log("move", move);
      console.log("offset", offset);

      content.style.transform = `translateX(-${move}%)`;
    }

    const dots = document.getElementById(id)?.querySelectorAll("[data-dot]");

    if (dots) {
      dots.forEach((
        dot,
        it,
      ) => (it === index
        ? dot.setAttribute("disabled", "")
        : dot.removeAttribute("disabled"))
      );
    }
  }, [index]);

  // Handles next/prev elements
  useEffect(() => {
    const prevElement = document.getElementById(id)?.querySelector(
      "[data-slider-prev]",
    );
    const nextElement = document.getElementById(id)?.querySelector(
      "[data-slider-next]",
    );

    const next = () => setIndex((i) => (i + 1) % (nOfPages || 1));
    const prev = () => setIndex((i) => (i > 0 ? i - 1 : (nOfPages || 1) - 1));

    nextElement?.addEventListener("click", next);
    prevElement?.addEventListener("click", prev);

    return () => {
      nextElement?.removeEventListener("click", next);
      prevElement?.removeEventListener("click", prev);
    };
  }, [nOfPages]);

  // Handles button control elements (dots)
  useEffect(() => {
    const dots = document.getElementById(id)?.querySelectorAll("[data-dot]");

    if (!dots) {
      return;
    }

    const listeners: Array<() => void> = [];

    dots.forEach((dot, index) => {
      const set = () => setIndex(index);

      listeners.push(set);
      dot.addEventListener("click", set);
    });

    return () => {
      dots.forEach((dot, index) =>
        dot.removeEventListener("click", listeners[index])
      );
    };
  }, []);

  return <div />;
}

export default Slider;
