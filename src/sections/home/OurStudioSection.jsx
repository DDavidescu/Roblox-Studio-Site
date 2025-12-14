import "../../styles/sections_scss/home_sections_scss/OurStudioSection/ourStudioSection.scss";

const stats = [
  { label: "Games shipped", value: "12+" },
  { label: "Monthly players", value: "250k+" },
  { label: "Avg. rating", value: "4.8★" },
];

const values = [
  { title: "Player-first", desc: "We obsess over feel, feedback, and replayability." },
  { title: "Fast updates", desc: "Frequent drops, events, and seasonal content." },
  { title: "Polish + vibes", desc: "Juicy UI, satisfying loops, and clean performance." },
];

export default function OurStudioSection() {
  return (
    <section className="our-studio" aria-labelledby="our-studio-title">
      <div className="our-studio__container">
        <header className="our-studio__header">
          <p className="our-studio__kicker">Karpath Games Studio</p>
          <h2 className="our-studio__title" id="our-studio-title">
            We build Roblox worlds that feel alive.
          </h2>
          <p className="our-studio__lead">
            A small team with a big obsession: fun, clarity, and moments players want to share.
          </p>
        </header>

        <div className="our-studio__grid">
          <div className="our-studio__card our-studio__card--feature">
            <div className="our-studio__featureTop">
              <div className="our-studio__badge">Karpath Games Studio</div>
              <div className="our-studio__spark" aria-hidden="true" />
            </div>

            <p className="our-studio__featureText">
              We mix <strong>fast prototyping</strong> with <strong>high polish</strong> — then iterate
              with real player data. That’s how we turn good ideas into games people come back to.
            </p>

            <div className="our-studio__stats" role="list">
              {stats.map((s) => (
                <div className="our-studio__stat" role="listitem" key={s.label}>
                  <div className="our-studio__statValue">{s.value}</div>
                  <div className="our-studio__statLabel">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="our-studio__actions">
              <a className="our-studio__btn our-studio__btn--primary" href="/about">
                Meet the team
              </a>
              <a className="our-studio__btn our-studio__btn--ghost" href="/games">
                Explore our games
              </a>
            </div>
          </div>

          <div className="our-studio__card our-studio__card--values">
            <h3 className="our-studio__cardTitle">How we work</h3>

            <ul className="our-studio__valueList">
              {values.map((v) => (
                <li className="our-studio__valueItem" key={v.title}>
                  <div className="our-studio__icon" aria-hidden="true" />
                  <div>
                    <div className="our-studio__valueTitle">{v.title}</div>
                    <div className="our-studio__valueDesc">{v.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="our-studio__miniCTA">
              <p className="our-studio__miniText">
                Want to collaborate or sponsor an event in-game?
              </p>
              <a className="our-studio__link" href="/contact">
                Contact us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="our-studio__bottom">
          <div className="our-studio__pill">
            <span className="our-studio__dot" aria-hidden="true" />
            <span>Hiring creators + builders on Roblox</span>
          </div>

          <div className="our-studio__pill our-studio__pill--right">
            <span className="our-studio__dot" aria-hidden="true" />
            <span>New update drops every month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
