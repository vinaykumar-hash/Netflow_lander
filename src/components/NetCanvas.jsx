import { useEffect, useRef } from "react";

export default function NetCanvas() {
    const ref = useRef(null);
    useEffect(() => {
        const c = ref.current;
        if (!c) return;
        const ctx = c.getContext("2d");
        c.width = c.offsetWidth; c.height = c.offsetHeight;
        let raf;
        const N = 14;
        const nodes = Array.from({ length: N }, () => ({
            x: Math.random() * c.width, y: Math.random() * c.height,
            vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
            r: 2.5 + Math.random() * 2, p: Math.random() * Math.PI * 2,
        }));
        const pkts = Array.from({ length: 5 }, () => ({
            f: Math.floor(Math.random() * N), t: Math.floor(Math.random() * N), progress: Math.random(), s: 0.008 + Math.random() * 0.006,
        }));
        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            nodes.forEach((n) => {
                n.x += n.vx; n.y += n.vy; n.p += 0.022;
                if (n.x < 0 || n.x > c.width) n.vx *= -1;
                if (n.y < 0 || n.y > c.height) n.vy *= -1;
            });
            for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
                const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 100) {
                    ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(124,58,237,${0.2 * (1 - d / 100)})`; ctx.lineWidth = 1; ctx.stroke();
                }
            }
            pkts.forEach((p) => {
                p.progress += p.s;
                if (p.progress >= 1) { p.progress = 0; p.f = Math.floor(Math.random() * N); p.t = Math.floor(Math.random() * N); }
                const f = nodes[p.f], t = nodes[p.t];
                const x = f.x + (t.x - f.x) * p.progress, y = f.y + (t.y - f.y) * p.progress;
                const g = ctx.createRadialGradient(x, y, 0, x, y, 6);
                g.addColorStop(0, "rgba(124,58,237,0.9)"); g.addColorStop(1, "rgba(124,58,237,0)");
                ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
            });
            nodes.forEach((n) => {
                const a = 0.6 + 0.4 * Math.sin(n.p);
                ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(124,58,237,${a})`; ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(raf);
    }, []);
    return <canvas ref={ref} style={{ width: "100%", height: "100%", display: "block" }} />;
}
