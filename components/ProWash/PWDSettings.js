import { Home } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";

const PWDSettings = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);

  return (
    <div className="PWD-Settings text-white p-2 h-full flex flex-col justify-between">
      {/* PWD Header */}
      <div className="PWD-Header flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("main")}
          className="flex items-center bg-[#333] p-[1.8rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <Home style={{ fontSize: "3.2rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">Settings</h3>
          </div>
        </div>
      </div>
      {/* PWD Body */}
      <div className="PWD-Body grid grid-cols-2 gap-5 pt-[1.2rem] pb-[.8rem] flex-1 items-center">
        <div className="pwdSettingsBtn" onClick={() => setMenu("about")}>
          <p>About</p>
        </div>
        <div className="pwdSettingsBtn" onClick={() => setMenu("profile")}>
          <p>Wash Profile</p>
        </div>
        <div className="pwdSettingsBtn" onClick={() => setMenu("forceDrain")}>
          <p>Force Drain</p>
        </div>
        <div className="pwdSettingsBtn" onClick={() => setMenu("transfer")}>
          <p>Transfer Liquid</p>
        </div>
      </div>
    </div>
  );
};

export default PWDSettings;
