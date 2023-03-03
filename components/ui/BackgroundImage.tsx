import { useEffect } from "preact/hooks";

function BackgroundImage() {
  useEffect(() => {
    console.log("oi: denovo");
    const body = document.querySelector("body");

    if (body) {
      body.style.backgroundImage = 'url("/bg-desktop.png")';
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "top";
    }
  }, []);

  return <></>;
}

export default BackgroundImage;
