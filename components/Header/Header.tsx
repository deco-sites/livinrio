import { useEffect, useState } from "preact/compat";
import Icon from "../ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Search {
  items: SearchItem[];
}

export interface SearchItem {
  redirectTo: string;
  image: LiveImage;
  title: string;
  contentText: string;
}

export interface BackgroundImageHeader {
  /**
   * @default false
   */
  showImageBg?: boolean;
  bgImage?: LiveImage;
  /**
   * @description Interval time in millisecond, example: 3000 = 3 seconds. If interval time is equal to 0, it will display only the image
   */
  intervalTime?: number;
}

export interface BackgroundHeader {
  /**
   * @format color
   * @description background-color, ps: you should always pick a color
   */
  color?: string;
  /**
   * @description Choose where the border effect should be applied
   */
  topLeftBorder?: boolean;
  topRightBorder?: boolean;
  bottomLeftBorder?: boolean;
  bottomRightBorder?: boolean;
  image?: BackgroundImageHeader;
}

export interface HeaderProps {
  background: BackgroundHeader[];
  backgroundDesktopLeftSide: BackgroundHeader[];
  backgroundDesktopRightSide: BackgroundHeader[];
  topText: string;
  mainText: string;
  subMainTextInitial: string;
  subMainTextFinal: string;
  search: Search;
}

