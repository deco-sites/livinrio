import { useState } from "preact/compat";
import Icon from "./Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { categoryTreeToNavbar } from "deco-sites/std/packs/vtex/utils/transform.ts";

export interface AccordionProps {
  content: Accordion[];
}

export interface Accordion {
  categories?: string[];
  accordionText?: string;
  accordionContentTitle?: string;
  accordionContentText?: string;
  contentCard: {
    category?: string[];
    image?: {
      image?: LiveImage;
      width?: number;
      height?: number;
    }
    topText?: string;
    title?: string;
    textContent?: string;
  }[]
}

export default function AccordionGroup({ content }: AccordionProps) {
  return (
    <div class="bg-[#FCF9EB] pb-8 pt-12">
      {content.map((card) => (
        <Accordion {...card} />
      ))}
    </div>
  );
}

function Accordion({ categories, accordionText, accordionContentTitle, accordionContentText, contentCard }: Accordion) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories && categories.length > 0 ? categories[0] : '');
  const filteredCards = contentCard.filter((card) => card.category?.includes(selectedCategory));

  return (
    <div className={`mx-4 md0:mx-10 cursor-pointer max-w-[1430px] exl:mx-auto ${open ? 'pb-4' : 'pb-0'}`} >
      <>
        <div
          className={`flex items-center pl-5 exl:py-8 h-[48px] exl:hover:bg-[#BABD8D] rounded-md font-sfprodisplay font-medium ${open ? 'border-b border-solid border-[#61616133] rounded-b-[0] mb-0 bg-[#BABD8D80]' : 'mb-4 bg-[#BABD8D80]'}`}
          onClick={() => setOpen(!open)}
        >
          <div class="hidden exl:block">{open ? <Icon id="AccordionIconLess" width={32} height={32} /> : <Icon id="AccordionIconPlusDesk" width={32} height={32} />}</div>
          <div class="exl:hidden"><Icon id="AccordionIconPlus" width={24} height={24} /></div>
          <p class="ml-3 font-sfprodisplay text-base exl:text-2xl text-[#252D29]">{accordionText}</p>
        </div>
        <div className={`bg-[#BABD8D80] exl:hover:bg-[#BABD8D] exl:max-h-[598px]`}>
          <div className={`${open ? "max-h-[457px] exl:max-h-[598px]" : "max-h-0"} flex flex-col max-w-[1090px] exl:mx-auto px-5 exl:px-0 overflow-auto rounded-b-exl transition-all duration-500`}>
            {categories && <div class="hidden exl:flex gap-4 mt-10 mb-[24px]">
              {categories?.map((category) => (
                <span class={`rounded-[51px] bg-[#4137031a] px-3 py-2 border-solid font-sfprodisplay text-xs font-medium text-[#252D29] ${selectedCategory === category ? 'border-[1px] border-[#41370366]' : ''}`} onClick={() =>
                  setSelectedCategory(category)
                }>{category}</span>
              ))}
            </div>}
            <div class="flex justify-center exl:justify-normal">
              <div class="flex flex-col exl:max-w-[387px] exl:mr-[56px]">
                <span class="font-pphatton exl:font-crimsontext font-extrabold text-sm exl:text-2xl mb-6 pt-4 exl:pt-0">{accordionContentTitle}</span>
                <span class="font-sfprodisplay text-sm exl:text-sm mb-6">
                  {accordionContentText}
                </span>
              </div>
              <div class="flex flex-col rounded-lg exl:flex-wrap exl:flex-row exl:max-w-[650px]">
                {filteredCards?.map((cards) => (
                  <div class="hidden exl:flex exl:flex-col exl:max-w-[306px] exl:min-w-[306px] exl:mr-4 bg-white mb-4 rounded-lg">
                    {cards.image?.image && (
                      <Image
                        src={cards.image.image}
                        loading="lazy"
                        width={cards.image.width || 0}
                        height={cards.image.height || 0}
                        className="rounded-lg rounded-r-none exl:w-full exl:max-h-[128px]" />
                    )}
                    <div class="flex flex-col pl-4 pr-3 pt-3 pb-4">
                      <span class="font-sfprodisplay font-semibold text-[10px] exl:text-base leading-[normal]">{cards.topText}</span>
                      <span class="font-sfprodisplay font-normal text-xs exl:text-sm my-2 leading-[normal]">{cards.title}</span>
                      <span class="font-sfprodisplay font-light break-all text-[10px] exl:text-xs leading-[normal]">{cards.textContent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="flex flex-col exl:hidden rounded-lg exl:flex-wrap exl:flex-row exl:max-w-[650px]">
              {contentCard?.map((cards) => (
                <div class="flex exl:flex-col exl:max-w-[306px] exl:min-w-[306px] exl:mr-4 bg-white mb-4 rounded-lg">
                  {cards.image?.image && (
                    <Image
                      src={cards.image.image}
                      loading="lazy"
                      width={cards.image.width || 0}
                      height={cards.image.height || 0}
                      className="rounded-lg rounded-r-none exl:w-full exl:max-h-[128px]" />
                  )}
                  <div class="flex flex-col pl-4 pr-3 pt-3 pb-4">
                    <span class="font-sfprodisplay font-semibold text-[10px] exl:text-base leading-[normal]">{cards.topText}</span>
                    <span class="font-sfprodisplay font-normal text-xs exl:text-sm my-2 leading-[normal]">{cards.title}</span>
                    <span class="font-sfprodisplay font-light break-all text-[10px] exl:text-xs leading-[normal]">{cards.textContent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div></>
    </div>
  );
}