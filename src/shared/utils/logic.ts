export function first<T>(checkers: ([ boolean, () => T ])[], fallback: T) {
  for (let i = 0; i < checkers.length; i++) {
    const [ condition, result ] = checkers[i]
    if (condition) return result()
  }

  return fallback
}
