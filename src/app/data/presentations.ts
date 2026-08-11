export interface ProjectPresentation {
  slug: string
  pages: ProjectPresentationPage[]
}

export interface ProjectPresentationPage {
  link: string
  title: string
  description: string
  image: string
}

export const projectPresentations: ProjectPresentation[] = [
  {
    slug: 'data-xata',
    pages: [
      {
        link: '/',
        title: 'Home page',
        description: 'Welcomes users and provides advanced product search functionality.',
        image: '/images/presentations/data-xata/home.webp',
      },
      {
        link: '/search',
        title: 'Search page',
        description: 'Offers advanced filtering and sorting options organized in a convenient sidebar.',
        image: '/images/presentations/data-xata/search.webp',
      },
      {
        link: '/details',
        title: 'Details page',
        description: 'Displays comprehensive information about a selected product.',
        image: '/images/presentations/data-xata/details.webp',
      },
      {
        link: '/order',
        title: 'Order page',
        description: 'Summarizes the current order and provides multiple payment options.',
        image: '/images/presentations/data-xata/order.webp',
      },
      {
        link: '/article',
        title: 'Article page',
        description: 'Showcases a blog article with a clean and readable layout.',
        image: '/images/presentations/data-xata/article.webp',
      },
      {
        link: '/404',
        title: '404 page',
        description: 'Displays a user-friendly page when the requested resource is not found.',
        image: '/images/presentations/data-xata/404.webp',
      },
    ],
  },

  {
    slug: 'challenge-group',
    pages: [
      {
        link: '/',
        title: 'Home page',
        description: 'Introduces the insurance agency and showcases its services with smooth animations.',
        image: '/images/presentations/challenge-group/home.webp',
      },
      {
        link: '/reinsurance',
        title: 'Reinsurance page',
        description: 'Presents detailed information about the agency’s reinsurance services.',
        image: '/images/presentations/challenge-group/reinsurance.webp',
      },
    ],
  },
]
