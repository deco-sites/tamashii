import Icon from "$store/components/ui/Icon.tsx";

const sections = [
  {
    label: "CENTRAL DE ATENDIMENTO",
    content: (
      <div class="flex-col hidden md:flex">
        <p className="text-white text-md">
          Central de atendimento exclusiva do site:
        </p>
        <p className="font-bold text-white text-md">(11) 4780-3748</p>
        <p className="font-bold text-white text-md">
          DE SEGUNDA A SEXTA DAS 9:00HS ÀS 17:00HS
        </p>
      </div>
    ),
  },
  {
    label: "ACOMPANHE NOSSAS REDES",
    content: (
      <div class="flex">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="mb-4 block mr-2 text-white text-sm"
          href="#"
        >
          <Icon
            width="33px"
            height="33px"
            fill="#fff"
            id="Facebook"
            class="w-auto"
          />
        </a>
        <a
          target="_blank"
          class="mb-4 block mr-2 text-white text-sm"
          rel="noopener noreferrer"
          href="#"
        >
          <Icon
            width="33px"
            height="33px"
            fill="#fff"
            id="Instagram"
            class="w-auto"
          />
        </a>
        <a
          target="_blank"
          class="mb-4 block mr-2 text-white text-sm"
          rel="noopener noreferrer"
          href="#"
        >
          <Icon
            width="33px"
            height="33px"
            fill="#fff"
            id="Twitter"
            class="w-auto"
          />
        </a>
      </div>
    ),
  },
  {
    label: "INSTITUCIONAL",
    content: (
      <div class="flex flex-col">
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Quem somos
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Politica de privacidade
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Trocas e devoluções
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Prazo de entrega
        </a>
      </div>
    ),
  },
  {
    label: "MINHA CONTA",
    content: (
      <div class="flex flex-col">
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Minha conta
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Meus pedidos
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Fale conosco
        </a>
      </div>
    ),
  },
  {
    label: "DEPOIS DA COMPRA",
    content: (
      <div class="flex flex-col">
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Acompanhe seu pedido
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Prazo de entrega
        </a>
        <a
          href="#"
          class="mb-1 text-white text-sm"
        >
          Trocas e devoluções
        </a>
      </div>
    ),
  },
];

function Footer() {
  return (
    <footer
      class="w-full bg-[#1b1b1b] pt-[40px] pb-[70px] md:pb-[0] md:pt-[20px]"
      style={{
        backgroundImage: 'url("/footer-bg-desk.png")',
      }}
    >
      <div className="container mx-auto md:pt-[120px]">
        <img
          className="max-w-[70%] mx-auto md:mx-[0] md:max-w-[100%]"
          src="/logoLojaFooter.png"
          alt="Logo loja footer"
        />
      </div>
      <div class="hidden md:block  w-full">
        <div class="flex justify-between py-8 container mx-auto">
          {sections.map(({ label, content }) => (
            <div class="flex flex-col mr-12">
              <span class="text-white uppercase mb-4 text-md font-bold">
                {label}
              </span>
              {content}
            </div>
          ))}
        </div>
      </div>

      <div class="md:hidden w-full text-center">
        <div class="w-full py-3">
          {sections.map(({ label, content }) => (
            <div key={label}>
              <details class="w-full cursor-pointer flex flex-row justify-between focus:outline-none">
                <summary class="text-white px-6 py-2">{label}</summary>
                <div class="px-8 text-sm text-gray-100">
                  {content}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto md:mt-0 mt-[30px]">
        <div className="flex md:justify-between items-center md:flex-row flex-col">
          <div class="flex flex-col pb-4">
            <div class="text-white mt-3 text-xs font-bold">
              Formas de pagamento
            </div>
            <ul class="flex flex-row flex-wrap justify-start mt-1">
              <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
                <Icon id="Visa" width="20px" height="6.46px" />
              </li>
              <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
                <Icon id="Diners" width="16px" height="13.83px" />
              </li>
              <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
                <Icon id="Mastercard" width="20px" height="16.09px" />
              </li>
              <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
                <Icon id="Amex" width="16px" height="10.57px" />
              </li>
              <li class="w-8 h-8 flex items-center justify-center mr-[4px] mb-[4px] last:m-0">
                <Icon id="Elo" width="20px" height="7.66px" />
              </li>
            </ul>
          </div>

          <div class="flex justify-center gap-[20px] px-3 pb-4">
            <div class="flex flex-col mt-3">
              <p class="text-[10px] mb-[15px] text-white">
                Powered by
              </p>
              <a href="https://www.deco.cx">
                <Icon id="Deco" width="70px" height="24px" />
              </a>
            </div>
            <div className="flex flex-col mt-3">
              <p className="text-[10px] mb-[23px] text-white">
                Developed by
              </p>
              <img src="/maeztra.png" alt="Logo Maeztra" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:border-t md:border-white border-0 pt-[32px]">
        <p className="md:text-sm text-center text-[10px] text-white pb-[15px]">
          © 2021 TAMASHII BRASIL - TODOS OS DIREITOS RESERVADOS. Rua do Bosque
          ,881 – Barra Funda, São Paulo - SP, 01136-000 CNPJ:11.815.832/0001-82
          - Ibiza Collectibles Comércio , Importação Exportação Ltda
        </p>
      </div>
    </footer>
  );
}

export default Footer;
