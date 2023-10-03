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
      <div id="comments" class="relative pt-[40px] pb-[80px]">
        <h1 class="text-center max-w-[316px] mx-auto font-crimsontext text-[32px] font-bold tracking-[-1.92px]">
          {principalTitle}
        </h1>

        <div class="hidden lg:block absolute right-[3%] top-[-20%]"><Icon
          id="SliderAspasDesk"
          width={287}
          height={290}
        />
        </div>
        <div class="absolute right-[3%] top-[-6%] lg:hidden"><Icon
          id="SliderAspasMobile"
          width={63}
          height={63}
        />
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {sliderContent?.map((props, index) => (
              <div
                class="swiper-slide min-w-[292px] max-w-[292px] lg:min-w-[566px] lg:max-w-[566px]"
              >
                <div style="box-shadow:0px 0px 12px 0px rgba(0, 0, 0, 0.20);" class="min-h-[145px] lg:min-h-[281px] bg-white rounded-lg shadow-xl flex flex-col justify-center px-3 py-4 exl:px-10">
                  <span class="font-sfprodisplay font-medium text-xs exl:text-base text-[#252D29] exl:text-black exl:mb-1">
                    {props.title}
                  </span>
                  <span
                    class="font-sfprodisplay text-xs exl:text-sm my-1 text-[#616161] webkitzada"
                  >
                    {props.contentText}
                  </span>
                  <span class="font-sfprodisplay text-xs font-medium text-[#EB6424] exl:mt-3">
                    {props.writtenBy}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div class="relative flex justify-center items-center gap-3 mt-7">
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
      <script dangerouslySetInnerHTML={{
        __html: `
        var swiper = new Swiper(".swiper-container", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          centeredSlides: true,
          initialSlide: 2,
          navigation: {
            nextEl: ".comments-button-next",
            prevEl: ".comments-button-prev"
          },
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 10,
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
                stretch: 60,
                depth: 80,
                modifier: 5,
                scale: 1,
                initialSlide: 3,
                slideShadows: false,
              }
            }
          }
        });        
      `}}></script>
    </>
  );
}
