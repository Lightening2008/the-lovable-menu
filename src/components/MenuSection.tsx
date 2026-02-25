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
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        {image && (
          <div className="circle-image w-20 h-20 flex-shrink-0">
            <img src={image} alt={imageAlt || title} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h2 className="font-display text-2xl md:text-3xl italic text-primary font-semibold">
            {title}
          </h2>
          <div className="menu-divider mt-2" />
        </div>
      </div>
      <div className="space-y-3 pl-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-baseline justify-between gap-2">
            <span className="font-body text-foreground tracking-wider text-sm uppercase">
              {item.name}
            </span>
            <span className="flex-1 border-b border-dotted border-coffee-light mx-2 mb-1" />
            <span className="font-display text-accent font-semibold text-lg">
              ₹{item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
