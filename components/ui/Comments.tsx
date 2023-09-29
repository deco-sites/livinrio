import SliderJS from "./SliderJS.tsx";
import Slider from "./Slider.tsx";
import Icon from "./Icon.tsx";
import { useId } from "../../sdk/useId.ts"

export interface Props {
    principalTitle?: string;
    sliderContent?: {
        title?: string;
        contentText?: string;
        writtenBy?: string;
    }[]
    /**
     * @description Check this option when this banner is the biggest image on the screen for image optimizations
     */
    preload?: boolean;
    /**
     * @title Autoplay interval
     * @description time (in seconds) to start the carousel autoplay
     */
    interval?: number;
}


function Dots({ sliderContent, interval = 0 }: Props) {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            @property --dot-progress {
              syntax: '<percentage>';
              inherits: false;
              initial-value: 0%;
            }
            `,
                }}
            />
            <ul class="carousel justify-center col-span-full gap-[3px] z-10 row-start-4">
                {sliderContent?.map((_, index) => (
                    <li class="carousel-item">
                        <Slider.Dot index={index}>
                            <div class="py-5">
                                <div
                                    class="w-[4px] h-[4px] rounded-[50%] bg-[#616161] group-disabled:bg-[#94B138] group-disabled:w-[7px] group-disabled:h-[7px] mx-[3px]"
                                    style={{ animationDuration: `${interval}s` }}
                                />
                            </div>
                        </Slider.Dot>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default function Comments({ principalTitle, sliderContent, interval }: Props) {
    const id = useId();

    return (
        <><div class="pt-[40px] pb-[80px]">
            <h1 class="text-center max-w-[316px] mx-auto font-crimsontext text-[32px] font-bold tracking-[-1.92px]">{principalTitle}</h1>
            <div
                id={id}
                class="relative grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
            >
                <Slider class="carousel carousel-center py-2 w-full col-span-full row-span-full gap-6">
                    {sliderContent?.map((props, index) => (
                        <Slider.Item index={index} class="carousel-item w-full flex justify-center">
                            <div style="box-shadow:0px 0px 12px 0px rgba(0, 0, 0, 0.20);" class="bg-white rounded-lg shadow-xl flex flex-col justify-center min-w-[292px] max-w-[292px] px-3 py-4">
                                <span class="font-sfprodisplay text-xs text-[#252D29]">{props.title}</span>
                                <span style="display:-webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp:3;overflow:hidden" class="font-sfprodisplay text-xs my-1 text-[#616161]">{props.contentText}</span>
                                <span class="font-sfprodisplay text-xs font-medium text-[#EB6424]">{props.writtenBy}</span>
                            </div>
                        </Slider.Item>
                    ))}
                </Slider>

                <div class="absolute bottom-[-50px] left-[50%] translate-x-[-50%] ">
                    <div class="relative">
                        <div class="absolute top-[15px] left-[-20px]">
                            <Slider.PrevButton class="">
                                <Icon
                                    class="text-base-100"
                                    size={16}
                                    id="ChevronLeftSliderMobile"
                                    strokeWidth={3}
                                />
                            </Slider.PrevButton>
                        </div>
                        <Dots sliderContent={sliderContent} interval={interval} />
                        <div class="absolute top-[15px] right-[-20px]">
                            <Slider.NextButton class="">
                                <Icon
                                    class="text-base-100"
                                    size={16}
                                    id="ChevronRightSliderMobile"
                                    strokeWidth={3}
                                />
                            </Slider.NextButton>
                        </div>
                    </div>

                </div>

                <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
            </div></div></>
    );
}