function Newsletter() {
  return (
    <div class="bg-newsletter-bg-mobile bg-cover object-cover md:bg-newsletter-bg bg-gray-100 flex flex-col items-start md:items-center md:justify-center text-white py-12 md:py-28 ">
      <div class="text-left md:text-center items-start md:items-center after:absolute after:bg-eva-01 after:block flex flex-col flex-wrap p-6 md:p-10 md:w-auto ">
        <div class="flex flex-col">
          <span class="font-gang font-medium uppercase md:text-center w-3/4 md:w-full text-2xl md:text-4xl">
            Assine nossa newsletter
          </span>
        </div>
        <div class="flex flex-col mt-4">
          <span class="md:text-center text-sm md:text-lg  w-3/4 md:w-ful leading-6">
            E receba <strong>ofertas exclusivas</strong> no seu e-mail
          </span>
        </div>
        <div class="flex flex-start w-full items-center md:justify-center mt-8 md:mt-12">
          <div class="flex flex-row md:w-full w-3/4 align-left">
            <input
              type="text"
              class="bg-transparent border-0 border-b-1 h-9 text-sm md:text-lg border-white placeholder-white flex-1 mb-3 w-5/6 px-2 py-1 text-white"
              placeholder="Digite seu e-mail..."
            />
          </div>
        </div>
        <div class="flex w-full flex-col md:items-center justify-center mt-4 md:mt-12">
          <button class="hover:opacity-80 duration-300 w-28 h-8 md:w-56 md:h-14 text-sm md:text-xl bg-white text-primary-red text-sm font-bold uppercase md:px-6 md:py-3 clip-path-10 md:clip-path-25">
            Confira
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
