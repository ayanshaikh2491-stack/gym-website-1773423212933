const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg">State-of-the-art equipment</h3>
            <p className="text-sm">Get access to the latest fitness equipment.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg">Expert trainers</h3>
            <p className="text-sm">Get personalized training from our certified trainers.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg">Variety of classes</h3>
            <p className="text-sm">Choose from a variety of classes to suit your fitness goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;