import { useEffect, useState } from "preact/compat";
import Icon from "../ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

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
  mainText?: {
    mobile: LiveImage;
    tablet: LiveImage;
    tabletTwo: LiveImage;
    desktop: LiveImage;
    desktopTwo: LiveImage;
  };
  subMainTexts: string[];
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
        borderTopLeftRadius: `${background.topLeftBorder ? `50%` : ""}`,
        borderTopRightRadius: `${background.topRightBorder ? `50%` : ""}`,
        borderBottomLeftRadius: `${background.bottomLeftBorder ? `50%` : ""}`,
        borderBottomRightRadius: `${background.bottomRightBorder ? `50%` : ""}`,
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
            className={`${
              showImage ? `opacity-1` : `opacity-0`
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
    subMainTexts,
    search,
  }: HeaderProps,
) {
  const [isText, setIsText] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [textClass, setTextClass] = useState("fade-in");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (subMainTexts.length > 1) {
        if (isText === subMainTexts.length - 1) {
          clearTimeout(timer);
          return;
        }
        setTextClass("fade-out");
      }
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [isText]);

  useEffect(() => {
    if (textClass === "fade-out") {
      setTimeout(() => {
        setTextClass("fade-in");
        setIsText((prevText) => {
          return prevText + 1;
        });
      }, 150);
    }
  }, [textClass]);

  return (
    <>
      <div class="md0:hidden">
        <SearchContent
          items={search.items}
          isOpen={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <header className="bg-[#FCF9EB] md0:flex md0:pb-12 exl:pb-20 xxl:pb-3">
        <div class="opacity-[30%] grid grid-cols-3 w-full md0:hidden">
          {background?.map((bg) => <BackgroundHeaderImage background={bg} />)}
        </div>

        <div class="hidden relative md0:grid grid-cols-[repeat(3,minmax(64px,160px))] grid-rows-[repeat(6,minmax(0,64px))] lg:grid-rows-[repeat(6,minmax(0,88px))] exl:grid-rows-[repeat(6,minmax(0,128px))] xxl:grid-rows-[repeat(6,minmax(0,160px))] w-full max-w-[192px] lg:max-w-[264px] exl:max-w-[387px] xxl:max-w-[490px] ml-4 mt-4 lg:ml-6 lg:mt-6 exl:ml-8 exl:mt-8 xxl:mt-12 xxl:ml-12">
          {backgroundDesktopLeftSide?.map((bg) => (
            <BackgroundHeaderImage background={bg} />
          ))}
          <Icon
            id="LivinRioBgStar"
            width={24}
            height={32}
            class="hidden md0:block lg:hidden absolute top-[48%] translate-y-[-50%] left-[27%]"
          />
          <Icon
            id="LivinRioBgStarLg"
            width={32}
            height={40}
            class="hidden lg:block exl:hidden absolute top-[48%] translate-y-[-50%] left-[27%]"
          />
          <Icon
            id="LivinRioBgStarXl"
            width={48}
            height={56}
            class="hidden exl:block xxl:hidden absolute top-[49%] translate-y-[-50%] left-[27%]"
          />
          <Icon
            id="LivinRioBgStarXl"
            width={48}
            height={56}
            class="hidden xxl:block absolute top-[50%] translate-y-[-50%] left-[28%]"
          />
        </div>

        <div className="flex flex-col items-center justify-between md0:justify-normal pt-[38px] lg:pt-[56px] exl:pt-[64px] pb-20 md0:pb-0 absolute md0:static top-0 left-[50%] translate-x-[-50%] md0:translate-x-0 md0:flex-1 h-[615px] md0:h-auto z-10">
          <div className="flex items-center">
            <span className="text-[#7C6A0A] font-sfprodisplay font-extrabold text-[10px] exl:text-[16px] md0:leading-[14px] exl:leading-[22px] tracking-[6.8px] exl:tracking-[10.88px] mr-3 exl:mr-6">
              {topText}
            </span>
            <Icon
              id="HeaderMiniIconMobile"
              width={16}
              height={16}
              class="exl:hidden"
            />
            <Icon
              id="HeaderMiniIconDesk"
              width={24}
              height={24}
              class="hidden exl:block"
            />
          </div>
          <div className="flex flex-col relative md0:mt-[126.2px] lg:mt-[163px] md0:mb-[65px] lg:mb-[126px] exl:mb-[169px] exl:mt-[256px] xxl:mt-[225px] xxl:mb-[192px] md0:h-[126px] lg:h-[168px] exl:h-[231px] xxl:h-[326px]">
            {mainText && (
              <Picture preload>
                <Source
                  media="(max-width: 743px)"
                  fetchPriority="high"
                  src={mainText?.mobile}
                  width={234}
                  height={60}
                />
                <Source
                  media="(min-width: 744px) and (max-width: 1023px)"
                  fetchPriority="high"
                  src={mainText?.tablet}
                  width={273}
                  height={70}
                />
                <Source
                  media="(min-width: 1024px) and (max-width: 1439px)"
                  fetchPriority="high"
                  src={mainText?.tabletTwo}
                  width={364}
                  height={93}
                />
                <Source
                  media="(min-width: 1440px) and (max-width: 1919px)"
                  fetchPriority="high"
                  src={mainText?.desktop}
                  width={519}
                  height={132}
                />
                <Source
                  media="(min-width: 1920px)"
                  fetchPriority="high"
                  src={mainText?.desktopTwo}
                  width={726}
                  height={185}
                />
                <img
                  loading="eager"
                  src={mainText?.desktop}
                  alt="LivinRio"
                />
              </Picture>
            )}

            <Icon
              id="LivinRioIcon"
              width={40}
              height={48}
              class="absolute top-[-40px] right-[-25px] exl:hidden"
            />
            <Icon
              id="LivinRioIconExl"
              width={80}
              height={104}
              class="absolute top-[-34px] right-[-90px] hidden exl:block xxl:hidden"
            />
            <Icon
              id="LivinRioIconXxl"
              width={112}
              height={160}
              class="absolute top-[-62px] right-[-115px] hidden xxl:block"
            />
            <span
              className={`${textClass} font-crimsonpro text-[#7C6A0A] text-right text-[32px] md0:text-[40px] md0:tracking-[-1.6px] exl:tracking-[-2.56px] exl:text-[64px] font-normal italic`}
            >
              {subMainTexts[isText]}
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
            <span className="text-white font-sfprodisplay text-base md0:text-xs exl:text-base font-medium ml-3 whitespace-nowrap">
              Find your way in this content
            </span>
          </button>
        </div>

        <div class="hidden md0:block">
          <SearchContent
            items={search.items}
            isOpen={isOpen}
            handleClose={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <div class="hidden relative md0:grid grid-cols-[repeat(3,minmax(64px,160px))] grid-rows-[repeat(6,minmax(0,64px))] lg:grid-rows-[repeat(6,minmax(0,88px))] exl:grid-rows-[repeat(6,minmax(0,128px))] xxl:grid-rows-[repeat(6,minmax(0,160px))] w-full max-w-[192px] lg:max-w-[264px] exl:max-w-[387px] xxl:max-w-[490px] mr-4 mt-4 ml-auto lg:mr-6 lg:mt-6 exl:mr-8 exl:mt-8 xxl:mr-12 xxl:ml-12">
          {backgroundDesktopRightSide?.map((bg) => (
            <BackgroundHeaderImage background={bg} />
          ))}

          <Icon
            id="LivinRioBgStar"
            width={24}
            height={32}
            class="hidden md0:block lg:hidden absolute bottom-[17%] right-[27%]"
          />
          <Icon
            id="LivinRioBgStarLg"
            width={32}
            height={40}
            class="hidden lg:block exl:hidden absolute bottom-[17%] right-[27%]"
          />
          <Icon
            id="LivinRioBgStarXl"
            width={48}
            height={56}
            class="hidden exl:block xxl:hidden absolute bottom-[15%] right-[27%]"
          />
          <Icon
            id="LivinRioBgStarXl"
            width={48}
            height={56}
            class="hidden xxl:block absolute bottom-[15%] right-[30%]"
          />
        </div>
      </header>
    </>
  );
}
