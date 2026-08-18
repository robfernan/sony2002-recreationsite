import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/hdr_logo_sony.gif.asset.json";
import moodAsset from "@/assets/home_photo_mood.jpg.asset.json";
import promo1Asset from "@/assets/home_photo_promo1_on.jpg.asset.json";
import promo2Asset from "@/assets/home_photo_promo2_on.jpg.asset.json";
import promo3Asset from "@/assets/home_photo_promo3_on.jpg.asset.json";
import promo4Asset from "@/assets/home_photo_promo4_on.jpg.asset.json";

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

function Arrow() {
  return (
    <span
      aria-hidden
      className="mr-1 inline-block h-[7px] w-[6px] align-[0px] bg-sony-orange"
      style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
    />
  );
}

function ChevLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="block text-[11px] leading-[1.6] text-sony-blue hover:underline">
      <Arrow />
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
    <div className="min-h-screen bg-background text-sony-blue [zoom:1] min-[1500px]:[zoom:1.3] min-[2200px]:[zoom:1.85] min-[3200px]:[zoom:2.6]">
      <div className="mx-auto w-full max-w-[740px] px-3 lg:px-0">

        {/* Masthead */}
        <header className="flex flex-wrap items-end gap-x-6 gap-y-2 py-3">
          <img
            src={logoAsset.url}
            alt="Sony"
            width={101}
            height={52}
            className="h-[26px] w-auto"
          />
          <form
            className="flex flex-1 items-center gap-2 pb-[2px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="q" className="text-[10px] font-bold tracking-[0.1em] text-sony-blue">
              SEARCH:
            </label>
            <input
              id="q"
              className="h-[18px] w-[150px] border border-sony-rule bg-background px-1 text-[11px] outline-none"
            />
            <button className="h-[18px] bg-sony-orange px-2 text-[10px] font-bold text-background">
              GO
            </button>
          </form>
          <a href="#" className="pb-[3px] text-[11px] text-sony-blue hover:underline">
            <Arrow /> Global Sites
          </a>
          <span className="pb-[2px] text-[13px] font-bold text-sony-blue">USA</span>
        </header>

        {/* Nav bar */}
        <nav className="flex items-center gap-x-[10px] gap-y-1 border-y border-sony-rule py-[5px] text-[9px] font-bold tracking-wide max-lg:flex-wrap lg:whitespace-nowrap">
          <a href="#" className="text-sony-blue hover:underline">
            <Arrow /> SHOP
          </a>
          <span className="ml-2 text-[9px] font-normal tracking-[0.15em] text-muted-foreground">
            EXPLORE:
          </span>
          {topNav.map((item) => (
            <a key={item} href="#" className="text-sony-blue hover:underline">
              <Arrow /> {item}
            </a>
          ))}
        </nav>

        {/* Hero */}
        <section className="relative mt-[6px] @container">
          <img
            src={moodAsset.url}
            alt="Welcome to the world of Sony — music, movies, TV, games, electronics"
            width={740}
            height={231}
            className="block w-full"
          />
          <aside
            className="absolute right-[2.4%] top-[21%] hidden w-[24%] text-background sm:block"
            style={{ fontSize: "1.02cqw" }}
          >
            <h2 className="text-[1.9em] font-bold leading-none">what&apos;s new</h2>
            <p className="mt-[0.8em] text-[1.35em] leading-[1.5]">
              PlayStation 2 is now online! Feel the power of the new Network Adaptor for
              PlayStation 2 which includes playable demos of Madden NFL 2003, Frequency and more.
              <span className="font-bold"> Get your game online.</span>
            </p>
          </aside>
        </section>

        {/* What's new — small screens */}
        <section className="mt-[6px] bg-sony-orange px-3 py-3 text-background sm:hidden">
          <h2 className="text-[14px] font-bold">what&apos;s new</h2>
          <p className="mt-2 text-[11px] leading-[1.5]">
            PlayStation 2 is now online! Feel the power of the new Network Adaptor for PlayStation
            2 which includes playable demos of Madden NFL 2003, Frequency and more.
            <span className="font-bold"> Get your game online.</span>
          </p>
        </section>


        {/* Card row — SEE / HEAR / PLAY / SHOP */}
        <section className="mt-[6px] grid grid-cols-1 gap-[6px] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.6fr]">
          <Card
            title="SEE"
            url="www.screenblast.com"
            promo={promo1Asset.url}
            promoAlt="Wake Up Show .com"
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
            promo={promo2Asset.url}
            promoAlt="Barbershop — in stores August 27th"
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
            promo={promo3Asset.url}
            promoAlt="Connect & Collect Sweepstakes"
            body={
              <>
                <p className="text-[11px] leading-[1.5] text-sony-orange">
                  Pre-order EverQuest: <span className="text-sony-blue">The Planes of Power</span>
                </p>
                <p className="mt-3 text-[11px] leading-[1.5]">
                  Relax your mind with a game of <span className="text-sony-orange">Yuetan</span>
                </p>
              </>
            }
            footer={["PlayStation", "The Station", "AIBO", "Metreon"]}
          />

          {/* SHOP card */}
          <article className="relative flex flex-col bg-sony-panel sm:col-span-2 lg:col-span-1">
            <div
              className="absolute left-0 top-0 h-[16px] w-[16px] bg-background"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
            <div className="flex-1 px-3 pb-3 pt-3">
              <h2 className="text-[15px] font-bold text-sony-blue">SHOP</h2>
              <div className="mt-2 flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div className="min-w-0">
                  <ChevLink>Electronics at Sony Style</ChevLink>
                  <ChevLink>PlayStation Store</ChevLink>
                  <ChevLink>Sony Pictures Studio Store</ChevLink>
                  <ChevLink>Sony Music Shop</ChevLink>
                  <ChevLink>Get the Sony Card</ChevLink>
                </div>
                <div className="shrink-0">
                  <p className="mb-1 text-[11px] text-sony-orange">www.sonystyle.com</p>
                  <img
                    src={promo4Asset.url}
                    alt="Back to School in SonyStyle"
                    width={120}
                    height={60}
                    loading="lazy"
                    className="block"
                  />
                </div>
              </div>
            </div>
            <div className="bg-sony-panel-deep px-3 py-2 text-[11px] leading-[1.6]">
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
          </article>
        </section>


        {/* Footer */}
        <footer className="mt-5 border-t border-sony-rule pb-8 pt-3 text-center">
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

function Card({
  title,
  url,
  promo,
  promoAlt,
  body,
  footer,
}: {
  title: string;
  url: string;
  promo: string;
  promoAlt: string;
  body: React.ReactNode;
  footer: string[];
}) {
  return (
    <article
      className="relative flex flex-col bg-sony-panel"
      style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)" }}
    >
      <div className="flex-1 px-3 pb-3 pt-3">

        <h2 className="text-[15px] font-bold text-sony-blue">{title}</h2>
        <p className="mb-2 mt-1 text-[11px] text-sony-orange">{url}</p>
        <img src={promo} alt={promoAlt} width={120} height={60} loading="lazy" className="block" />
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
