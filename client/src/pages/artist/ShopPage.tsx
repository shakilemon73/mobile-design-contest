import ShopCard from "@/components/ShopCard";

export default function ShopPage() {
  const products = [
    { id: "1", title: "Boost Profile", price: "£10", remaining: undefined },
    { id: "2", title: "Feature Me", price: "£20", remaining: 12 },
    { id: "3", title: "25 Nudges", price: "£5", remaining: undefined },
  ];

  const handlePurchase = (title: string) => {
    console.log(`Purchasing: ${title}`);
  };

  return (
    <div className="pb-20">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold">My Shop</h1>
      </div>

      <div className="p-4 space-y-4">
        {products.map((product) => (
          <ShopCard
            key={product.id}
            title={product.title}
            price={product.price}
            remaining={product.remaining}
            onPurchase={() => handlePurchase(product.title)}
          />
        ))}
      </div>
    </div>
  );
}
