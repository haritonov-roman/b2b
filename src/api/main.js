import { fetchData } from '@/api'

export const fetchIssuesData = ({ first }) => {
  const query = `
    query {
      repository(owner: "vuejs", name: "vue") {
        openIssues: issues(
          states: OPEN
          orderBy: {field: CREATED_AT, direction: DESC}
          first: ${first}
        ) {
          totalCount
          nodes {
            id
            createdAt
            title
            state
            comments {
              totalCount
            }
            publishedAt
            number
            labels(first: 10) {
              nodes {
                name
              }
            }
            author {
              login
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  `

  return fetchData(query)
}
