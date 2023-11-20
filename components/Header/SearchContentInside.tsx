import Image from "deco-sites/std/components/Image.tsx";
import Icon from "../ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Search {
  items: SearchItem[];
}

export interface SearchItem {
  redirectTo: string;
  image: LiveImage;
  title: string;
  contentText: string;
}

function SearchContentInside(
  { items, handleClose }: Search & { handleClose: () => void },
) {
  return (
    <>
      <div
        onClick={handleClose}
        style="background: rgba(252, 249, 235, 0.40);"
        class="fixed w-full h-full top-0 left-0 z-[5]"
      >
      </div>
      <div class="w-full fixed bottom-0 z-50 md0:z-10 md0:absolute md0:left-[50%] md0:translate-x-[-50%] md0:top-[100px] lg:top-[148px] exl:top-[272px] xxl:top-[360px] md0:max-w-[664px] lg:max-w-[848px] exl:max-w-[1012px] md0:min-w-[664px] lg:min-w-[848px] exl:min-w-[1012px]">
        <Icon
          id="CloseSearchIcon"
          width={24}
          height={24}
          class="absolute right-0 top-[-28px]"
          onClick={handleClose}
        />
        <div class="flex flex-col md0:flex-row justify-center gap-4 bg-[#292302] rounded-t-3xl md0:rounded-xl exl:rounded-2xl px-4 lg:px-8 w-full md0:py-4 lg:py-8 md0:h-[268px] lg:h-[371px] exl:h-[452px] md0:border-[8px] md0:border-[#616161]">
          <div
            onClick={handleClose}
            style="background:rgba(255, 255, 255, 0.60)"
            class="md0:hidden mx-auto w-[72px] h-[2px] rounded-[4px] mt-2 mb-[14px]"
          >
          </div>
          {items.map((find) => (
            <a onClick={handleClose} href={find.redirectTo}>
              <div className="searchContent h-full flex md0:flex-col md0:min-w-[194px] lg:min-w-[245px] exl:min-w-[306px] justify-center items-center rounded-2xl min-h-[103px] md0:min-h-[224px] px-6 md0:p-0">
                <Image
                  src={find.image}
                  loading="lazy"
                  width={48}
                  className="mr-6 md0:mr-0 rounded-lg rounded-r-none exl:max-h-[128px] exl:rounded-none exl:rounded-t-lg exl:hidden"
                />
                <Image
                  src={find.image}
                  loading="lazy"
                  width={96}
                  className="mr-6 md0:mr-0 rounded-lg rounded-r-none exl:max-h-[128px] exl:rounded-none exl:rounded-t-lg hidden exl:block"
                />
                <div className="flex flex-col md0:items-center">
                  <h2 class="text-white font-sfprodisplay text-base lg:text-2xl lg:leading-[normal] font-semibold md0:mt-6 md0:mb-3 exl:mt-8 exl:mb-6">
                    {find.title}
                  </h2>
                  <span class="text-white font-sfprodisplay text-xs lg:text-base md0:leading-[100%] lg:leading-[normal] font-normal md0:max-w-[146px] md0:text-center">
                    {find.contentText}
                  </span>
                </div>
              </div>
            </a>
          ))}
          <div
            onClick={handleClose}
            style="background:rgba(255, 255, 255, 0.60)"
            class="md0:hidden mx-auto w-[72px] h-[2px] rounded-[4px] mb-2 mt-6"
          >
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchContentInside;
