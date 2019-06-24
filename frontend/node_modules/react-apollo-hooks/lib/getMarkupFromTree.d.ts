import * as React from 'react';
export interface GetMarkupFromTreeOptions {
    tree: React.ReactNode;
    onBeforeRender?: () => void;
    renderFunction: (tree: React.ReactElement<object>) => string;
}
export declare function getMarkupFromTree({ tree, onBeforeRender, renderFunction, }: GetMarkupFromTreeOptions): Promise<string>;
