
import { OrderBy, WhereClause, SelectQueryParams } from "./types";

export class QueryBuilder {
    static buildSelectQuery<T>({
        tableName,
        fields,
        where,
        orderBy,
        limit
    }: SelectQueryParams<T>): string {
        let query = `SELECT ${fields.join(", ")} FROM ${tableName}`;

        if (where && Object.keys(where).length > 0) {
            const conditions = Object.entries(where)
                .map(([key, value]) =>
                    typeof value === "string" ? `${key} = '${value}'` : `${key} = ${value}`
                )
                .join(" AND ");
            query += ` WHERE ${conditions}`;
        }

        if (orderBy) {
            query += ` ORDER BY ${orderBy.column} ${orderBy.direction}`;
        }

        if (limit) {
            query += ` LIMIT ${limit}`;
        }

        return query;
    }
}
