import React from 'react';

function Ticker() {

  return (
    <>
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
    {
      {"symbols": [
        {
          "description": "EURUSD",
          "proName": "OANDA:EURUSD"
        },
        {
          "description": "GBPUSD",
          "proName": "FX:GBPUSD"
        },
        {
          "description": "USDJPY",
          "proName": "FX:USDJPY"
        },
        {
          "description": "AUDUSD",
    "proName": "FX:AUDUSD"
  },
  {
    "description": "USDCAD",
    "proName": "OANDA:USDCAD"
  },
  {
    "description": "NZDUSD",
    "proName": "OANDA:NZDUSD"
  },
  {
    "description": "USDCHF",
    "proName": "OANDA:USDCHF"
  },
  {
    "description": "USDBRL",
    "proName": "FX_IDC:USDBRL"
  },
  {
    "description": "USDARS",
    "proName": "FX_IDC:USDARS"
  },
  {
    "description": "USDCOP",
    "proName": "FX_IDC:USDCOP"
  },
  {
    "description": "USDCLP",
    "proName": "FX_IDC:USDCLP"
  },
  {
    "description": "USDZAR",
    "proName": "FX:USDZAR"
  },
  {
    "description": "USDSAR",
    "proName": "FX_IDC:USDSAR"
  },
  {
    "description": "USDQAR",
    "proName": "FX_IDC:USDQAR"
  },
  {
    "description": "USDPHP",
    "proName": "FX_IDC:USDPHP"
  },
  {
    "description": "USDSGD",
    "proName": "OANDA:USDSGD"
  }
],
"showSymbolLogo": true,
"isTransparent": false,
"displayMode": "adaptive",
"colorTheme": "light",
"locale": "en"
}}
</script>
</>
  );
}

export default Ticker;
