import React, { useEffect, useRef } from 'react';
import "../styles/TradingViewWidget.css";

function CustomTradingViewWidget() {
  const container = useRef(null);

  useEffect(() => {
    // Ensure the script is only appended if the container is not null
    if (container.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div>
       <h1 id="stockrates">Analyze Your Stock Portfolio</h1>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div ref={container} style={{ width: '80vw', height: '80vh' }}></div>
    </div>
    </div>
      );
}

export default React.memo(CustomTradingViewWidget);