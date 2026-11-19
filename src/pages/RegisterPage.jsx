import { ArrowLeftIcon } from "../components/Icons";
import { useFormFields } from "../hooks/useFormFields";

function RegisterPage({ onBack, onSwitchToLogin }) {
  const { fields, handleChange } = useFormFields({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <section
      className="auth-page auth-page--wide"
      aria-label="Ro‘yxatdan o‘tish"
    >
      <div className="auth-card">
        <div className="auth-card-top">
          <span className="auth-badge">Ro‘yxatdan o‘tish</span>
          <button type="button" className="auth-back-btn" onClick={onBack}>
            <ArrowLeftIcon />
            <span>Do‘konga qaytish</span>
          </button>
        </div>

        <h1 className="auth-title">Yangi hisob yaratish</h1>
        <p className="auth-desc">
          Tezkor buyurtma berish va sevimlilarni saqlash uchun ro‘yxatdan
          o‘ting.
        </p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-field-group">
            <label className="auth-label" htmlFor="register-name">
              To‘liq ism
            </label>
            <input
              id="register-name"
              name="fullName"
              type="text"
              className="auth-input"
              placeholder="Azizbek Karimov"
              value={fields.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-row-2">
            <div className="auth-field-group">
              <label className="auth-label" htmlFor="register-email">
                Elektron pochta
              </label>
              <input
                id="register-email"
                name="email"
                type="email"
                className="auth-input"
                placeholder="azizbek@example.com"
                value={fields.email}
                onChange={handleChange}
              />
            </div>

            <div className="auth-field-group">
              <label className="auth-label" htmlFor="register-phone">
                Telefon raqam
              </label>
              <input
                id="register-phone"
                name="phone"
                type="tel"
                className="auth-input"
                placeholder="+998 90 123 45 67"
                value={fields.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="auth-row-2">
            <div className="auth-field-group">
              <label className="auth-label" htmlFor="register-password">
                Parol
              </label>
              <input
                id="register-password"
                name="password"
                type="password"
                className="auth-input"
                placeholder="Kamida 6 ta belgi"
                value={fields.password}
                onChange={handleChange}
              />
            </div>

            <div className="auth-field-group">
              <label className="auth-label" htmlFor="register-confirm">
                Parolni tasdiqlang
              </label>
              <input
                id="register-confirm"
                name="confirmPassword"
                type="password"
                className="auth-input"
                placeholder="Parolni qayta kiriting"
                value={fields.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="auth-switch">
          Allaqachon hisobingiz bormi?{" "}
          <button
            type="button"
            className="auth-switch-link"
            onClick={onSwitchToLogin}
          >
            Kirish
          </button>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
