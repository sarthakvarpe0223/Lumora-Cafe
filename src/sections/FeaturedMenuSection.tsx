import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    name: "Velvet Cappuccino",
    description: "Rich espresso, silky steamed milk, delicate cocoa.",
    price: "₹280",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Classic Croissant",
    description: "Buttery, flaky and baked fresh every morning.",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Signature Tiramisu",
    description: "Espresso-soaked mascarpone with a delicate cocoa finish.",
    price: "₹340",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function FeaturedMenuSection() {
  return (
    <section className="relative overflow-hidden bg-[#f4efe7] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#9a6b42]">
              From our kitchen
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#241b16] md:text-6xl">
              A menu made for
              <span className="block italic text-[#8b6040]">
                slow moments.
              </span>
            </h2>
          </div>

          <a
            href="#menu"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#8b6040]/40 pb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#241b16] transition hover:border-[#241b16]"
          >
            View full menu
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden bg-white/70 shadow-[0_20px_60px_rgba(45,31,22,0.08)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-7 md:p-8">
                <div className="mb-4 flex items-start justify-between gap-5">
                  <h3 className="font-serif text-2xl text-[#241b16]">
                    {item.name}
                  </h3>

                  <span className="whitespace-nowrap text-sm font-medium text-[#8b6040]">
                    {item.price}
                  </span>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#6e625b]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
