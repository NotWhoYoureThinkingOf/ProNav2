import { SearchOutlined } from "@material-ui/icons";
import PC2ResinButton from "./PC2ResinButton";
import resins from "../../public/resins";
import { useState } from "react";
import appliances from "../../public/appliances";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../../atoms/proCure2NavAtom";
import { proCure2BrandState } from "../../atoms/proCure2BrandState";

console.log("appliances", appliances);

const PC2Home = () => {
  const [materials, setMaterials] = useState(false);
  const [menu, setMenu] = useRecoilState(proCure2NavState);
  const [brand, setBrand] = useRecoilState(proCure2BrandState);
  return (
    <div className="ProCure2-Container-Body flex flex-col gap-6 overflow-hidden">
      <div className="ProCure2-Container-Search">
        <div className="Search-Body bg-white border-2 border-[#28B358] rounded-lg flex items-center justify-between px-4 py-3">
          <input
            className="text-[#919B94] text-[24px] outline-none"
            placeholder="Search all materials"
          />
          <SearchOutlined style={{ fontSize: "2.2rem", color: "black" }} />
        </div>
      </div>
      <div className="flex flex-col gap-6 overflow-y-scroll">
        <div className="ProCure2-Cure-Type flex">
          <div className="flex items-center w-full">
            <div
              className={`ProCure2-Home-Appliances-Button flex justify-center text-[24px] flex-[.5] font-bold py-5 rounded-l-lg bg-gradient-to-b ${
                materials
                  ? "from-[#6B6A6A] to-[#3D3D3D]"
                  : "from-[#2BC25F] to-[#1B7D3D]"
              } cursor-pointer transition hover:brightness-125`}
              onClick={() => setMaterials(false)}
            >
              <h2>Appliances</h2>
            </div>

            <div
              className={`ProCure2-Home-Appliances-Button flex justify-center text-[24px] flex-[.5] font-bold py-5 rounded-r-lg bg-gradient-to-b ${
                !materials
                  ? "from-[#6B6A6A] to-[#3D3D3D]"
                  : "from-[#2BC25F] to-[#1B7D3D]"
              } cursor-pointer transition hover:brightness-125`}
              onClick={() => setMaterials(true)}
            >
              <h2>Materials</h2>
            </div>
          </div>
        </div>
        <div className="ProCure2-Container-Recent flex flex-col gap-2">
          <h3 className="text-white opacity-50 text-[.95rem] pl-4">
            Recently Used
          </h3>
          <div className="Recent-Body flex flex-col gap-2">
            <PC2ResinButton
              resin={
                materials
                  ? "SprintRay Surgical Guide 2"
                  : "Study Model/Smile Design"
              }
            />
            <PC2ResinButton
              resin={
                materials
                  ? "SprintRay NightGuard Flex"
                  : "Aligner/Retainer Model"
              }
            />
            <PC2ResinButton
              resin={materials ? "SprintRay OnX - A1" : "Conventional Denture"}
            />
          </div>
        </div>
        <div className="ProCure2-Container-Materials flex flex-col gap-2">
          <h3 className="text-white opacity-50 text-[.95rem] pl-4">
            All Available Materials
          </h3>
          <div className="Recent-Body flex flex-col gap-2">
            {materials
              ? resins.map((resin, i) => (
                  <div
                    onClick={() => {
                      setMenu("zone");
                      setBrand(resin.brand);
                    }}
                  >
                    <PC2ResinButton resin={resin.brand} key={i} />
                  </div>
                ))
              : appliances.map((appliance, i) => (
                  <div>
                    <PC2ResinButton resin={appliance.type} key={i} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PC2Home;
