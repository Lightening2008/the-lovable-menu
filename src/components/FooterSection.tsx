import { Phone, MapPin, Truck } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Truck className="w-5 h-5 text-warm-gold" />
          <h3 className="font-display text-2xl italic text-warm-gold">Free Delivery</h3>
        </div>
        <div className="space-y-3 font-body text-sm tracking-wide">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-coffee-light" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-coffee-light" />
            <span>123 Anywhere St., Any City</span>
          </div>
        </div>
        <div className="menu-divider !bg-gradient-to-r from-transparent via-coffee-light/30 to-transparent" />
        <p className="text-xs text-coffee-light tracking-widest uppercase">
          © 2026 Cafe Kolar — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
