import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl">Welcome to Gym Website</h1>
        <p className="text-lg">Get fit with us!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Now
        </button>
        <Image src="/gym.jpg" alt="Gym Image" width={500} height={300} />
      </div>
    </section>
  );
};

export default Hero;