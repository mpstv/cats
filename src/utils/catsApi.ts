export function getCatLink(catId: string) {
  return `https://cataas.com/cat/${catId}`
}

export async function fetchCat() {
  const response = await fetch('https://cataas.com/cat?json=true')
  const json = await response.json()

  return json?.id
}
