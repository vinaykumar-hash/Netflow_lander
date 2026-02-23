export default function FloatBadge({ emoji, label, color = "#7c3aed", className }) {
    return (
        <span className={`float-badge ${className || ""}`} style={{ background: color }}>
            {emoji && <span className="fb-emoji">{emoji}</span>}
            {label && <span className="fb-label">{label}</span>}
        </span>
    );
}
