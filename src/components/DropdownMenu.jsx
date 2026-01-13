import { useState, useRef } from 'react';
import { themeClasses } from '../constants/theme';

/**
 * DropdownMenu - A reusable dropdown menu component.
 *
 * Props:
 *   label: string - The button label for the dropdown.
 *   options: Array<{ label: string, action: function, key?: string|number, className?: string }> - List of options and their actions.
 *   className: string - Optional extra classes for the wrapper div.
 *   buttonClass: string - Optional extra classes for the button.
 *   menuClass: string - Optional extra classes for the dropdown menu.
 *   menuWidth: string - Optional width for the dropdown menu (default: w-56).
 *   rounded: string - Optional rounded class for menu (default: rounded-xl).
 *   shadow: string - Optional shadow class for menu (default: shadow-lg).
 *   selectedKey: string|number - The key of the currently selected option (for active styling).
 *
 * Example usage:
 *   <DropdownMenu
 *     label="Projects"
 *     options={[
 *       { label: 'Project 1', action: () => navigate('/projects/1') },
 *       { label: 'Project 2', action: () => navigate('/projects/2') },
 *     ]}
 *     buttonClass="..."
 *     menuClass="..."
 *   />
 *
 * Each option should provide a label and an action function to be called when selected.
 */
function DropdownMenu({
  label,
  options,
  className = '',
  buttonClass = '',
  menuClass = '',
  menuWidth = 'w-56',
  rounded = 'rounded-xl',
  shadow = 'shadow-lg',
  selectedKey,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  function handleBlur(e) {
    if (!menuRef.current.contains(e.relatedTarget)) {
      setOpen(false);
    }
  }

  const isActive = selectedKey !== undefined && options.some(opt => String(opt.key) === String(selectedKey));
  const buttonColor = isActive
    ? `${themeClasses.bg.primaryContainer} ${themeClasses.text.primaryContainer}`
    : open
      ? `${themeClasses.text.dark} ${themeClasses.bg.neutralContainer}`
      : `${themeClasses.text.dark} bg-transparent hover:${themeClasses.bg.neutralContainer} hover:${themeClasses.text.dark}`;

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      {/* Dropdown trigger button */}
      <button
        className={`px-4 py-3 rounded-full transition-colors duration-150 inline-flex items-center gap-1.5 focus:outline-none ${buttonColor} ${buttonClass}`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        onBlur={handleBlur}
      >
        <span className="leading-none flex items-center">{label}</span>
        {/* Dropdown indicator chevron: quick 180° rotation, tightly aligned */}
        <span aria-hidden="true" className="flex items-center" style={{marginTop: '1px'}}>
          <svg
            width="16" height="16" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-150 ease-in-out ${open ? 'rotate-180' : ''}`}
            style={{display: 'block'}}
          >
            <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {/* Dropdown menu */}
      {open && (
        <div
          className={`absolute left-0 mt-2 ${menuWidth} ${rounded} ${shadow} z-20 bg-white border border-neutral-200 overflow-hidden ${menuClass}`}
        >
          <ul role="menu" aria-label={label}>
            {options.map((option, idx) => {
              const isSelected = selectedKey !== undefined && String(option.key) === String(selectedKey);
              return (
                <li key={option.key || idx}>
                  {/* Each option is a button that calls option.action when clicked */}
                  <button
                    className={
                      option.className ||
                      `block px-4 py-2 text-left w-full transition-colors duration-100 ${
                        isSelected ? `${themeClasses.bg.neutralContainer}` : ''
                      }`
                    }
                    style={
                      !isSelected
                        ? { transition: 'background-color 0.1s', backgroundColor: undefined }
                        : undefined
                    }
                    onMouseEnter={e => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(245, 245, 245, 0.5)';
                    }}
                    onMouseLeave={e => {
                      if (!isSelected) e.currentTarget.style.backgroundColor = '';
                    }}
                    onClick={() => {
                      setOpen(false);
                      option.action();
                    }}
                    tabIndex={0}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;