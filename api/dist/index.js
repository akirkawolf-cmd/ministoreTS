var e = "https://ministore.org/search.json";
function t(t) {
	let n = new URLSearchParams({
		q: t.search.trim() || "cards",
		fields: "key,title,description,",
		limit: "12"
	});
	
}
async function n(e, n) {
	let r = await fetch(t(e), { signal: n });
	if (!r.ok) throw Error("Ошибка");
	return r.json();
}

export { t as buildSearchUrl, n as fetchCards };
