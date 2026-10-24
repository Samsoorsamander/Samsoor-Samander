import React from "react";

// Minimal superhero glyphs, reused by the League strip and section titles

const Svg = ({ viewBox, children, fill = "none" }) => (
  <svg
    viewBox={viewBox}
    fill={fill}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const BoltGlyph = () => (
  <Svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M13 1 L4 14 H10 L8 23 L20 9 H13.5 Z" />
  </Svg>
);

export const SpeedGlyph = () => (
  <Svg viewBox="0 0 24 24">
    <path d="M2 8 H14 M2 12 H17 M2 16 H12" />
    <path d="M15.5 12 L19.5 12" stroke="var(--accent)" />
  </Svg>
);

export const FlightGlyph = () => (
  <Svg viewBox="0 0 24 24">
    <path d="M12 2.5 L21.5 12 L12 21.5 L2.5 12 Z" />
    <path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" />
  </Svg>
);

export const BatGlyph = () => (
  <Svg viewBox="0 0 200 90" fill="currentColor" stroke="none">
    <path d="M100 18 L91 8 L84 20 Q71 12 58 18 Q45 8 28 14 Q20 18 2 6 Q6 18 26 24 Q22 32 34 42 Q34 50 50 52 Q54 62 72 56 Q78 66 94 56 L100 46 L106 56 Q122 66 128 56 Q146 62 150 52 Q166 50 166 42 Q178 32 174 24 Q194 18 198 6 Q180 18 172 14 Q155 8 142 18 Q129 12 116 20 L109 8 Z" />
  </Svg>
);

export const ShieldGlyph = () => (
  <Svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2.5 L14.3 9 L21 9.2 L15.5 13.4 L17.6 20 L12 16 L6.4 20 L8.5 13.4 L3 9.2 L9.7 9 Z" />
  </Svg>
);

export const ReactorGlyph = () => (
  <Svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" stroke="var(--accent)" />
    <path d="M12 1.5 v3 M12 19.5 v3 M1.5 12 h3 M19.5 12 h3" />
  </Svg>
);

export const TridentGlyph = () => (
  <Svg viewBox="0 0 24 24">
    <path d="M12 3 V22" />
    <path d="M5 3 V9 C5 13 8 15.5 12 15.5 C16 15.5 19 13 19 9 V3" />
    <path d="M8.5 22 H15.5" />
  </Svg>
);

export const SpiderGlyph = () => (
  <Svg viewBox="0 0 24 24">
    <circle cx="12" cy="14" r="3" fill="currentColor" />
    <circle cx="12" cy="9" r="1.6" fill="currentColor" />
    <path d="M9.5 11 L4 7.5 M9.3 13.5 L3 13.5 M9.7 15.5 L4.5 19 M14.5 11 L20 7.5 M14.7 13.5 L21 13.5 M14.3 15.5 L19.5 19" />
  </Svg>
);
