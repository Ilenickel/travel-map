// Sélecteur de "nombre de jours prévus" (facultatif) — remplace un simple
// input[type=number] dont les flèches natives rendaient mal (minuscules,
// collées), par un stepper −/+ à boutons ronds, cohérent avec les flèches de
// navigation du carrousel de suggestions. null/vide = non renseigné (le
// champ reste facultatif).
export default function DaysStepper({ value, onChange, placeholder }) {
  const decrement = () => onChange(value == null || value <= 1 ? null : value - 1);
  const increment = () => onChange(value == null ? 1 : value + 1);

  return (
    <div className="pp-days-stepper">
      <button type="button" className="pp-days-stepper-btn" onClick={decrement} disabled={value == null} aria-label="−1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13H5v-2h14v2z"/></svg>
      </button>
      <input
        type="text"
        inputMode="numeric"
        className="pp-days-stepper-value"
        placeholder={placeholder}
        value={value ?? ''}
        onChange={(e) => {
          const digits = e.target.value.replace(/\D/g, '');
          onChange(digits === '' ? null : Math.max(1, parseInt(digits, 10)));
        }}
      />
      <button type="button" className="pp-days-stepper-btn" onClick={increment} aria-label="+1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </button>
    </div>
  );
}
