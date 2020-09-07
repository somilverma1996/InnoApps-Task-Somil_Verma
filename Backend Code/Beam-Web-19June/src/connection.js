import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://api.beam.investments/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': 'superstrongbeampasswordthatnoonewillguess'
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
       fetchPolicy: 'network-only',
       errorPolicy: 'ignore',
    },
    query: {
       fetchPolicy: 'network-only',
       errorPolicy: 'all',
    }
  }
});


export default client;