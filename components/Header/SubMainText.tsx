import { useEffect, useState } from "preact/compat";

export interface SubMainTextProps {
  subMainTexts: string[];
}

function SubMainText({ subMainTexts }: SubMainTextProps) {
  const [isText, setIsText] = useState(0);
  const [textClass, setTextClass] = useState("fade-in");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (subMainTexts.length > 1) {
        if (isText === subMainTexts.length - 1) {
          clearTimeout(timer);
          return;
        }
        setTextClass("fade-out");
      }
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [isText]);

  useEffect(() => {
    if (textClass === "fade-out") {
      setTimeout(() => {
        setTextClass("fade-in");
        setIsText((prevText) => {
          return prevText + 1;
        });
      }, 150);
    }
  }, [textClass]);

  return (
    <span
      className={`${textClass} font-crimsonpro text-[#7C6A0A] text-right text-[32px] md0:text-[40px] md0:tracking-[-1.6px] exl:tracking-[-2.56px] exl:text-[64px] font-normal italic`}
    >
      {subMainTexts[isText]}
    </span>
  );
}

export default SubMainText;
