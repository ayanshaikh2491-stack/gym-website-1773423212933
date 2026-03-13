const Classes = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl">Our Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg">Yoga</h3>
            <p className="text-sm">Improve your flexibility and balance.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg">Cardio</h3>
            <p className="text-sm">Get your heart rate up and burn calories.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg">Weightlifting</h3>
            <p className="text-sm">Build muscle and increase strength.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;