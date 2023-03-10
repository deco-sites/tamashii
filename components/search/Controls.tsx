import { useRef } from "preact/hooks";
import Filters from "$store/components/search/Filters.tsx";
import SortSelector from "$store/components/search/SortSelector.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function SearchControls({ page }: Props) {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const filters = page?.filters;

  if (!filters || filters.length === 0) {
    return null;
  }

  // TODO: Standardize max-width (1400px)
  return (
    <div class="flex justify-center flex-row">
      <div class="flex justify-around md:justify-between items-center px-4 py-2 max-w-[1400px] flex-1">
        <div>
          <button
            onClick={() => modalRef.current!.showModal()}
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green-light"
          >
            Filtros
          </button>
        </div>
        <div class="md:flex flex-col justify-center hidden">
          <h2 class="text-center text-sm md:text-2xl">
            Resultados da Busca
          </h2>
        </div>
        <div class="flex flex-row justify-end">
          <SortSelector />
        </div>
      </div>
      <Modal
        title="Selecione os filtros"
        mode="sidebar-left"
        ref={modalRef}
        onClose={() => modalRef.current?.close()}
      >
        <Filters filters={filters} />
      </Modal>
    </div>
  );
}

export default SearchControls;
