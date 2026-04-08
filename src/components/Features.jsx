function Features() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p>Get your products delivered quickly.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
          <p>We provide top quality products.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p>100% secure payment methods.</p>
        </div>

      </div>
    </section>
  );
}

export default Features;