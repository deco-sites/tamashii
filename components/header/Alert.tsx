import { useId } from "preact/hooks";
import Icon from "../ui/Icon.tsx";
import Slider from "../ui/Slider.tsx";

const messages = [
  "Parcelamento em até 10x no cartão",
  "Devolução Garantida",
  "Entrega para todo Brasil",
  "Pagamento por Pix",
];

export interface Props {
  alerts: string[];
}

const icons = ["Truck", "Lock", "CreditCard", "ArrowLeftRight"] as Array<
  | "Truck"
  | "Lock"
  | "CreditCard"
  | "ArrowLeftRight"
>;

function Alert({ alerts = messages }: Props) {
  const id = useId();

  return (
    <>
      {/* Desktop version */}
      <section
        id={id}
        class="hidden md:flex flex-row w-full justify-between h-10 bg-[#1b1b1b] scroll-x-mandatory"
      >
        <div
          class={`transition items-center flex text-white justify-around w-[100%]`}
        >
          {alerts.map((alert, index) => (
            <div
              class="flex justify-center items-center grow border-r last:border-0"
              style={{ flexGrow: "1" }}
            >
              <Icon height={21} width={25} id={icons[index]} class="mr-2" />
              <span class="text-center block text-sm">
                {alert}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile version */}
      <section
        id={id}
        class="md:hidden md:flex flex-row w-full justify-between py-2 bg-[#1b1b1b]"
      >
        <div class="flex gap-2 items-center text-sm text-white m-auto">
          <div class="w-[500px] overflow-x-hidden">
            <div
              data-slider-content
              class={`w-[${
                alerts.length * 100
              }%] transition flex justify-center`}
            >
              {alerts.map((alert, index) => (
                <span class="w-[500px] text-center flex items-center justify-center uppercase text-xs">
                  <Icon height={21} width={25} id={icons[index]} class="mr-2" />
                  {alert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Slider id={id} items={alerts.length} delay={4000} />
    </>
  );
}

export default Alert;
