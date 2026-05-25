export type Card = {
    key: string;
    title: string;
    author_name?: string[];
    description?: string[];
  };
  
  export type CardsResponse = {
    numFound: number;
    docs: Card[];
  };
  