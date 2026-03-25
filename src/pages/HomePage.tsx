import { Link } from 'react-router-dom';
import { Shield, Users, Activity, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Secure Clinical Environment',
    description: 'State-of-the-art secure facility with 24/7 clinical monitoring and evidence-based safety protocols.',
  },
  {
    icon: Users,
    title: 'Expert Multidisciplinary Team',
    description: 'Forensic psychiatrists, psychologists, and specialized clinical staff trained in personality disorder treatment.',
  },
  {
    icon: Activity,
    title: 'Evidence-Based Treatment',
    description: 'Modified CBT, Schema Therapy, DBT-CS, and MBT-F protocols specifically adapted for forensic populations.',
  },
  {
    icon: Building2,
    title: 'Comprehensive Infrastructure',
    description: 'Purpose-built facility design with separate treatment wings, observation units, and therapeutic spaces.',
  },
];

const stats = [
  { value: '60-80', label: 'Bed Capacity', sublabel: 'Flagship Facility' },
  { value: '24/7', label: 'Clinical Monitoring', sublabel: 'Continuous Oversight' },
  { value: '40%', label: 'Violence Reduction', sublabel: 'Target Outcome' },
  { value: '30%', label: 'Recidivism Reduction', sublabel: 'Target Outcome' },
];

const objectives = [
  'Protect public safety through secure containment',
  'Interrupt cycles of manipulation and violence',
  'Replace impulsive, exploitative behavior with structured self-control',
  'Establish measurable behavioral compliance',
  'Provide clinicians with a safe working environment',
];

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                Forensic Psychiatric Treatment Facility
              </div>
              <h1 className="font-display text-display-lg text-white mb-6">
                El Jefe's Strategic Mind Center
              </h1>
              <p className="text-body-lg text-slate-300 mb-8 max-w-2xl">
                A secure forensic psychiatric treatment facility exclusively designed for adults with severe, high-risk personality disorders—addressing the critical gap between traditional psychiatric hospitals and correctional institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Link to="/contact">Request Information</Link>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:pl-8">
              <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="font-display text-heading-lg text-foreground mb-6">Facility Overview</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                        <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">The Critical Gap in Mental Health Infrastructure</h2>
            <p className="text-body-lg text-muted-foreground">
              Current mental health systems fail to manage individuals with severe narcissistic or psychopathic traits, chronic manipulation, and predatory behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-destructive/20 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-destructive rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Repeated Harm</h3>
                <p className="text-sm text-muted-foreground">High recidivism rates and continued victimization</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-destructive rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Clinician Burnout</h3>
                <p className="text-sm text-muted-foreground">Escalating public safety risks and staff attrition</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-destructive rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Systemic Failure</h3>
                <p className="text-sm text-muted-foreground">Cycling through courts and hospitals without resolution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Objectives */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-display-sm text-foreground mb-6">Mission & Core Objectives</h2>
              <p className="text-body-lg text-muted-foreground mb-8">
                To reduce harm, stabilize behavior, and enforce accountability in high-risk personality disorder patients through intensive, structured, evidence-based treatment in a secure clinical environment.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  View Full Mission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <Card className="bg-accent border-0">
              <CardContent className="p-8">
                <h3 className="font-display text-heading-lg text-accent-foreground mb-6">Core Objectives</h3>
                <ul className="space-y-4">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-sm text-foreground mb-4">Comprehensive Treatment Approach</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              EJSMC combines secure infrastructure, expert clinical teams, and evidence-based treatment protocols to address the unique challenges of severe personality disorders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-heading-md text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-sm mb-6">Ready to Learn More?</h2>
            <p className="text-body-lg mb-8 text-white/90">
              Explore our comprehensive treatment model, implementation timeline, and diagnostic frameworks. Contact us for referral information, partnership opportunities, or funding inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/treatment">View Treatment Model</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
