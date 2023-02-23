/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */

export interface Props {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

function Searchbar({
  placeholder = "What are you looking for?",
  action = "/s",
  name = "q",
  query,
}: Props) {
  return (
    <form
      id="searchbar"
      action={action}
      class="flex flex-row px-2 py-0 text-xs text-left bg-[#f9f9f9]"
      style={{
        clipPath:
          "polygon(10px 0, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
      }}
    >
      <input
        class="flex-grow px-2 outline-none bg-[#f9f9f9]"
        name={name}
        defaultValue={query}
        placeholder={placeholder}
      />
      <button
        aria-label="Search"
        htmlFor="searchbar"
        type="submit"
        class="p-2 outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
            stroke="#1B1B1B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 16L12 12"
            stroke="#1B1B1B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}

export default Searchbar;
