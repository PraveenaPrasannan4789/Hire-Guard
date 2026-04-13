import "../../styles/header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">HireGuard</div>
      <nav className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </nav>
    </header>
  );
};

export default Header;
