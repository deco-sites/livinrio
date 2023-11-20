import { useEffect, useState } from "preact/compat";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

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

export default BackgroundHeaderImage;
