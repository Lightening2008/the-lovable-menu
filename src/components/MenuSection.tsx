interface MenuItem {
  name: string;
  price: number;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  image?: string;
  imageAlt?: string;
  delay?: number;
}

const MenuSection = ({ title, items, image, imageAlt, delay = 0 }: MenuSectionProps) => {
  return (
    <div
      className="opacity-0 animate-fade-in-up text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="font-display text-2xl md:text-3xl italic text-primary font-semibold mb-4">
        {title}
      </h2>

      {image && (
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/40 shadow-md">
            <img src={image} alt={imageAlt || title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        {items.map((item, index) => (
          <p key={index} className="font-body text-foreground tracking-[0.15em] text-sm uppercase">
            {item.name} <span className="text-accent font-semibold">· ₹{item.price}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
