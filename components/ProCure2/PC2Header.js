import {
  HomeOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
  Wifi,
} from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proCure2NavState } from "../../atoms/proCure2NavAtom";
import { proCure2LanguageScreenState } from "../../atoms/proCure2LanguageScreenAtom";

const PC2Header = () => {
  const [menu, setMenu] = useRecoilState(proCure2NavState);
  const [languageScreen, setLanguageScreen] = useRecoilState(
    proCure2LanguageScreenState
  );

  return (
    !languageScreen && (
      <div className="ProCure2-Header flex gap-2">
        <div
          className="flex-[0.25] flex justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] py-3 rounded-b-lg cursor-pointer transition hover:brightness-150"
          onClick={() => setMenu("main")}
        >
          <HomeOutlined style={{ fontSize: "3rem" }} />
        </div>
        <div
          className="flex-[0.25] flex justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] py-3 rounded-b-lg cursor-pointer transition hover:brightness-150"
          onClick={() => setMenu("settings")}
        >
          <SettingsOutlined style={{ fontSize: "3rem" }} />
        </div>
        <div
          className="flex-[0.25] flex justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] py-3 rounded-b-lg cursor-pointer transition hover:brightness-150"
          onClick={() => setMenu("wifi")}
        >
          <Wifi style={{ fontSize: "3rem" }} />
        </div>
        <div
          className="flex-[0.25] flex justify-center bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] py-3 rounded-b-lg cursor-pointer transition hover:brightness-150"
          onClick={() => setMenu("account")}
        >
          <PersonOutlineOutlined style={{ fontSize: "3rem" }} />
        </div>
      </div>
    )
  );
};

export default PC2Header;
