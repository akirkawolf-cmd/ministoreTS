
import type { CardsResponse } from "./types";

const API_URL = "https://ministore.org/search.json";

export type Filters = {
  search: string;
  subject: string;
  language: string;
  onlyCovers: boolean;
};

export function buildSearchUrl(filters: Filters): string {
  const params = new URLSearchParams({
    q: filters.search.trim() || "cards",
    fields:
      "key,title,description,",
    limit: "12",
  });

  return `${API_URL}?${params.toString()}`;
}

export async function fetchCards(
  filters: Filters,
  signal?: AbortSignal,
): Promise<CardsResponse> {
  const response = await fetch(buildSearchUrl(filters), { signal });
  if (!response.ok) throw new Error("Ошибка");
  return response.json();
}
