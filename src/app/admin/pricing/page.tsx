'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Edit, Trash2, Eye, EyeOff, Star, DollarSign } from 'lucide-react'

interface PricingTier {
  id: string
  planId: string
  period: string
  price: string
  originalPrice?: string
  features: string[]
  ctaText: string
  isActive: boolean
}

interface PricingPlan {
  id: string
  name: string
  description: string
  badge?: string
  isHighlighted: boolean
  order: number
  isActive: boolean
  pricingTiers: PricingTier[]
}

const PERIOD_OPTIONS = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'yearly', label: 'Yearly' },
]

export default function PricingManagement() {
  const [plans, setPlans] = useState<PricingPlan[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)
  const [activeTab, setActiveTab] = useState('plans')
  
  const [planFormData, setPlanFormData] = useState({
    name: '',
    description: '',
    badge: '',
    isHighlighted: false,
    order: 0,
    isActive: true,
  })

  const [tierFormData, setTierFormData] = useState({
    period: 'monthly',
    price: '',
    originalPrice: '',
    features: [''],
    ctaText: '',
    isActive: true,
  })

  useEffect(() => {
    // Load initial data - in real app, this would be an API call
    setPlans([
      {
        id: '1',
        name: 'Explorer',
        description: 'Perfect for getting started with crypto social networking',
        isHighlighted: false,
        order: 0,
        isActive: true,
        pricingTiers: [
          {
            id: '1-1',
            planId: '1',
            period: 'monthly',
            price: 'Free',
            features: [
              'Basic community access',
              'Track 10 cryptocurrencies',
              'Join public discussions',
              'Basic news feed',
              'Community support'
            ],
            ctaText: 'Start for Free',
            isActive: true,
          }
        ]
      },
      {
        id: '2',
        name: 'Alpha',
        description: 'Most popular choice for serious crypto enthusiasts',
        badge: 'Most Popular',
        isHighlighted: true,
        order: 1,
        isActive: true,
        pricingTiers: [
          {
            id: '2-1',
            planId: '2',
            period: 'monthly',
            price: '$49',
            originalPrice: '',
            features: [
              'Everything in Explorer, plus:',
              'Full community access',
              'Track unlimited cryptocurrencies',
              'Advanced AI agents (50/month)',
              'Real-time event alerts',
              'Crypto Academy courses',
              'Priority support',
              'Custom AI agent deployment'
            ],
            ctaText: 'Choose Your Plan & Start Today',
            isActive: true,
          },
          {
            id: '2-2',
            planId: '2',
            period: 'quarterly',
            price: '$137',
            originalPrice: '$147',
            features: [
              'Everything in Explorer, plus:',
              'Full community access',
              'Track unlimited cryptocurrencies',
              'Advanced AI agents (50/month)',
              'Real-time event alerts',
              'Crypto Academy courses',
              'Priority support',
              'Custom AI agent deployment'
            ],
            ctaText: 'Save 7% - Quarterly',
            isActive: true,
          },
          {
            id: '2-3',
            planId: '2',
            period: 'yearly',
            price: '$490',
            originalPrice: '$588',
            features: [
              'Everything in Explorer, plus:',
              'Full community access',
              'Track unlimited cryptocurrencies',
              'Advanced AI agents (50/month)',
              'Real-time event alerts',
              'Crypto Academy courses',
              'Priority support',
              'Custom AI agent deployment'
            ],
            ctaText: 'Save 17% - Yearly',
            isActive: true,
          }
        ]
      },
      {
        id: '3',
        name: 'Whale',
        description: 'Enterprise solution for teams and power users',
        isHighlighted: false,
        order: 2,
        isActive: true,
        pricingTiers: [
          {
            id: '3-1',
            planId: '3',
            period: 'monthly',
            price: 'Custom',
            features: [
              'Everything in Alpha, plus:',
              'Unlimited AI agents',
              'White-label solutions',
              'API access',
              'Dedicated account manager',
              'Custom integrations',
              'Advanced analytics',
              'Priority feature requests'
            ],
            ctaText: 'Book a Demo',
            isActive: true,
          }
        ]
      }
    ])
  }, [])

  const handlePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingPlan) {
      // Update existing plan
      setPlans(prev => prev.map(p => 
        p.id === editingPlan.id 
          ? { ...p, ...planFormData }
          : p
      ))
    } else {
      // Add new plan
      const newPlan: PricingPlan = {
        id: Date.now().toString(),
        ...planFormData,
        pricingTiers: []
      }
      setPlans(prev => [...prev, newPlan])
    }

    resetPlanForm()
    setIsDialogOpen(false)
  }

  const handleTierSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedPlan) return

    const newTier: PricingTier = {
      id: Date.now().toString(),
      planId: selectedPlan.id,
      ...tierFormData,
    }

    setPlans(prev => prev.map(p => 
      p.id === selectedPlan.id 
        ? { ...p, pricingTiers: [...p.pricingTiers, newTier] }
        : p
    ))

    resetTierForm()
  }

  const resetPlanForm = () => {
    setPlanFormData({
      name: '',
      description: '',
      badge: '',
      isHighlighted: false,
      order: 0,
      isActive: true,
    })
    setEditingPlan(null)
  }

  const resetTierForm = () => {
    setTierFormData({
      period: 'monthly',
      price: '',
      originalPrice: '',
      features: [''],
      ctaText: '',
      isActive: true,
    })
  }

  const handleEditPlan = (plan: PricingPlan) => {
    setEditingPlan(plan)
    setPlanFormData(plan)
    setIsDialogOpen(true)
  }

  const handleDeletePlan = (id: string) => {
    setPlans(prev => prev.filter(p => p.id !== id))
  }

  const handleDeleteTier = (planId: string, tierId: string) => {
    setPlans(prev => prev.map(p => 
      p.id === planId 
        ? { ...p, pricingTiers: p.pricingTiers.filter(t => t.id !== tierId) }
        : p
    ))
  }

  const addFeatureField = () => {
    setTierFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }))
  }

  const updateFeatureField = (index: number, value: string) => {
    setTierFormData(prev => ({
      ...prev,
      features: prev.features.map((f, i) => i === index ? value : f)
    }))
  }

  const removeFeatureField = (index: number) => {
    setTierFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Pricing Management</h2>
          <p className="text-muted-foreground">
            Manage your pricing plans and billing tiers
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetPlanForm}>
              <Plus className="w-4 h-4 mr-2" />
              Add Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingPlan ? 'Edit Plan' : 'Add New Plan'}
              </DialogTitle>
              <DialogDescription>
                Configure your pricing plan details
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handlePlanSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Plan Name</Label>
                  <Input
                    id="name"
                    value={planFormData.name}
                    onChange={(e) => setPlanFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g., Alpha"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="badge">Badge (Optional)</Label>
                  <Input
                    id="badge"
                    value={planFormData.badge}
                    onChange={(e) => setPlanFormData(prev => ({ ...prev, badge: e.target.value }))}
                    placeholder="e.g., Most Popular"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={planFormData.description}
                  onChange={(e) => setPlanFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Plan description"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="order">Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={planFormData.order}
                    onChange={(e) => setPlanFormData(prev => ({ ...prev, order: parseInt(e.target.value) }))}
                    min="0"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isHighlighted"
                    checked={planFormData.isHighlighted}
                    onCheckedChange={(checked) => setPlanFormData(prev => ({ ...prev, isHighlighted: checked }))}
                  />
                  <Label htmlFor="isHighlighted">Featured Plan</Label>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={planFormData.isActive}
                  onCheckedChange={(checked) => setPlanFormData(prev => ({ ...prev, isActive: checked }))}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingPlan ? 'Update' : 'Create'} Plan
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="tiers">Pricing Tiers</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-4">
          {plans.map((plan) => (
            <Card key={plan.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        {plan.isHighlighted && <Star className="w-4 h-4 text-yellow-500" />}
                        {plan.badge && <Badge variant="secondary">{plan.badge}</Badge>}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={plan.isActive ? "default" : "secondary"}>
                      {plan.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    <Badge variant="outline">Order: {plan.order}</Badge>
                    <Badge variant="outline">{plan.pricingTiers.length} tiers</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <p>Tiers: {plan.pricingTiers.map(t => t.period).join(', ')}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedPlan(plan)
                        setActiveTab('tiers')
                      }}
                    >
                      Manage Tiers
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditPlan(plan)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeletePlan(plan.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="tiers" className="space-y-4">
          {selectedPlan ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">{selectedPlan.name} - Pricing Tiers</h3>
                  <p className="text-muted-foreground">Manage pricing periods and features</p>
                </div>
                <Button onClick={() => resetTierForm()}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Tier
                </Button>
              </div>

              {/* Add Tier Form */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Add New Pricing Tier</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTierSubmit} className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="period">Period</Label>
                        <Select value={tierFormData.period} onValueChange={(value) => setTierFormData(prev => ({ ...prev, period: value }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {PERIOD_OPTIONS.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          value={tierFormData.price}
                          onChange={(e) => setTierFormData(prev => ({ ...prev, price: e.target.value }))}
                          placeholder="e.g., $49 or Free"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="originalPrice">Original Price (Optional)</Label>
                        <Input
                          id="originalPrice"
                          value={tierFormData.originalPrice}
                          onChange={(e) => setTierFormData(prev => ({ ...prev, originalPrice: e.target.value }))}
                          placeholder="e.g., $99"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Features</Label>
                      {tierFormData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 mt-2">
                          <Input
                            value={feature}
                            onChange={(e) => updateFeatureField(index, e.target.value)}
                            placeholder="Enter feature"
                            className="flex-1"
                          />
                          {tierFormData.features.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeFeatureField(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addFeatureField}
                        className="mt-2"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Feature
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ctaText">CTA Text</Label>
                        <Input
                          id="ctaText"
                          value={tierFormData.ctaText}
                          onChange={(e) => setTierFormData(prev => ({ ...prev, ctaText: e.target.value }))}
                          placeholder="e.g., Get Started"
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="tierIsActive"
                          checked={tierFormData.isActive}
                          onCheckedChange={(checked) => setTierFormData(prev => ({ ...prev, isActive: checked }))}
                        />
                        <Label htmlFor="tierIsActive">Active</Label>
                      </div>
                    </div>

                    <Button type="submit">Add Tier</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Existing Tiers */}
              <div className="space-y-4">
                {selectedPlan.pricingTiers.map((tier) => (
                  <Card key={tier.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <CardTitle className="text-lg capitalize">{tier.period}</CardTitle>
                            <Badge variant={tier.isActive ? "default" : "secondary"}>
                              {tier.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-2xl font-bold">{tier.price}</span>
                            {tier.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">
                                {tier.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteTier(selectedPlan.id, tier.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tier.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Badge variant="outline">{tier.ctaText}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <DollarSign className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Plan Selected</h3>
                <p className="text-muted-foreground">
                  Select a plan from the Plans tab to manage its pricing tiers.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}