// lib/fetchCryptoPrices.ts
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

export async function fetchCryptoPrices(): Promise<CryptoPrice[]> {
  try {
    const ids = cryptoMapping.map(c => c.id).join(',')
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
      { next: { revalidate: 30 } } // ✅ cache + ISR (30 seconds)
    )

    if (!res.ok) throw new Error('Failed to fetch prices')
    const data: CoinGeckoData = await res.json()

    return cryptoMapping.map(crypto => {
      const coinData = data[crypto.id]
      if (!coinData) return { ...crypto, price: 0, change: 0, changePercent: 0 }

      return {
        ...crypto,
        price: coinData.usd,
        change: coinData.usd_24h_change,
        changePercent: coinData.usd_24h_change
      }
    })
  } catch (error) {
    console.error('Error fetching crypto prices:', error)
    // fallback mock data
    return cryptoMapping.map(crypto => ({
      ...crypto,
      price: Math.random() * 100000 + 1000,
      change: (Math.random() - 0.5) * 100,
      changePercent: (Math.random() - 0.5) * 10
    }))
  }
}
