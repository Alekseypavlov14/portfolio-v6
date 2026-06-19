export function isNumber(value: any): value is number {
  return Number.isFinite(value)
}

export function isString(value: any): value is string {
  return typeof value === 'string'
}
