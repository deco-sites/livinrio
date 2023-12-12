import Icon from "../ui/Icon.tsx";
import { Head } from "$fresh/runtime.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import SearchContent from "deco-sites/livinrio/islands/Header/SearchContent.tsx";
import ToggleSearchContent from "deco-sites/livinrio/islands/Header/ToggleSearchContent.tsx";
import SubMainText from "deco-sites/livinrio/islands/Header/SubMainText.tsx";
import BackgroundHeaderImage from "./BackgroundHeaderImage.tsx";
import { VideoWidget } from "apps/admin/widgets.ts";

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
  mobileBackgroundVideo: VideoWidget;
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

export default function Header(
  {
    mobileBackgroundVideo,
    background,
    backgroundDesktopLeftSide,
    backgroundDesktopRightSide,
    topText,
    mainText,
    subMainTexts,
    search,
  }: HeaderProps,
) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={mobileBackgroundVideo}
          as="video"
          type="video/mp4"
          media="(max-width: 743px)"
        />
      </Head>
      <div class="md0:hidden">
        <SearchContent
          items={search.items}
        />
      </div>
      <header className="bg-[#FCF9EB] md0:flex md0:pb-12 exl:pb-20 xxl:pb-3">
        <div class="w-full md0:hidden">
          {mobileBackgroundVideo && (
            <video
              controls={false}
              loop
              autoplay
              muted
              preload="auto"
              width="540"
              height="960"
              className="w-full"
              src={mobileBackgroundVideo}
            />
          )}
        </div>

        <div class="hidden relative md0:grid grid-cols-[repeat(3,minmax(64px,160px))] grid-rows-[repeat(6,minmax(0,64px))] lg:grid-rows-[repeat(6,minmax(0,88px))] exl:grid-rows-[repeat(6,minmax(0,128px))] xxl:grid-rows-[repeat(6,minmax(0,160px))] w-full max-w-[192px] lg:max-w-[264px] exl:max-w-[387px] xxl:max-w-[490px] ml-4 mt-4 lg:ml-6 lg:mt-6 exl:ml-8 exl:mt-8 xxl:mt-12 xxl:ml-12">
          {backgroundDesktopLeftSide?.map((bg, index) => (
            <BackgroundHeaderImage
              id={`bg-blocks-left-${index}`}
              background={bg}
            />
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
              <Picture>
                <Source
                  media="(max-width: 743px)"
                  src={mainText?.mobile}
                  width={234}
                  height={60}
                />
                <Source
                  media="(min-width: 744px) and (max-width: 1023px)"
                  src={mainText?.tablet}
                  width={273}
                  height={70}
                />
                <Source
                  media="(min-width: 1024px) and (max-width: 1439px)"
                  src={mainText?.tabletTwo}
                  width={364}
                  height={93}
                />
                <Source
                  media="(min-width: 1440px) and (max-width: 1919px)"
                  src={mainText?.desktop}
                  width={519}
                  height={132}
                />
                <Source
                  media="(min-width: 1920px)"
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

            <SubMainText subMainTexts={subMainTexts} />
          </div>

          <ToggleSearchContent />
        </div>

        <div class="hidden md0:block">
          <SearchContent
            items={search.items}
          />
        </div>
        <div class="hidden relative md0:grid grid-cols-[repeat(3,minmax(64px,160px))] grid-rows-[repeat(6,minmax(0,64px))] lg:grid-rows-[repeat(6,minmax(0,88px))] exl:grid-rows-[repeat(6,minmax(0,128px))] xxl:grid-rows-[repeat(6,minmax(0,160px))] w-full max-w-[192px] lg:max-w-[264px] exl:max-w-[387px] xxl:max-w-[490px] mr-4 mt-4 ml-auto lg:mr-6 lg:mt-6 exl:mr-8 exl:mt-8 xxl:mr-12 xxl:ml-12">
          {backgroundDesktopRightSide?.map((bg, index) => (
            <BackgroundHeaderImage
              id={`bg-blocks-right-${index}`}
              background={bg}
            />
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
