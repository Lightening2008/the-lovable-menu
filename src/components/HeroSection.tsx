import heroCoffee from "@/assets/hero-coffee.webp";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <img
        src={heroCoffee}
        alt="Beautiful latte art coffee"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/40 to-background" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="font-display italic text-warm-cream text-xl md:text-2xl mb-2 opacity-0 animate-fade-in-up">
          today's
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-warm-cream opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}>
          Menu
        </h1>
        <div className="mt-4 w-24 h-0.5 bg-accent opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }} />
        <p className="font-body text-warm-cream/80 mt-4 text-sm tracking-[0.3em] uppercase opacity-0 animate-fade-in-up"
           style={{ animationDelay: '500ms' }}>
          Cafe Kolar
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
