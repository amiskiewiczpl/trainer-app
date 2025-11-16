function App() {
  const data = {
    name: "Adam Miśkiewicz",
    trainer: "Bartek",
    lastUpdate: "05/11/2025",
    goal:
      "Redukcja do 82 kg, dalsza poprawa wydolności, koordynacji, siły i wytrzymałości. Zwiększenie zakresu przysiadu i zbudowanie brzucha + dopalenie go.",
    priority: "Redukcja do 85 kg; zakres w przysiadzie",
    method: "Split góra/dół",
    weightCurrent: 86.5,
    weightTarget: 82,
    kcal: 2200,
  };

  return (
    <div className="app">
      {/* DASHBOARD */}
      <header className="card card-main">
        <div>
          <h1>{data.name}</h1>
          <p className="muted">Trener: {data.trainer}</p>
          <p className="muted">Ostatnia aktualizacja: {data.lastUpdate}</p>
        </div>
        <div className="goal-box">
          <h2>🎯 Cel główny</h2>
          <p>{data.goal}</p>
          <h3>Priorytet miesiąca</h3>
          <p>{data.priority}</p>
        </div>
      </header>

      {/* NAWIGACJA */}
      <nav className="nav-grid">
        <a href="#plan" className="nav-btn">
          🎯 Cel i plan
        </a>
        <a href="#schedule" className="nav-btn">
          📅 Harmonogram
        </a>
        <a href="#progress" className="nav-btn">
          📈 Postępy
        </a>
        <a href="#workouts" className="nav-btn">
          💪 Treningi
        </a>
        <a href="#swim" className="nav-btn">
          🏊 Basen
        </a>
        <a href="#supplements" className="nav-btn">
          💊 Suplementacja
        </a>
        <a href="#feedback" className="nav-btn">
          💬 Podsumowanie
        </a>
      </nav>

      {/* PLAN OGÓLNY */}
      <section id="plan" className="card">
        <h2>Plan ogólny</h2>
        <div className="grid-2">
          <div>
            <h3>Dane</h3>
            <p>
              <strong>Masa obecna:</strong> {data.weightCurrent} kg
            </p>
            <p>
              <strong>Masa cel:</strong> {data.weightTarget} kg
            </p>
            <p>
              <strong>Dieta:</strong> {data.kcal} kcal / dzień
            </p>
            <p>
              <strong>Metoda treningowa:</strong> {data.method}
            </p>
          </div>
          <div>
            <h3>Aktywności (skrót)</h3>
            <ul>
              <li>Siłownia – 4x w tygodniu (split góra/dół ~70 min)</li>
              <li>Rower – ~80 km tygodniowo (4–5 h)</li>
              <li>Siatkówka – 2 treningi / tydz. (~100 min)</li>
              <li>Squash – 60–100 min / tydz. (wysoka intensywność)</li>
              <li>Tenis – ~60 min / tydz. (niska intensywność)</li>
              <li>Basen – 2× 1,5 km / tydz.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HARMONOGRAM – tu na razie placeholder */}
      <section id="schedule" className="card">
        <h2>Harmonogram</h2>
        <p>
          Tu w kolejnych krokach wstawimy tabelę tygodniową podobną do tej z
          prezentacji (tydzień, dni tygodnia, aktywności).
        </p>
      </section>

      {/* PROGRES – uproszczony */}
      <section id="progress" className="card">
        <h2>Postępy</h2>
        <p>
          Start: <strong>88,9 kg</strong> (20–26.10) → aktualnie:{" "}
          <strong>86,5 kg</strong>.
        </p>
        <p>Docelowo: {data.weightTarget} kg do 28/12/2025.</p>
        <ul>
          <li>✅ progres siłowy</li>
          <li>✅ progres wydolnościowy</li>
          <li>⚕️ konsultacja barku 4/11</li>
        </ul>
      </section>

      {/* TRENINGI – skrót siłownia */}
      <section id="workouts" className="card">
        <h2>Treningi – siłownia</h2>
        <ul>
          <li>Lower A (LA) – Trening 1 – sprawdź w apce</li>
          <li>Upper A (UA) – Trening 2</li>
          <li>Lower B (LB) – Trening 3</li>
          <li>Upper B (UB) – Trening 4</li>
          <li>Lower C (LC) – Trening 5</li>
          <li>Upper C (UC) – Trening 6</li>
        </ul>
        <p className="muted">
          W przyszłości można dodać linki do Gravitus i dokładne rozpiski.
        </p>
      </section>

      {/* BASEN */}
      <section id="swim" className="card">
        <h2>Basen</h2>
        <h3>Basen 1 – technika + rytm</h3>
        <ul>
          <li>Rozgrzewka: 200 m kraul, 100 m grzbiet, 100 m kraul</li>
          <li>6×50 m: catch-up, fingertip drag, one-arm drill</li>
          <li>8×100 m kraul</li>
          <li>200 m schłodzenie (cool down)</li>
        </ul>
        <h3>Basen 2 – siła + wytrzymałość</h3>
        <ul>
          <li>Rozgrzewka: 300 m dowolnie</li>
          <li>4×50 m (szybko–wolno)</li>
          <li>3×(4×100 m)</li>
          <li>200 m schłodzenie</li>
        </ul>
      </section>

      {/* SUPLE */}
      <section id="supplements" className="card">
        <h2>Suplementacja</h2>
        <ul>
          <li>
            <strong>Kreatyna:</strong> 5 g dziennie
          </li>
          <li>
            <strong>Ashwagandha:</strong> 1 tabletka dziennie
          </li>
          <li>
            <strong>Omega 3:</strong> 1 dziennie
          </li>
          <li>
            <strong>D3+K2:</strong> 1 dziennie
          </li>
        </ul>
      </section>

      {/* FEEDBACK */}
      <section id="feedback" className="card">
        <h2>Feedback i rekomendacje</h2>
        <div className="grid-2">
          <div>
            <h3>✅ Mocne strony</h3>
            <p>(Wypełnia trener/razem)</p>
          </div>
          <div>
            <h3>⚙ Obszary do poprawy</h3>
            <p>(Wypełnia trener/razem)</p>
          </div>
        </div>
        <div className="grid-2">
          <div>
            <h3>🎯 Cele na kolejny okres</h3>
          </div>
          <div>
            <h3>📆 Termin kolejnej konsultacji</h3>
          </div>
        </div>
        <p className="muted">Ocena ogólna (1–10)</p>
      </section>
    </div>
  );
}

export default App;
