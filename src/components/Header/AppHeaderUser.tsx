import React from "react";
import AddressDropdown from "../AddressDropdown/AddressDropdown";
// import ConnectWalletButton from "../Common/ConnectWalletButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Header.css";
import { isHomeSite, getAccountUrl } from "lib/legacy";
import cx from "classnames";
import { Trans } from "@lingui/macro";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import LanguagePopupHome from "../NetworkDropdown/LanguagePopupHome";
import { ARBITRUM, FTM_TESTNET, U2U_TESTNET, getChainName } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
import { getIcon } from "config/icons";

// type Props = {
//   openSettings: () => void;
//   small?: boolean;
//   setWalletModalVisible: (visible: boolean) => void;
//   disconnectAccountAndCloseSettings: () => void;
//   redirectPopupTimestamp: number;
//   showRedirectModal: (to: string) => void;
// };

type Props = {
  openSettings: () => void;
  small?: boolean;
  disconnectAccountAndCloseSettings: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

const NETWORK_OPTIONS = [
  {
    label: getChainName(U2U_TESTNET),
    value: U2U_TESTNET,
    icon: getIcon(U2U_TESTNET, "network"),
    color: "#E841424D",
  },
];

export function AppHeaderUser({
  openSettings,
  small,
  disconnectAccountAndCloseSettings,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const { chainId } = useChainId();
  // const { active, account } = useWeb3React();
  const showConnectionOptions = !isHomeSite();

  const onNetworkSelect = (option: any) => {
    if (option.value === chainId) {
      return;
    }
    return switchNetwork(option.value, true);
  };

  const selectorLabel = getChainName(chainId);

  return (
    <div className="App-header-user style-button-connect">
      <NetworkDropdown
        small={small}
        networkOptions={NETWORK_OPTIONS}
        selectorLabel={selectorLabel}
        onNetworkSelect={onNetworkSelect}
        openSettings={openSettings}
      />
      <ConnectButton />
    </div>
  );
}
