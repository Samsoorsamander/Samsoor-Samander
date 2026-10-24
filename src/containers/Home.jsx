import React from "react";
import { FaCertificate, FaRegFileLines } from "react-icons/fa6";
import { HeroTypeWritter } from "../components";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../components/HomeSocialLinks";
import WebBackground from "../components/WebBackground";
import HeroEvents from "../components/HeroEvents";
import LeagueStrip from "../components/LeagueStrip";
import CV from "./../assets/Samsoor-resume.pdf";

const se = (stage) => ({ "--enter-stage": stage });

const chips = [
  { label: "web apps", uri: "#projects" },
  { label: "mobile apps", uri: "#projects" },
  { label: "desktop apps", uri: "#projects" },
  { label: "AI agents", uri: "#skills" },
];

const Home = () => {
  const [webKey, setWebKey] = React.useState(0);

  // summon Spider-Man → the web weaves itself again
  React.useEffect(() => {
    const redraw = () => setWebKey((key) => key + 1);
    window.addEventListener("spider:redraw", redraw);
    return () => window.removeEventListener("spider:redraw", redraw);
  }, []);

  const stats = [
    { label: "projects delivered", value: "20+" },
    { label: "platforms", value: "Web · Mobile · Desktop" },
    { label: "primary focus", value: "Full-Stack + AI" },
  ];

  const testimonials = [
    {
      id: "ops-manager",
      quote:
        "Samsoor delivered a clean system that improved our daily operations and reporting speed.",
      role: "Operations Manager",
    },
    {
      id: "product-owner",
      quote:
        "Strong ownership, fast delivery, and excellent communication throughout the project lifecycle.",
      role: "Product Owner",
    },
  ];

  return (
    <section id="home" className="relative w-full">
      {/* growing spider web — ambient background art (antfu-style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 z-[-1] h-[380px] w-[380px] text-[var(--fg)] md:h-[520px] md:w-[520px]"
      >
        <WebBackground key={webKey} />
      </div>

      {/* visiting superheroes — ambient background scenes */}
      <HeroEvents />

      {/* name + lead — antfu.me intro */}
      <div className="prose m-auto mb-8">
        <h1 className="se" style={se(2)}>
          Samsoor Enzo
        </h1>
        <p className="lead se" style={se(4)}>
          Hey! I&rsquo;m <b>Samsoor Enzo</b> — full-stack developer building
          modern products that combine engineering, AI and story-driven
          design.
        </p>

        {/* summon the league */}
        <LeagueStrip />
      </div>

      <div className="prose m-auto">
        {/* specialization — mono, accent red */}
        <p className="se" style={se(6)}>
          I specialize in{" "}
          <HeroTypeWritter
            speed={70}
            words={[
              "AI-powered web applications",
              "AI-powered mobile applications",
              "AI agent services",
              "full-stack products",
            ]}
          />
        </p>

        {/* currently shipping — antfu magic pills */}
        <p className="se flex flex-wrap items-baseline gap-x-1.5 gap-y-1" style={se(7)}>
          <span className="mr-1">Currently shipping:</span>
          {chips.map((chip) => (
            <a key={chip.label} href={chip.uri} className="magic-link">
              {chip.label}
            </a>
          ))}
        </p>

        {/* resume + certificates pills */}
        <p className="se flex flex-wrap items-baseline" style={se(8)}>
          <a
            href={CV}
            download="Samsoor-resume.pdf"
            className="magic-link mr-2"
          >
            <span className="icon">
              <FaRegFileLines />
            </span>
            Resume
          </a>
          <button
            type="button"
            className="magic-link !gap-[0.3rem]"
            onClick={() =>
              window.dispatchEvent(new Event("open-certificates"))
            }
          >
            <span className="icon">
              <FaCertificate />
            </span>
            Certificates
          </button>
        </p>

        {/* stats */}
        <div
          className="se my-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
          style={se(9)}
        >
          {stats.map((item) => (
            <div key={item.label}>
              <b>{item.value}</b>
              <div className="op50 text-sm">{item.label}</div>
            </div>
          ))}
        </div>

        {/* testimonials — antfu blockquotes */}
        {testimonials.map((item, index) => (
          <blockquote
            key={item.id}
            className="se"
            style={se(10 + index)}
          >
            <p>{item.quote}</p>
            <p className="text-sm">
              — <span className="op50">{item.role}</span>
            </p>
          </blockquote>
        ))}

        <hr className="se" style={se(12)} />

        {/* find me on — antfu social row */}
        <p className="se" style={se(13)}>
          Find me on
        </p>
        <p
          className="se flex flex-wrap items-baseline gap-x-5 gap-y-2"
          style={se(14)}
        >
          {Socials.map((item, index) => (
            <HomeSocialLinks key={item.id} data={item} index={index} />
          ))}
        </p>

        <p className="se" style={se(15)}>
          Or mail me at{" "}
          <code className="break-all">samsoorsamander@gmail.com</code>
        </p>
      </div>
    </section>
  );
};

export default Home;
