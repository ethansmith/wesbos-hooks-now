import { ApolloClient, ApolloError, OperationVariables, SubscriptionOptions } from 'apollo-client';
import { DocumentNode } from 'graphql';
import { Omit } from './utils';
export declare type OnSubscriptionData<TData> = (options: OnSubscriptionDataOptions<TData>) => any;
export interface OnSubscriptionDataOptions<TData> {
    client: ApolloClient<any>;
    subscriptionData: SubscriptionHookResult<TData>;
}
export interface SubscriptionHookOptions<TData, TVariables, TCache = object> extends Omit<SubscriptionOptions<TVariables>, 'query'> {
    skip?: boolean;
    onSubscriptionData?: OnSubscriptionData<TData>;
    client?: ApolloClient<TCache>;
}
export interface SubscriptionHookResult<TData> {
    data?: TData;
    error?: ApolloError;
    loading: boolean;
}
export declare function useSubscription<TData = any, TVariables = OperationVariables, TCache = object>(query: DocumentNode, { onSubscriptionData, client: overrideClient, ...options }?: SubscriptionHookOptions<TData, TVariables, TCache>): SubscriptionHookResult<TData>;
