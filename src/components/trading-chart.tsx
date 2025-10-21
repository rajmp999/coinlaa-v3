'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, BarChart3, LineChart } from 'lucide-react'
import { useState, useEffect } from 'react'

export function TradingChart() {
  const [mockData, setMockData] = useState([
    { time: '00:00', price: 65000 },
    { time: '04:00', price: 65500 },
    { time: '08:00', price: 66200 },
    { time: '12:00', price: 67000 },
    { time: '16:00', price: 67234 },
    { time: '20:00', price: 66800 },
    { time: '24:00', price: 67234 },
  ])

  const [currentPrice, setCurrentPrice] = useState(67234)
  const [priceChange, setPriceChange] = useState(5.2)
  const [timeframe, setTimeframe] = useState('1D')

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = currentPrice + (Math.random() - 0.5) * 100
      setCurrentPrice(newPrice)
      setPriceChange(((newPrice - 65000) / 65000) * 100)
      
      // Update the last data point
      setMockData(prev => {
        const newData = [...prev]
        newData[newData.length - 1] = {
          ...newData[newData.length - 1],
          price: newPrice
        }
        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [currentPrice])

  const maxPrice = Math.max(...mockData.map(d => d.price))
  const minPrice = Math.min(...mockData.map(d => d.price))
  const priceRange = maxPrice - minPrice

  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe)
    // Generate new data for different timeframes
    const basePrice = 65000 + Math.random() * 5000
    const newData = Array.from({ length: 7 }, (_, i) => ({
      time: `${i * 4}:00`,
      price: basePrice + (Math.random() - 0.5) * 2000
    }))
    setMockData(newData)
    setCurrentPrice(newData[newData.length - 1].price)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">BTC/USD</CardTitle>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-2xl font-bold">
              ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <Badge variant="secondary" className={`${priceChange >= 0 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
              {priceChange >= 0 ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
            </Badge>
          </div>
        </div>
        <div className="flex space-x-2">
          {['1H', '1D', '1W', '1M'].map((tf) => (
            <Button
              key={tf}
              variant={timeframe === tf ? "default" : "outline"}
              size="sm"
              onClick={() => handleTimeframeChange(tf)}
            >
              {tf === '1W' || tf === '1M' ? (
                <BarChart3 className="w-4 h-4 mr-1" />
              ) : (
                <LineChart className="w-4 h-4 mr-1" />
              )}
              {tf}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 relative">
          <div className="absolute inset-0 flex items-end justify-between">
            {mockData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className={`w-full bg-gradient-to-t rounded-t-sm relative ${
                    index === mockData.length - 1 
                      ? 'from-blue-500 to-purple-500' 
                      : 'from-blue-400/50 to-purple-400/50'
                  }`}
                  style={{ 
                    height: `${((data.price - minPrice) / priceRange) * 100}%`,
                    minHeight: '4px'
                  }}
                >
                  {index === mockData.length - 1 && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap bg-white px-1 rounded shadow">
                      ${(data.price / 1000).toFixed(1)}k
                    </div>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {data.time}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">24h High</p>
            <p className="font-semibold text-green-600">
              ${maxPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">24h Low</p>
            <p className="font-semibold text-red-600">
              ${minPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Last Updated</span>
            <span className="text-sm font-medium">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}