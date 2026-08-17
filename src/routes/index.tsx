import { createFileRoute } from "@tanstack/react-router";
import heroWoman from "@/assets/hero-woman.jpg";
import kids from "@/assets/kids.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sony USA — Welcome to the World of Sony (2002 Archive)" },
      {
        name: "description",
        content:
          "A faithful recreation of the 2002 Sony USA homepage: electronics, PlayStation, online games, movies, TV & DVD, and music.",
      },
      { property: "og:title", content: "Sony USA — Welcome to the World of Sony (2002 Archive)" },
      {
        property: "og:description",
        content: "Recreation of the classic 2002 Sony portal homepage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Arrow({ tone = "orange" }: { tone?: "orange" | "white" }) {
  return (
    <span
      aria-hidden
      className={`mr-1 inline-block h-[9px] w-[9px] align-[-1px] ${
        tone === "orange" ? "bg-sony-orange" : "bg-background"
      }`}
      style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
    />
  );
}

function ChevLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="block text-[11px] leading-[1.5] text-sony-orange hover:underline">
      <span aria-hidden className="mr-1">
        »
      </span>
      {children}
    </a>
  );
}

const topNav = [
  "ELECTRONICS",
  "PLAYSTATION",
  "ONLINE GAMES",
  "MOVIES, TV, & DVD",
  "MUSIC",
  "MORE OF SONY",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-sony-blue">
      <div className="mx-auto w-[822px] max-w-full">
        {/* Masthead */}
        <header className="flex items-center gap-6 px-3 py-4">
          <h1 className="text-[30px] font-bold italic tracking-[0.12em] text-foreground">SONY</h1>
          <form
            className="ml-8 flex flex-1 items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              htmlFor="q"
              className="text-[11px] font-bold tracking-[0.12em] text-sony-blue"
            >
              SEARCH :
            </label>
            <input
              id="q"
              className="h-[19px] w-[170px] border border-sony-rule bg-background px-1 text-[11px] outline-none"
            />
            <button className="h-[19px] bg-sony-orange px-3 text-[10px] font-bold text-background">
              GO
            </button>
          </form>
          <a href="#" className="text-[11px] text-sony-blue hover:underline">
            <Arrow /> Global Sites
          </a>
          <span className="text-[15px] font-bold text-foreground">USA</span>
        </header>

        {/* Nav bar */}
        <nav className="flex items-center gap-3 whitespace-nowrap border-y border-sony-rule px-3 py-[6px] text-[9px] font-bold tracking-wide">
          <a href="#" className="text-sony-blue hover:underline">
            <Arrow /> SHOP
          </a>
          <span className="ml-4 text-[10px] font-normal tracking-[0.18em] text-muted-foreground">
            EXPLORE:
          </span>
          {topNav.map((item) => (
            <a key={item} href="#" className="text-sony-blue hover:underline">
              <Arrow /> {item}
            </a>
          ))}
        </nav>

        {/* Hero */}
        <section className="relative mt-[6px] h-[300px] overflow-hidden">
          <img
            src={heroWoman}
            alt="Woman listening to music on a Sony wrist player"
            width={1024}
            height={768}
            className="absolute left-0 top-0 h-full w-[430px] object-cover object-[35%_20%]"
          />
          <div
            className="absolute left-[210px] top-0 h-full w-[540px] bg-sony-orange"
            style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 60% 100%, 44% 62%, 0 62%)" }}
          >
            <div
              aria-hidden
              className="absolute left-[6%] top-[8%] h-[150px] w-[150px] opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, oklch(0.82 0.13 60) 42%, transparent 44%)",
                backgroundSize: "15px 15px",
              }}
            />
          </div>

          <div className="absolute left-[248px] top-[118px] w-[290px]">
            <p className="mb-3 border-l border-background/70 pl-3 text-[11px] font-bold leading-[1.35] text-background">
              music, movies, TV,
              <br />
              games , electronics
            </p>
            <p className="text-[30px] leading-[1] text-sony-blue">
              welcome{" "}
              <span className="text-[16px] text-background">
                to the <span className="text-[19px]">world of</span>
              </span>
            </p>
            <p className="mt-1 text-[30px] font-bold leading-none text-sony-blue">Sony</p>
          </div>

          <aside className="absolute left-[552px] top-[110px] w-[190px] text-background">
            <h2 className="text-[15px] font-bold">what&apos;s new</h2>
            <p className="mt-2 text-[10px] leading-[1.5]">
              PlayStation 2 is now online! Feel the power of the new Network Adaptor for
              PlayStation 2 which includes playable demos of Madden NFL 2003, Frequency and more.
              <span className="font-bold"> Get your game online.</span>
            </p>
          </aside>
        </section>

        {/* Card row */}
        <section className="mt-[6px] grid grid-cols-[1fr_1fr_1fr] gap-[6px] px-0">
          <Card
            title="SEE"
            url="www.screenblast.com"
            tile={
              <Tile
                lines={["THE ONLY", "SOURCE FOR", "HIP-HOP"]}
                tone="dark"
              />
            }
            body={
              <>
                <p className="text-[11px] leading-[1.5]">
                  Eddie Murphy and Owen Wilson in <span className="text-sony-orange">I Spy</span>
                </p>
                <p className="mt-3 text-[11px] leading-[1.5] text-sony-orange">
                  Enter Ripley&apos;s Find the Shrunken Head sweepstakes
                </p>
              </>
            }
            footer={["Movies", "TV", "DVD & Video", "ImageStation", "Screenblast"]}
          />
          <Card
            title="HEAR"
            url="usa.sonymusic.com"
            tile={<Tile lines={["BARBERSHOP", "MUSIC FROM", "P DIDDY & MORE"]} tone="mid" />}
            body={
              <>
                <p className="text-[11px] leading-[1.5]">
                  Music for your world. <span className="text-sony-orange">Listen now.</span>
                </p>
                <p className="mt-3 text-[11px] leading-[1.5] text-sony-orange">
                  Watch Xzibit&apos;s new video &quot;Multiply&quot;
                </p>
              </>
            }
            footer={["Music", "Musicclub", "Home Audio", "pressplay", "Walkman"]}
          />
          <Card
            title="PLAY"
            url="gameshownetwork.com"
            tile={<Tile lines={["CONNECT", "COLLECT", "SWEEPSTAKES"]} tone="grey" />}
            body={
              <>
                <p className="text-[11px] leading-[1.5] text-sony-orange">
                  Pre-order EverQuest:{" "}
                  <span className="text-sony-blue">The Planes of Power</span>
                </p>
                <p className="mt-3 text-[11px] leading-[1.5]">
                  Relax your mind with a game of <span className="text-sony-orange">Yuetan</span>
                </p>
              </>
            }
            footer={["PlayStation", "The Station", "AIBO", "Metreon"]}
          />
        </section>

        {/* Shop panel */}
        <section className="relative mt-[6px] bg-sony-panel">
          <div
            className="absolute left-0 top-0 h-[18px] w-[18px] bg-background"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
          <div className="grid grid-cols-[1fr_1fr_260px] gap-4 px-4 pb-2 pt-3">
            <div className="col-span-3 -mb-1">
              <h2 className="text-[15px] font-bold text-sony-blue">SHOP</h2>
            </div>
            <div className="pt-1">
              <ChevLink>Electronics at Sony Style</ChevLink>
              <ChevLink>PlayStation Store</ChevLink>
              <ChevLink>Sony Pictures Studio Store</ChevLink>
              <ChevLink>Sony Music Shop</ChevLink>
              <ChevLink>Get the Sony Card</ChevLink>
            </div>
            <div />
            <div className="pt-1">
              <p className="mb-1 text-right text-[11px] text-sony-orange">www.sonystyle.com</p>
              <div className="relative bg-sony-panel-deep">
                <img
                  src={kids}
                  alt="Back to school at SonyStyle"
                  width={640}
                  height={512}
                  loading="lazy"
                  className="h-[86px] w-full object-cover object-[50%_30%]"
                />
                <span className="absolute right-2 top-3 text-right text-[13px] font-bold leading-[1.2] text-background drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">
                  Back
                  <br />
                  to School
                  <br />
                  <span className="text-[10px] font-normal">in SonyStyle</span>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-sony-panel-deep px-4 py-2 text-[11px] leading-[1.6]">
            {["CLIÉ", "VAIO", "Mavica", "Handycam", "Memory Stick", "Sony Ericsson", "Xplod"].map(
              (t, i, arr) => (
                <span key={t}>
                  <a href="#" className="hover:underline">
                    {t}
                  </a>
                  {i < arr.length - 1 && <span className="px-1 text-sony-rule">|</span>}
                </span>
              ),
            )}
            <br />
            <a href="#" className="hover:underline">
              Electronics Service &amp; Support
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 border-t border-sony-rule pt-3 pb-8 text-center">
          <nav className="flex flex-wrap items-center justify-center gap-5 text-[11px]">
            {[
              "Index of Sites",
              "Feedback",
              "Terms/Privacy",
              "Investor Relations",
              "Corporate Info",
              "Business Solutions",
            ].map((l) => (
              <a key={l} href="#" className="text-sony-blue hover:underline">
                <Arrow /> {l}
              </a>
            ))}
          </nav>
          <p className="mt-3 text-[11px] text-sony-blue">© 2002 Sony Corporation of America</p>
        </footer>
      </div>
    </div>
  );
}

