import React, { Fragment, useState } from "react";

import CurrencyField from "../CurrencyField";
import { useApp } from "../../context/app";

import { IoSwapVertical } from "react-icons/io5";

function CurrencyConverter({ values, onChange }) {
  const { rate } = useApp();
  const [amountToSend, setAmountToSend] = useState(0);
  const [amountToReceive, setAmountToReceive] = useState(0);

  const [currency1, setCurrency1] = useState(0);
  const [currency2, setCurrency2] = useState(1);
  const [swap, setSwap] = useState(false);

  const updateCurrency = () => {
    setAmountToSend(0);
    setAmountToReceive(0);

    swapCurrency();
  };

  const swapCurrency = () => {
    if (!swap) {
      setSwap(true);
      setCurrency2(0);
      setCurrency1(1);
    } else {
      setSwap(false);
      setCurrency1(0);
      setCurrency2(1);
    }
  };

  const swapState = () => {
    const aTemp = amountToSend;
    const bTemp = amountToReceive;
    setAmountToSend(bTemp);
    setAmountToReceive(aTemp);
  };

  const handleAmountToSend = (e) => {
    let receive;

    const input = e.target.value.replace(/[^0-9 ]/g, "");
    setAmountToSend(+input);

    if (!swap) {
      // Dollar to Naira conversion
      receive = +input * (rate.iHaveDollarsIneedNaira || 0);
    } else {
      // Naira to Dollar conversion
      receive = +input / (rate.iHaveNairaIneedDollars || 0);
    }

    setAmountToReceive(receive.toFixed(2));
  };

  const handleAmountToReceive = (e) => {
    let send;
    const input = e.target.value.replace(/[^0-9 ]/g, "");
    setAmountToReceive(+input);

    if (swap) {
      // Dollar to Naira conversion
      send = (rate.iHaveDollarsIneedNaira || 0) * +input;
    } else {
      // Naira to Dollar conversion
      send = +input / (rate.iHaveNairaIneedDollars || 0);
    }

    setAmountToSend(send.toFixed(2));
  };

  return (
    <div className="currency__wrapper">
      <CurrencyField
        label="Amount you send"
        // type="number"
        name="amountToSend"
        id="amountToSend"
        placeholder="0"
        value={amountToSend}
        onChange={handleAmountToSend}
        value2={currency1}
        onSelectChange={updateCurrency}
      />

      <div className="currency__flex">
        <div className="currency__rate">
          <span>{`1 USD = ${rate?.iHaveDollarsIneedNaira || 0} NGN`}</span>
        </div>

        <div
          className="currency__swap"
          onClick={() => {
            swapCurrency();
            swapState();
          }}
        >
          <IoSwapVertical size={24} color="#04396d" />
        </div>
      </div>

      <CurrencyField
        label="Amount you receive"
        name="amountToReceive"
        id="amountToReceive"
        placeholder="0"
        value={amountToReceive}
        onChange={handleAmountToReceive}
        value2={currency2}
        onSelectChange={updateCurrency}
      />
    </div>
  );
}

export default CurrencyConverter;
