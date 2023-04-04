import { GQL_API } from '../constants';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: GQL_API,
	cache: new InMemoryCache()
});
