export interface SectionData {
  title?: string;
  datas: {
    title?: string;
    subtitle?: string;
  }[];
}
export default function DataSection({ title, datas }: SectionData) {
  return (
    <div class="bg-[#BABD8D] rounded-[40px] flex flex-col justify-center items-center pt-[38px] pb-10 md0:pt-[66px] md0:pb-[82px] lg:pt-[96px]">
      <h1 class="text-[32px] text-[#252D29] font-bold font-crimsontext leading-[38px] text-center max-w-[222px] mb-[22px] tracking-[-1.28px] relative z-[1] md0:max-w-[321px] md0:mb-[33px] lg:text-[40px] lg:max-w-none lg:leading-[48px] lg:mb-[64px]">
        <div class="absolute bg-white w-[140px] h-[34px] rotate-[-3.40deg] z-[-1] left-[-8.4px] md0:h-[38px] md0:top-[5px] lg:w-[176px] lg:h-[44px]">
        </div>
        {title}
      </h1>
      <div class="md0:grid md0:grid-cols-3 md0:justify-center gap-x-[8px] gap-y-[25px] max-w-[882px] place-items-center w-full">
        {datas?.map((data) => (
          <div class="flex justify-center max-w-[280px] mx-auto min-h-[114px] mt-[16px] bg-white bg-opacity-[10%] rounded-lg  md0:bg-transparent md0:mt-0 md0:min-w-[208px] md0:flex md0:justify-center md0:min-h-0 lg:w-[280px]">
            <div class="p-4">
              <h2 class="text-[32px] text-[#252D29] font-bold font-crimsontext leading-[38px] text-center lg:text-[44px] lg:leading-[52px]">
                {data?.title}
              </h2>
              <span class="pt-2 text-[#252D29] text-[12px] font-sfpro font-normal leading-[15px] text-center block md0:pt-[5px] max-w-[145px] lg:text-[14px] lg:max-w-[200px] lg:leading-[21px] lg:pt-[7px]">
                {data?.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
