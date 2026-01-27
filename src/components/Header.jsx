import { themeClasses } from '../constants/theme';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { projects } from '../constants/projects';
import DropdownMenu from './DropdownMenu';

const base = import.meta.env.BASE_URL || '/';

const navItems = [
  { name: 'About', to: `${base}` },
  // { name: 'Art & Design', to: `${base}art` },
  // { name: 'Contact', to: `${base}contact` },
];

import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Find selected project key from current route
  let selectedProjectKey = undefined;
  const match = location.pathname.match(new RegExp(`^${base}projects/(.+)$`));
  if (match) {
    selectedProjectKey = match[1];
  }
  return (
    <header className={themeClasses.bg.background}>
      <nav className="container mx-auto px-4 py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between relative">
          <NavLink
            to={`${base}`}
            className={() =>
              `${themeClasses.fontSize.name} font-bold ${themeClasses.text.dark} focus:outline-none rounded`
            }
            end
          >
            Cassidy Hassell
          </NavLink>
          {/* Hamburger for mobile only */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop nav only */}
          <div className="hidden md:flex gap-8 items-center relative">
            {/* About first */}
            <NavLink
              key={navItems[0].name}
              to={navItems[0].to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-colors duration-150 ` +
                (isActive
                  ? `${themeClasses.bg.primaryContainer} ${themeClasses.text.primaryContainer}`
                  : `${themeClasses.text.dark} bg-transparent hover:${themeClasses.bg.neutralContainer} hover:${themeClasses.text.dark}`)
              }
              end={navItems[0].to === base}
            >
              {navItems[0].name}
            </NavLink>
            {/* Projects dropdown second */}
            <DropdownMenu
              label="Projects"
              options={projects.map((project) => ({
                label: project.title,
                key: project.id,
                action: () => navigate(`${base}projects/${project.id}`),
              }))}
              selectedKey={selectedProjectKey}
            />
            {/* Render rest of nav items */}
            {navItems.slice(1).map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-colors duration-150 ` +
                  (isActive
                    ? `${themeClasses.bg.primaryContainer} ${themeClasses.text.primaryContainer}`
                    : `${themeClasses.text.dark} bg-transparent hover:${themeClasses.bg.neutralContainer} hover:${themeClasses.text.dark}`)
                }
                end={to === base}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
        {/* Mobile nav overlay system */}
        {mobileOpen && (
          <div className="md:hidden fixed left-0 right-0 top-0 w-full bg-white border-b border-neutral-200 shadow-lg z-50 animate-fade-in flex flex-col p-4">
            <div className="flex justify-end mb-2">
              <button
                aria-label="Close navigation menu"
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <NavLink
              key={navItems[0].name}
              to={navItems[0].to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full transition-colors duration-150 mb-2` +
                (isActive
                  ? ` ${themeClasses.bg.primaryContainer} ${themeClasses.text.primaryContainer}`
                  : ` ${themeClasses.text.dark} bg-transparent hover:${themeClasses.bg.neutralContainer} hover:${themeClasses.text.dark}`)
              }
              end={navItems[0].to === base}
              onClick={() => setMobileOpen(false)}
            >
              {navItems[0].name}
            </NavLink>
            <DropdownMenu
              label="Projects"
              options={projects.map((project) => ({
                label: project.title,
                key: project.id,
                action: () => {
                  setMobileOpen(false);
                  navigate(`${base}projects/${project.id}`);
                },
              }))}
              selectedKey={selectedProjectKey}
              menuWidth="w-full"
              className="w-full"
              buttonClass="w-full justify-between"
              menuClass="w-full"
              rounded="rounded-lg"
              shadow=""
            />
            {navItems.slice(1).map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full transition-colors duration-150 mb-2` +
                  (isActive
                    ? ` ${themeClasses.bg.primaryContainer} ${themeClasses.text.primaryContainer}`
                    : ` ${themeClasses.text.dark} bg-transparent hover:${themeClasses.bg.neutralContainer} hover:${themeClasses.text.dark}`)
                }
                end={to === base}
                onClick={() => setMobileOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

