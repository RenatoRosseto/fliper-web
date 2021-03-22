import {
  ApolloClient, InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'fliperdevtest2020'
  },
  cache: new InMemoryCache()
})

export default client