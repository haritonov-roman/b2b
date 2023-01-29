import { fetchData } from '@/api'

export const fetchIssues = ({ first = '', last = '', after = '', before = '' }) => {
  const query = `
    query {
      repository(owner: "vuejs", name: "vue") {
        openIssues: issues(
          states: OPEN
          orderBy: {field: CREATED_AT, direction: DESC}
          ${first ? `first: ${first}` : ''}
          ${last ? `last: ${last}` : ''}
          ${after ? `after: ${after}` : ''}
          ${before ? `before: ${before}` : ''}
        ) {
          totalCount
          nodes {
            id
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
                color
              }
            }
            author {
              login
            }
          }
        }
      }
    }
  `

  return fetchData(query)
}

export const fetchCursor = ({ first, after = '' }) => {
  const query = `
    {
      repository(owner: "vuejs", name: "vue") {
        openIssues: issues(
          states: OPEN
          orderBy: {field: CREATED_AT, direction: DESC}
          first: ${first}
          ${after ? `after: ${after}` : ''}
        ) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    }
  `
  return fetchData(query)
}
