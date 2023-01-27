const url = 'https://api.github.com/graphql'
const token = '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'

export const fetchData = async (query) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then((res) => res.json())
}
