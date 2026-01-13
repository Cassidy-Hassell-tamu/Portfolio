import { themeClasses } from '../constants/theme';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { projects } from '../constants/projects';
import DropdownMenu from './DropdownMenu';

const navItems = [
  { name: 'About', to: '/' },
  { name: 'Art & Design', to: '/art' },
  { name: 'Contact', to: '/contact' },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  // Find selected project key from current route
  let selectedProjectKey = undefined;
  const match = location.pathname.match(/^\/projects\/(.+)$/);
  if (match) {
    selectedProjectKey = match[1];
  }
  return (
    <header className={themeClasses.bg.background}>
      <nav className="container mx-auto px-4 py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${themeClasses.fontSize.navigation} font-bold ${themeClasses.text.dark} focus:outline-none rounded`
            }
            end
          >
            Cassidy Hassell
          </NavLink>
          <div className="flex gap-8 items-center relative">
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
              end={navItems[0].to === '/'}
            >
              {navItems[0].name}
            </NavLink>
            {/* Projects dropdown second */}
            <DropdownMenu
              label="Projects"
              options={projects.map((project) => ({
                label: project.title,
                key: project.id,
                action: () => navigate(`/projects/${project.id}`),
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
                end={to === '/'}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

