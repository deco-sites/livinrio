import { useEffect } from "preact/compat";
import { useSignal } from "@preact/signals";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
export interface BackgroundImageHeader {
  /**
   * @default false
   */
  showImageBg?: boolean;
  bgImage?: ImageWidget;
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
function BackgroundHeaderImage(
  { background, preload = false }: {
    background: BackgroundHeader;
    preload?: boolean;
  },
) {
  const initialView = background.image?.intervalTime === 0 ||
    background.image?.intervalTime === null;
  const showImage = useSignal(initialView);
  useEffect(() => {
    if (
      initialView
    ) {
      return;
    }
    const imageTimer = setInterval(() => {
      showImage.value = !showImage.value;
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
          <Picture preload>
            <Source
              src={background.image?.bgImage}
              media="(min-width: 768px)"
              width={240}
              height={176}
            />
            <Source
              src={background.image?.bgImage}
              media="(max-width: 767px)"
              width={90}
              height={90}
            />
            <img
              style={{ aspectRatio: `1 / 1` }}
              className={`${
                showImage.value ? `opacity-1` : `opacity-0`
              } transition-opacity duration-200 ease-in-out w-full object-cover`}
              loading="eager"
              src={background.image?.bgImage}
              alt="background blocks"
            />
          </Picture>
        )
        : null}
    </div>
  );
}
export default BackgroundHeaderImage;
