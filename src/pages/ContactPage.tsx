import { Mail, Phone, MapPin, Building2, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CommentSection } from '../components/features/CommentSection';

const contactCategories = [
  {
    icon: Users,
    title: 'Professional Referrals',
    description: 'Courts, state hospitals, corrections departments, probation/parole agencies',
    contact: 'referrals@ejsmc.org',
  },
  {
    icon: DollarSign,
    title: 'Funding & Investment',
    description: 'Grant opportunities, impact investment, philanthropic partnerships',
    contact: 'funding@ejsmc.org',
  },
  {
    icon: Building2,
    title: 'Partnership Inquiries',
    description: 'Academic collaborations, research partnerships, training programs',
    contact: 'partnerships@ejsmc.org',
  },
];

const teamContacts = [
  {
    role: 'Executive Leadership',
    detail: 'CEO, CMO, COO (Positions in recruitment)',
    contact: 'leadership@ejsmc.org',
  },
  {
    role: 'Clinical Services',
    detail: 'Treatment programs, patient admissions',
    contact: 'clinical@ejsmc.org',
  },
  {
    role: 'Development & Fundraising',
    detail: 'Capital campaign, grant applications',
    contact: 'development@ejsmc.org',
  },
];

export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-display-md mb-6">Contact EJSMC</h1>
            <p className="text-body-lg text-slate-300">
              For referral information, partnership opportunities, funding inquiries, or general information about El Jefe's Strategic Mind Center.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Get In Touch</h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Contact the appropriate department for your inquiry.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-heading-md">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <a
                      href={`mailto:${category.contact}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {category.contact}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-foreground mb-4">Department Contacts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamContacts.map((team) => (
              <Card key={team.role} className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-1">{team.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{team.detail}</p>
                  <a
                    href={`mailto:${team.contact}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {team.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Information */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2">
            <CardHeader>
              <CardTitle className="text-heading-lg">Facility Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">California (Flagship Facility - Site Selection In Progress)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Proposed locations: Los Angeles, San Francisco Bay Area, Sacramento, San Diego regions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">Contact information available upon request</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Facility in pre-operational development phase (2026-2027)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">General Inquiries</h3>
                    <a
                      href="mailto:info@ejsmc.org"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      info@ejsmc.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 text-sm">Facility Status</h3>
                <p className="text-xs text-muted-foreground">
                  EJSMC is currently in pre-operational development. The facility will be fully licensed by the California Department of Public Health (CDPH), accredited by The Joint Commission, and certified for Medicare/Medicaid upon completion. Anticipated operational launch: 2027-2028.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comment Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <CommentSection pageUrl="/contact" title="Share Your Thoughts" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-sm mb-6">Interested in Learning More?</h2>
            <p className="text-body-lg mb-8 text-white/90">
              We welcome inquiries from courts, mental health agencies, corrections departments, investors, and community stakeholders. Contact us to discuss referral protocols, partnership opportunities, or funding participation.
            </p>
            <a
              href="mailto:info@ejsmc.org"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Us an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
