import ProPrinterNetwork from "./ProPrinterNetwork";
import {
  ChevronRight,
  ChevronLeft,
  SignalWifi0Bar,
  SignalWifi4Bar,
  SignalWifi3Bar,
  SignalWifi2Bar,
  SignalWifi1Bar,
} from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { proPrinterNetworkNameState } from "../../atoms/proPrinterNetworkName";
import { proPrinterSettingsNavState } from "../../atoms/proPrinterSettingsNavAtom";

const ProPrinterNetworkList = () => {
  const [networkName, setNetworkName] = useRecoilState(
    proPrinterNetworkNameState
  );
  const [settingsScreen, setSettingsScreen] = useRecoilState(
    proPrinterSettingsNavState
  );

  const setWifiNetwork = (e) => {
    setNetworkName(e.target.innerText);
    setSettingsScreen("settings");
  };

  return (
    <div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"ALL_SMILES_PRIVATE"}
          Icon={<SignalWifi4Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"ALL_SMILES_GUEST"}
          Icon={<SignalWifi4Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"Drop It Like It's Hotspot"}
          Icon={<SignalWifi3Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"That's What She SSID"}
          Icon={<SignalWifi3Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"A LANister Never Forgets"}
          Icon={<SignalWifi2Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"It Burns When IP"}
          Icon={<SignalWifi2Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"Go Go Router Rangers"}
          Icon={<SignalWifi1Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"New England Clam Router"}
          Icon={<SignalWifi0Bar />}
        />
      </div>
      <div className="" onClick={(e) => setWifiNetwork(e)}>
        <ProPrinterNetwork
          title={"I Now Pronounce You Man and Wifi"}
          Icon={<SignalWifi0Bar />}
        />
      </div>
    </div>
  );
};

export default ProPrinterNetworkList;
