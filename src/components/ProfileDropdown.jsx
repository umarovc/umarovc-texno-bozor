import { BagIcon, ChevronDownIcon, HeartIcon, LogoutIcon, UserIcon } from "./Icons";

function ProfileDropdown() {
  return (
    <details className="profile-dropdown">
      <summary className="profile-trigger">
        <span className="profile-avatar-sm">AK</span>
        <span className="profile-trigger-name">Azizbek K.</span>
        <span className="profile-trigger-chevron">
          <ChevronDownIcon />
        </span>
      </summary>

      <div className="profile-menu">
        <div className="profile-menu-head">
          <span className="profile-avatar-lg">AK</span>
          <div className="profile-user-info">
            <p className="profile-user-name">Azizbek Karimov</p>
            <p className="profile-user-email">azizbek@example.com</p>
          </div>
        </div>

        <div className="profile-menu-list">
          <button type="button" className="profile-menu-item is-active">
            <span className="profile-menu-left">
              <UserIcon />
              <span>Profilim</span>
            </span>
          </button>

          <button type="button" className="profile-menu-item">
            <span className="profile-menu-left">
              <BagIcon />
              <span>Buyurtmalarim</span>
            </span>
            <span className="profile-menu-badge">2</span>
          </button>

          <button type="button" className="profile-menu-item">
            <span className="profile-menu-left">
              <HeartIcon />
              <span>Sevimlilarim</span>
            </span>
            <span className="profile-menu-badge">2</span>
          </button>
        </div>

        <div className="profile-menu-footer">
          <button type="button" className="profile-menu-item is-danger">
            <span className="profile-menu-left">
              <LogoutIcon />
              <span>Chiqish</span>
            </span>
          </button>
        </div>
      </div>
    </details>
  );
}

export default ProfileDropdown;
