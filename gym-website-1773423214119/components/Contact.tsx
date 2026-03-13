const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl">Get in Touch</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="jane.doe@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              className="block w-full px-4 py-2 text-sm text-gray-700 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Hello, I'm interested in joining your gym."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;