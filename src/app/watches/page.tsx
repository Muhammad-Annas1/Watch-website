import React from 'react';

const Watches = () => {
  const watches = [
    { id: 1, name: "Tissot", price: 1400, description: "Luxury Watch (39mm)", image: "/pic9.png" },
    { id: 2, name: "Rado", price: 1200, description: "Reliable Craftsmanship (43mm)", image: "/pic7.jpg" },
    { id: 3, name: "Cartier", price: 1000, description: "Durable Quality (43mm)", image: "/pic3.webp" },
    { id: 4, name: "Tissot", price: 800, description: "Modern Eophistication (40mm)", image: "/pic4.jpg" },
    { id: 5, name: "Tag Heuer", price: 1450, description: "Precision Engineering (44mm)", image: "/pic5.jpg" },
    { id: 6, name: "Genises", price: 600, description: "Timeless Elegance (40mm)", image: "/pic6.jpg" },
    { id: 7, name: "Edifice Casio", price: 1600, description: "Modern Sophistication (50mm)", image: "/pic10.jpg" },
    { id: 8, name: "Jaeger‑LeCoultre", price: 17500, description: "Master Control (40mm)", image: "/pic11.webp" },
    { id: 9, name: "Tag Heuer", price: 1350, description: "Connected Titanium (45mm)", image: "/pic12.webp" },
  ];

  return (
    <div>
      <div className="watches">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