function SearchContent(
  { items, isOpen, handleClose }: Search & {
    handleClose: () => void;
    isOpen: boolean;
  },
) {
  return (
    <>
      {isOpen &&
        (
          <>
            <div
              onClick={handleClose}
              style="background: rgba(252, 249, 235, 0.40);"
              class="fixed w-full h-full top-0 left-0 "
            >
            </div>
            <div class="fixed bottom-0 z-10 md0:absolute md0:left-[50%] md0:translate-x-[-50%] md0:top-[20%] lg:top-[31%] exl:top-[56%] xxl:top-[62%] w-full md0:max-w-[652px] lg:max-w-[848px] exl:max-w-[1012px]">
              <div class="flex flex-col md0:flex-row justify-center gap-4 bg-[#292302] rounded-t-3xl md0:rounded-xl px-4 w-full md0:px-[46px] md0:py-4 md0:h-[268px] lg:h-[371px] exl:h-[452px] md0:border-[12px] md0:border-[#616161]">
                <div
                  onClick={handleClose}
                  style="background:rgba(255, 255, 255, 0.60)"
                  class="md0:hidden mx-auto w-[72px] h-[2px] rounded-[4px] mt-2 mb-6"
                >
                </div>
                {items.map((find) => (
                  <a href={find.redirectTo}>
                    <div className="searchContent h-full flex md0:flex-col md0:min-w-[194px] lg:min-w-[245px] exl:min-w-[306px] justify-center items-center rounded-2xl min-h-[103px] pr-6 pl-10 md0:p-0">
                      <Image
                        src={find.image}
                        loading="lazy"
                        width={44}
                        height={40}
                        className="max-h-[40px] mr-6 md0:mr-0 rounded-lg rounded-r-none exl:max-h-[128px] exl:rounded-none exl:rounded-t-lg"
                      />
                      <div className="flex flex-col md0:items-center">
                        <h2 class="text-white font-sfprodisplay text-base font-semibold md0:mt-6 md0:mb-3">
                          {find.title}
                        </h2>
                        <span class="text-white font-sfprodisplay text-xs font-normal md0:max-w-[146px] md0:text-center">
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
        )}
    </>
  );
}

function BackgroundHeaderImage(
  { background }: { background: BackgroundHeader },
) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (
      background.image?.intervalTime === 0 ||
      background.image?.intervalTime === null
    ) {
      setShowImage(true);
      return;
    }

    const imageTimer = setInterval(() => {
      setShowImage((value) => !value);
    }, background.image?.intervalTime || 3000);

    return () => {
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${background.color}`,
        borderTopLeftRadius: `${background.topLeftBorder ? `50%` : ''}`,
        borderTopRightRadius: `${background.topRightBorder ? `50%` : ''}`,
        borderBottomLeftRadius: `${background.bottomLeftBorder ? `50%` : ''}`,
        borderBottomRightRadius: `${background.bottomRightBorder ? `50%` : ''}`,
        backgroundSize: `100% 100%`,
        backgroundRepeat: `no-repeat`,
      }}
      class={`aspect-square overflow-hidden`}
    >
      {background.image?.bgImage && background.image?.showImageBg
        ? (
          <Image
            style={{ aspectRatio: `1 / 1` }}
            src={background.image?.bgImage}
            alt="background blocks"
            width={120}
            loading="eager"
            className={`${showImage ? `opacity-1` : `opacity-0`
              } transition-opacity duration-200 ease-in-out w-full object-cover`}
          />
        )
        : ""}
    </div>
  );
}

export default function Header(
  {
    background,
    backgroundDesktopLeftSide,
    backgroundDesktopRightSide,
    topText,
    mainText,
    subMainTextInitial,
    subMainTextFinal,
    search,
  }: HeaderProps,
) {
  const [isAmazing, setIsAmazing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAmazing(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <SearchContent
        items={search.items}
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      />
      <header className="bg-[#FCF9EB] md0:flex md0:pb-12 exl:pb-20">
        <div class="opacity-50 grid grid-cols-3 w-full md0:hidden">
          {background?.map((bg) => <BackgroundHeaderImage background={bg} />)}
        </div>

        <div class="hidden md0:grid grid-cols-[repeat(3,minmax(64px,160px))] grid-rows-[repeat(6,minmax(0,64px))] lg:grid-rows-[repeat(6,minmax(0,88px))] exl:grid-rows-[repeat(6,minmax(0,128px))] xxl:grid-rows-[repeat(6,minmax(0,160px))] w-full max-w-[192px] lg:max-w-[264px] exl:max-w-[387px] xxl:max-w-[490px] ml-4 mt-4 lg:ml-6 lg:mt-6 exl:ml-8 exl:mt-8 xxl:mt-12 xxl:ml-12">
          {backgroundDesktopLeftSide?.map((bg) => (
            <BackgroundHeaderImage background={bg} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between md0:justify-normal pt-[38px] lg:pt-[56px] exl:pt-[64px] pb-20 md0:pb-0 absolute md0:static top-0 left-[50%] translate-x-[-50%] md0:translate-x-0 md0:flex-1 h-[615px] md0:h-auto">
          <div className="flex items-center">
            <span className="text-[#7C6A0A] font-sfprodisplay font-extrabold text-[10px] tracking-[6.8px] mr-3">
              {topText}
            </span>
            <Icon
              id="HeaderMiniIconMobile"
              width={12}
              height={12}
            />
          </div>
          <div className="flex flex-col relative md0:mt-[126.2px] lg:mt-[163px] md0:mb-[65px] lg:mb-[126px] exl:mb-[169px] exl:mt-[256px] xxl:mt-[225px] xxl:mb-[192px] md0:h-[126px] lg:h-[168px] exl:h-[231px] xxl:h-[326px]">
            <span className="font-pphatton text-[#7C6A0A] text-7xl md0:text-[84px] lg:text-[112px] exl:text-[160px] font-medium tracking-[-7.172px] md0:tracking-[-8.4px] lg:tracking-[-11.2px] exl:tracking-[-16px] xxl:tracking-[-22.4px]">
              {mainText}
            </span>
            <Icon
              id="LivinRioIcon"
              width={40}
              height={48}
              class="absolute top-[-40px] right-[-25px]"
            />
            <span
              className={`font-crimsonpro text-[#7C6A0A] text-right  text-[24px] lg:text-[32px] exl:text-[64px] font-medium italic`}
            >
              {isAmazing ? `${subMainTextFinal}` : `${subMainTextInitial}`}
            </span>
          </div>

          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            style={{ boxShadow: "0px 0px 11.38419px 0px rgba(0, 0, 0, 0.10)" }}
            className="bg-[#413703] rounded-lg exl:rounded-2xl h-[48px] exl:h-[72px] flex items-center px-6 exl:px-8"
          >
            <Icon
              id="FindIcon"
              width={17}
              height={17}
            />
            <span className="text-white font-sfprodisplay text-base font-medium ml-3 whitespace-nowrap">
              Find your way in this content
            </span>
          </button>
        </div>

        <div class="hidden md0:grid grid-cols-[repeat(3,minmax(64px,160px))] grid-rows-[repeat(6,minmax(0,64px))] lg:grid-rows-[repeat(6,minmax(0,88px))] exl:grid-rows-[repeat(6,minmax(0,128px))] xxl:grid-rows-[repeat(6,minmax(0,160px))] w-full max-w-[192px] lg:max-w-[264px] exl:max-w-[387px] xxl:max-w-[490px] mr-4 mt-4 ml-auto lg:mr-6 lg:mt-6 exl:mr-8 exl:mt-8 xxl:mr-12 xxl:ml-12">
          {backgroundDesktopRightSide?.map((bg) => (
            <BackgroundHeaderImage background={bg} />
          ))}
        </div>
      </header>
    </>
  );
}
