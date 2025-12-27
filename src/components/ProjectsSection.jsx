import SectionContainer from './SectionContainer'
import SectionHeading from './SectionHeading'
import ProjectHighlight from './ProjectHighlight'

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Bookstore Desktop Application',
      description: 
        ['This bookstore app is a full‑stack Python project that simulates a small bookstore with separate customer and manager experiences. It uses a desktop GUI client that talks to a Flask REST API backed by a MySQL database, with JWT‑based authentication and role‑based authorization to keep customer and manager actions separate.',
          'Customers can search and filter books, view details, add items to an order as rentals or purchases, and check out, with the system generating simple HTML bills and sending them via an SMTP email service. Managers can add and update books, manage authors, review orders by payment status, and mark orders as completed, all on top of a relational schema with migrations, seeding scripts using Faker, and indexes added to keep common queries and filters fast as data grows.'
        ],
      stack: ['Python', 'MySQL', 'SqlAlchemy', 'Flask']
    },
    {
      id: 2,
      title: 'Panda Express POS System Web App',
      description: 
        ['Built a full‑stack point‑of‑sale web app for a Panda Express–style restaurant, with a RESTful API, normalized relational database, and third‑party integrations for authentication, translation, and weather. The system supports multiple user types, including cashiers, customers, managers, and kitchen staff, with tailored workflows for each.',
          'This 1.5‑month course project followed Agile practices with three sprints and two user studies. I served as scrum master and led development of core features such as authentication, the kitchen order queue, and a high‑contrast accessibility mode aligned with WCAG 2.1 for users relying on screen readers and screen magnification.'
        ],
      stack: ['Next.js', 'PostgreSQL', 'React', 'TailwindCSS', 'Agile Development']
    },
    {
      id: 3,
      title: 'Loam: Grocery & Expiration Tracking',
      description: 
        ["Loam started from a simple problem: it’s easy to forget what’s in your fridge and when it expires. I began exploring a solution as a native Android app, then moved the project to the web to iterate faster between semesters and make it easier to access across devices.",
          "The current version focuses on tracking groceries, expiration dates, and reminders so users can waste less food and plan meals more easily. This project has been my sandbox for learning full‑stack development and what it takes to shape a product from scratch."
        ],
      stack: ['Node.js', 'PostgreSQL', 'Express', 'React', 'Typescript']
    }
  ]

  return (
    <SectionContainer id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectHighlight
            key={project.id}
            title={project.title}
            stack={project.stack}
            description={project.description}
            image={project?.image}
          />
        ))}
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection

