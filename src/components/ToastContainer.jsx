import { useToastState } from '../context/ToastContext';

export default function ToastContainer() {
  const state = useToastState();
  if (!state || state.toasts.length === 0) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      {state.toasts.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`toast toast--${item.type}`}
          onClick={() => state.dismiss(item.id)}
        >
          {item.message}
        </button>
      ))}
    </div>
  );
}
