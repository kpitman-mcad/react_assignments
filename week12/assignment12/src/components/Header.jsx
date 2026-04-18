function Header({ title, subtitle }) {
  return (
    <div className="header-div">
      <header className="header">
        {/* Page heading */}
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
    </div>
  );
}

export default Header;
