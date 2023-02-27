import Searchbar, {
  Props as SearchbarProps,
} from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import CartButton from "$store/islands/CartButton.tsx";
import Menu from "$store/islands/Menu.tsx";
import { useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

import type { NavItem as Item } from "./NavItem.ts";

function NavItem({
  href,
  label,
}: { href: string; label: ComponentChildren }) {
  return (
    <a
      href={href ?? `/s?ft=${label}`}
      class="flex items-center text-[15px] px-8 lg:px-6"
    >
      <span class="hover:font-bold border-solid border-b border-white transition ease-in-out delay-150">
        {label}
      </span>
    </a>
  );
}

function Navbar({ searchbar, items }: {
  searchbar?: SearchbarProps;
  items: Item[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden">
        <div class="flex justify-between items-center px-2">
          <Menu items={items} />

          <a href="/" class="block max-w-[10rem]" aria-label="Store logo">
            <image src="/new-logo-tamashii.png" />
          </a>
          <div>
            <Icon id="OtherSearch" width={23} height={23} role="img" />
          </div>
          <div class="flex justify-end">
            <CartButton />
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex bg-white flex-row h-[90px] items-center md:border-b border-[#d3d5db] mx-8">
        <a
          href="/"
          class="block min-w-[12rem]"
          aria-label="Store logo"
        >
          <image
            src="/new-logo-tamashii.png"
            class="hover:scale-90 transition ease-in-out delay-150"
          />
        </a>
        <div class="flex justify-center md:justify-between pl-12 h-14">
          {items.map((item) => <NavItem {...item} />)}
        </div>
        <div class="flex-1 flex items-center justify-end gap-6">
          <Searchbar {...searchbar} />
          <a
            href="#"
            class="h-12 w-12 flex justify-center items-center"
            aria-label="Log in"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M14.7021 11.4201L14.4269 11.6354L14.7519 11.7637C16.551 12.4738 18.1217 13.6573 19.2957 15.1873C20.4697 16.7173 21.2028 18.536 21.4166 20.4485C21.4413 20.679 21.3735 20.91 21.2277 21.0913C21.084 21.27 20.8759 21.3861 20.6474 21.4151L20.5399 21.4151L20.5387 21.4151C20.3192 21.4164 20.1072 21.3368 19.9436 21.192C19.7799 21.0472 19.6763 20.8474 19.6522 20.6314L19.6522 20.631C19.4081 18.4698 18.3719 16.474 16.7419 15.0248C15.1119 13.5757 13.0024 12.7747 10.8164 12.7747C8.63047 12.7747 6.52097 13.5757 4.89099 15.0248C3.26098 16.474 2.22477 18.4698 1.98065 20.631L1.9806 20.6315C1.95478 20.865 1.83672 21.079 1.65199 21.2263C1.46723 21.3736 1.23097 21.4421 0.995217 21.4163C0.759469 21.3905 0.543961 21.2727 0.395954 21.0891C0.322674 20.9982 0.26816 20.8939 0.235473 20.7822C0.202786 20.6704 0.192551 20.5534 0.205341 20.4378C0.418139 18.5306 1.14734 16.7165 2.31534 15.1889C3.48338 13.6612 5.04649 12.4773 6.83811 11.7634L7.16144 11.6346L6.88733 11.4201C5.85492 10.6123 5.10152 9.50471 4.73174 8.25152C4.36197 6.99833 4.39415 5.6617 4.82381 4.42753C5.25348 3.19334 6.05933 2.12284 7.12946 1.36507C8.1996 0.607295 9.48076 0.2 10.7947 0.2C12.1086 0.2 13.3898 0.607295 14.4599 1.36507C15.5301 2.12284 16.3359 3.19334 16.7656 4.42753C17.1952 5.6617 17.2274 6.99833 16.8576 8.25152C16.4879 9.50471 15.7345 10.6123 14.7021 11.4201ZM8.26968 10.2487C9.01718 10.7455 9.89589 11.0105 10.7947 11.0105C11.9999 11.0105 13.156 10.5344 14.0086 9.68649C14.8612 8.83857 15.3404 7.68831 15.3404 6.48869C15.3404 5.59411 15.0736 4.71971 14.574 3.97607C14.0744 3.23244 13.3644 2.65302 12.5339 2.31091C11.7034 1.9688 10.7896 1.87931 9.90809 2.0537C9.02652 2.22809 8.2166 2.65857 7.58081 3.29088C6.945 3.9232 6.51188 4.72895 6.3364 5.60631C6.16092 6.48368 6.251 7.39308 6.59519 8.21948C6.93937 9.04586 7.52216 9.752 8.26968 10.2487Z"
                fill="#1B1B1B"
                stroke="white"
                stroke-width="0.4"
              />
            </svg>
          </a>
          <CartButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
