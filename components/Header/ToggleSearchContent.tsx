import Icon from "../ui/Icon.tsx";
import { useUI } from "deco-sites/livinrio/sdk/useUI.ts";

function ToggleSearchContent() {
  const { displaySearchContent } = useUI();

  return (
    <button
      onClick={() => {
        displaySearchContent.value = !displaySearchContent.value;
      }}
      style={{ boxShadow: "0px 0px 11.38419px 0px rgba(0, 0, 0, 0.10)" }}
      className="bg-[#413703] rounded-lg exl:rounded-2xl h-[48px] exl:h-[72px] flex items-center px-6 exl:px-8"
    >
      <Icon
        id="FindIcon"
        width={17}
        height={17}
      />
      <span className="text-white font-sfprodisplay text-base md0:text-xs exl:text-base font-medium ml-3 whitespace-nowrap">
        Find your way in this content
      </span>
    </button>
  );
}

export default ToggleSearchContent;
