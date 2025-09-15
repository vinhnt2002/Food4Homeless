import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Top brand bar */}
      <div className="w-full bg-white py-4 text-center">
        <span className="display-font text-sm md:text-base uppercase tracking-[0.24em] md:tracking-[0.38em] text-neutral-700 font-semibold">
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
            <div className="max-w-md px-4 text-center md:px-0">
              <h1 className="display-font mt-2 text-3xl leading-tight font-normal tracking-wide md:mt-4 md:text-5xl lg:text-6xl">
                SOL feeds lives
                <br />
                SOULS
              </h1>

              <p className="mx-auto mt-4 max-w-sm text-[13px] md:text-sm text-neutral-300">
                Join us to fight hunger and make a real impact.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-teal-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Trade $F4H to feed LA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8 md:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="display-font text-2xl md:text-4xl font-normal tracking-wide text-neutral-800">
            Our Mission
          </h2>

          <p className="mt-4 text-base md:text-lg leading-8 text-neutral-700">
            At <span className="font-semibold">Food4Homeless ($F4H)</span>, At
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
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h3
            className="
        display-font 
        text-center 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
        font-bold 
        uppercase 
        tracking-[0.1em] sm:tracking-[0.14em] md:tracking-[0.18em] lg:tracking-[0.22em] 
        leading-relaxed 
        text-[#2f4f4f]
      "
          >
            This isn’t just talk. $F4H is proof-of-work IRL — on-chain and
            on-stream. Every livestream, every photo, every meal handed out is
            proof of impact.
          </h3>
        </div>

        <div className="mx-auto mt-8 md:mt-10 max-w-5xl px-4">
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
              src="/images/image1.jpg"
              alt="How it works illustration"
              fill
              priority={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: content, vertically centered */}
          <div className="flex items-center justify-center px-5 py-10 lg:h-[720px] lg:pl-20">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="display-font flex items-center justify-center gap-3 text-lg md:text-xl font-semibold uppercase tracking-wide text-neutral-900 lg:justify-start">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/10 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 16l-3.5-3.5 1.42-1.42L11 13.17l4.59-4.59L17 10l-6 6z" />
                  </svg>
                </span>
                How it works
              </h3>

              <ol className="mt-5 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white text-neutral-700 shadow-sm">
                <li className="flex items-start gap-3 px-4 py-4 md:gap-4 md:px-5">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-teal-600/10 text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-base md:text-lg">
                      1. Trade $F4H
                    </p>
                    <p className="text-sm md:text-base">
                      Every buy or sell generates creator rewards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4 py-4 md:gap-4 md:px-5">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M12 2l3 7h7l-5.5 4.1L18 21l-6-4-6 4 1.5-7.9L2 9h7z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-base md:text-lg">
                      2. Rewards → Meals
                    </p>
                    <p className="text-sm md:text-base">
                      Rewards are used to purchase food and essentials.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 px-4 py-4 md:gap-4 md:px-5">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M4 4h16v2H4zm0 7h16v2H4zm0 7h10v2H4z" />
                    </svg>
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-base md:text-lg">
                      3. Livestream Proof
                    </p>
                    <p className="text-sm md:text-base">
                      We broadcast the entire process so everyone can follow.
                    </p>
                  </div>
                </li>
              </ol>

              <a
                href="#"
                className="mt-8 inline-flex rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                Trade $F4H
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
              <a
                className="text-blue-600 hover:underline"
                href="https://x.com/food4homeless_"
                target="_blank"
                rel="noreferrer noopener"
              >
                @food4homeless_
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
              Copyright © 2025 Food4Homeless - All Rights Reserved.
            </p>
            <span className="mt-1 block h-px w-14 bg-neutral-700/60" />
          </div>
        </div>
      </footer>
    </main>
  );
}
