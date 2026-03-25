import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  facility: [
    { name: 'About EJSMC', path: '/about' },
    { name: 'Treatment Model', path: '/treatment' },
    { name: 'Diagnostics Framework', path: '/diagnostics' },
    { name: 'Implementation Plan', path: '/implementation' },
  ],
  resources: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Professional Referrals', path: '/contact' },
    { name: 'Funding Opportunities', path: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">El Jefe's Strategic Mind Center</div>
                <div className="text-xs text-slate-400">EJSMC</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-md mb-6">
              A secure forensic psychiatric treatment facility designed for adults with severe personality disorders, providing evidence-based treatment and continuous clinical monitoring.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>California (Flagship Facility - Proposed)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Contact: (Information Available Upon Request)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@ejsmc.org</span>
              </div>
            </div>
          </div>

          {/* Facility Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Facility Information</h3>
            <ul className="space-y-2">
              {navigation.facility.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} El Jefe's Strategic Mind Center. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Proposed Facility - Licensed & Accredited Upon Completion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
