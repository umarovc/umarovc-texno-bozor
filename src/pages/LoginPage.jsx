import { ArrowLeftIcon } from "../components/Icons";
import { useFormFields } from "../hooks/useFormFields";

function LoginPage({ onBack, onSwitchToRegister }) {
  const { fields, handleChange } = useFormFields({
    email: "",
    password: "",
    remember: false,
  });

  return (
    <section className="auth-page" aria-label="Hisobga kirish">
      <div className="auth-card">
        <div className="auth-card-top">
          <span className="auth-badge">Kirish</span>
          <button type="button" className="auth-back-btn" onClick={onBack}>
            <ArrowLeftIcon />
            <span>Do‘konga qaytish</span>
          </button>
        </div>

        <h1 className="auth-title">Hisobga kirish</h1>
        <p className="auth-desc">
          Buyurtmalar tarixi va savatingizni ko‘rish uchun hisobingizga kiring.
        </p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-field-group">
            <label className="auth-label" htmlFor="login-email">
              Elektron pochta
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="auth-input"
              placeholder="azizbek@example.com"
              value={fields.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-field-group">
            <label className="auth-label" htmlFor="login-password">
              Parol
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              className="auth-input"
              placeholder="Parolingizni kiriting"
              value={fields.password}
              onChange={handleChange}
            />
          </div>

          <label className="auth-checkbox-row">
            <input
              name="remember"
              type="checkbox"
              className="auth-checkbox"
              checked={fields.remember}
              onChange={handleChange}
            />
            <span>Meni eslab qol</span>
          </label>

          <button type="submit" className="auth-submit-btn">
            Kirish
          </button>
        </form>

        <p className="auth-switch">
          Hali hisobingiz yo‘qmi?{" "}
          <button
            type="button"
            className="auth-switch-link"
            onClick={onSwitchToRegister}
          >
            Ro‘yxatdan o‘tish
          </button>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
