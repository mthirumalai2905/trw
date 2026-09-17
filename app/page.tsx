import Image from "next/image";
import Link from "next/link";
import { JoinBand } from "@/components/landing/JoinBand";
import { EcosystemPath } from "@/components/landing/EcosystemPath";
import { StartHere } from "@/components/landing/StartHere";
import { TrackingRecord } from "@/components/landing/TrackingRecord";
import { VideoWall } from "@/components/landing/VideoWall";

export default function HomePage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-dispatch.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_48%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[820px] flex-col items-center px-5 pb-24 pt-28 text-center md:pt-32">
          <p className="font-mono text-[10px] tracking-[0.32em] text-white/45">THE REAL TIME WEB</p>
          <h1 className="font-serif mt-5 text-[2.6rem] leading-[1.08] tracking-[-0.03em] text-[#f2efe8] drop-shadow-[0_8px_28px_rgba(0,0,0,0.7)] md:text-[4.35rem]">
            The network worth
            <br />
            <em className="italic">owning</em>.
          </h1>
          <p className="mt-5 max-w-[32rem] text-[15px] leading-relaxed text-white/55 md:text-[16px]">
            A live web for people, devices, services, and ideas, where what you create stays
            yours, and the network keeps growing around it.
          </p>
          <form
            action="https://morph.space"
            className="mt-8 flex w-full max-w-[420px] items-center gap-2 rounded-full border border-white/12 bg-black/40 p-1.5 backdrop-blur-md"
          >
            <input
              name="domain"
              type="text"
              placeholder="your domain or organization"
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-[13px] text-white outline-none placeholder:text-white/35"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#e8e4db] px-4 py-2 text-[12px] font-medium text-[#111] transition-opacity hover:opacity-85"
            >
              Join the network
            </button>
          </form>
          <Link
            href="/docs/introduction"
            className="mt-4 font-mono text-[11px] text-white/40 hover:text-white/70"
          >
            Learn who we are →
          </Link>
        </div>
      </section>

      <div className="border-y border-[var(--line)] bg-[var(--bg-elev)]">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Public architecture</span>
          <span className="hidden text-[var(--line)] sm:inline">/</span>
          <Link href="/docs/specification" className="hover:text-[var(--ink)]">
            Specification in draft
          </Link>
          <span className="hidden text-[var(--line)] sm:inline">/</span>
          <a href="https://morph.space" rel="noreferrer" className="hover:text-[var(--ink)]">
            Join on Morph.Space
          </a>
          <span className="hidden text-[var(--line)] sm:inline">/</span>
          <a href="https://synx.tools" rel="noreferrer" className="hover:text-[var(--ink)]">
            Operate with Synx
          </a>
        </div>
      </div>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-[1080px] gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:py-32">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">01  WHO WE ARE</p>
            <h2 className="font-serif mt-4 text-[2rem] leading-tight text-[var(--ink)] md:text-[2.6rem]">
              An open ecosystem for a live, intelligent web.
            </h2>
          </div>
          <div className="text-[15px] leading-[1.8] text-[var(--muted)]">
            <p>
              Real Time Web exists so anyone can connect the physical world to the virtual world,
              and back again, in real time. We see the Web as the world’s biggest marketplace and
              an unparalleled platform for innovation.
            </p>
            <p className="mt-5">
              We want a web that rewards and protects the people who create value, so everyone
              has a real chance to develop their ideas and benefit from what they make.
            </p>
          </div>
        </div>
      </section>

      <EcosystemPath />

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-[1080px] gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">02  THE CHANGE</p>
            <h2 className="font-serif mt-4 text-[2.1rem] leading-[1.2] text-[var(--ink)] md:text-[2.7rem]">
              Eternal widespread ownership of the Web.
            </h2>
          </div>
          <div className="text-[15px] leading-[1.8] text-[var(--muted)]">
            <p>
              The Web today is extraordinary at documents and published information. It was not
              built for billions of live sensors, machines, services, and people acting together.
            </p>
            <p className="mt-5">
              We are here to upgrade that picture: link to things the way we already link to files,
              keep ownership with the creator, and let the network grow as more people make things
              on it.
            </p>
          </div>
        </div>
      </section>

      <TrackingRecord />

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-[1080px] items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)]">04  THE PROMISE</p>
            <h2 className="font-serif mt-4 text-[2.1rem] leading-[1.2] text-[var(--ink)] md:text-[2.8rem]">
              Don’t let unknown platforms govern your data.
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-[1.8] text-[var(--muted)]">
              Be the owner of your own data. What you contribute stays associated with you. You
              decide whether it is available, who may access it, and under which conditions it may
              be used, instead of handing the original source to a central platform.
            </p>
            <p className="mt-5 text-[15px] leading-[1.8] text-[var(--muted)]">
              Morph Space is how people and organizations join. Synx is how operators configure
              and secure their part of the network. RealTimeWeb.org is where you understand the
              idea.
            </p>
            <Link
              href="/docs/brand"
              className="mt-8 inline-block font-mono text-[11px] tracking-[0.12em] text-[var(--accent)]"
            >
              Read the brand strategy →
            </Link>
          </div>
        </div>
      </section>

      <StartHere />

      <VideoWall />

      <JoinBand />
    </main>
  );
}
