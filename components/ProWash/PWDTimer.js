import { useRecoilState } from "recoil";
import { proWashFirstTimerState } from "../../atoms/proWashFirstTimerAtom";
import { proWashSecondTimerState } from "../../atoms/proWashSecondTimerAtom";

const PWDTimer = ({ time, wash, dryTime, image, Dry, onClick }) => {
  const [firstTimer, setFirstTimer] = useRecoilState(proWashFirstTimerState);
  const [secondTimer, setSecondTimer] = useRecoilState(proWashSecondTimerState);

  return (
    <div
      onClick={onClick}
      className="PWD-Timer flex items-center justify-between px-4 border-[3px] border-[#333] rounded-xl"
    >
      <div className="relative">
        <img className="w-[4.7rem] h-[4.7rem]" src={image} alt="" />
        {!Dry && (
          <div className="absolute bottom-0 right-0 flex justify-center items-center bg-black w-[3.1rem] h-[3.1rem] border-[2.5px] border-white rounded-full">
            <p className="text-[2.8rem] font-bold">{wash}</p>
          </div>
        )}
      </div>
      <div className="mr-1">
        <p className="text-[2.5rem] font-bold">
          <span>{Dry ? dryTime : time} </span>min
        </p>
      </div>
    </div>
  );
};

export default PWDTimer;
