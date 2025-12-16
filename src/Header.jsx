import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-placeholder">
          {/* Place your edX or custom logo here */}
        </div>

        <div className="learn-dropdown">
          <button className="learn-btn">
            Learn <span className="arrow">▼</span>
          </button>
        </div>

        <div className="search-box">
          <input type="text" placeholder="What do you want to learn?" />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="header-right">
        <a href="/" className="link">edX For Business</a>
        <a href="/" className="link">Sign In</a>
        <button className="register-btn">Register for free</button>
      </div>
    </header>
  );
}

export default Header;
