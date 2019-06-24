import ApolloClient from 'apollo-client';
import { ReactElement, ReactNode } from 'react';
export interface ApolloProviderProps<TCacheShape> {
    readonly children?: ReactNode;
    readonly client: ApolloClient<TCacheShape>;
}
export declare function ApolloProvider<TCacheShape = any>({ client, children, }: ApolloProviderProps<TCacheShape>): ReactElement<ApolloProviderProps<TCacheShape>>;
export declare function useApolloClient<TCache = object>(overrideClient?: ApolloClient<TCache>): ApolloClient<TCache>;
