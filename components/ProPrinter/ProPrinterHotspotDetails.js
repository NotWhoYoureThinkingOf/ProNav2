import { VpnKey, WifiTethering } from "@material-ui/icons";

const ProPrinterHotspotDetails = () => {
  return (
    <div className="p95Main__hotspotDetails flex flex-col pt-[20px] pb-[10px]">
      <p>
        Hotspot allows for direct connection to the printer through Wi-Fi
        without an intermediary wireless router. Enable this feature if you do
        not have a local Wi-Fi connection or if you are having problems
        connection to your printer through your Wi-Fi network. While Hotspot is
        turned on, your printer will not be able to connect to a Wi-Fi network.
      </p>
      <div className="p95Main__hotspotInfo flex flex-col pt-[20px] pb-[10px]">
        <div className="p95Main__hotspotName flex items-center mb-[2px] text-[1.1rem] font-medium">
          <WifiTethering style={{ color: "#5cb85c" }} />
          <p className="hotspotName flex-1 ml-[15px]">Hotspot Name</p>
          <p className="hotspotSN">P95-12A3B45C</p>
        </div>
        <div className="p95Main__hotspotPassword flex items-center text-[1.1rem] font-medium">
          <VpnKey />
          <p className="hotspotPassword flex-1 ml-[15px]">Hotspot Password</p>
          <p className="hotspotPW">sprintray</p>
        </div>
      </div>
    </div>
  );
};

export default ProPrinterHotspotDetails;
