export function withBase(path) {
  if (!path) return path
  if (path.startsWith('http')) return path
  const trimmed = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${trimmed}`
}
