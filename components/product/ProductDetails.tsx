import { LoaderReturnType } from "$live/std/types.ts";
import { Head } from "$fresh/runtime.ts";
import Image from "$live/std/ui/components/Image.tsx";
import SKUSelector from "$store/components/product/SKUSelector.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import ScriptLDJson from "$store/components/seo/ScriptLDJson.tsx";
import Icon from "../ui/Icon.tsx";

export interface Props {
    // deno-lint-ignore no-explicit-any
    page: LoaderReturnType<any | null>;
}

export type AddProp = {
    "@type": string;
    name: string;
    value: string;
    valueReference: string;
}

function ProductDetails({ page }: Props) {
    if (!page) {
        return null;
    }

    const {
        breadcrumbList: { numberOfItems, itemListElement },
        product: {
            description,
            isVariantOf,
            productID,
            offers,
            image,
            name,
            productReference,
            additionalProperty
        },
    } = page;
    const { price, listPrice, seller, installments } = useOffer(offers);
    const modelData = additionalProperty.find((el: AddProp) => el?.name == "Modelo")

    return (
        <>
            <Head>
                <ScriptLDJson {...page.product} />
                <ScriptLDJson {...page.breadcrumbList} />
            </Head>
            <section class="w-full bg-gray-100 flex flex-col lg:flex-row bg-black">
                <div class="px-4 w-full lg:w-1/2 bg-gray-100 flex justify-center items-center">
                    {image && (
                        <Image
                            class="object-contain col-span-4 lg:w-[600px] w-full h-full"
                            sizes="(max-width: 640px) 100vw, 25vw"
                            src={image[0].url!}
                            alt={image[0].alternateName!}
                            width={360}
                            height={540}
                        />
                    )}
                </div>
                <div class="px-4 w-full lg:w-1/2 border border-solid border-gray-300 flex flex-col">
                    <div class="flex flex-col mt-10">
                        <div class="pb-2 flex justify-between">
                            {/* <div>
                                {itemListElement.map(({ item, position, name }) => (
                                    <>
                                        <a
                                            href={item}
                                            class={`${position === numberOfItems
                                                ? "font-bold"
                                                : "text-gray-400"
                                                } hover:underline`}                                        >
                                            {name}
                                        </a>
                                        {position !== numberOfItems && (
                                            <span class="px-2 text-gray-400">|</span>
                                        )}
                                    </>
                                ))}
                            </div> */}
                            <div class="flex flex-row text-white">
                                Cod:{productReference}
                            </div>

                        </div>
                        <h1 class="lg:text-3xl text-xl font-semibold  uppercase text-white">
                            {name?.includes(isVariantOf?.name ?? "")
                                ? name
                                : `${isVariantOf?.name ?? ""} - ${name}`}
                        </h1>
                        <div class="flex flex-row gap-8 text-white">
                            <div class="flex gap-2">
                                <Icon id="ViewPhotos" width={20} height={20} />
                                <span>Ver todas as fotos</span>
                            </div>
                            <div class="flex">
                                {modelData ?
                                    <div class="flex">
                                        {modelData.name}: {modelData.value}
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="border-0 flex flex-row justify-between items-center">
                        <div class="flex flex-col w-full">
                            {listPrice && (
                                <div>
                                    <span class="line-through">
                                        De:
                                        {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(listPrice.price)}
                                    </span>
                                </div>
                            )}
                            {price && (
                                <div>
                                    <span class="lg:text-2xl text-white">Por:</span>
                                    <span class="lg:text-3xl font-bold text-primary-yellow">
                                        {' '}
                                        {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(price)}
                                    </span>
                                </div>
                            )}
                            {installments && (
                                <span className="text-white">
                                    ou em até {installments}
                                </span>
                            )}
                            {/* <div class="flex flex-row justify-between py-3 w-full">
                                <SKUSelector product={page.product} />
                            </div> */}
                        </div>
                    </div>
                    {seller && (
                        <div class="flex flex-row gap-6">
                            <div class="flex flex-row justify-between items-center md:w-1/4">
                                <div class="flex flex-row items-center text-white">
                                    <button class="flex items-center justify-center px-3 lg:text-3xl self-start">-</button>
                                    <span class="bg-[#3A3A3A] lg:text-lg clip-path-10 px-5 py-2 border-0">1</span>
                                    <button class="flex items-center justify-center px-3 lg:text-3xl self-start">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="border-0 flex flex-row justify-between items-center">
                                <AddToCartButton skuId={productID} sellerId={seller} large />
                            </div>
                        </div>
                    )}
                    {description && (
                        <div class="my-8">
                            <div class="bg-white clip-path-right-50 p-8 text-sm leading-7">
                                <h2 class="mb-6 lg:text-2xl font-regular font-gang">Model Kit Gundam Dynames </h2>
                                Mobile Suit "Gundam 00" é a sétima versão da saga Gundam,
                                produzida pelo estúdio Sunrise, eleita o melhor anime do ano em 2008 na premiação Anime Grand Prix.
                                No ano de 2307 o petróleo há 50 anos, e a humanidade tem que passar a confiar exclusivamente na energia solar.
                                Em um mundo que sofre de constantes guerras por motivos econômicos, sociais e políticos, visando mudar esse cenário e fazer a humanidade evoluir para desvendar o espaço, surge uma organização paramilitar chamada Celestial Being, uma organização secreta que começa a atacar todos com o objetivo de dar um fim as guerras do mundo com o uso de força bruta.
                                Para tal, são usados os Gundams, mobile suits muito mais avançados tecnicamente, e poderosos, do que qualquer outro existente.
                                Pilotado por Lockon Stratos, a organização paramilitar Celestial Being, implantou vários Gundams em 2307 DC para eliminar conflitos mundiais por meio de intervenções armadas, e o Gundam Dynames especializado em tiro de longo alcance é um deles. O Dynames é uma unidade de terceira geração desenvolvida usando os dados operacionais da segunda geração.
                                Durante o combate, o Dynames serve principalmente como um franco-atirador, bem como uma unidade de apoio de fogo para seus aliados.
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default ProductDetails;
