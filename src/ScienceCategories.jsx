import { Link } from "react-router-dom";
import "./ScienceCategories.css";

const sciCategories = [
  { name: "Mathematics", icon: "📐", link: "/maths" },
  { name: "Physics", icon: "🔭", link: "/physics" },
  { name: "Chemistry", icon: "⚗️", link: "/chemistry" }
];

function ScienceCategories() {
  return (
    <section className="category-section">
      <div className="category-grid">
        {sciCategories.map((item, i) => (
          <Link key={i} to={item.link} className="category-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ScienceCategories;
