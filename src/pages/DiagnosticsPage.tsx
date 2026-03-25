import { FileText, UserCheck, XCircle, Shield, Layers, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const assessmentTools = [
  'Psychopathy Checklist-Revised (PCL-R)',
  'Hare Psychopathy Checklist: Screening Version (PCL:SV)',
  'Structured Clinical Interview for DSM-5 Personality Disorders (SCID-5-PD)',
  'Millon Clinical Multiaxial Inventory-IV (MCMI-IV)',
  'Personality Assessment Inventory (PAI)',
  'Historical-Clinical-Risk Management-20 V3 (HCR-20V3)',
  'Violence Risk Appraisal Guide-Revised (VRAG-R)',
  'Short-Term Assessment of Risk and Treatability (START)',
];

const inclusionCriteria = [
  {
    criterion: 'Confirmed Cluster B Diagnosis',
    detail: 'DSM-5-TR 301.81 (NPD) or 301.7 (ASPD) with PCL-R scores ≥30',
  },
  {
    criterion: 'Pattern of Instrumental Aggression',
    detail: 'Predatory interpersonal exploitation, affective deficit, egosyntonic harm',
  },
  {
    criterion: 'Treatment Resistance',
    detail: 'Failure across multiple therapeutic modalities and clinical settings',
  },
  {
    criterion: 'Forensic History',
    detail: 'Recidivist criminality, civil commitment, or judicial dangerousness determination',
  },
  {
    criterion: 'Absence of Primary Psychosis',
    detail: 'No Schizophrenia Spectrum or acute substance intoxication',
  },
];

const exclusionCriteria = [
  {
    criterion: 'Primary Psychotic Disorders',
    detail: 'Schizophrenia (295.90) or Schizoaffective Disorder where personality pathology is secondary',
  },
  {
    criterion: 'Severe Intellectual Disability',
    detail: 'IQ <70 precluding capacity for behavioral contingency learning',
  },
  {
    criterion: 'Acute Medical Instability',
    detail: 'Conditions requiring tertiary care hospitalization',
  },
  {
    criterion: 'Primary Substance Use Disorders',
    detail: 'Without comorbid personality pathology meeting threshold criteria',
  },
];

const evaluationPhases = [
  {
    phase: 'Phase 1: Pre-Admission Forensic Screening',
    icon: FileText,
    activities: [
      'Comprehensive diagnostic review (DSM-5-TR/ICD-11)',
      'Criminal/civil history and pattern-of-harm analysis',
      'Treatment resistance assessment',
      'Immediate diversion for exclusion criteria',
    ],
  },
  {
    phase: 'Phase 2: Provisional Containment & Observation',
    icon: Shield,
    duration: '30-45 days',
    activities: [
      'Continuous behavioral monitoring',
      'Stress-tested compliance evaluation',
      'Manipulation pattern analysis',
      'Secondary diversion for therapy weaponization',
    ],
  },
  {
    phase: 'Phase 3: Suitability Determination Conference',
    icon: UserCheck,
    activities: [
      'Multidisciplinary panel review',
      'Decision: Full admission, modified track, or transfer',
      'Court-defensible documentation',
      'Auditable outcome rationale',
    ],
  },
];

export function DiagnosticsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-display-md mb-6">Diagnostic Framework</h1>
            <p className="text-body-lg text-slate-300">
              Comprehensive multi-axial differential diagnostic assessment integrating DSM-5-TR criteria, ICD-11 classification, and forensic evaluation instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Tools */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Standardized Assessment Instruments</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Psychometric batteries for precise psychopathological characterization and risk quantification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {assessmentTools.map((tool) => (
              <Card key={tool} className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion Criteria */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Diagnostic Inclusion Criteria</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Specific criteria for admission to EJSMC treatment programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {inclusionCriteria.map((item) => (
              <Card key={item.criterion} className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.criterion}</h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusion Criteria */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Differential Diagnostic Exclusions</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Conditions requiring alternative treatment settings or medical stabilization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {exclusionCriteria.map((item) => (
              <Card key={item.criterion} className="border-2 border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.criterion}</h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Process */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Multi-Phase Evaluation Framework</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Structured assessment and diversion process ensuring appropriate treatment placement.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {evaluationPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <Card key={phase.phase} className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-heading-md mb-1">{phase.phase}</CardTitle>
                        {phase.duration && (
                          <p className="text-sm text-primary font-semibold">{phase.duration}</p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {phase.activities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinical Note */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-accent/30 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-heading-lg text-foreground mb-3">Clinical & Legal Synthesis</h3>
                  <p className="text-muted-foreground mb-4">
                    The diagnostic framework integrates principles of forensic risk assessment, structured clinical judgment protocols, and legal due process safeguards—ensuring constitutional protections for patients under civil commitment statutes while maintaining strict adherence to bioethical standards governing involuntary psychiatric treatment.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    All diagnostic determinations are court-defensible, auditable, and compliant with DSM-5-TR, ICD-11, Joint Commission standards, and state mental health authority regulations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
