// src/constants/projects.js
export const projects = [
  {
    id: 1,
    title: 'Bookstore Desktop Application',
    shortDescription:
      "Python desktop app for bookstore management with customer and manager roles. Secure REST API and JWT role-based authentication.",
    description: [
      'This bookstore app is a full‑stack Python project that simulates a small bookstore with separate customer and manager experiences. It uses a desktop GUI client that talks to a Flask REST API backed by a MySQL database, with JWT‑based authentication and role‑based authorization to keep customer and manager actions separate.',
      'Customers can search and filter books, view details, add items to an order as rentals or purchases, and check out, with the system generating simple HTML bills and sending them via an SMTP email service. Managers can add and update books, manage authors, review orders by payment status, and mark orders as completed, all on top of a relational schema with migrations, seeding scripts using Faker, and indexes added to keep common queries and filters fast as data grows.'
    ],
    stack: ['Python', 'MySQL', 'SqlAlchemy', 'Flask'],
    flags: ['Course Project'],
    meta: [
      {label: 'Timeline', value: '3 weeks'},
      {label: 'Role', value: 'Full-Stack Developer'},
      {label: 'Project', value: "Course Project for TAMU CSCE 310"}
    ],
    problemDefinition: "Small bookstores need a simple way to manage inventory, sales, and customer records without expensive or complex software.",
    painPoints: [
      "Manual tracking leads to errors and lost sales"
    ],
    constraints: [
      "Must be a desktop application (not web-based)",
      "Must support multiple user roles with secure access controls"
    ],
    solution: "Developed a Python desktop application with a GUI for both customers and managers, connected to a secure Flask REST API and MySQL database. Implemented role-based authentication and authorization, and provided features for inventory, sales, and customer management.",
    whatILearned: [
      "How to design and implement secure role-based authentication with JWT",
      "Building a desktop GUI that interacts with a REST API",
      "Managing relational data and optimizing queries for performance"
    ],
    process: [
      {
        label: "Database Design",
        bullets: ["Designed the database schema with relationships and indexes"]
      },
      {
        label: "Rest API Development",
        bullets: ["Developed the REST API endpoints and integrated with the database", 
        "Implemented JWT authentication and role-based access control", 
        "Tested API endpoints with Postman"
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Panda Express POS System Web App',
    shortDescription:
      "POS web app for a Panda Express–style restaurant, built with agile sprints and accessibility in mind. Supports multiple user roles and workflows.",
    description: [
      'Built a full‑stack point‑of‑sale web app for a Panda Express–style restaurant, with a RESTful API, normalized relational database, and third‑party integrations for authentication, translation, and weather. The system supports multiple user types, including cashiers, customers, managers, and kitchen staff, with tailored workflows for each.',
      'This 1.5‑month course project followed Agile practices with three sprints and two user studies. I served as scrum master and led development of core features such as authentication, the kitchen order queue, and a high‑contrast accessibility mode aligned with WCAG 2.1 for users relying on screen readers and screen magnification.'
    ],
    stack: ['Next.js', 'PostgreSQL', 'React', 'TailwindCSS', 'Agile Development'],
    flags: ['Course Project'],
    meta: [
      {label: 'Timeline', value: '1.5 months'},
      {label: 'Role', value: 'Scrum Master / Full-Stack Developer'},
      {label: 'Team', value: '5 students'},
      {label: 'Project', value: "Course Project for TAMU CSCE 331"}
    ],
    problemDefinition: "Fast food chains require a reliable, easy-to-use point-of-sale system that supports quick order entry and payment processing.",
    painPoints: [
      "Many competitor POS systems have customer kiosks, which Panda Express lacks",
      "Accessibility features are often overlooked in POS systems"
    ],
    constraints: [
      "Must support multiple user roles with distinct workflows",
      "Must be accessible to users with disabilities guided by the disability personas defined in class"
    ],
    solution: "Built a full-stack POS web app with tailored workflows for cashiers, managers, kitchen staff, and customers. Integrated accessibility features and third-party services for authentication and translation. Followed Agile development with sprints and user studies.",
    whatILearned: [
      "Implementing accessibility features for web apps (WCAG 2.1)",
      "Managing Agile sprints and user feedback",
      "Integrating third-party APIs for authentication and translation",
      "Designing multi-role workflows in a POS system"
    ],
    process: [
      {
        label: "User Personas & Accessibility",
        bullets: ["Defined user personas and accessibility requirements"]
      },
      {
        label: "Agile Sprints",
        bullets: ["Planned and executed three 1-2 week Agile sprints"]
      },
      {
        label: "User Studies & Iteration",
        bullets: ["Conducted user studies and iterated on feedback after each sprint"]
      }
    ]
  },
  {
    id: 3,
    title: 'Loam: Grocery & Expiration Tracking',
    shortDescription:
      "Track groceries and expiration dates to reduce food waste. Built for learning fullstack and version control.",
    description: [
      "Loam started from a simple problem: it’s easy to forget what’s in your fridge and when it expires. I began exploring a solution as a native Android app, then moved the project to the web to iterate faster between semesters and make it easier to access across devices.",
      "The current version focuses on tracking groceries, expiration dates, and reminders so users can waste less food and plan meals more easily. This project has been my sandbox for learning full‑stack development and what it takes to shape a product from scratch."
    ],
    stack: ['Node.js', 'PostgreSQL', 'Express', 'React', 'Typescript'],
    flags: ['In Progress', 'Personal Project'],
    meta: [
      {label: 'Timeline', value: 'Ongoing'},
      {label: 'Role', value: 'Full-Stack Developer'},
      {label: 'Team', value: 'Project with guidance from mentor'},
      {label: 'Project', value: 'Personal Project'}
    ],
    problemDefinition: "People often lose track of what groceries they have and when they expire, leading to wasting food and money.",
    painPoints: [
      "Manual tracking is tedious and error-prone"
    ],
    constraints: [
      "Should work for both individuals and households",
      "Needs to scan or input items quickly (barcode or manual entry)",
      "Needs to send timely reminders before expiration"
    ],
    solution: "Loam is currently under development as a learning project. The backend and PostgreSQL database are partially completed, and the frontend is just starting. The project began as an introduction to databases, APIs, and full-stack development.",
    whatILearned: [
      "Basics of database design and writing SQL queries",
      "How to create API endpoints and follow backend conventions",
      "Using Git with branches for version control",
      "Introductory full-stack development concepts"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription:
      "Modern portfolio site to showcase my work and skills. Designed for quick updates and easy navigation.",
    stack: ["React", "Vite", "Tailwind CSS"],
    description: [
      "A personal portfolio site to showcase my projects, skills, and experience.",
      "Built with a focus on quick iteration, modern design, and easy content updates."
    ],
    image: "/portfolio-figma-iterations.png",
    flags: ["In Progress"]
  }
];
