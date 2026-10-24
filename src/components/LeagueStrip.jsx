import React from "react";
import {
  BatGlyph,
  BoltGlyph,
  FlightGlyph,
  ReactorGlyph,
  ShieldGlyph,
  SpiderGlyph,
  SpeedGlyph,
  TridentGlyph,
} from "./HeroGlyphs";

// "Summon the League": quiet glyph buttons — hover a hero, click to
// have them visit the hero background with their signature animation.

const members = [
  { name: "Spider-Man", Glyph: SpiderGlyph, event: "spider:redraw" },
  { name: "Thor", Glyph: BoltGlyph, event: "thor" },
  { name: "The Flash", Glyph: SpeedGlyph, event: "flash" },
  { name: "Batman", Glyph: BatGlyph, event: "batman" },
  { name: "Superman", Glyph: FlightGlyph, event: "superman" },
  { name: "Captain America", Glyph: ShieldGlyph, event: "cap" },
  { name: "Iron Man", Glyph: ReactorGlyph, event: "ironman" },
  { name: "Aquaman", Glyph: TridentGlyph, event: "aquaman" },
];

const summon = (event) => {
  if (event === "spider:redraw") {
    window.dispatchEvent(new Event("spider:redraw"));
  } else {
    window.dispatchEvent(new CustomEvent("hero-scene", { detail: event }));
  }
};

const LeagueStrip = () => {
  return (
    <div className="league flex flex-wrap items-center gap-1.5 my-2">
      {members.map(({ name, Glyph, event }) => (
        <button
          key={name}
          type="button"
          className="league-btn"
          title={name}
          aria-label={`${name} — play their animation`}
          onClick={() => summon(event)}
        >
          <Glyph />
        </button>
      ))}
    </div>
  );
};

export default LeagueStrip;
