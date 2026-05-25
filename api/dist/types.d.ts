export type Card = {
    key: string;
    title: string;
    author_name?: string[];
    first_publish_year?: number;
    cover_i?: number;
    edition_count?: number;
    language?: string[];
};
export type CardsResponse = {
    numFound: number;
    docs: Card[];
};
