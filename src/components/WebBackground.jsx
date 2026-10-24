import React, { useMemo } from "react";

// Ambient "growing spider web" background — same spirit as antfu.me's roots,
// drawn with SVG stroke-dashoffset animation (spokes first, then the rings).
const SIZE = 520;
const C = SIZE / 2;
const RMAX = 250;

function buildWeb() {
  // radial threads from the center, with slight deterministic irregularity
  const spokeCount = 9;
  const angles = Array.from({ length: spokeCount }, (_, i) => {
    const base = (i / spokeCount) * Math.PI * 2;
    return base + Math.sin(i * 12.9898) * 0.1;
  });

  // spokes — every third one extends past the rings as an anchor thread
  const spokePaths = angles.map((a, i) => {
    const extend = i % 3 === 0 ? 1.28 : 1.08;
    const r = RMAX * extend;
    const x = C + Math.cos(a) * r;
    const y = C + Math.sin(a) * r;
    // slight perpendicular curve so threads feel organic
    const mx = (C + x) / 2 - Math.sin(a) * 6;
    const my = (C + y) / 2 + Math.cos(a) * 6;
    return `M ${C} ${C} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  });

  // rings — sagging segments woven between adjacent spokes, grouped per ring
  const ringRadii = [0.24, 0.42, 0.58, 0.74, 0.92];
  const ringGroups = ringRadii.map((rf, ringIdx) => {
    const r = RMAX * rf;
    const segments = [];
    for (let j = 0; j < spokeCount; j++) {
      const a1 = angles[j];
      const a2 =
        j === spokeCount - 1 ? angles[0] + Math.PI * 2 : angles[j + 1];
      const am = (a1 + a2) / 2;
      const x1 = C + Math.cos(a1) * r;
      const y1 = C + Math.sin(a1) * r;
      const x2 = C + Math.cos(a2) * r;
      const y2 = C + Math.sin(a2) * r;
      // pull the control point toward the center → thread sag
      const mx = C + Math.cos(am) * r * 0.94;
      const my = C + Math.sin(am) * r * 0.94;
      segments.push(
        `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`
      );
    }
    return { delay: 0.9 + ringIdx * 0.35, segments };
  });

  return { spokePaths, ringGroups };
}

const WebBackground = () => {
  const { spokePaths, ringGroups } = useMemo(buildWeb, []);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round">
        {spokePaths.map((d, i) => (
          <path
            key={`spoke-${i}`}
            d={d}
            pathLength="1"
            className="web-line web-spoke"
            style={{ "--delay": `${(i * 0.12).toFixed(2)}s` }}
          />
        ))}
        {ringGroups.map(({ delay, segments }, g) =>
          segments.map((d, j) => (
            <path
              key={`ring-${g}-${j}`}
              d={d}
              pathLength="1"
              className="web-line web-ring"
              style={{ "--delay": `${delay.toFixed(2)}s` }}
            />
          ))
        )}
      </g>
      {/* Spider-Man: descends on a silk thread once the web is drawn, then bobs */}
      <line
        x1={C}
        y1={-2}
        x2={C}
        y2={C - 4}
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
        pathLength="1"
        className="spider-silk"
      />
      <g className="spider-drop" style={{ "--drop": `${C}px` }}>
        <circle cx={C} cy={C} r={3.4} fill="var(--accent)" className="spider-bob" />
      </g>
    </svg>
  );
};

export default WebBackground;
