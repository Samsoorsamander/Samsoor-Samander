import React, { useEffect, useRef, useState } from "react";

// Ambient superhero scenes for the hero background.
// They auto-rotate every 7-12s, and can be summoned on demand with:
//   window.dispatchEvent(new CustomEvent("hero-scene", { detail: "thor" }))

const SCENES = ["thor", "flash", "superman", "batman", "aquaman", "cap", "ironman"];

const DURATION = {
  thor: 2600,
  flash: 2100,
  superman: 2600,
  batman: 3000,
  aquaman: 3200,
  cap: 2400,
  ironman: 2400,
};

/* Thor — lightning double-flicker */
const ThorScene = () => (
  <>
    <div className="thor-flash" />
    <svg className="thor-bolt" viewBox="0 0 200 300" fill="var(--fg-deeper)">
      <path d="M96 0 L20 150 L86 150 L54 300 L180 96 L108 96 L148 0 Z" />
    </svg>
  </>
);

/* The Flash — speed streak, two passes */
const FlashScene = () => (
  <>
    <div className="flash-run a" />
    <div className="flash-run b" />
  </>
);

/* Superman — a flight trail carving across the sky */
const SupermanScene = () => (
  <svg
    className="super-flight"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    fill="none"
  >
    <path
      d="M2 92 C 26 82 30 52 44 38 C 56 26 66 18 88 10"
      pathLength="1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

/* Batman — bat-signal searchlights + the bat emblem */
const BatmanScene = () => (
  <>
    <div className="bat-beam bl" />
    <div className="bat-beam br" />
    <svg className="bat-signal" viewBox="0 0 200 90" fill="currentColor">
      <path d="M100 18 L91 8 L84 20 Q71 12 58 18 Q45 8 28 14 Q20 18 2 6 Q6 18 26 24 Q22 32 34 42 Q34 50 50 52 Q54 62 72 56 Q78 66 94 56 L100 46 L106 56 Q122 66 128 56 Q146 62 150 52 Q166 50 166 42 Q178 32 174 24 Q194 18 198 6 Q180 18 172 14 Q155 8 142 18 Q129 12 116 20 L109 8 Z" />
    </svg>
  </>
);

/* Aquaman — ocean waves rising at the bottom of the hero */
const AquamanScene = () => (
  <div className="waves">
    <svg viewBox="0 0 1200 160" preserveAspectRatio="none" fill="none">
      <path
        className="waves-line accent"
        d="M0 78 Q 75 48 150 78 T 300 78 T 450 78 T 600 78 T 750 78 T 900 78 T 1050 78 T 1200 78"
        pathLength="1"
      />
      <path
        className="waves-line"
        d="M0 112 Q 75 86 150 112 T 300 112 T 450 112 T 600 112 T 750 112 T 900 112 T 1050 112 T 1200 112"
        pathLength="1"
      />
      <path
        className="waves-line"
        d="M0 144 Q 75 122 150 144 T 300 144 T 450 144 T 600 144 T 750 144 T 900 144 T 1050 144 T 1200 144"
        pathLength="1"
      />
    </svg>
  </div>
);

/* Captain America — shield hurled across the hero in an arc */
const CapScene = () => (
  <div className="cap-shield">
    <span className="cap-spin" aria-hidden="true" />
  </div>
);

/* Iron Man — repulsor blast from the side */
const IronmanScene = () => (
  <>
    <div className="repulsor-blast" />
    <div className="repulsor-ring r1" />
    <div className="repulsor-ring r2" />
  </>
);

const SCENE_COMPONENTS = {
  thor: ThorScene,
  flash: FlashScene,
  superman: SupermanScene,
  batman: BatmanScene,
  aquaman: AquamanScene,
  cap: CapScene,
  ironman: IronmanScene,
};

const HeroEvents = () => {
  const [scene, setScene] = useState(null);
  const [reduced, setReduced] = useState(false);
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;

    let index = 0;

    const run = (name, thenSchedule = true) => {
      setScene(name);
      const clearTimer = setTimeout(() => {
        setScene(null);
        if (thenSchedule) schedule(7000 + Math.random() * 5000);
      }, DURATION[name] || 2600);
      timers.current.push(clearTimer);
    };

    const schedule = (wait) => {
      const showTimer = setTimeout(() => {
        // don't bother animating while the tab is buried
        if (document.hidden) {
          schedule(5000);
          return;
        }
        run(SCENES[index % SCENES.length]);
        index += 1;
      }, wait);
      timers.current.push(showTimer);
    };

    const onSummon = (event) => {
      const name = event.detail;
      if (!SCENES.includes(name)) return;
      clearTimers();
      run(name); // auto-rotation resumes after it finishes
    };

    window.addEventListener("hero-scene", onSummon);
    schedule(3500);

    return () => {
      clearTimers();
      window.removeEventListener("hero-scene", onSummon);
    };
  }, [reduced]);

  if (reduced) return null;

  const Scene = scene ? SCENE_COMPONENTS[scene] : null;

  return (
    <div className="hero-events" aria-hidden="true">
      {Scene && <Scene />}
    </div>
  );
};

export default HeroEvents;
