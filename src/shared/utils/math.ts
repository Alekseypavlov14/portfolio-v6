export function findMaxIndex(numbers: number[]) {
  if (!numbers.length) return -1

  const max = Math.max(...numbers)
  return numbers.findIndex((element) => element === max)
}

export function clamp(min: number, value: number, max: number) {
  if (min >= value) return min
  if (max <= value) return max
  return value
}

export function normalize(value: number) {
  return clamp(0, value, 1)
}
