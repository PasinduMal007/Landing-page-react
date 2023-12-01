const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
        </div>

        <div className="brand-icon">
          <img src="./src/assets/images/amazon.png" alt="amazon logo" />
          <img src="./src/assets/images/flipkart.png" alt="flipcart logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="./src/assets/images/hero-image.png" alt="hero image" />
      </div>
    </main>
  );
};

export default Hero;
