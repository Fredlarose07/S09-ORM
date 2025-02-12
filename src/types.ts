
export type OrderBy = {
    column: string;
    direction: "ASC" | "DESC";
};

export type WhereClause<T> = Partial<Record<keyof T, string | number | boolean>>;

export type SelectQueryParams<T> = {
    tableName: string;
    fields: (keyof T)[];
    where?: WhereClause<T>;
    orderBy?: OrderBy;
    limit?: number;
};

