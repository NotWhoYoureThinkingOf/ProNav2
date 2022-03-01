const ProPrinterNetwork = ({ title, Icon }) => {
  return (
    <div className="ProPrinter-Network flex items-center justify-between w-full border-b-[1px] border-[rgba(255,255,255,.1)] cursor-pointer text-white">
      <h3 className="w-full h-full py-[25px] font-bold text-[1.15rem]">
        {title}
      </h3>
      {Icon}
    </div>
  );
};

export default ProPrinterNetwork;
