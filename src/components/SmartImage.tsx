import React, { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  type?: "portrait" | "sample";
  sampleId?: number;
  title?: string;
  category?: string;
  imageKey?: string;
  label?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = "",
  type = "sample",
  sampleId = 1,
  title,
  category,
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const customSrc =
    typeof window !== "undefined"
      ? localStorage.getItem(`custom_img_${type}_${sampleId}`)
      : null;
  const imageSource = customSrc || src;

  // If the image fails or before it loads, render our custom high-fidelity apparel illustration
  if (error && !customSrc) {
    if (type === "portrait") {
      return (
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-850 to-stone-950 flex flex-col items-center justify-center p-6 text-center text-white ${className}`}
        >
          {/* Subtle textile herringbone pattern background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 8px), repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 8px)`,
            }}
          />

          {/* Tailored Suit & Tie Graphical Icon */}
          <div className="relative z-10 w-28 h-28 rounded-full bg-stone-800 border-2 border-amber-500/40 flex items-center justify-center mb-4 shadow-xl">
            <svg viewBox="0 0 100 100" className="w-20 h-20 text-stone-200">
              {/* Head */}
              <circle cx="50" cy="30" r="16" fill="#e2c0a5" />
              {/* Hair */}
              <path
                d="M34 26 C34 16, 66 16, 66 26 C66 22, 60 17, 50 17 C40 17, 34 22, 34 26 Z"
                fill="#1c1917"
              />
              {/* White collar */}
              <polygon
                points="50,44 42,52 46,60 50,54 54,60 58,52"
                fill="#ffffff"
              />
              {/* Black Necktie */}
              <polygon points="48,54 52,54 54,80 50,86 46,80" fill="#0c0a09" />
              <polygon points="47,52 53,52 52,56 48,56" fill="#1c1917" />
              {/* Dark Suit jacket shoulders */}
              <path
                d="M22 85 C22 62, 38 52, 44 52 L50 60 L56 52 C62 52, 78 62, 78 85 Z"
                fill="#1c1917"
              />
              {/* Lapels */}
              <polygon points="36,53 45,68 40,78 30,65" fill="#292524" />
              <polygon points="64,53 55,68 60,78 70,65" fill="#292524" />
            </svg>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-stone-950 p-1.5 rounded-full shadow-md">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xl font-bold font-display text-stone-100 tracking-tight">
              MD. AL-AMIN
            </h4>
            <p className="text-xs text-amber-400 font-medium tracking-wide uppercase mt-0.5">
              Sample Coordinator
            </p>
            <p className="text-[11px] text-stone-400 mt-1">
              Synergies Sourcing Bangladesh
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800/80 border border-stone-700/60 text-[10px] text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Active Liaison · Design & Product Dev</span>
            </div>
          </div>
        </div>
      );
    }

    // High fidelity textile / sample artwork fallback
    return (
      <div
        className={`relative overflow-hidden bg-stone-900 flex flex-col justify-between p-5 text-stone-200 select-none ${className}`}
      >
        {/* Subtle grid & textile background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top Header of Card */}
        <div className="relative z-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-400 font-bold">
              SAMPLE #{sampleId.toString().padStart(2, "0")}
            </span>
            <span className="text-stone-500">·</span>
            <span className="text-stone-300 text-[11px] font-medium truncate max-w-[150px]">
              {category || "Textile Tech"}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-stone-800 text-stone-300 border border-stone-700">
            APPROVED
          </span>
        </div>

        {/* Middle: Schematic Drawing based on sampleId */}
        <div className="relative z-10 my-auto py-4 flex items-center justify-center">
          {sampleId === 2 ? (
            // Sample 2: Tech Pack Board & Swatches
            <div className="w-full max-w-[260px] bg-stone-800/90 border border-stone-700 p-3 rounded shadow-inner">
              <div className="flex items-center justify-between border-b border-stone-700 pb-1 mb-2">
                <span className="text-[10px] font-mono text-red-400 font-bold">
                  TECH SPEC // HOLD CLEARANCE
                </span>
                <span className="text-[9px] font-mono text-stone-400">
                  MAIN B. STUDIO
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 my-2">
                <div className="h-10 bg-amber-600/40 border border-amber-500/50 rounded flex items-center justify-center text-[8px] text-amber-300 font-mono text-center p-0.5">
                  CRINKLE SSBL-2441
                </div>
                <div className="h-10 bg-sky-600/40 border border-sky-500/50 rounded flex items-center justify-center text-[8px] text-sky-300 font-mono text-center p-0.5">
                  TROPICAL PRINT
                </div>
                <div className="h-10 bg-indigo-600/40 border border-indigo-500/50 rounded flex items-center justify-center text-[8px] text-indigo-300 font-mono text-center p-0.5">
                  STRIPE RIB
                </div>
              </div>
              <div className="flex items-center justify-between text-[9px] text-stone-400 font-mono pt-1">
                <span>Cuff Elastic: 4cm</span>
                <span className="text-emerald-400 font-bold">
                  STATUS: RELEASED
                </span>
              </div>
            </div>
          ) : sampleId === 6 ? (
            // Sample 6: Yarn-dyed stripe polo
            <div className="w-36 h-28 flex flex-col justify-center items-center">
              <svg
                viewBox="0 0 100 80"
                className="w-full h-full text-stone-300 drop-shadow"
              >
                {/* Polo silhouette */}
                <path
                  d="M30 18 L15 32 L22 36 L30 26 L30 75 L70 75 L70 26 L78 36 L85 32 L70 18 Z"
                  fill="#1e293b"
                  stroke="#64748b"
                  strokeWidth="1.5"
                />
                {/* Horizontal stripes */}
                <line
                  x1="30"
                  y1="36"
                  x2="70"
                  y2="36"
                  stroke="#f8fafc"
                  strokeWidth="3"
                />
                <line
                  x1="30"
                  y1="46"
                  x2="70"
                  y2="46"
                  stroke="#f59e0b"
                  strokeWidth="3"
                />
                <line
                  x1="30"
                  y1="56"
                  x2="70"
                  y2="56"
                  stroke="#f8fafc"
                  strokeWidth="3"
                />
                <line
                  x1="30"
                  y1="66"
                  x2="70"
                  y2="66"
                  stroke="#f59e0b"
                  strokeWidth="3"
                />
                {/* Collar */}
                <polygon
                  points="40,18 50,26 60,18 50,14"
                  fill="#334155"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                <line
                  x1="50"
                  y1="26"
                  x2="50"
                  y2="38"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          ) : sampleId === 7 ? (
            // Sample 7: Double gauze resort shirts
            <div className="flex items-center gap-1.5">
              {[
                { color: "bg-rose-500", name: "Magenta" },
                { color: "bg-cyan-500", name: "Teal" },
                { color: "bg-emerald-400", name: "Mint" },
                { color: "bg-stone-200", name: "White" },
                { color: "bg-pink-300", name: "Blush" },
                { color: "bg-indigo-900", name: "Navy" },
              ].map((swatch, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-6 h-14 ${swatch.color} rounded-t border border-stone-600 shadow-sm`}
                  />
                  <div className="w-1.5 h-3 bg-stone-700" />
                </div>
              ))}
            </div>
          ) : sampleId === 9 ? (
            // Sample 9: Total Styles 8-Grid
            <div className="grid grid-cols-4 gap-1.5 w-full max-w-[240px]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                <div
                  key={s}
                  className="bg-stone-800 border border-stone-700 rounded p-1 text-center"
                >
                  <div className="h-7 bg-stone-900/80 rounded flex items-center justify-center text-[8px] font-mono text-stone-400">
                    STYLE #{s}
                  </div>
                  <span className="text-[7px] text-emerald-400 font-mono block mt-0.5">
                    PASS
                  </span>
                </div>
              ))}
            </div>
          ) : (
            // Standard garment silhouette
            <div className="w-32 h-28 flex flex-col justify-center items-center">
              <svg
                viewBox="0 0 100 80"
                className="w-full h-full text-stone-400 drop-shadow"
              >
                <path
                  d="M30 18 L12 30 L18 36 L28 26 L28 75 L72 75 L72 26 L82 36 L88 30 L70 18 C65 24, 35 24, 30 18 Z"
                  fill="#292524"
                  stroke="#78716c"
                  strokeWidth="1.5"
                />
                <path
                  d="M40 21 C45 25, 55 25, 60 21"
                  fill="none"
                  stroke="#d6d3d1"
                  strokeWidth="1.5"
                />
                <circle
                  cx="50"
                  cy="45"
                  r="8"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Bottom Specs Bar */}
        <div className="relative z-10 pt-2 border-t border-stone-800 flex items-center justify-between text-[11px]">
          <span className="font-medium text-stone-100 truncate pr-2">
            {title || "Garments Sample"}
          </span>
          <span className="text-amber-400 shrink-0 font-mono text-[10px]">
            Synergies Sourcing
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone-900 ${className}`}>
      {/* Loading placeholder skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-stone-800 animate-pulse flex items-center justify-center text-stone-500 text-xs">
          Loading specimen...
        </div>
      )}
      <img
        src={imageSource}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};
