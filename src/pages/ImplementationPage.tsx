import { Calendar, DollarSign, MapPin, TrendingUp, CheckCircle2, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const timeline = [
  {
    phase: 'Phase 1: Foundation & Funding',
    months: 'Months 1-6',
    milestones: [
      'Legal entity establishment & compliance framework',
      'Secure $10M+ initial funding commitments',
      'Site acquisition in California',
      'Architectural team engagement',
    ],
  },
  {
    phase: 'Phase 2: Team Building & Design',
    months: 'Months 4-12',
    milestones: [
      'Executive leadership recruitment (CEO, CMO, COO)',
      'Complete construction documents & permits',
      'Clinical staff recruitment pipeline development',
      'General contractor selection',
    ],
  },
  {
    phase: 'Phase 3: Construction & Pre-Operational',
    months: 'Months 10-18',
    milestones: [
      'Facility construction completion',
      'CDPH licensing & Joint Commission accreditation',
      'Operational infrastructure & policy development',
      'Partnership & referral network establishment',
    ],
  },
  {
    phase: 'Phase 4: Pre-Opening & Pilot Operations',
    months: 'Months 16-24',
    milestones: [
      'Staff onboarding & intensive training',
      'Phased patient admission (10-15, then 30-40, then 60-80)',
      'Quality monitoring & policy refinement',
      'Full operational capacity achieved',
    ],
  },
];

const budgetCategories = [
  { category: 'Facility Construction', amount: '$18,000,000', percentage: 44 },
  { category: 'Equipment & Technology', amount: '$7,500,000', percentage: 18 },
  { category: 'Site Acquisition', amount: '$3,000,000', percentage: 7 },
  { category: 'Design & Engineering', amount: '$2,500,000', percentage: 6 },
  { category: 'Working Capital Reserve', amount: '$6,950,000', percentage: 17 },
  { category: 'Pre-Opening Staff & Training', amount: '$3,000,000', percentage: 7 },
  { category: 'Legal & Formation', amount: '$250,000', percentage: 1 },
];

const fundingSources = [
  { source: 'Government Funding', target: '$20M', detail: 'SAMHSA grants, DOJ programs, CHFFA, state contracts' },
  { source: 'Private Investment & Philanthropy', target: '$15M', detail: 'Impact investors, foundations, individual donors' },
  { source: 'Debt Financing', target: '$6M', detail: 'Healthcare facility loans, tax-exempt bonds' },
];

const nationalExpansion = [
  {
    location: 'West Coast (California)',
    role: 'Flagship & Training Hub',
    features: ['Primary operational facility', 'Clinical training center', 'Research collaboration base'],
  },
  {
    location: 'Midwest Regional',
    role: 'Central U.S. Coverage',
    features: ['Interstate compact coordination', 'Multi-state jurisdictional service', 'Centralized referral processing'],
  },
  {
    location: 'East Coast',
    role: 'Metropolitan Access',
    features: ['High-density population service', 'Northeastern state court integration', 'Federal designation infrastructure'],
  },
];

export function ImplementationPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-display-md mb-6">Implementation Plan</h1>
            <p className="text-body-lg text-slate-300">
              California flagship facility development: 18-24 months to operational launch with comprehensive phased approach.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Development Timeline</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Four-phase implementation strategy from legal formation to full operational capacity.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {timeline.map((phase, index) => (
              <Card key={phase.phase} className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-heading-md">{phase.phase}</CardTitle>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {phase.months}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Financial Plan</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
              <span className="font-display text-4xl font-bold text-primary">$41.2M</span>
            </div>
            <p className="text-body-lg text-muted-foreground">Total Capital & Year 1 Operating Budget</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Budget Breakdown */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Budget Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgetCategories.map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm font-medium text-foreground">{item.category}</span>
                        <span className="text-sm font-bold text-primary">{item.amount}</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Funding Sources */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Funding Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {fundingSources.map((source) => (
                    <div key={source.source} className="border-l-4 border-primary pl-4">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-semibold text-foreground">{source.source}</h3>
                        <span className="text-lg font-bold text-primary">{source.target}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{source.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Cost Justification</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      Lower long-term incarceration costs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      Reduced recidivism and victimization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      Reduced emergency interventions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Annual Operating Budget */}
          <div className="mt-8 max-w-6xl mx-auto">
            <Card className="bg-accent/50 border-primary/20">
              <CardHeader>
                <CardTitle>Annual Operating Budget: $15,700,000</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-foreground mb-1">Clinical Staff</div>
                    <div className="text-2xl font-bold text-primary">$7.8M</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Behavioral & Security</div>
                    <div className="text-2xl font-bold text-primary">$3.2M</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Operations & Training</div>
                    <div className="text-2xl font-bold text-primary">$4.7M</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* California Site Selection */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">California Flagship Location</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic site selection criteria for optimal clinical operations and community integration.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Site Selection Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">Land Requirements</div>
                    <div className="text-sm text-muted-foreground">10-15 acres minimum</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">Zoning</div>
                    <div className="text-sm text-muted-foreground">Healthcare institutional or CUP eligible</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">Proximity</div>
                    <div className="text-sm text-muted-foreground">Major metro area (LA, SF Bay, Sacramento, SD)</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">Workforce Access</div>
                    <div className="text-sm text-muted-foreground">Universities with forensic programs</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">Infrastructure</div>
                    <div className="text-sm text-muted-foreground">Adequate utility capacity</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">Community Relations</div>
                    <div className="text-sm text-muted-foreground">Stakeholder engagement strategy</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* National Expansion */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">National Expansion Model</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Proposed three-facility national network for interstate compact coordination and federal designation status.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nationalExpansion.map((facility) => (
              <Card key={facility.location} className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-heading-md">{facility.location}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{facility.role}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="bg-accent/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Federal Designation Benefits</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  The triadic facility infrastructure establishes eligibility for federal designation status pursuant to interstate compact agreements, enabling:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Cross-jurisdictional transfers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Standardized evaluation protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Centralized federal funding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Uniform clinical governance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
