export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  techStack: string[];
  features: string[];
  challenges: string;
  solutions: string;
  improvements: string;
  link: string;
  github: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "freelance-marketplace",
    title: "Freelance Marketplace",
    category: "Full Stack MERN Application",
    description: "A platform that connects clients and freelancers, making it easy to post projects, place bids, and collaborate efficiently.",
    fullDescription: "Freelance Marketplace is a MERN stack application built to simplify the process of finding freelance work and hiring skilled professionals. Clients can post projects, review bids, and hire freelancers, while freelancers can explore opportunities and manage their work through an intuitive dashboard.",
    image: "/freelance-marketplace.png",
    gallery: ["/freelance-marketplace.png"],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Authentication", "Tailwind CSS"],
    features: [
      "Project posting and bidding system",
      "Role-based authentication",
      "Project management dashboard",
      "Responsive design for all devices"
    ],
    challenges: "Designing a smooth bidding workflow and managing different user roles efficiently.",
    solutions: "Implemented secure authentication, protected routes, and optimized database queries for better performance.",
    improvements: "Add real-time messaging, payment integration, and freelancer rating features.",
    link: "https://freelance-marketplace-s.netlify.app/",
    github: "YOUR_GITHUB_LINK"
  },

  {
    slug: "colorcraft-bd",
    title: "ColorCraft BD",
    category: "E-Commerce / Next.js Application",
    description: "A modern handmade jewelry marketplace featuring authentication, product browsing, and responsive design.",
    fullDescription: "ColorCraft BD is an e-commerce platform designed for showcasing and selling handmade jewelry products. It provides a smooth shopping experience with authentication, product collections, responsive layouts, and modern UI design.",
    image: "/colorcraft.png",
    gallery: ["/colorcraft.png", "/colorcraft-2.png", "/colorcraft-3.png"],
    tags: ["Next.js", "MongoDB", "Firebase", "Tailwind CSS"],
    techStack: ["Next.js", "React", "MongoDB", "Firebase Authentication", "Tailwind CSS", "HeroUI"],
    features: [
      "User authentication and account management",
      "Product collections and category browsing",
      "Responsive mobile-first design",
      "Modern UI with optimized performance"
    ],
    challenges: "Managing image optimization, authentication flows, and responsive layouts across different devices.",
    solutions: "Implemented reusable components, optimized image handling, and structured application routing using Next.js App Router.",
    improvements: "Add shopping cart, wishlist, order tracking, and payment gateway integration.",
    link: "https://color-craft-bd.vercel.app/",
    github: "YOUR_GITHUB_REPOSITORY_LINK",
  },

  {
    slug: "ticketbari",
    title: "TicketBari - Event Ticket Booking Platform",
    category: "MERN Application",
    description: "A comprehensive event ticket booking platform with vendor management, booking systems, and payment integration.",
    fullDescription: "TicketBari is a MERN-based event management and ticket booking platform. Vendors can create and manage events while users can browse, book tickets, and complete payments securely. The platform includes administrative controls, analytics, and booking management features.",
    image: "/ticketbari.png",
    gallery: ["/ticketbari.png", "/ticketbari-2.png", "/ticketbari-3.png"],
    tags: ["React", "Express", "MongoDB", "Firebase", "Stripe"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Authentication", "Stripe"],
    features: [
      "Event creation and management",
      "Ticket booking and reservation system",
      "Secure Stripe payment integration",
      "Admin and vendor dashboard management"
    ],
    challenges: "Handling booking workflows, payment processing, and maintaining secure user permissions.",
    solutions: "Implemented protected APIs, optimized MongoDB queries, and integrated Stripe for secure transactions.",
    improvements: "Add QR-based ticket validation, event analytics, mobile app support, and real-time notifications.",
    link: "https://ticket-booking-platform-92d4d.web.app/",
    github: "YOUR_GITHUB_REPOSITORY_LINK",
  },

];
