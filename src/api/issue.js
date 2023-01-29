import { fetchData } from '@/api/index'

export const fetchIssue = ({
  owner,
  name,
  number
}) => {
  const query = `
    query {
      repository(owner: "${owner}", name: "${name}") {
        issue(number: ${number}) {
          id
          author {
            login
          }
          publishedAt
          title
          closed
          comments {
            totalCount
          }
          labels(first: 10) {
            nodes {
              name
              color
            }
          }
          bodyHTML
          participants(first: 100) {
            nodes {
              avatarUrl
              url
            }
          }
        }
      }
    }
  `
  return fetchData(query)
}
