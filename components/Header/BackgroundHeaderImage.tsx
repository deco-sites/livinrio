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

const snippet = (id: string, background: BackgroundHeader) => {
  const initialView = background.image?.intervalTime === 0 ||
    background.image?.intervalTime === null;

  const start = () => {
    if (initialView) return;

    setInterval(() => {
      const elm = document.querySelector(`#${id} img`) as HTMLElement;

      if (elm) {
        const opacity = elm.style.opacity;

        if (opacity === "1") {
          elm.style.opacity = "0";
        } else {
          elm.style.opacity = "1";
        }
      }
    }, background.image?.intervalTime || 3000);
  };

  document.readyState === "complete"
    ? start()
    : addEventListener("load", start);
};

function BackgroundHeaderImage(
  { background, preload = false, id }: {
    background: BackgroundHeader;
    preload?: boolean;
    id: string;
  },
) {
  const initialView = background.image?.intervalTime === 0 ||
    background.image?.intervalTime === null;

  return (
    <>
      <div
        id={id}
        style={{
          backgroundColor: `${background.color}`,
          borderTopLeftRadius: `${background.topLeftBorder ? `50%` : ""}`,
          borderTopRightRadius: `${background.topRightBorder ? `50%` : ""}`,
          borderBottomLeftRadius: `${background.bottomLeftBorder ? `50%` : ""}`,
          borderBottomRightRadius: `${
            background.bottomRightBorder ? `50%` : ""
          }`,
          backgroundSize: `100% 100%`,
          backgroundRepeat: `no-repeat`,
        }}
        class={`aspect-square overflow-hidden`}
      >
        {background.image?.bgImage && background.image?.showImageBg
          ? (
            <Picture>
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
                  initialView ? `opacity-1` : `opacity-0`
                } transition-opacity duration-200 ease-in-out w-full object-cover`}
                loading="eager"
                src={background.image?.bgImage}
                alt="background blocks"
              />
            </Picture>
          )
          : null}
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `(${snippet})("${id}", ${JSON.stringify(background)});`,
        }}
      />
    </>
  );
}

export default BackgroundHeaderImage;
