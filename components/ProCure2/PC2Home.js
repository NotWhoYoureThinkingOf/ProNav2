import { SearchOutlined } from "@material-ui/icons";
import PC2ResinButton from "./PC2ResinButton";
import resins from "../../public/resins";

const PC2Home = () => {
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
        <div className="ProCure2-Container-Recent flex flex-col gap-2">
          <h3 className="text-white opacity-50 text-[.95rem] pl-4">
            Recently Used
          </h3>
          <div className="Recent-Body flex flex-col gap-2">
            <PC2ResinButton resin="SprintRay Surgical Guide 2" />
            <PC2ResinButton resin="SprintRay NightGuard Flex" />
            <PC2ResinButton resin="SprintRay OnX - A1" />
          </div>
        </div>
        <div className="ProCure2-Container-Materials flex flex-col gap-2">
          <h3 className="text-white opacity-50 text-[.95rem] pl-4">
            All Available materials
          </h3>
          <div className="Recent-Body flex flex-col gap-2">
            {resins.map((resin, i) => (
              <PC2ResinButton resin={resin.brand} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PC2Home;
