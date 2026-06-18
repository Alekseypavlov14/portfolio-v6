export interface Project {
  slug: string
  link: string

  image: string
  title: string
  date: string
  technologies: string
  description: string
}

export const projects: Project[] = [
  {
    slug: 'data-xata',
    link: 'https://data-xata.netlify.app',

    image: '/images/portfolio/data-xata.jpg',
    title: 'Data Xata - Cloud computing',
    date: '10 May 2026',
    technologies: 'React, TypeScript, Next JS',
    description: `
      A cloud infrastructure platform that provides a wide range of hosting 
      and computing services with flexible server configuration options. 
      Users can customize resources to meet their specific requirements 
      while managing infrastructure through an intuitive and user-friendly 
      interface. Built with scalability, reliability, and performance in mind, 
      the platform simplifies the configuration and management of the server.
    `,
  },
  {
    slug: 'challenge-group',
    link: 'https://challenge-group.netlify.app',

    image: '/images/portfolio/challenge-group.jpg',
    title: 'Challenge Group - Insurance',
    date: '9 April 2026',
    technologies: 'HTML, CSS, JavaScript',
    description: `
      A modern landing page for a business insurance and consulting company, 
      designed to clearly present services, expertise, and value propositions 
      to potential clients. The website features a clean, professional design, 
      intuitive navigation, and responsive layouts that ensure a consistent 
      experience across devices. Built with a focus on user engagement, it 
      effectively communicates key information and encourages customer inquiries.
    `,
  },
  {
    slug: 'casa',
    link: 'https://casa-demo.netlify.app',

    image: '/images/portfolio/casa.jpg',
    title: 'Casa - Premium food',
    date: '24 January 2026',
    technologies: 'React, TypeScript, Next JS',
    description: `
      A website promoting homemade local food and delivery services, 
      designed to showcase authentic meals and encourage customer orders. The website 
      features an appealing visual layout, clear presentation of menu offerings, 
      and intuitive navigation to help users quickly explore available dishes and 
      delivery options. Built with a focus on responsiveness and user engagement, 
      it provides a smooth browsing experience across all devices.
    `,
  },
  {
    slug: 'aipie',
    link: 'https://aipie.netlify.app',

    image: '/images/portfolio/aipie.jpg',
    title: 'AiPie - AI Management',
    date: '12 July 2025',
    technologies: 'HTML, CSS, JavaScript',
    description: `
      An AI-powered management tool designed to support small businesses by automating 
      and simplifying administrative tasks. The landing page presents the product’s core 
      features, emphasizing how it can streamline operations, reduce manual workload, and 
      improve decision-making efficiency. Built with a clean and modern design, it focuses 
      on clear messaging and user engagement to effectively communicate the value of 
      AI-driven business management.
    `,
  },
  {
    slug: 'migration-human-resources',
    link: 'https://migration-human-resources.netlify.app',

    image: '/images/portfolio/migration-human-resources.jpg',
    title: 'Migration Human Resources',
    date: '10 October 2025',
    technologies: 'HTML, CSS, JavaScript',
    description: `
      A website for an international HR agency providing recruitment and workforce solutions 
      across multiple countries. It presents services such as talent sourcing, job placement, 
      and HR support for different industries, helping companies find qualified candidates and 
      manage hiring processes efficiently. The interface is designed to communicate professionalism 
      and trust while ensuring clear access to key information and services.
    `,
  },
  {
    slug: 'power-broker',
    link: 'https://power-broker.netlify.app',

    image: '/images/portfolio/power-broker.jpg',
    title: 'Power Broker - Trading',
    date: '17 March 2024',
    technologies: 'HTML, CSS, JavaScript',
    description: `
      A landing page presenting an automated trading tool designed to streamline and simplify 
      trading processes. It showcases the product’s key features, including automation capabilities, 
      real-time data processing, and strategy execution, aimed at helping users improve efficiency 
      in trading activities. The page is structured to communicate trust, clarity, and technical 
      reliability while encouraging user interest in the platform.
    `,
  }
]
