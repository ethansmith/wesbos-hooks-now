import ApolloClient, { ApolloCurrentResult, ApolloQueryResult, FetchMoreOptions, FetchMoreQueryOptions, NetworkStatus, ObservableQuery, OperationVariables, QueryOptions } from 'apollo-client';
import { DocumentNode } from 'graphql';
import { Omit } from './utils';
export interface QueryHookState<TData> extends Pick<ApolloCurrentResult<undefined | TData>, 'error' | 'errors' | 'loading' | 'partial'> {
    data?: TData;
    networkStatus: NetworkStatus | undefined;
}
export interface QueryHookOptions<TVariables, TCache = object> extends Omit<QueryOptions<TVariables>, 'query'> {
    notifyOnNetworkStatusChange?: boolean;
    pollInterval?: number;
    client?: ApolloClient<TCache>;
    ssr?: boolean;
    skip?: boolean;
    suspend?: boolean;
}
export interface QueryHookResult<TData, TVariables> extends QueryHookState<TData>, Pick<ObservableQuery<TData, TVariables>, 'refetch' | 'startPolling' | 'stopPolling' | 'updateQuery'> {
    fetchMore<K extends keyof TVariables>(fetchMoreOptions: FetchMoreQueryOptions<TVariables, K> & FetchMoreOptions<TData, TVariables>): Promise<ApolloQueryResult<TData>>;
}
export declare function useQuery<TData = any, TVariables = OperationVariables, TCache = object>(query: DocumentNode, { ssr, skip, suspend, pollInterval, notifyOnNetworkStatusChange, client: overrideClient, context, metadata, variables, fetchPolicy: actualCachePolicy, errorPolicy, fetchResults, }?: QueryHookOptions<TVariables, TCache>): QueryHookResult<TData, TVariables>;
