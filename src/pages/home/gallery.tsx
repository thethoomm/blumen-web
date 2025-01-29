import { Droplet, ShoppingBag, Sun } from "lucide-react";
import { Button } from "@/components/button";
import { StepCard, StepCardType } from "@/components/step-card";

const cards: StepCardType[] = [
  {
    icon: Droplet,
    title: "Watering",
    description:
      "water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.",
  },
  {
    icon: Sun,
    title: "Sunlight",
    description:
      "Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs",
  },
  {
    icon: ShoppingBag,
    title: "Nutrients and Fertilizing",
    description:
      "Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.",
  },
];

export function Gallery() {
  return (
    <section>
      <main className="container-lg py-32 space-y-32">
        <header className="flex flex-col items-center justify-center gap-3">
          <h2 className="capitalize font-eb-garamond text-primary-lunar text-6xl font-bold">
            steps to take care of your{" "}
            <span className="text-primary-avacado">plants</span>
          </h2>
          <p className="font-raleway text-secondary max-w-5xl text-start lg:text-center">
            By following these three steps - proper watering, appropriate
            sunlight, and providing essential nutrients - you'll be well on your
            way to maintaining healthy and thriving plants.
          </p>
        </header>

        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
          {cards.map((card, index) => (
            <StepCard key={index} card={card} />
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
          <img
            src="/assets/images/gallery1.png"
            alt="Gallery Image 1"
            className="w-full h-full min-h-[700px]"
          />
          <img
            src="/assets/images/gallery2.png"
            alt="Gallery Image 2"
            className="w-full h-full min-h-[700px]"
          />
          <div className="w-full h-full flex flex-col gap-8">
            <img
              src="/assets/images/gallery3.png"
              alt="Gallery Image 3"
              className="w-full"
            />
            <p className="font-raleway text-secondary">
              Our website offers a wide array of stunning plants, ranging from
              vibrant flowers to lush indoor foliage, allowing you to create
              your very own green oasis. In addition to our extensive plant
              selection, we also provide gardening kits and fertilizers to equip
              you with everything you need to nurture your plants and achieve
              gardening success. But we don't stop there! We believe that
              knowledge is the key to a thriving garden, so we offer a wealth of
              information and resources on gardening techniques, plant care
              tips, and landscaping ideas. Whether you're a seasoned gardener or
              just starting your green journey, our goal is to inspire and
              support you every step of the way. Get ready to explore our
              virtual garden and discover the joys of gardening with us!
            </p>

            <Button className="px-8 py-4">See more photos</Button>
          </div>
        </div>
      </main>
    </section>
  );
}
