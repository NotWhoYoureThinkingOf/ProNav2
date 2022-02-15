import { useRecoilState } from "recoil";
import { proWashNavState } from "../../atoms/proWashNavAtom";
import { ChevronLeft } from "@material-ui/icons";
import PWDSetTimeButton from "./PWDSetTimeButton";
import PWDTimer from "./PWDTimer";
import { proWashFirstTimerState } from "../../atoms/proWashFirstTimerAtom";
import { proWashSecondTimerState } from "../../atoms/proWashSecondTimerAtom";
import { proWashDryTimerState } from "../../atoms/proWashDryTimerAtom";

const PWDSetTime = () => {
  const [menu, setMenu] = useRecoilState(proWashNavState);
  const [firstTimer, setFirstTimer] = useRecoilState(proWashFirstTimerState);
  const [secondTimer, setSecondTimer] = useRecoilState(proWashSecondTimerState);
  const [dryTimer, setDryTimer] = useRecoilState(proWashDryTimerState);

  const decreaseFirstTimer = () => {
    setFirstTimer(firstTimer - 1);
    if (firstTimer <= 1) setFirstTimer(1);
  };

  const decreaseSecondTimer = () => {
    setSecondTimer(secondTimer - 1);
    if (secondTimer <= 1) setSecondTimer(1);
  };

  const decreaseDryTimer = () => {
    setDryTimer(dryTimer - 1);
    if (dryTimer <= 1) setDryTimer(1);
  };

  return (
    <div className="text-white p-2 h-full flex flex-col justify-between">
      {/* PWD Header */}
      <div className="flex items-center gap-[2rem]">
        <div
          onClick={() => setMenu("profile")}
          className="flex items-center bg-[#333] p-[.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <ChevronLeft style={{ fontSize: "5.5rem" }} />
        </div>
        <div className="flex gap-[2.2rem] justify-center w-[65%]">
          <div className="flex items-center gap-[1.8rem] text-[2.4rem]">
            <h3 className="font-bold">Set Time</h3>
          </div>
        </div>
        <div
          onClick={() => setMenu("time")}
          className="flex items-center bg-[#333] p-[1.65rem] rounded-[10px] cursor-pointer transition hover:bg-[#555]"
        >
          <img
            className="w-[3.5rem] h-[3.5rem] select-none"
            src="/PWD/TimeSelect.svg"
            alt=""
          />
        </div>
      </div>
      {/* PWD Body */}
      <div className="grid grid-cols-3 grid-rows-3 gap-[1.15rem] py-4 h-4/5">
        <PWDSetTimeButton
          Increase
          onClick={() => setFirstTimer(firstTimer + 1)}
        />
        <PWDSetTimeButton
          Increase
          onClick={() => setSecondTimer(secondTimer + 1)}
        />
        <PWDSetTimeButton Increase onClick={() => setDryTimer(dryTimer + 1)} />
        <PWDTimer time={firstTimer} wash="1" image="/PWD/raindrops.svg" />
        <PWDTimer time={secondTimer} wash="2" image="/PWD/raindrops.svg" />
        <PWDTimer Dry dryTime={dryTimer} time="3" image="/PWD/fans.svg" />
        <PWDSetTimeButton Decrease onClick={() => decreaseFirstTimer()} />
        <PWDSetTimeButton Decrease onClick={() => decreaseSecondTimer()} />
        <PWDSetTimeButton Decrease onClick={() => decreaseDryTimer()} />
      </div>
    </div>
  );
};

export default PWDSetTime;
