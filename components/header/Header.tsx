import CartModal from "$store/islands/CartModal.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import type { NavItem as Item } from "./NavItem.ts";

const item: Item[] = [
  {
    label: "Exclusivo",
    href: "/exclusivo",
    children: [
      { label: "Polos", href: "/masculino/polos" },
      { label: "Shorts", href: "/masculino/shorts" },
    ],
  },
  {
    label: "Lançamentos",
    href: "/lançamentos",
    children: [
      { label: "Roupas", href: "/feminino/roupas" },
    ],
  },
  {
    label: "Linhas",
    href: "/linhas",
    children: [],
  },
  {
    label: "Franquias",
    href: "/franquias",
    children: [],
  },
  {
    label: "Comprar",
    href: "/comprar",
    children: [],
  },
];

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: Item[];
}

function Header({ alerts, searchbar, navItems = item }: Props) {
  return (
    <header>
      <Alert alerts={alerts} />
      <Navbar searchbar={searchbar} items={navItems} />
      <CartModal />
    </header>
  );
}

export default Header;
