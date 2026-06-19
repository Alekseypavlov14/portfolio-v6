export interface Testimonial {
  text: string
  author: string
  details: string
}

export const testimonials: Testimonial[] = [
  {
    text: `
      A modern, <b>responsive portfolio website</b> showcasing creative 
      and technical work with a clean, minimal design. It highlights 
      projects, skills, and experience through interactive sections 
      and smooth navigation. <b>Built for performance</b> and accessibility, 
      it provides a seamless user experience across devices while 
      reflecting a strong personal brand and professional identity.
    `,
    author: 'Alexander',
    details: 'Challenge Group, 2026'
  },
  {
    text: `
      The website exceeded our expectations. The interface is intuitive,
      visually appealing, and optimized for both desktop and mobile users.
      <b>Attention to detail</b> and thoughtful design choices helped us
      present our services in a professional and engaging way.
    `,
    author: 'Sophia Williams',
    details: 'Marketing Director, BrightVision'
  },
  {
    text: `
      Working together was a smooth and efficient experience. Every feature
      was implemented with care, and the final product delivered
      <b>excellent performance</b>, fast loading times, and a polished
      user experience that impressed our clients.
    `,
    author: 'Michael Chen',
    details: 'Founder, NovaTech Solutions'
  },
  {
    text: `
      From concept to deployment, the entire process was highly professional.
      The project was delivered on schedule and included several improvements
      beyond the original requirements. <b>The result feels modern,
      reliable, and future-proof.</b>
    `,
    author: 'Emma Johnson',
    details: 'Product Manager, Horizon Labs'
  },
  {
    text: `
      A remarkable combination of technical expertise and design thinking.
      The final website not only looks fantastic but also provides a
      <b>seamless experience across all devices</b>. We've received
      overwhelmingly positive feedback from our users.
    `,
    author: 'Daniel Rodriguez',
    details: 'CEO, Elevate Digital'
  },
  {
    text: `
      The ability to transform ideas into a polished product was impressive.
      Communication was clear throughout the project, and every milestone
      was completed with professionalism. <b>Highly recommended for
      modern web development projects.</b>
    `,
    author: 'Olivia Brown',
    details: 'Operations Lead, Apex Studio'
  },
  {
    text: `
      Our previous website felt outdated and difficult to maintain.
      The new solution is elegant, fast, and easy to manage. The focus on
      <b>usability, accessibility, and performance</b> made a significant
      difference to both our team and our customers.
    `,
    author: 'James Anderson',
    details: 'Managing Partner, Vertex Consulting'
  }
]
