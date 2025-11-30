export default function Navbar() {
  return (
    <nav className="nav-handwriting">
      <p className="nav-item" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</p>
      <p className="nav-item" onClick={() => document.getElementById("writing").scrollIntoView({ behavior: "smooth" })}>Writing</p>
      <p className="nav-item" onClick={() => document.getElementById("photography").scrollIntoView({ behavior: "smooth" })}>Photography</p>
</nav>
  );
}
