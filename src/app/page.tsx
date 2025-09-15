import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Top brand bar */}
      <div className="w-full bg-white py-5 text-center">
        <span className="display-font text-xl md:text-2xl uppercase tracking-[0.38em] text-neutral-700 font-semibold">
          Food4Homeless
        </span>
      </div>
      {/* Hero */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left visual: Hero image */}
          <div className="relative aspect-[16/9] w-full lg:aspect-auto lg:h-[560px]">
            <Image
              src="/images/A.png"
              alt="Hero visual"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center justify-center bg-neutral-900 p-10 text-white lg:h-[560px]">
            <div className="max-w-md text-center">
              <h1 className="display-font mt-6 text-3xl font-normal tracking-wide md:text-4xl lg:text-5xl">
                SOL feeds lives
                <br />
                SOULS
              </h1>

              <p className="mx-auto mt-4 max-w-sm text-sm text-neutral-300">
                Join us to fight hunger and make a real impact.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Trade $FTP to feed LA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="display-font text-3xl md:text-4xl font-normal tracking-wide text-neutral-800">
            Our Mission
          </h2>

          <p className="mt-6 text-[17px] md:text-lg leading-8 text-neutral-600">
            At <span className="font-semibold">Feed The People ($FTP)</span>, At
            Food4Homeless ($F4H), the vision is simple: Transform meme coin hype
            into real food for those in need. Every trade on Pump.fun generates
            creator rewards — instead of keeping them, we turn those rewards
            directly into meals, water, and supplies for the homeless. From Skid
            Row to Venice Beach, every action is live and transparent so the
            community sees their impact in real time.
          </p>
        </div>
      </section>

      {/* Proof section */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <h3
            className="
        display-font 
        text-left 
        text-[20px] sm:text-2xl md:text-3xl lg:text-4xl 
        font-semibold 
        uppercase 
        tracking-[0.2em] 
        leading-relaxed 
        text-neutral-700
      "
          >
            This isn’t just talk. $F4H is proof-of-work IRL — on-chain and
            on-stream. Every livestream, every photo, every meal handed out is
            proof of impact.
          </h3>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/B.png"
              alt="Proof visual"
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: image placeholder, full half width */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[720px]">
            <Image
              src="/images/image1.webp"
              alt="How it works illustration"
              fill
              priority={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: content, vertically centered */}
          <div className="flex items-center justify-center px-6 py-10 lg:h-[720px] lg:pl-20">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="display-font flex items-center justify-center gap-3 text-xl font-semibold uppercase tracking-wide text-neutral-900 md:text-2xl lg:justify-start">
                <span className="inline-block h-6 w-6 rounded bg-blue-600/10 text-blue-600" />
                How it works
              </h3>

              <ol className="mt-6 space-y-6 text-neutral-700">
                <li>
                  <p className="font-semibold">1. Trade $F4H</p>
                  <p className="text-sm">
                    Every buy or sell generates creator rewards.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">2. Rewards → Meals</p>
                  <p className="text-sm">
                    Instead of being pocketed, these rewards are used to
                    purchase food and essentials for the homeless.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">3. Livestream Proof</p>
                  <p className="text-sm">
                    We broadcast the entire process — so the community can
                    witness every meal served, every bottle of water handed out.
                  </p>
                </li>
              </ol>

              <a
                href="#"
                className="mt-8 inline-flex rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                Trade $FTP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#f3f3f3] pt-6 md:pt-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h3 className="display-font text-3xl md:text-4xl font-bold uppercase tracking-[0.2em] text-[#2f4f4f] ">
            Contact Us
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-7 text-neutral-700">
            We’re not a 9–5. $F4H is live every day — on the streets and on
            stream.
          </p>

          <div className="mt-6 space-y-2 text-base text-neutral-700">
            <p>
              Follow on X:{" "}
              <a className="text-blue-600 hover:underline" href="#">
                @ftp
              </a>
            </p>
            <p>
              Join the community on Telegram:{" "}
              <a className="text-blue-600 hover:underline" href="#">
                t.me/ftp
              </a>
            </p>
            <p>
              Watch the livestreams:{" "}
              <a className="text-blue-600 hover:underline" href="#">
                live.example
              </a>
            </p>
          </div>

          <p className="mt-8 font-medium">Food4Homeless</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-10 text-neutral-400">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-8 w-8">
              <Image
                src="/images/imagelogox.jpg"
                alt="X logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-contain"
                priority={false}
              />
            </div>
            <p className="text-xs text-neutral-300">
              Copyright © 2025 Feed The People - All Rights Reserved.
            </p>
            <span className="mt-1 block h-px w-14 bg-neutral-700/60" />
          </div>
        </div>
      </footer>
    </main>
  );
}
