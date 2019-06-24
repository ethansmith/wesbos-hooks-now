export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function objToKey<T extends Record<string, any>>(obj: T): T | string;
export declare function isPromiseLike<T>(value: unknown): value is PromiseLike<T>;
export declare function compact(obj: any): any;
