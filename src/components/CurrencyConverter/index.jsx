import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import currency_flag_1 from "../../assets/ng-flag.svg";
import currency_flag_2 from "../../assets/us-flag.svg";
import CurrencyField from "../CurrencyField";

import { headers } from "../../utils/headers";

function CurrencyConverter({ values, onChange }) {
  const [amountToSend, setAmountToSend] = useState(0);
  const [amountToReceive, setAmountToReceive] = useState(0);
  const [rate, setRate] = useState();

  const handleAmountToSend = (e) => {
    setAmountToSend(e.target.value);

    const receive = e.target.value / rate.iHaveDollarsIneedNaira;
    setAmountToReceive(receive.toFixed(1));
  };

  const handleAmountToReceive = (e) => {
    setAmountToSend(e.target.value);
  };

  useEffect(() => {
    const getRate = async () => {
      const {
        data: { rate },
      } = await axios.get("https://vitalswap.com/test/api_v2/utils/webHome", {
        headers,
      });
      console.log(rate);

      setRate(rate);
    };

    getRate();
  }, []);

  return (
    <div className="currency__wrapper">
      <CurrencyField
        label="Amount you send"
        type="number"
        name="amountToSend"
        id="amountToSend"
        placeholder="0"
        currency={"NGN"}
        value={amountToSend}
        onChange={handleAmountToSend}
        countryFlag={currency_flag_1}
      />

      <div className="currency__rate">
        <span>1 NGN = 0.002 USD</span>
      </div>

      <CurrencyField
        label="Amount you receive"
        type="number"
        name="amountToReceive"
        id="amountToReceive"
        placeholder="0"
        currency={"USD"}
        value={amountToReceive}
        onChange={handleAmountToReceive}
        countryFlag={currency_flag_2}
      />
    </div>
  );
}

export default CurrencyConverter;
