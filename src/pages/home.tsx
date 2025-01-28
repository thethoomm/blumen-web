import { Button } from "@/components/button";

export default function Home() {
  return (
    <section className="h-full bg-gray flex flex-row justify-between relative">
      <img
        src="/assets/images/plant2.png"
        alt="Leaf"
        className="absolute left-0 -bottom-1/8 mix-blend-luminosity z-10"
      />

      <main className="w-full flex px-20 py-24">
        <div className="w-xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-0.5 bg-black"></span>
            <span className="font-pacifico text-center">Love for Nature</span>
          </div>

          <h2 className="capitalize font-eb-garamond text-primary-lunar text-6xl font-bold">
            Discover your <span className="text-primary-avacado">green</span>{" "}
            side
          </h2>

          <p className="font-raleway text-secondary">
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>

          <Button>Shop now</Button>
        </div>
      </main>

      <img
        className="w-full h-[calc(100vh-2rem)] object-cover mix-blend-luminosity"
        src="/assets/images/plant1.png"
        draggable={false}
      />
    </section>
  );
}
