import { projectPresentations, type ProjectPresentation } from '@/data/presentations'
import type { Nullable } from '@/shared/types/nullable'

export function getPresentation(slug: string): Nullable<ProjectPresentation> {
  return projectPresentations.find(presentation => presentation.slug === slug) ?? null
}
