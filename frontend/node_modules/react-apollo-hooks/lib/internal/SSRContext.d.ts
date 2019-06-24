/// <reference types="react" />
export interface SSRManager {
    hasPromises(): boolean;
    register(promise: PromiseLike<any>): void;
    consumeAndAwaitPromises(): Promise<any>;
}
export declare function createSSRManager(): SSRManager;
export declare const SSRContext: import("react").Context<SSRManager | null>;
