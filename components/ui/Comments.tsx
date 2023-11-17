import Icon from "./Icon.tsx";

export interface Props {
  principalTitle?: string;
  sliderContent?: {
    title?: string;
    contentText?: string;
    writtenBy?: string;
  }[];
}

export default function Comments(
  { principalTitle, sliderContent }: Props,
) {
  return (
    <>
      <div
        id="comments"
        class="relative pt-[40px] pb-6 lg:py-16 exl:py-[160px]"
      >
        <h1 class="text-center max-w-[316px] exl:max-w-[570px] mx-auto font-crimsontext text-[32px] lg:text-[40px] exl:text-[64px] lg:mb-[20px] exl:mb-[44px] font-bold tracking-[-1.92px] lg:tracking-[-2.4px] leading-[38.4px] lg:leading-[48px] exl:leading-[76.8px]">
          {principalTitle}
        </h1>

        <div class="hidden exl:block absolute right-[3%] top-[-20%]">
          <Icon
            id="SliderAspasDesk"
            width={287}
            height={290}
          />
        </div>
        <div class="absolute right-[3%] top-[-14%] hidden md0:block exl:hidden">
          <Icon
            id="SliderAspasMd"
            width={148}
            height={150}
          />
        </div>
        <div class="absolute right-[3%] top-[-6%] md0:hidden">
          <Icon
            id="SliderAspasMobile"
            width={63}
            height={63}
          />
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {sliderContent?.map((props, index) => (
              <div class="swiper-slide min-w-[292px] max-w-[292px] md0:min-w-[424px] md0:max-w-[424px] lg:min-w-[566px] lg:max-w-[566px]">
                <div
                  style="box-shadow:0px 0px 12px 0px rgba(0, 0, 0, 0.20);"
                  class="min-h-[145px] md0:min-h-[210px] lg:min-h-[281px] bg-white rounded-lg md0:rounded-2xl shadow-xl flex flex-col justify-center md0:justify-normal px-3 py-4 md0:p-6 lg:px-10 lg:py-10"
                >
                  <span class="font-sfprodisplay font-medium text-xs lg:text-base text-[#252D29] exl:text-black exl:mb-1">
                    {props.title}
                  </span>
                  <div class="min-h-[70px] md0:min-h-[115px]">
                    <span class="font-sfprodisplay font-normal text-xs md0:text-[10.5px] md0:leading-[18.9px] lg:leading-[25.2px] lg:text-sm my-1 md0:my-2 lg:mb-4 text-[#616161] webkitzada">
                      {props.contentText}
                    </span>
                  </div>
                  <span class="font-sfprodisplay text-xs font-medium text-[#EB6424] exl:mt-3">
                    {props.writtenBy}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div class="relative flex justify-center items-center gap-3 mt-7 md0:mt-8">
            <button class="comments-button-prev">
              <Icon id="ChevronLeftSliderMobile" width={16} height={16} />
            </button>
            <div class="swiper-pagination"></div>
            <button class="comments-button-next">
              <Icon id="ChevronRightSliderMobile" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
          const handleLoadCss = (styles) => {
            const style = document.createElement("link");
            style.href = styles;
            style.rel = "stylesheet";
            document.head.appendChild(style);
          };

        const handleLoadScript = (src, onLoadCallback) => {
          const script = document.createElement("script");
          script.src = src;
          script.defer = true;
        
          script.onload = onLoadCallback;
        
          document.head.appendChild(script);
        }

        const loadSwiperScript = () => {
          handleLoadCss("/lib/swiper-bundle.min.css");

          var swiper = new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide: 2,
            navigation: {
              nextEl: ".comments-button-next",
              prevEl: ".comments-button-prev"
            },
            coverflowEffect: {
              rotate: 0,
              stretch: 45,
              depth: 60,
              modifier: 5,
              scale: 1,
              initialSlide: 3,
              slideShadows: false
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            breakpoints: {
              1024: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 70,
                  depth: 80,
                  modifier: 5,
                  scale: 1,
                  initialSlide: 3,
                  slideShadows: false,
                }
              },
              744: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 60,
                  depth: 50,
                  modifier: 5,
                  scale: 1,
                  initialSlide: 3,
                  slideShadows: false,
                }
              }
            }
          });
        };
        
        setTimeout(() => {
          handleLoadScript("/lib/swiper-bundle.min.js", loadSwiperScript);
        }, 2000);
      `,
        }}
      >
      </script>
    </>
  );
}
