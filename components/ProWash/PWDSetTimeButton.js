import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";

const PWDSetTimeButton = ({
  Increase,
  Decrease,
  Timer,
  Icon,
  FirstWash,
  SecondWash,
  Dry,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center bg-[#333] rounded-xl ${
        Increase && "cursor-pointer transition hover:bg-[#555]"
      } ${Decrease && "cursor-pointer transition hover:bg-[#555]"}`}
    >
      {Increase && <KeyboardArrowUp style={{ fontSize: "9.5rem" }} />}
      {Decrease && <KeyboardArrowDown style={{ fontSize: "9.5rem" }} />}
    </div>
  );
};

export default PWDSetTimeButton;
