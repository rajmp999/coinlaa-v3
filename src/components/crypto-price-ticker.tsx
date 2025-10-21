// app/components/CryptoPriceTicker.tsx
import { TrendingUp, TrendingDown } from 'lucide-react'
import { fetchCryptoPrices } from '@/lib/fetchCryptoPrices'

export default async function CryptoPriceTicker() {
  const prices = await fetchCryptoPrices()

  return (
    <div className="bg-gray-900 border-b border-gray-800 overflow-hidden group">
      <div className="relative w-full">
        <div className="flex animate-scroll group-hover:animation-pause">
          {prices.map((crypto, index) => (
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
