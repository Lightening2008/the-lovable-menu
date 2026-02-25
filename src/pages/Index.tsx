import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import FooterSection from "@/components/FooterSection";

import teaImg from "@/assets/tea.webp";
import coldCoffeeImg from "@/assets/cold-coffee.webp";
import sandwichImg from "@/assets/sandwich.webp";
import burgerImg from "@/assets/burger.webp";
import friesImg from "@/assets/fries.webp";
import pizzaImg from "@/assets/pizza.webp";
import maggiImg from "@/assets/maggi.webp";

const menuData = {
  hotBeverages: [
    { name: "Tea", price: 10 },
    { name: "Coffee", price: 20 },
    { name: "B-Coffee", price: 20 },
    { name: "Lemon Tea", price: 15 },
    { name: "Green Tea", price: 15 },
  ],
  snacks: [
    { name: "Biscuit", price: 5 },
    { name: "Ban (Bun)", price: 15 },
    { name: "Cream Roll", price: 10 },
    { name: "Water Bottle", price: 10 },
  ],
  sandwiches: [
    { name: "Veg Sandwich", price: 40 },
    { name: "Veg Cheese Sandwich", price: 55 },
  ],
  grills: [
    { name: "Veg Cheese Grill", price: 60 },
    { name: "Masala Cheese Grill", price: 70 },
    { name: "Sweet Corn Grill", price: 80 },
  ],
  burgers: [
    { name: "Veg Cheese Burger", price: 55 },
    { name: "Tandoor Mayo Burger", price: 60 },
  ],
  fries: [
    { name: "Classic Salted Fries", price: 50 },
    { name: "Peri Peri Fries", price: 60 },
    { name: "Cheese Mayo Fries", price: 70 },
  ],
  pizza: [
    { name: "Plain Cheese Pizza", price: 80 },
    { name: "Sweet Corn Pizza", price: 100 },
  ],
  coldDrinks: [
    { name: "Cold Coffee", price: 40 },
    { name: "Sprite", price: 20 },
    { name: "Coca Cola", price: 20 },
    { name: "Kokam", price: 15 },
    { name: "Lemon Syrup", price: 15 },
  ],
  maggi: [
    { name: "Plain Maggi", price: 40 },
    { name: "Masala Maggi", price: 50 },
    { name: "Cheese Maggi", price: 60 },
    { name: "Egg Maggi", price: 60 },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-10 md:gap-14">
          <MenuSection title="Tea & Coffee" items={menuData.hotBeverages} image={teaImg} imageAlt="Hot chai tea" delay={100} />
          <MenuSection title="Snacks" items={menuData.snacks} delay={200} />
          <MenuSection title="Sandwich" items={menuData.sandwiches} image={sandwichImg} imageAlt="Grilled sandwich" delay={300} />
          <MenuSection title="Grill" items={menuData.grills} delay={400} />
          <MenuSection title="Burger" items={menuData.burgers} image={burgerImg} imageAlt="Gourmet burger" delay={500} />
          <MenuSection title="Fries" items={menuData.fries} image={friesImg} imageAlt="Crispy fries" delay={600} />
          <MenuSection title="Pizza" items={menuData.pizza} image={pizzaImg} imageAlt="Cheese pizza" delay={700} />
          <MenuSection title="Cold Drinks" items={menuData.coldDrinks} image={coldCoffeeImg} imageAlt="Cold coffee" delay={800} />
          <MenuSection title="Maggi" items={menuData.maggi} image={maggiImg} imageAlt="Hot maggi noodles" delay={900} />
        </div>
      </main>

      
    </div>
  );
};

export default Index;
