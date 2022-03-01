const ProPrinterSettingOption = ({ title, selectedOption, Icon }) => {
  return (
    <div className="p95Main__settingOption flex items-center justify-between py-5 border-b border-opacity-10 cursor-pointer">
      <h4 className="text-[1.2rem] font-normal">{title}</h4>
      <div className="flex items-center gap-4">
        <p className="text-[1.2rem] font-bold">{selectedOption}</p>
        {Icon}
      </div>
    </div>
  );
};

export default ProPrinterSettingOption;
