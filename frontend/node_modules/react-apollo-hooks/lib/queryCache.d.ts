import ApolloClient, { ObservableQuery, WatchQueryOptions } from 'apollo-client';
export declare function getCachedObservableQuery<TData, TVariables>(client: ApolloClient<any>, options: WatchQueryOptions<TVariables>): ObservableQuery<TData, TVariables>;
export declare function invalidateCachedObservableQuery<TVariables>(client: ApolloClient<any>, options: WatchQueryOptions<TVariables>): void;
