import { Phone, MapPin, Truck } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-accent" />
          <h3 className="font-display text-2xl italic text-primary">Free Delivery</h3>
        </div>
        <div className="space-y-2 font-body text-sm tracking-wide text-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span>123 Anywhere St., Any City</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground tracking-widest uppercase pt-4">
          © 2026 Cafe Kolar — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
