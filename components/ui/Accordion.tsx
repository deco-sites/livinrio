import { useState } from "preact/compat";
import Icon from "./Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface AccordionProps {
  content: Accordion[];
}

export interface Accordion {
  accordionText?: string;
  accordionContentTitle?: string;
  accordionContentText?: string;
  contentCard: {
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
    <div>
      {content.map((card) => (
        <Accordion {...card} />
      ))}
    </div>
  );
}

function Accordion({ accordionText, accordionContentTitle, accordionContentText, contentCard }: Accordion) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#FCF9EB]">
      <><div
        className={`flex items-center pl-5 h-[48px] mx-4 bg-[#BABD8D80] rounded-md font-sfpro font-medium ${open ? 'border-b border-solid border-[#61616133] rounded-b-[0]' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <Icon id="AccordionIcon" width={24} height={24} />
        <p class="ml-3">{accordionText}</p>
      </div><div className={`${open ? "max-h-[457px]" : "max-h-0"} flex flex-col mx-4 px-5 bg-[#BABD8D80] overflow-auto rounded-b-lg transition-all duration-500`}>
          <span class="font-sfpro text-base">{accordionContentTitle}</span>
          <span class="font-sfpro text-xs mb-6">
            {accordionContentText}
          </span>

          {contentCard?.map((cards) => (
            <div class="flex bg-white mb-4 rounded-lg">
              {cards.image?.image && (
                <Image
                  src={cards.image.image}
                  loading="lazy"
                  width={cards.image.width || 0}
                  height={cards.image.height || 0}
                  className="rounded-lg rounded-r-none" />
              )}
              <div class="flex flex-col pl-4 pr-3 pt-3 pb-4">
                <span class="font-sfpro font-semibold text-[10px] leading-[normal]">{cards.topText}</span>
                <span class="font-sfpro font-normal text-xs my-2 leading-[normal]">{cards.title}</span>
                <span class="font-sfpro font-light text-[10px] leading-[normal]">{cards.textContent}</span>
              </div>
            </div>
          ))}
        </div></>
    </div>
  );
}