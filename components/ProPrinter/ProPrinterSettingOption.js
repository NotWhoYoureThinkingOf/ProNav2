import Link from "next/link";

const ProPrinterSettingOption = ({ title, selectedOption, Icon }) => {
  return (
    <Link href="/proPrinter">
      <a className="p95Main__setting flex items-center justify-between py-5 border-b border-opacity-10">
        <h4 className="text-[1.2rem] font-bold">{title}</h4>
        <div className="flex items-center gap-[2px]">
          <p className="text-[1.15rem] font-bold">{selectedOption}</p>
          {Icon}
        </div>
      </a>
    </Link>
  );
};

export default ProPrinterSettingOption;
