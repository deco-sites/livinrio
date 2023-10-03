import { useState } from "preact/compat";
import Icon from "./Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface AccordionProps {
  content: Accordion[];
}

export interface Accordion {
  categories?: string[];
  /** @description Text that accordion will show even before clicking on it */
  accordionText?: string;
  /** @description Title text inside the accordion */
  accordionContentTitle?: string;
  /** @description Content text inside the accordion */
  accordionContentText?: string;
  contentCard: {
    category?: string[];
    /** @description Should ad appear or not */
    ad?: boolean;
    image?: {
      image?: LiveImage;
      width?: number;
      height?: number;
    };
    /** @description Displays the first text inside the card */
    topText?: string;
    /** @description Displays title text */
    title?: string;
    /** @description Displays content text */
    textContent?: string;
    /** @description Link to redirect */
    href?: string;
  }[];
}

export default function AccordionGroup({ content }: AccordionProps) {
  return (
    <div id="accordion" class="bg-[#FCF9EB] pb-8 pt-12 lg:pb-16">
      {content.map((card) => <Accordion {...card} />)}
    </div>
  );
}

function Accordion(
  {
    categories,
    accordionText,
    accordionContentTitle,
    accordionContentText,
    contentCard,
  }: Accordion,
) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    categories && categories.length > 0 ? categories[0] : "",
  );
  const filteredCards = contentCard.filter((card) =>
    card.category?.includes(selectedCategory)
  );

  return (
    <div
      className={`mx-4 md0:mx-10 max-w-[1430px] exl:mx-auto ${open ? "pb-4" : "pb-0"
        }`}
    >
      <>
        <div class="bg-[#BABD8D80] exl:hover:bg-[#BABD8D] mb-4 rounded-lg">
          <div
            className={`cursor-pointer flex items-center pl-5 exl:py-8 h-[48px] rounded-md font-sfprodisplay font-medium ${open
              ? "border-b border-solid border-[#61616133] rounded-b-[0] mb-0"
              : "bg-[#BABD8D80]"
              }`}
            onClick={() => setOpen(!open)}
          >
            <div class="hidden exl:block">
              {open
                ? <Icon id="AccordionIconLess" width={32} height={32} />
                : <Icon id="AccordionIconPlusDesk" width={32} height={32} />}
            </div>
            <div class="exl:hidden">
              <Icon id="AccordionIconPlus" width={24} height={24} />
            </div>
            <p class="ml-3 font-sfprodisplay text-base exl:text-2xl text-[#252D29]">
              {accordionText}
            </p>
          </div>
          <div
            className={`exl:max-h-[598px]`}
          >
            <div
              className={`${open ? "max-h-[457px] exl:max-h-[598px]" : "max-h-0"
                } flex flex-col max-w-[1110px] exl:mx-auto px-5 exl:px-0 overflow-auto rounded-b-exl transition-all duration-500`}
            >
              {categories && (
                <div class="hidden cursor-pointer exl:flex gap-4 mt-10 mb-[24px]">
                  {categories?.map((category) => (
                    <span
                      class={`rounded-[51px] bg-[#4137031a] px-3 py-2 border-solid font-sfprodisplay text-xs font-medium text-[#252D29] ${selectedCategory === category
                        ? "border-[1px] border-[#41370366]"
                        : ""
                        }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
              <div class="flex justify-center exl:justify-normal">
                <div class="flex flex-col exl:max-w-[387px] exl:mr-[56px]">
                  <span class="font-pphatton exl:font-crimsontext font-extrabold text-sm exl:text-2xl mb-6 pt-4 exl:pt-0">
                    {accordionContentTitle}
                  </span>
                  <span class="font-sfprodisplay text-sm exl:text-sm mb-6">
                    {accordionContentText}
                  </span>
                </div>
                <div class="flex flex-col rounded-lg exl:flex-wrap exl:flex-row exl:max-w-[650px]">
                  {filteredCards?.map((cards) => (
                    <a href={cards.href}>
                      <div class="hidden cursor-pointer exl:flex exl:flex-col exl:max-w-[306px] exl:min-w-[306px] exl:mr-4 bg-white mb-4 rounded-lg exl:hover:shadow-md">
                        <div class="relative">
                          {cards.image?.image && (
                            <Image
                              src={cards.image.image}
                              loading="lazy"
                              width={cards.image.width || 0}
                              height={cards.image.height || 0}
                              className="rounded-lg rounded-r-none exl:w-full exl:max-h-[128px] exl:rounded-none exl:rounded-t-lg"
                            />
                          )}
                          {cards.ad
                            ? (
                              <span class="absolute top-3 right-[14px] flex items-center font-sfprodisplay text-white text-[8px] py-[3px] px-[7px] exl:py-[6px] exl:px-3 exl:max-h-[26px] exl:text-xs font-normal bg-[#252D29] rounded-lg">
                                Ad
                              </span>
                            )
                            : ""}
                        </div>
                        <div class="flex flex-col pl-4 pr-3 pt-3 pb-4">
                          <span class="font-sfprodisplay font-semibold text-[10px] exl:text-base leading-[normal]">
                            {cards.topText}
                          </span>
                          <span class="text-ellipsis overflow-hidden whitespace-nowrap max-w-[234px] font-sfprodisplay font-normal text-xs exl:text-sm my-2 leading-[normal]">
                            {cards.title}
                          </span>
                          <div class="flex items-center justify-between">
                            <span class="max-w-[234px] font-sfprodisplay font-light break-all text-[10px] exl:text-xs leading-[normal]">
                              {cards.textContent}
                            </span>
                            <Icon
                              id="ChevronRightCardDesk"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div class="flex flex-col exl:hidden rounded-lg exl:flex-wrap exl:flex-row exl:max-w-[650px]">
                {contentCard?.map((cards) => (
                  <div class="flex exl:flex-col exl:max-w-[306px] exl:min-w-[306px] exl:mr-4 bg-white mb-4 rounded-lg">
                    <div class="relative">
                      {cards.image?.image && (
                        <Image
                          src={cards.image.image}
                          loading="lazy"
                          width={cards.image.width || 0}
                          height={cards.image.height || 0}
                          className="h-full rounded-lg rounded-r-none exl:w-full exl:max-h-[128px]"
                        />
                      )}
                      {cards.ad
                        ? (
                          <span class="absolute top-3 right-[14px] flex items-center font-sfprodisplay text-white text-[8px] py-[3px] px-[7px] exl:py-[6px] exl:px-3 exl:max-h-[26px] exl:text-xs font-normal bg-[#252D29] rounded-lg">
                            Ad
                          </span>
                        )
                        : ""}
                    </div>
                    <div class="flex flex-col pl-4 pr-3 pt-3 pb-4">
                      <div class="flex items-center justify-between">
                        <span class="font-sfprodisplay font-semibold text-[10px] exl:text-base leading-[normal]">
                          {cards.topText}
                        </span>
                        <Icon
                          id="ChevronRightCardMobile"
                          width={14}
                          height={14}
                        />
                      </div>
                      <span class="font-sfprodisplay font-normal text-xs exl:text-sm my-2 leading-[normal]">
                        {cards.title}
                      </span>
                      <span class="font-sfprodisplay font-light break-all text-[10px] exl:text-xs leading-[normal]">
                        {cards.textContent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
