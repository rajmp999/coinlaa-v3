'use client'

import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface CryptoPrice {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  url: string
}

// Static mock data for demonstration
const staticCryptoData: CryptoPrice[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67890.45, change: 1234.56, changePercent: 1.85, url: 'https://app.coinlaa.com/currencies/BTC/bitcoin/USD/' },
  { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: 156.23, changePercent: 4.73, url: 'https://app.coinlaa.com/currencies/ETH/ethereum/USD/' },
  { symbol: 'SOL', name: 'Solana', price: 178.92, change: -12.34, changePercent: -6.45, url: 'https://app.coinlaa.com/currencies/SOL/solana/USD/' },
  { symbol: 'BNB', name: 'Binance Coin', price: 612.45, change: 8.76, changePercent: 1.45, url: 'https://app.coinlaa.com/currencies/BNB/binancecoin/USD/' },
  { symbol: 'XRP', name: 'Ripple', price: 0.6234, change: 0.0234, changePercent: 3.89, url: 'https://app.coinlaa.com/currencies/XRP/ripple/USD/' },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.0856, change: -0.0023, changePercent: -2.61, url: 'https://app.coinlaa.com/currencies/DOGE/dogecoin/USD/' },
  { symbol: 'ADA', name: 'Cardano', price: 0.4567, change: 0.0123, changePercent: 2.77, url: 'https://app.coinlaa.com/currencies/ADA/cardano/USD/' },
  { symbol: 'LINK', name: 'Chainlink', price: 14.567, change: 0.234, changePercent: 1.63, url: 'https://app.coinlaa.com/currencies/LINK/chainlink/USD/' },
  { symbol: 'SUI', name: 'Sui', price: 1.234, change: 0.056, changePercent: 4.75, url: 'https://app.coinlaa.com/currencies/SUI/sui/USD/' }
]

export function StaticCryptoPriceTicker() {
  return (
    <div className="bg-gray-900 border-b border-gray-800 overflow-hidden group">
      <div className="relative w-full">
        <div className="flex animate-scroll group-hover:animation-pause">
          {[...staticCryptoData, ...staticCryptoData].map((crypto, index) => (
            <a
              key={`${crypto.symbol}-${index}`}
              href={crypto.url}
              className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors no-underline whitespace-nowrap flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-white font-bold text-sm">{crypto.symbol}</span>
                <span className="text-gray-400 text-xs hidden sm:inline">{crypto.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-mono text-sm">
                  ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: crypto.price < 1 ? 4 : 2, maximumFractionDigits: crypto.price < 1 ? 4 : 2 })}
                </span>
                <div className={`flex items-center space-x-1 ${crypto.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.changePercent >= 0 ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span className="text-xs font-medium">
                    {crypto.changePercent >= 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}