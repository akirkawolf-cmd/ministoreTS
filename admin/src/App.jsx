import { useEffect, useState } from "react";
import { fetchCards } from "@ministore/api";
import styles from "./App.module.css";

export default function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchCards({
      search: "javascript",
      subject: "",
      language: "",
      onlyCovers: false,
    })
      .then((data) => {
        setCards(Array.isArray(data.docs) ? data.docs : []);
        setTotal(data.numFound || 0);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>MiniStore Admin</h1>
        <p>Управление каталогом</p>
      </header>

      <main className={styles.content}>
        {isLoading && <p className={styles.state}>Загрузка...</p>}
        {!isLoading && (
          <>
            <p className={styles.total}>
              Всего в API: <strong>{total.toLocaleString("ru-RU")}</strong>
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Описание</th>

                </tr>
              </thead>
              <tbody>
                {books.map((card) => (
                  <tr key={card.key}>
                    <td>{card.title}</td>
                    <td>{card.description?.join(", ") ?? "—"}</td>

  
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}
