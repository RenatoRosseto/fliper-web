import { gql } from '@apollo/client'

export const wealthSummary = gql`
  query {
    wealthSummary {
      id
      hasHistory
      total
      profitability
      cdi
      gain
    }
  }
`
