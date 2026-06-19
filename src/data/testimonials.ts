export interface Testimonial {
  text: string
  author: string
  details: string
}

export const testimonials: Testimonial[] = [
  {
    text: `
      The contractor is very responsible. Every day, he reported on what had been done and showed me the progress. 
      Honestly, <b>I’ve never encountered this kind of approach before</b> — it’s very nice to see such a responsible attitude toward work.
      He implemented all of my revisions and handled every aspect of the front end.
      <b>I look forward to working with him again!</b>
    `,
    author: 'Volodymyr',
    details: 'Textile online store, 2026'
  },
  {
    text: `
      Thank you for the excellent work! The front-end developer created the homepage 
      for my review site <b>very quickly and to a high standard</b>. Everything looks polished, 
      fits the design, and the responsive layout works well, too. 
      <b>It’s a pleasure to work with someone so responsible</b>. I highly recommend them!
    `,
    author: 'Rostyslav',
    details: 'Medicine CRM service, 2025'
  },
  {
    text: `
      You completed the task very quickly — thank you for your work! 
      <b>I'll be reaching out again</b> as part of the project!
    `,
    author: 'Timur',
    details: 'Component library, React TypeScript, 2025'
  },
  {
    text: `
      The task was completed on time and to a high standard. Oleksii was always available. 
      He took a proactive approach! <b>I’ll definitely be working with him again!</b>
    `,
    author: 'Yuri',
    details: 'Landing page, 2025'
  },
  {
    text: `
      <b>A fantastic result for a reasonable price!</b> I can really tell Oleksii is experienced and professional; 
      he always offered suggestions on how best to approach a particular element and explained the reasoning behind his decisions. 
      <b>I really enjoyed working with Oleksii</b> — it’s easy and pleasant to communicate with him and make changes to the project. 
      <b>I highly recommend working with him</b> and will definitely reach out again!
    `,
    author: 'Timur',
    details: 'Crypto website, 2024'
  },
  {
    text: `
      This was my first time working with Oleksii, and <b>I'm very pleased with the quality of his work</b> 
      and his approach. Not only did he take all my requests regarding the website design into account, 
      but he also suggested new and interesting solutions. <b>I highly recommend him!</b>
    `,
    author: 'Ihor',
    details: 'Household devices store, 2024'
  },
  {
    text: `
      <b>A great professional</b> — everything is done quickly and efficiently, and he's always available.
    `,
    author: 'Yaroslav',
    details: 'Landing page, 2023'
  }
]
