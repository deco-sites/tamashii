import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Button from "./Button.tsx";

export interface Image {
  /** @description desktop otimized image */
  desktop: LiveImage;
}

export interface Props {
  /** @description instagram username e.g @instagram */
  user: string;
  leftImage: Image;
  rightImage: Image;
}

function Instagram({ user = "instagram", leftImage, rightImage }: Props) {
  return (
    <section class="container text-center m-auto pt-[80px]">
      <h2 className="text-3xl font-bold mb-[10px] font-gang">
        SIGA NOSSO INSTAGRAM
      </h2>
      <h3 className="text-red-800 text-2xl font-bold mb-[40px]">@{user}</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <img src={leftImage.desktop} alt="Left image for instagram" />
        <div className="flex flex-col justify-center items-center">
          <div className="md:max-w-[220px] md:p-0 py-[40px] gap-[30px] flex flex-col">
            <p className="text-sm">
              E fique por dentro dos <strong>principais lançamentos</strong>
            </p>
            <Button
              as="a"
              target="_blank"
              fit="container"
              rel="noreferrer"
              href={`https://instagram.com/${user}`}
            >
              Acesse agora
            </Button>
          </div>
        </div>
        <img src={rightImage.desktop} alt="Right image for instagram" />
      </div>
    </section>
  );
}

export default Instagram;
