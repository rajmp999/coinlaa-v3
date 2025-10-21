'use client'

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin",
              "largeChartUrl": "https://app.coinlaa.com/currencies/BTC/bitcoin/USD/"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum",
              "largeChartUrl": "https://app.coinlaa.com/currencies/ETH/ethereum/USD/"
            },
            {
              "proName": "BINANCE:SOLUSDT",
              "title": "Solana",
              "largeChartUrl": "https://app.coinlaa.com/currencies/SOL/solana/USD/"
            },
            {
              "proName": "BINANCE:XRPUSDT",
              "title": "XRP",
              "largeChartUrl": "https://app.coinlaa.com/currencies/XRP/ripple/USD/"
            },
            {
              "proName": "BINANCE:DOGEUSDT",
              "title": "DOGE",
              "largeChartUrl": "https://app.coinlaa.com/currencies/DOGE/dogecoin/USD/"
            },
            {
              "proName": "BINANCE:LINKUSDT",
              "title": "Link",
              "largeChartUrl": "https://app.coinlaa.com/currencies/LINK/chainlink/USD/"
            },
            {
              "proName": "BINANCE:ADAUSDT",
              "title": "Cardano",
              "largeChartUrl": "https://app.coinlaa.com/currencies/ADA/cardano/USD/"
            },
            {
              "proName": "BINANCE:BNBUSDT",
              "title": "BNB",
              "largeChartUrl": "https://app.coinlaa.com/currencies/BNB/binancecoin/USD/"
            },
            {
              "proName": "BINANCE:SUIUSDT",
              "title": "SUI",
              "largeChartUrl": "https://app.coinlaa.com/currencies/SUI/sui/USD/"
            }
          ],
          "colorTheme": "light",
          "locale": "en",
          "isTransparent": true,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);