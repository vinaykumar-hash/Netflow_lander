import { useEffect, useRef, useState } from "react";

export default function Counter({ to, suffix = "", prefix = "", duration = 1600 }) {
    const [v, setV] = useState(0);
    const ref = useRef(null);
    const done = useRef(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !done.current) {
                done.current = true;
                const t0 = performance.now();
                const tick = (now) => {
                    const p = Math.min((now - t0) / duration, 1);
                    const ease = 1 - Math.pow(1 - p, 3);
                    setV(Math.floor(ease * to));
                    if (p < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            }
        }, { threshold: 0.4 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [to, duration]);

    return <span ref={ref}>{prefix}{v}{suffix}</span>;
}
