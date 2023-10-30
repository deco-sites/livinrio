export interface SectionData {
  title?: string;
  datas: {
    title?: string;
    subtitle?: string;
  }[];
}
export default function DataSection({ title, datas }: SectionData) {
  return (
    <div
      id="data"
      class="bg-[#BABD8D] rounded-[40px] flex flex-col justify-center items-center pt-[38px] pb-10 mb-[40px] md0:mt-8 md0:pt-[80px] md0:pb-[98px] md0:mb-[64px] lg:pt-[96px] lg:pb-[128px] lg:mb-[109px] exl:pt-[172px] exl:pb-[204px] exl:mb-[128px]"
    >
      <h1 class="text-[32px] text-[#252D29] font-bold font-crimsontext leading-[38px] text-center max-w-[222px] mb-[22px] tracking-[-1.28px] relative z-[1] md0:max-w-[321px] md0:mb-[48px] lg:text-[40px] lg:max-w-none lg:leading-[48px] lg:mb-[64px] exl:text-[64px] exl:leading-[76px] exl:mb-[96px]">
        <div class="absolute bg-white w-[140px] h-[34px] rotate-[-3.40deg] z-[-1] left-[-8.4px] md0:h-[38px] md0:top-[5px] lg:w-[176px] lg:h-[44px] exl:w-[270px] exl:h-[68px] xxl:w-[284px]">
        </div>
        {title}
      </h1>
      <div class="md0:grid md0:grid-cols-3 md0:justify-center gap-x-[8px] gap-y-[25px] md0:gap-y-[40px] md0:max-w-[642px] lg:max-w-[884px]  place-items-center w-full exl:max-w-[1241px] exl:gap-x-[16px] exl:gap-y-[80px] xxl:max-w-[1430px] ">
        {datas?.map((data) => (
          <div class="flex justify-center max-w-[280px] mx-auto min-h-[114px] mt-[16px] bg-white bg-opacity-[10%] rounded-lg  md0:bg-transparent md0:mt-0 md0:min-w-[208px] md0:flex md0:justify-center md0:min-h-0 lg:w-[280px] exl:max-w-none exl:w-[403px]">
            <div class="p-4">
              <h2 class="text-[32px] md0:tracking-[-1.28px] text-[#252D29] font-bold font-crimsontext leading-[38px] text-center lg:text-[44px] lg:leading-[52px] exl:text-[64px] exl:leading-[76px]">
                {data?.title}
              </h2>
              <span class="pt-2 text-[#252D29] text-[12px] font-sfpro font-normal leading-[18px] text-center block md0:pt-[5px] md0:max-w-[145px] lg:text-[14px] lg:max-w-[200px] lg:leading-[21px] lg:pt-[7px] exl:text-[16px] exl:leading-[24px] exl:max-w-[285px] exl:pt-[10px]">
                {data?.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
