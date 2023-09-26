export interface SectionData {
  title?: string;
  datas: {
    title?: string;
    subtitle?: string;
  }[];
}
export default function DataSection({ title, datas }: SectionData) {
  return (
    <div class="bg-[#BABD8D] rounded-[40px] flex flex-col justify-center items-center">
      <h1 class="text-[32px] text-[#252D29] font-bold font-crimsontext leading-[38px] text-center max-w-[222px] mt-[38px] mb-[38px] tracking-[-1.28px] relative z-[1]">
        <div class="absolute bg-white w-[100%] max-w-[140px] h-[34px] rotate-[-3.40deg] z-[-1] left-[-8.4px]">
        </div>
        {title}
      </h1>
      {datas?.map((data) => (
        <div class="mt-[16px] bg-white bg-opacity-[10%] rounded-lg last:mb-[100px]">
          <div class="p-4">
            <h2 class="text-[32px] text-[#252D29] font-bold font-crimsontext leading-[38px] text-center">
              {data?.title}
            </h2>
            <span class="pt-2 text-[#252D29] text-[10px] font-sfpro font-normal leading-[15px] text-center block">
              {data?.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
