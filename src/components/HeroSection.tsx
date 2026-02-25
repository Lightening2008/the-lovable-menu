import heroCoffee from "@/assets/hero-coffee.webp";

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-8 px-4 overflow-hidden">
      {/* Decorative coffee bean outlines - top left */}
      <div className="absolute top-4 left-4 opacity-10">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="40" rx="35" ry="28" stroke="hsl(var(--coffee-light))" strokeWidth="2" />
          <path d="M20 40 Q40 20 60 40" stroke="hsl(var(--coffee-light))" strokeWidth="1.5" />
          <ellipse cx="80" cy="60" rx="30" ry="24" stroke="hsl(var(--coffee-light))" strokeWidth="2" />
          <path d="M62 60 Q80 42 98 60" stroke="hsl(var(--coffee-light))" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto flex items-start justify-between">
        {/* Left: Title */}
        <div className="pt-6">
          <p className="font-display italic text-primary text-3xl md:text-4xl mb-1 opacity-0 animate-fade-in-up">
            today's
          </p>
          <h1
            className="font-display text-7xl md:text-9xl font-bold text-primary opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Menu
          </h1>
          <p
            className="font-body text-muted-foreground mt-2 text-sm tracking-[0.3em] uppercase opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Cafe Kolar
          </p>
        </div>

        {/* Right: Circular coffee image */}
        <div
          className="relative flex-shrink-0 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg">
            <img
              src={heroCoffee}
              alt="Beautiful latte art coffee"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
