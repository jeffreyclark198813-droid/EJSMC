import { Brain, Heart, Target, Activity, Users, Shield, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const coreTherapies = [
  {
    icon: Brain,
    name: 'Modified Cognitive Behavioral Therapy (CBT)',
    description: 'Cost-benefit analysis of behavior, long-term self-interest calculation, predictable consequences, and behavioral contracts.',
    components: ['Consequence mapping', 'Rational self-interest', 'Behavioral accountability'],
  },
  {
    icon: Target,
    name: 'Adapted Schema Therapy',
    description: 'Targeting grandiosity, entitlement, and predatory schemas through developmental understanding and mode work.',
    components: ['Schema identification', 'Mode analysis', 'Adaptive alternatives'],
  },
  {
    icon: Activity,
    name: 'Behavioral Accountability Programs',
    description: 'Objective metrics, compliance scoring, and loss-of-privilege models to reinforce adaptive behavior.',
    components: ['Daily scoring', 'Privilege systems', 'Performance tracking'],
  },
  {
    icon: Heart,
    name: 'Dialectical Behavior Therapy - Correctional Setting (DBT-CS)',
    description: 'Forensically adapted DBT emphasizing behavioral contingencies and external accountability structures.',
    components: ['Chain analysis', 'Distress tolerance', 'Interpersonal effectiveness'],
  },
];

const additionalModalities = [
  'Mentalisation-Based Treatment - Forensic (MBT-F)',
  'Impulse & Aggression Regulation Training',
  'Moral Reasoning Substitution Models',
  'Neurocognitive Rehabilitation',
  'Executive Function Training',
];

const pharmacological = [
  { category: 'Mood Stabilizers', examples: 'Lithium, Valproic acid, Lamotrigine', target: 'Affective instability, impulsive aggression' },
  { category: 'Atypical Antipsychotics', examples: 'Risperidone, Quetiapine, Aripiprazole', target: 'Hostility, behavioral dyscontrol' },
  { category: 'SSRIs', examples: 'Fluoxetine, Sertraline, Escitalopram', target: 'Impulsivity, anxiety, depression' },
  { category: 'Alpha-2 Agonists', examples: 'Clonidine, Guanfacine', target: 'Hyperarousal, irritability' },
];

const riskTiers = [
  {
    tier: 'Tier 1 - Critical Risk',
    score: 'HCR-20V3 ≥28',
    interventions: ['Maximum security housing', 'Continuous 1:1 observation', 'Restricted interpersonal contact', 'Pharmacological augmentation'],
    color: 'destructive',
  },
  {
    tier: 'Tier 2 - High Risk',
    score: 'HCR-20V3 24-27',
    interventions: ['Enhanced security protocols', 'Structured group therapy', 'Daily clinical assessments', 'Supervised activities'],
    color: 'amber',
  },
  {
    tier: 'Tier 3 - Moderate Risk',
    score: 'HCR-20V3 20-23',
    interventions: ['Standard secure placement', 'Evidence-based therapy', 'Weekly team review', 'Progressive privileges'],
    color: 'primary',
  },
  {
    tier: 'Tier 4 - Transitional',
    score: 'HCR-20V3 <20',
    interventions: ['Pre-discharge stabilization', 'Community reintegration planning', 'Outpatient coordination', 'Conditional release'],
    color: 'emerald',
  },
];

export function TreatmentPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-display-md mb-6">Treatment Model</h1>
            <p className="text-body-lg text-slate-300">
              EJSMC employs evidence-based, forensically-adapted treatment modalities specifically calibrated for severe personality disorders with documented risk behaviors.
            </p>
          </div>
        </div>
      </section>

      {/* Foundational Principle */}
      <section className="py-16 lg:py-24 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-white">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-heading-lg text-foreground mb-3">Foundational Treatment Principle</h2>
                  <p className="text-body-lg text-foreground font-medium mb-4">
                    Treatment focuses on consequences, structure, behavioral contingencies, and external regulation where internal regulation is absent—not empathy-based approaches.
                  </p>
                  <p className="text-muted-foreground">
                    Our approach recognizes the neurobiological and characterological constraints inherent in severe Cluster B pathology, emphasizing behavioral accountability and rational understanding rather than emotional remorse or empathic connection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Therapies */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Core Therapeutic Modalities</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Evidence-based psychotherapeutic interventions adapted for forensic populations with personality pathology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreTherapies.map((therapy) => {
              const Icon = therapy.icon;
              return (
                <Card key={therapy.name} className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-heading-md">{therapy.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{therapy.description}</p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">Key Components:</div>
                      <ul className="space-y-1">
                        {therapy.components.map((component, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                            {component}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Modalities */}
          <div className="mt-12">
            <Card className="bg-secondary border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Additional Treatment Modalities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {additionalModalities.map((modality, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      {modality}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pharmacological Interventions */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Psychopharmacological Interventions</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Evidence-based medication protocols targeting neurobiological substrates of impulsivity, affective dysregulation, and aggression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pharmacological.map((med) => (
              <Card key={med.category} className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{med.category}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{med.examples}</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Target:</span> {med.target}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-5xl mx-auto">
            <Card className="bg-accent/50 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Pharmacogenomic Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Cytochrome P450 enzyme genotyping (CYP2D6, CYP2C19, CYP3A4) guides medication selection and dosing optimization, reducing adverse drug reactions and enhancing therapeutic response rates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Stratification */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Risk Stratification & Management</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Individualized treatment intensity based on structured professional judgment and actuarial risk assessment (HCR-20V3, VRAG-R, START).
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {riskTiers.map((tier) => (
              <Card key={tier.tier} className="border-2">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-heading-md text-foreground">{tier.tier}</h3>
                      <p className="text-sm text-muted-foreground">{tier.score}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {tier.interventions.map((intervention, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        {intervention}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 24-Hour Oversight */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-lg">
                  <Users className="w-6 h-6 text-primary" />
                  24-Hour Oversight & Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Continuous staff presence with scheduled and unscheduled evaluations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Daily behavioral scoring and escalation protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">No unsupervised group dynamics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Transparent documentation for courts and oversight bodies</span>
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
