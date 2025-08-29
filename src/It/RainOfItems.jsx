import React, { useEffect, useRef } from "react";

export default function RainOfItems({
    items,
    density = 40,
    fallMin = 6,
    fallMax = 14,
    sizeMin = 10,
    sizeMax = 28,
    className = "",
    zIndex = 10,
}) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        let destroyed = false;

        const rand = (min, max) => Math.random() * (max - min) + min;
        const isImage = (s) => s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".gif") || s.startsWith("http");
        
        function createDrop() {
            if (!ref.current || destroyed) return;
            const el = document.createElement("div");
            el.className = "drop";
            const item = items[Math.floor(Math.random() * items.length)];

            if (isImage(item)) {
                const img = document.createElement("img");
                img.src = item;
                img.alt = "";
                el.appendChild(img);
            } else {
                const span = document.createElement("span");
                span.textContent = item;
                el.appendChild(span);
            }
            const vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            const x = Math.floor(rand(0, vw)) + "px";
            const size = rand(sizeMin, sizeMax);
            const fallDur = rand(fallMin, fallMax);
            const rot0 = Math.floor(rand(-90, 90)) + "deg";
            const rot1 = Math.floor(rand(180, 540)) + "deg";
            const delay = rand(-10, 0);

            el.style.left = x;
            el.style.fontSize = size + "px";
            el.style.width = size + "px";
            el.style.height = size + "px";
            el.style.setProperty("--r0", rot0);
            el.style.setProperty("--r1", rot1);
            el.style.animationDuration = `${fallDur}s, ${rand(6, 12)}s`;
            el.style.animationDelay = `${delay}s, 0s`;

            el.addEventListener(
                "animationend",
                () => {
                    el.remove();
                    if (!destroyed) createDrop();
                },
                { once: true }
            );

            ref.current.appendChild(el);
        }

        for (let i = 0; i < density; i++) createDrop();

        return () => {
            destroyed = true;
            if (ref.current) ref.current.innerHTML = "";
        };
    }, [items, density, fallMin, fallMax, sizeMin, sizeMax]);

    return (
        <>
            <style>{`
        .rain {
          position: fixed; inset: 0;
          pointer-events: none;
        }
        .drop {
          position: absolute;
          top: -10vh;
          will-change: transform;
          animation: fall linear forwards, sway ease-in-out infinite;
          opacity: 0.95;
        }
        .drop img, .drop span { 
          display:block; 
          width:100%; 
          height:100%; 
        }
        @keyframes fall {
          from { transform: translate3d(0, -10vh, 0) rotate(var(--r0, 0deg)); }
          to   { transform: translate3d(0, 110vh, 0) rotate(var(--r1, 360deg)); }
        }
        @keyframes sway {
          0% { translate: -10px 0; }
          50% { translate: 10px 0; }
          100% { translate: -10px 0; }
        }
      `}</style>
            <div
                ref={ref}
                className={`rain ${className}`}
                style={{ zIndex }}
            />
        </>
    );
}
