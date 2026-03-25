import { Shield, Target, Users, Building, CheckCircle2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const objectives = [
  'Protect public safety through secure containment',
  'Interrupt cycles of manipulation and violence',
  'Replace impulsive, exploitative behavior with structured self-control',
  'Establish measurable behavioral compliance',
  'Provide clinicians with a safe working environment',
];

const population = [
  'Adults diagnosed with severe NPD, ASPD, or related Cluster B pathologies',
  'Documented risk behaviors and treatment resistance',
  'Pattern of system failure across traditional settings',
  'Court or clinical referral with forensic assessment',
];

const referralSources = [
  { source: 'Courts', detail: 'Criminal and civil commitment proceedings' },
  { source: 'State Psychiatric Hospitals', detail: 'Transfer for specialized treatment' },
  { source: 'Departments of Corrections', detail: 'Forensic psychiatric placement' },
  { source: 'Probation & Parole', detail: 'Supervised release authorities' },
  { source: 'Public Guardianship', detail: 'Protective services agencies' },
];

const outcomes = [
  { metric: '≥40%', label: 'Reduction in Violent Incidents', icon: TrendingUp },
  { metric: '≥30%', label: 'Reduction in Recidivism Rates', icon: TrendingUp },
  { metric: 'Enhanced', label: 'Staff Safety & Reduced Legal Incidents', icon: Shield },
  { metric: 'Improved', label: 'Behavioral Predictability & Compliance', icon: Target },
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-display-md mb-6">About El Jefe's Strategic Mind Center</h1>
            <p className="text-body-lg text-slate-300">
              EJSMC is a proposed secure forensic psychiatric treatment facility specifically designed for adults aged 18 and older with severe, high-risk personality disorders including extreme NPD and ASPD.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-display-sm text-foreground mb-6">The Problem We Address</h2>
              <p className="text-body-lg text-muted-foreground mb-6">
                Current mental health infrastructure fails to manage individuals who exhibit severe narcissistic or psychopathic traits, chronic manipulation, and predatory behavior.
              </p>
              <p className="text-muted-foreground mb-6">
                Traditional therapy proves ineffective for this population, while prisons lack therapeutic depth. This results in:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Repeated harm to others and high recidivism rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Clinician burnout and escalating public safety risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Systemic failure with patients cycling through courts and hospitals</span>
                </li>
              </ul>
            </div>

            <Card className="bg-accent border-0">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-heading-lg text-foreground mb-4">Our Solution</h3>
                <p className="text-muted-foreground mb-4">
                  EJSMC addresses this critical gap through intensive behavioral management, evidence-based treatment, and continuous clinical monitoring in a secure environment.
                </p>
                <p className="text-sm text-muted-foreground">
                  We provide specialized care for individuals who require more structure than traditional psychiatric hospitals but need therapeutic intervention beyond what correctional facilities can provide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-display-sm text-foreground mb-6">Mission Statement</h2>
              <p className="text-body-lg text-foreground font-medium mb-4">
                To reduce harm, stabilize behavior, and enforce accountability in high-risk personality disorder patients through intensive, structured, evidence-based treatment in a secure clinical environment.
              </p>
            </div>

            <div>
              <h3 className="font-display text-heading-lg text-foreground mb-6">Core Objectives</h3>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Population */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Target Population</h2>
            <p className="text-body-lg text-muted-foreground">
              EJSMC serves a specific population requiring specialized forensic psychiatric care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Patient Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {population.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  Referral Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {referralSources.map((item, index) => (
                    <li key={index}>
                      <div className="font-medium text-sm text-foreground">{item.source}</div>
                      <div className="text-xs text-muted-foreground">{item.detail}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Expected Outcomes & Metrics</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              EJSMC targets measurable improvements in patient behavior, public safety, and system efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <Card key={outcome.label} className="text-center border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{outcome.metric}</div>
                    <div className="text-sm text-muted-foreground">{outcome.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-accent/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Additional Metrics</h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Improved behavioral predictability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Compliance tracking enhancement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Increased system efficiency
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Safer communities
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
