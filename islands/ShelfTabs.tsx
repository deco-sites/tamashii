import { useEffect } from "preact/hooks";

const ShelfTabs = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(
      "button[data-shelf-id]",
    ) as NodeListOf<HTMLButtonElement>;

    const shelfs = document.querySelectorAll(
      "div[data-shelf-active]",
    ) as NodeListOf<HTMLDivElement>;

    shelfs.forEach((shelf) => {
      const isActive = shelf.getAttribute("data-shelf-active");

      if (isActive === "false") {
        shelf.style.display = "none";
        shelf.removeAttribute("data-slider-content");
      }
    });

    buttons.forEach((button) => {
      const id = button.getAttribute("data-shelf-id");
      button.addEventListener("click", () => {
        const currentShelf = document.querySelector(
          "div[data-shelf-active=true]",
        ) as HTMLDivElement;

        if (currentShelf) {
          currentShelf?.setAttribute("data-shelf-active", "false");
          currentShelf.style.display = "none";
          currentShelf.removeAttribute("data-slider-content");
        }

        const newShelf = document.querySelector(
          `div[data-shelf-id=shelf-${id}]`,
        ) as HTMLDivElement;

        if (newShelf) {
          newShelf?.setAttribute("data-shelf-active", "true");
          newShelf.style.display = "flex";
          newShelf.setAttribute("data-slider-content", "true");
        }

        buttons.forEach((button) => {
          if (button.getAttribute("data-shelf-id") === id) {
            button.style.borderBottom = "1px solid #fd0";
            return;
          }

          button.style.borderBottom = "none";
        });
      });
    });
  }, []);

  return <div />;
};

export default ShelfTabs;
