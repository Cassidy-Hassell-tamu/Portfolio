
const base = import.meta.env.BASE_URL || '/';

// Best practice: SVG as React components for color control
function GitHubIcon({ className = "w-8 h-8", fill = "white" }) {
    return (
        <svg width="32" height="32" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            <g clipPath="url(#clip0)"><path d="M41.44 69.38C28.81 67.85 19.91 58.76 19.91 46.99c0-4.79 1.72-9.96 4.59-13.4-1.24-3.16-1.05-9.86.39-12.63 3.83-.48 8.99 1.53 12.06 4.31C40.58 24.12 44.41 23.54 49.1 23.54c4.69 0 8.5.57 11.96 1.63 2.97-2.68 8.23-4.68 12.05-4.2 1.34 2.58 1.53 9.26.29 12.48 3.06 3.64 4.69 8.52 4.69 13.5 0 11.77-8.9 20.67-21.72 22.3 3.25 2.1 5.45 6.7 5.45 11.94v9.95c0 2.87 2.39 4.5 5.26 3.36C84.41 87.95 98 70.63 98 49.19 98 22.11 75.99 0 48.9 0 21.82 0 0 22.11 0 49.19c0 21.25 13.49 38.86 31.68 45.46 2.58.96 5.07-.77 5.07-3.36v-7.66c-1.34.57-3.06.95-4.54.95-6.32 0-10.06-3.45-12.74-9.86-1.05-2.58-2.2-4.11-4.4-4.4-1.15-.1-1.53-.58-1.53-1.13 0-1.15 1.91-2.01 3.83-2.01 2.78 0 5.17 1.72 7.66 5.22 1.91 2.78 3.92 4.02 6.29 4.02 2.39 0 3.92-1.01 6.13-3.21 1.63-1.63 2.87-3.07 4.03-4.03z" fill={fill}/></g>
            <defs><clipPath id="clip0"><rect width="98" height="96" fill="white"/></clipPath></defs>
        </svg>
    );
}

function EnvelopeIcon({ className = "w-8 h-8", fill = "white" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill={fill} className={className} aria-hidden="true">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
        </svg>
    );
}

function SideBubble({ icon, link, label }) {
    return (
        <div className="w-12 h-12 rounded-full bg-secondaryContainer shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200">
            {label === 'Email' ? (
                <a href="mailto:cassidy.hassell@tamu.edu" aria-label="Email">{icon}</a>
            ) : (
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>{icon}</a>
            )}
        </div>
    );
}

export default function SideBubbles({ inline = false }) {
    // If inline, render row for mobile; else, fixed column for desktop
    return (
        <div
            className={
                inline
                    ? "flex flex-row gap-4 mt-4"
                    : "hidden md:flex flex-col gap-8 fixed top-1/3 left-4 z-50"
            }
        >
            <SideBubble icon={<GitHubIcon />} link="https://www.github.com/Cassidy-Hassell-tamu" label="GitHub" />
            <SideBubble icon={<img src={`${base}InBug-White.png`} alt="LinkedIn" className="w-8 h-8 object-contain" />} link="https://www.linkedin.com/in/cassidy-hassell/" label="LinkedIn" />
            <SideBubble icon={<EnvelopeIcon />} link="Email" label="Email" />
        </div>
    );
}