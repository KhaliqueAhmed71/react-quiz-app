const AboutGallerySection = () => {
  return (
    <div className="container mx-auto px-4 text-center py-16">
      <button className="bg-red-500 text-white text-xs px-4 py-1 uppercase tracking-wider rounded-sm mb-3">Food Gallery</button>
      <h2 className="text-3xl font-extrabold uppercase">Food Gallery Posts</h2>
      <div className="flex justify-center my-2">
        <div className="w-1 h-6 bg-red-500"></div>
      </div>
      <div className="flex justify-center space-x-1 mb-8">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`h-48 rounded-lg overflow-hidden ${
              i === 0 ? 'bg-red-500' : 'bg-gray-200'
            } flex items-center justify-center relative`}
          >
            {i === 0 ? (
              <div className="bg-white p-2 shadow flex items-center justify-center">
  <img
    src="/eye.png"
    alt="View More"
    className="w-6 h-6 object-contain"
  />
</div>

            ) : (
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGallerySection;
