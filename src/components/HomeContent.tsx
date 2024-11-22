import React from 'react';

const HomeContent = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url(/header-bg.png)" }}
    >
      <div>
        <h1 className="fade-in">Welcome to Our Store</h1>
        <p>
          Custom Watches For Any Occasion</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HomeContent;
