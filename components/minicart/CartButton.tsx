import { useCart } from "../../sdk/cart/useCart.ts";
import { useUI } from "../../sdk/useUI.ts";

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <button
      class="flex items-center justify-center relative h-12 w-12"
      aria-label="open cart"
      onClick={() => {
        displayCart.value = true;
      }}
      disabled={loading.value}
    >
      <svg
        width="20"
        height="26"
        viewBox="0 0 20 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6189 6.27027V6.57027H14.9189H18.6486C18.898 6.57027 19.1376 6.67015 19.3147 6.84879C19.4919 7.02751 19.5919 7.27046 19.5919 7.52432V21.3189C19.5919 22.238 19.2299 23.1189 18.5864 23.768C17.943 24.417 17.0709 24.7811 16.1622 24.7811H3.72973C2.82095 24.7811 1.94886 24.417 1.30546 23.768C0.661971 23.1189 0.3 22.238 0.3 21.3189V7.52432C0.3 7.27046 0.400003 7.02751 0.577186 6.84879C0.754283 6.67015 0.993922 6.57027 1.24324 6.57027H4.97297H5.27297V6.27027V5.01622C5.27297 3.76456 5.76593 2.56469 6.64257 1.68043C7.51913 0.796249 8.70744 0.3 9.94595 0.3C11.1845 0.3 12.3728 0.796249 13.2493 1.68043C14.126 2.56469 14.6189 3.76456 14.6189 5.01622V6.27027ZM12.4324 6.57027H12.7324V6.27027V5.01622C12.7324 4.27229 12.4395 3.55832 11.9172 3.0315C11.3948 2.5046 10.6858 2.20811 9.94595 2.20811C9.20608 2.20811 8.49705 2.5046 7.97469 3.0315C7.45241 3.55832 7.15946 4.27229 7.15946 5.01622V6.27027V6.57027H7.45946H12.4324ZM2.48649 8.47838H2.18649V8.77838V21.3189C2.18649 21.7302 2.34845 22.1252 2.63758 22.4169C2.92679 22.7086 3.31959 22.873 3.72973 22.873H16.1622C16.5723 22.873 16.9651 22.7086 17.2543 22.4169C17.5434 22.1252 17.7054 21.7302 17.7054 21.3189V8.77838V8.47838H17.4054H14.9189H14.6189V8.77838V10.0324C14.6189 10.2863 14.5189 10.5292 14.3417 10.708C14.1646 10.8866 13.925 10.9865 13.6757 10.9865C13.4264 10.9865 13.1867 10.8866 13.0096 10.708C12.8324 10.5292 12.7324 10.2863 12.7324 10.0324V8.77838V8.47838H12.4324H7.45946H7.15946V8.77838V10.0324C7.15946 10.2863 7.05946 10.5292 6.88227 10.708C6.70518 10.8866 6.46554 10.9865 6.21622 10.9865C5.96689 10.9865 5.72726 10.8866 5.55016 10.708C5.37298 10.5292 5.27297 10.2863 5.27297 10.0324V8.77838V8.47838H4.97297H2.48649Z"
          fill="#1B1B1B"
          stroke="white"
          stroke-width="0.6"
        >
        </path>
      </svg>
      {totalItems && (
        <div class="absolute text-sm right-0 top-0 rounded-full bg-red-500 text-white w-4 h-4 flex items-center justify-center">
          {totalItems}
        </div>
      )}
    </button>
  );
}

export default CartButton;
