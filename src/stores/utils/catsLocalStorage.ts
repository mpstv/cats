const favoritesCatsKey = 'favoritesCats'

export function getCats(): string[] {
  return JSON.parse(localStorage.getItem(favoritesCatsKey) ?? '[]')
}

export function setCats(cats: string[]) {
  localStorage.setItem(favoritesCatsKey, JSON.stringify(cats))
}
