'use client'

import React, { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface CryptoPrice {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  url: string
}

interface CoinGeckoData {
  [key: string]: {
    usd: number
    usd_24h_change: number
  }
}

export function CryptoPriceTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const cryptoMapping = [
    { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', url: 'https://app.coinlaa.com/currencies/BTC/bitcoin/USD/' },
    { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', url: 'https://app.coinlaa.com/currencies/ETH/ethereum/USD/' },
    { id: 'solana', symbol: 'SOL', name: 'Solana', url: 'https://app.coinlaa.com/currencies/SOL/solana/USD/' },
    { id: 'ripple', symbol: 'XRP', name: 'Ripple', url: 'https://app.coinlaa.com/currencies/XRP/ripple/USD/' },
    { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', url: 'https://app.coinlaa.com/currencies/DOGE/dogecoin/USD/' },
    { id: 'cardano', symbol: 'ADA', name: 'Cardano', url: 'https://app.coinlaa.com/currencies/ADA/cardano/USD/' },
    { id: 'chainlink', symbol: 'LINK', name: 'Chainlink', url: 'https://app.coinlaa.com/currencies/LINK/chainlink/USD/' },
    { id: 'binancecoin', symbol: 'BNB', name: 'Binance Coin', url: 'https://app.coinlaa.com/currencies/BNB/binancecoin/USD/' },
    { id: 'sui', symbol: 'SUI', name: 'Sui', url: 'https://app.coinlaa.com/currencies/SUI/sui/USD/' }
  ]

  const fetchPrices = async () => {
    try {
      const ids = cryptoMapping.map(crypto => crypto.id).join(',')
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch prices')
      }
      
      const data: CoinGeckoData = await response.json()
      
      const formattedPrices: CryptoPrice[] = cryptoMapping.map(crypto => {
        const coinData = data[crypto.id]
        if (coinData) {
          return {
            symbol: crypto.symbol,
            name: crypto.name,
            price: coinData.usd,
            change: coinData.usd_24h_change || 0,
            changePercent: coinData.usd_24h_change || 0,
            url: crypto.url
          }
        }
        return {
          symbol: crypto.symbol,
          name: crypto.name,
          price: 0,
          change: 0,
          changePercent: 0,
          url: crypto.url
        }
      })
      
      setPrices(formattedPrices)
      setError(null)
    } catch (err) {
      console.error('Error fetching crypto prices:', err)
      setError('Failed to load prices')
      
      // Fallback to mock data if API fails
      const fallbackPrices: CryptoPrice[] = cryptoMapping.map(crypto => ({
        symbol: crypto.symbol,
        name: crypto.name,
        price: Math.random() * 100000 + 1000,
        change: (Math.random() - 0.5) * 100,
        changePercent: (Math.random() - 0.5) * 10,
        url: crypto.url
      }))
      setPrices(fallbackPrices)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    
    // Update prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000)
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-gray-900 border-b border-gray-800 overflow-hidden">
        <div className="flex items-center justify-center h-12">
          <div className="text-gray-400 text-sm">Loading real-time prices...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-900 border-b border-gray-800 overflow-hidden">
        <div className="flex items-center justify-center h-12">
          <div className="text-yellow-400 text-sm">{error} - Showing simulated data</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 border-b border-gray-800 overflow-hidden group">
      <div className="relative w-full">
        <div className="flex animate-scroll group-hover:animation-pause">
          {[...prices, ...prices].map((crypto, index) => (
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
