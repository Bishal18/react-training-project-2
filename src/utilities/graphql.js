//Shubham

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import config from '../configs/config';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: config.baseGraphqlApiUrl
})
const graphqlClient = new ApolloClient({
    cache,
    link
})

export default graphqlClient;