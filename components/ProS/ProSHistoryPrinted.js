import {
  ChevronRight,
  DeleteOutlined,
  GroupOutlined,
  InvertColors,
  Layers,
  LineWeight,
  PermIdentityOutlined,
  TimerOutlined,
} from "@material-ui/icons";
import React from "react";
import { useRecoilState } from "recoil";
import { proSNavState } from "../../atoms/proSNavAtom";

export const ProSHistoryPrinted = ({
  RWC,
  RWD,
  image,
  spr,
  date,
  treatment,
  user_email,
  resin,
  usage,
  thickness,
  time,
  First,
  Last,
}) => {
  const [menu, setMenu] = useRecoilState(proSNavState);
  return (
    <div
      className={`ProS-History-Printed flex flex-col relative pt-0 ${
        First && "pt-0"
      }`}
    >
      {RWC && (
        <img
          src="/RWC-icon.png"
          alt=""
          className="w-[58px] h-[37px] absolute top-2 right-0"
        />
      )}
      <div className="ProS-History-Printed-Details flex w-full">
        <img
          src={image}
          alt="history_image"
          className="rotate-90 w-[250px] h-[274px] object-contain"
        ></img>
        <div className="ProS-History-Printed-Details-Text w-full">
          <div className="ProS-History-Printed-Details-Top flex flex-col">
            <h3 className="text-[40px] font-bold">{spr}</h3>
            <div
              className={`ProS-History-Printed-Details-RW flex items-center gap-10 ${
                RWC && "-translate-y-2"
              }`}
            >
              {RWD && <p className="text-[18px]">RayWare - {date}</p>}
              {RWC && (
                <p className="text-[18px] text-[#4FEAFF]">
                  {treatment} from Cloud Design - {date}
                </p>
              )}
              {RWC && (
                <div className="flex items-center text-[#4FEAFF]">
                  <PermIdentityOutlined style={{ fontSize: "3rem" }} />{" "}
                  <p className="text-[20px]">{user_email}</p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`ProS-History-Printed-Details-Bottom flex flex-col ${
              RWC ? "mt-6" : "mt-12"
            }`}
          >
            <div className="flex gap-8 -translate-x-4">
              <div className="flex text-[#BABABA] text-[24px] items-center gap-2">
                <InvertColors style={{ fontSize: "2.8rem" }} /> <p>{resin}</p> -{" "}
                {usage} mL
              </div>
              <div className="flex text-[#BABABA] text-[24px] items-center gap-2">
                <LineWeight style={{ fontSize: "2.8rem" }} /> {thickness} µm
              </div>
              <div className="flex text-[#BABABA] text-[24px] items-center gap-2">
                <TimerOutlined style={{ fontSize: "2.8rem" }} /> {time}
              </div>
            </div>
            <div className="ProS-History-Printed-Buttons flex mt-4 gap-6 w-full">
              {RWC && (
                <div className="ProS-History-Printed-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] rounded-lg tracking-[.02em] cursor-pointer w-[98%] flex transition items-center hover:brightness-125">
                  <GroupOutlined
                    style={{
                      fontSize: "3rem",
                      marginLeft: "1.2rem",
                      marginRight: "1.2rem",
                    }}
                  />
                  <p className="text-[24px] py-4 flex-1">Patient List</p>
                  <ChevronRight
                    style={{
                      fontSize: "3rem",
                      color: "#BABABA",
                      translate: "-.5rem",
                    }}
                  />
                </div>
              )}
              <div
                className="ProS-History-Printed-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center rounded-lg tracking-[.02em] cursor-pointer w-[98%] flex transition items-center hover:brightness-125"
                onClick={() => setMenu("heating")}
              >
                <img
                  src="/Printer-icon.svg"
                  alt=""
                  className="w-[30.94px] h-[40.04px] left-[10%] ml-[2rem] mr-[1.5rem]"
                />
                <p className="text-[24px] py-4">Print</p>
              </div>
              <div className="ProS-History-Printed-Button relative bg-gradient-to-b from-[#6B6A6A] to-[#3D3D3D] text-center rounded-lg tracking-[.02em] cursor-pointer w-[98%] flex transition items-center hover:brightness-125">
                <DeleteOutlined
                  style={{
                    left: "10%",
                    fontSize: "3.2rem",
                    marginLeft: "1.4rem",
                    marginRight: "1rem",
                  }}
                />
                <p className="text-[24px] py-4">Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!Last && (
        <div className="ProS-History-Printed-Line border-b-[1px] border-white w-full opacity-50 mt-8 mb-6"></div>
      )}
    </div>
  );
};
