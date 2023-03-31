import {Fragment} from "react";
import {WalletSelectorContextProvider} from "@/contexts/WalletSelectorContext";
import Content from "@/components/Content";
import "@near-wallet-selector/modal-ui/styles.css";

export default function Home() {
  return (
      <Fragment>
        <div className="title-container">
          <h1>NEAR Guest Book</h1>
        </div>
        <WalletSelectorContextProvider>
          <Content />
        </WalletSelectorContextProvider>
      </Fragment>
  )
}
