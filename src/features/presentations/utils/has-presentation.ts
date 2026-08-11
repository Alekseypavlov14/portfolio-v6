import { projectPresentations } from '@/app/data/presentations'

export function hasPresentation(slug: string): boolean {
  return Boolean(projectPresentations.find(presentation => presentation.slug === slug))
}