function Tile({ lines, tone }: { lines: string[]; tone: "dark" | "mid" | "grey" }) {
  const bg =
    tone === "dark"
      ? "bg-foreground text-background"
      : tone === "mid"
        ? "bg-sony-blue text-background"
        : "bg-sony-panel-deep text-sony-blue";
  return (
    <div className={`flex h-[68px] flex-col items-center justify-center ${bg}`}>
      {lines.map((l, i) => (
        <span
          key={l}
          className={
            i === 1
              ? "text-[13px] font-bold uppercase tracking-tight"
              : "text-[10px] font-bold uppercase"
          }
        >
          {l}
        </span>
      ))}
    </div>
  );
}

function Card({
  title,
  url,
  tile,
  body,
  footer,
}: {
  title: string;
  url: string;
  tile: React.ReactNode;
  body: React.ReactNode;
  footer: string[];
}) {
  return (
    <article className="relative flex flex-col bg-sony-panel">
      <div
        className="absolute left-0 top-0 h-[16px] w-[16px] bg-background"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div className="flex-1 px-3 pb-3 pt-3">
        <h2 className="text-[15px] font-bold text-sony-blue">{title}</h2>
        <p className="mb-2 mt-1 text-[11px] text-sony-orange">{url}</p>
        {tile}
        <div className="mt-3">{body}</div>
      </div>
      <div className="bg-sony-panel-deep px-3 py-2 text-[11px] leading-[1.6]">
        {footer.map((f, i) => (
          <span key={f}>
            <a href="#" className="hover:underline">
              {f}
            </a>
            {i < footer.length - 1 && <span className="px-1 text-sony-rule">|</span>}
          </span>
        ))}
      </div>
    </article>
  );
}
