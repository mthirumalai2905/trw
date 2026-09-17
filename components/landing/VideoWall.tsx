import { CornerMarks } from "@/components/CornerMarks";

const videos = [
  {
    id: "ITY5MawEM7Q",
    title: "Real Time Web Demo: Smart Umbrella",
  },
  {
    id: "zRyF2WWN1PE",
    title: "Real Time Web Demo: Micropayment",
  },
  {
    id: "O0INc6pvrUc",
    title: "Playing with Oranges",
  },
  {
    id: "ZVlckilIMyo",
    list: "PLDhywTRtTg_1OmYzFuxN6K4PE8Xr29HMR",
    title: "Hello example for Real Time Web",
  },
  {
    id: "qTqAjzxFzhc",
    list: "PLDhywTRtTg_1OmYzFuxN6K4PE8Xr29HMR",
    title: "Scan and post WiFi networks to RTW",
  },
  {
    id: "kNWXCyiSVxM",
    list: "PLDhywTRtTg_3spTKscg4c9TJ_h0K96CoG",
    title: "Brain x Nornir Hackathon at NTNU 2023",
  },
];

function srcFor(video: (typeof videos)[number]) {
  const base = `https://www.youtube-nocookie.com/embed/${video.id}`;
  return video.list ? `${base}?list=${video.list}&rel=0` : `${base}?rel=0`;
}

export function VideoWall() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1080px] px-6 py-24 md:py-32">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">05  SEE IT LIVE</p>
        <h2 className="font-serif mt-4 max-w-[18ch] text-[2rem] leading-tight text-[var(--ink)] md:text-[2.6rem]">
          Watch the network in motion.
        </h2>
        <p className="mt-4 max-w-[36rem] text-[15px] leading-relaxed text-[var(--muted)]">
          Demos first. Then the working examples. Then the hackathon.
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <figure key={video.id} className="min-w-0">
                <div className="relative bg-black p-2">
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <iframe
                      src={srcFor(video)}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <CornerMarks />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-2">
                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-right text-[12px] leading-snug text-[var(--muted)]">
                    {video.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
