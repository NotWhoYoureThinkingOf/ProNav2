import React from "react";

export const ProSUnifiedBottomMultiButton = ({
  text,
  bg,
  textSize,
  Text,
  Icon,
  img,
}) => {
  return (
    <div
      className="ProSUnifiedBottomMultiButton bg-[#535455] rounded-t-md flex justify-center items-center h-[80px] absolute bottom-0 w-full cursor-pointer hover:brightness-125"
      style={{ background: bg }}
    >
      {Text && <p style={{ fontSize: textSize }}>{text}</p>}
      {Icon && <div>{img}</div>}
    </div>
  );
};
