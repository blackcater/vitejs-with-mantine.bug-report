/// <reference types="react" />
export declare type ComponentPassThrough<T extends React.ElementType, Props> = React.ComponentPropsWithoutRef<T> & {
    /** Element or component that will be used as root element */
    component?: T;
} & Props;
export declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
declare type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;
export declare type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
export {};
//# sourceMappingURL=index.d.ts.map