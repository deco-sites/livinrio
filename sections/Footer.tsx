import PoweredByDeco from "deco-sites/std/components/PoweredByDeco.tsx";

export default function Footer() {
    return (
        <div class="">
            <div class="mb-8">
                <h1 class="text-[#252D29] text-2xl font-extrabold text-center mb-3">Be a part of this journey</h1>
                <p class="text-[#616161] text-center text-xs">Your service helping the community of blabla to blablabla.</p>
            </div>

            <div class="px-4">
                <form>
                    <div class="flex flex-col">
                        <label class="text-xs text-[#252D29]">Your complete name</label>
                        <input class=" max-w-[400px] py-[10px] px-[14px] border-[1px] border-solid border-[rgba(171, 171, 171, 0.40)] rounded-lg mt-[6px]" type="text" />
                    </div>
                    <div class="flex flex-col my-4">
                        <label class="text-xs text-[#252D29]">Company website</label>
                        <input class=" max-w-[400px] py-[10px] px-[14px] border-[1px] border-solid border-[rgba(171, 171, 171, 0.40)] rounded-lg mt-[6px]" type="text" />
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xs text-[#252D29]">Email</label>
                        <input class=" max-w-[400px] py-[10px] px-[14px] border-[1px] border-solid border-[rgba(171, 171, 171, 0.40)] rounded-lg mt-[6px]" type="text" />
                    </div>
                </form>

                <button class="flex items-center justify-center max-h-[40px] max-w-[400px] mt-8 text-white text-center bg-[#343F39] rounded-lg w-full py-4">Get in touch with us</button>
            </div>


            <div class="px-4 pb-3 mt-[52px] flex flex-col">
                <div class="flex items-center justify-between">
                    <span class="text-[#252D29] text-xs">Terms</span>
                    <div class="flex flex-col"><span class="text-[#252D29] text-[10px] mb-[10px]">Powered by</span> <PoweredByDeco width={55} /></div>
                </div>

                <span class="text-[#252D29] text-xs">Privacy Policy</span>

                <div class="flex items-center justify-between">
                    <span class="text-[#252D29] text-xs">Cookies</span>
                    <div class="flex flex-col"><span class="text-[#252D29] text-[10px]">© 2023 Copyright.</span> <span class="text-[#252D29] text-[10px]">All Rights Reserved.</span></div>
                </div>
            </div>
        </div>
    )
}