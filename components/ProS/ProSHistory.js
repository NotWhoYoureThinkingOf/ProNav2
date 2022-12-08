import React from "react";
import { ProSHistoryPrinted } from "./ProSHistoryPrinted";

const ProSHistory = () => {
  return (
    <div className="ProS-History flex justify-center">
      <div className="ProS-History-Container w-full px-6 h-[43rem] overflow-y-scroll flex flex-col pt-4 mt-8 mb-8 pb-12">
        <ProSHistoryPrinted
          RWD
          image="/printer-stl-image.png"
          spr="Denture Base Upper"
          date="Wednesday, December 02, 2022"
          user_email="user@email.com"
          resin="SprintRay Die and Model 2 Gray"
          thickness="100"
          time="2 Hr 36 Mins"
          usage="150"
          First
        />
        <ProSHistoryPrinted
          RWC
          treatment="Occlusal Guard"
          image="/printer-stl-image.png"
          spr="Occlusal Guard"
          date="Wednesday, December 02, 2022"
          user_email="user@email.com"
          resin="SprintRay OnX"
          thickness="100"
          time="57 Mins"
          usage="150"
        />
        <ProSHistoryPrinted
          RWD
          image="/printer-stl-image.png"
          spr="Patient 2 Lower"
          date="Wednesday, December 02, 2022"
          user_email="user@email.com"
          resin="KeyStone KeySplint Soft"
          thickness="100"
          time="1 Hr 14 Mins"
          usage="150"
          Last
        />
      </div>
    </div>
  );
};

export default ProSHistory;
