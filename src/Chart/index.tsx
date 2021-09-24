import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Chart } from "react-google-charts";
import { options } from "./options";
import axios from "axios";

const CryptoChart = () => {
  const [dataCandles, setDataCandles] = useState([]);
  useEffect(() => {
    getCandles();
  }, []);

  const getCandles = async () => {
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/binance/candles?quoteTradingSymbol=BTC&baseTradingSymbol=XLM&interval=5m"
    );
    const newData = data.map((item: any) => [
      "",
      Number(item.low),
      Number(item.open),
      Number(item.close),
      Number(item.high),
    ]);
    setDataCandles(newData);
  };

  return (
    <>
      {dataCandles.length ? (
        <div className={styles.chart}>
          <Chart
            width={"100%"}
            height={350}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={[["day", "a", "b", "c", "d"], ...dataCandles]}
            options={options}
          />
        </div>
      ) : null}
    </>
  );
};

export default CryptoChart;
