import PoweredByDeco from "deco-sites/std/components/PoweredByDeco.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Footer {
  partners?: {
    image: LiveImage;
    width: number;
    height: number;
  }[];
  footerItems?: {
    linkText1?: string;
    text1?: string;
    linkText2?: string;
    text2?: string;
    linkText3?: string;
    text3?: string;
  };
}

export default function Footer({ partners, footerItems }: Footer) {
  return (
    <div class="">
      <div class="hidden md0:block max-w-[664px] lg:max-w-[656px] mx-auto pt-[56px]">
        <div class="flex flex-col">
          <span class="font-sfprodisplay font-medium text-center mb-8 text-[#616161] text-base">
            Some of our partners
          </span>
          <div class="flex justify-between items-center">
            {partners?.map((image) => (
              <Image
                src={image.image}
                loading="lazy"
                width={image.width}
                height={image.height}
                class=""
              />
            ))}
          </div>
        </div>
      </div>

      {/*Mobile InfoFooter View*/}
      <div class="lg:hidden max-w-[664px] lg:max-w-[656px] md0:mx-auto pb-3 mt-[52px] flex flex-col mx-4">
        <div class="flex items-center justify-between">
          <a href={footerItems?.linkText1}>
            <span class="text-[#252D29] font-sfprodisplay font-medium text-xs">
              {footerItems?.text1}
            </span>
          </a>
          <div class="flex flex-col">
            <span class="text-[#252D29] text-[10px] mb-[10px]">Powered by</span>
            {" "}
            <PoweredByDeco width={55} />
          </div>
        </div>

        <a href={footerItems?.linkText2}>
          <span class="text-[#252D29] font-sfprodisplay font-medium text-xs md0:mt-2 mb-0 md0:mb-4">
            {footerItems?.text2}
          </span>
        </a>

        <div class="flex items-center justify-between">
          <a href={footerItems?.linkText3}>
            <span class="text-[#252D29] font-sfprodisplay font-medium text-xs">
              {footerItems?.text3}
            </span>
          </a>
          <div class="flex flex-col md0:flex-row">
            <span class="text-[#252D29] text-[10px] font-sfprodisplay font-normal">
              © 2023 Copyright.
            </span>{" "}
            <span class="text-[#252D29] text-[10px] font-sfprodisplay font-normal">
              All Rights Reserved.
            </span>
          </div>
        </div>
      </div>

      {/*Desktop InfoFooter View*/}
      <div class="hidden lg:flex mx-[80px] mt-[113px] mb-6">
        <div class="flex items-center justify-between w-full">
          <span class="text-[#252D29] font-sfprodisplay font-normal text-[10px]">
            © 2023 Copyright. All Rights Reserved.
          </span>

          <div class="flex justify-between items-center">
            <a href={footerItems?.linkText1}>
              <span class="text-[#252D29] font-sfprodisplay font-medium text-sm">
                {footerItems?.text1}
              </span>
            </a>
            <a href={footerItems?.linkText2}>
              <span class="text-[#252D29] font-sfprodisplay font-medium text-sm mx-9">
                {footerItems?.text2}
              </span>
            </a>
            <a href={footerItems?.linkText2}>
              <span class="text-[#252D29] font-sfprodisplay font-medium text-sm">
                {footerItems?.text3}
              </span>
            </a>
          </div>

          <div class="flex items-center">
            <span class="text-[#252D29] font-sfprodisplay font-normal text-xs mr-4">
              Powered by
            </span>{" "}
            <PoweredByDeco width={71} />
          </div>
        </div>
      </div>
    </div>
  );
}
