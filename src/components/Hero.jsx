function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-  gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to MobileHub
      </h1>
      <p className="mb-6 text-lg">
        Your one-stop shop for all mobile accessories
      </p>
      <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
        Get Started
      </button>
    </section>
  );
}

export default Hero;