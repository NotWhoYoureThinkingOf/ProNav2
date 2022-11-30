import React from "react";
import { useRecoilState } from "recoil";
import { proSResinBrand } from "../../atoms/proSResinBrand";

export const ProSMaterialBrand = ({ logo, brand }) => {
  const [resinBrand, setResinBrand] = useRecoilState(proSResinBrand);

  return (
    <div className="ProS-Material-Brand bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] h-[90px] w-[152px] flex justify-center items-center rounded-lg cursor-pointer transition hover:brightness-125">
      <img
        src={logo}
        alt="Resin Brand"
        className="max-w-[130px] max-h-[70px]"
      />
    </div>
  );
};
