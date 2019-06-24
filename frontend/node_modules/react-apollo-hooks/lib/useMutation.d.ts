import { DataProxy } from 'apollo-cache';
import ApolloClient, { MutationOptions, OperationVariables } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { DocumentNode } from 'graphql';
import { Omit } from './utils';
export declare type MutationUpdaterFn<TData = Record<string, any>> = (proxy: DataProxy, mutationResult: FetchResult<TData>) => void;
export interface BaseMutationHookOptions<TData, TVariables> extends Omit<MutationOptions<TData, TVariables>, 'mutation' | 'update'> {
    update?: MutationUpdaterFn<TData>;
}
export interface MutationHookOptions<TData, TVariables, TCache = object> extends BaseMutationHookOptions<TData, TVariables> {
    client?: ApolloClient<TCache>;
}
export declare type MutationFn<TData, TVariables> = (options?: BaseMutationHookOptions<TData, TVariables>) => Promise<FetchResult<TData>>;
export declare function useMutation<TData, TVariables = OperationVariables, TCache = object>(mutation: DocumentNode, { client: overrideClient, ...baseOptions }?: MutationHookOptions<TData, TVariables, TCache>): MutationFn<TData, TVariables>;
