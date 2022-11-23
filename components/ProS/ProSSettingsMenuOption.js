import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { proSSettingsNavState } from "../../atoms/ProSSettingsNavAtom";

const ProSSettingsMenuOption = ({ Icon, submenu, img, Custom }) => {
  const [settingsMenu, setSettingsMenu] = useRecoilState(proSSettingsNavState);
  const selectedMenu = useRef(null);
  const [menuText, setMenuText] = useState("");

  useEffect(() => {
    setMenuText(selectedMenu.current.innerText);
  }, [settingsMenu]);

  console.log("settingsMenu", settingsMenu);

  return (
    <div
      className={`flex items-center gap-4 border-2 border-[#555555] cursor-pointer w-full pr-1 ${
        menuText !== settingsMenu && "border-opacity-0 opacity-40"
      } rounded-lg h-[78px] overflow-hidden w-[90%]`}
      onClick={() => setSettingsMenu(selectedMenu.current.innerText)}
    >
      <div
        className={`flex-[.05] bg-gradient-to-b from-[#2BC25F] to-[#1B7D3D] h-full w-full ${
          menuText !== settingsMenu ? "invisible" : "visible"
        } `}
      ></div>
      {!Custom ? (
        <div className="flex-[.2] flex justify-center">{Icon}</div>
      ) : (
        <div className="flex-[.2] flex justify-center">
          <img src={img} />
        </div>
      )}

      <p
        ref={selectedMenu}
        className={`flex-[.75] ${
          submenu !== "Business Hours" ? "text-[30px]" : "text-[28px]"
        } font-bold `}
      >
        {submenu}
      </p>
    </div>
  );
};

export default ProSSettingsMenuOption;
