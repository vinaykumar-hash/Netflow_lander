export default function Card({ num, icon, title, desc, tag, wide }) {
    return (
        <div className={`feat-card ${wide ? "feat-card--wide" : ""}`}>
            {num && <div className="card-num">{num}</div>}
            {icon && <div className="card-icon">{icon}</div>}
            {tag && <div className="card-tag">{tag}</div>}
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{desc}</p>
        </div>
    );
}
