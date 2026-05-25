import type { CardsResponse } from "./types";
export type Filters = {
    search: string;
    subject: string;
    language: string;
    onlyCovers: boolean;
};
export declare function buildSearchUrl(filters: Filters): string;
export declare function fetchCards(filters: Filters, signal?: AbortSignal): Promise<BooksResponse>;
