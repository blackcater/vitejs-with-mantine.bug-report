/// <reference types="react" />
export declare function useListState<T>(initialValue?: T[]): readonly [T[], {
    readonly setState: import("react").Dispatch<import("react").SetStateAction<T[]>>;
    readonly append: (...items: T[]) => void;
    readonly prepend: (...items: T[]) => void;
    readonly insert: (index: number, ...items: T[]) => void;
    readonly apply: (fn: (item: T, index?: number) => T) => void;
    readonly remove: (...indices: number[]) => void;
    readonly reorder: ({ from, to }: {
        from: number;
        to: number;
    }) => void;
    readonly setItem: (index: number, item: T) => void;
    readonly setItemProp: <K extends keyof T, U extends T[K]>(index: number, prop: K, value: U) => void;
}];
//# sourceMappingURL=use-list-state.d.ts.map