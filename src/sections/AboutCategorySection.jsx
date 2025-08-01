const AboutCategorySection = () => {
  const categories = [
    { title: 'QUALITY CHEES', desc: 'Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus' },
    { title: 'CRUNCHI FRENCH FRY', desc: 'Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus' },
    { title: '100% HALAL MEAT', desc: 'Consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus' },
  ];

  return (
    <div className="container mx-auto px-4 text-center py-16">
      <button className="bg-red-500 text-white text-xs px-4 py-1 uppercase tracking-wider rounded-sm mb-3">Make Reservation</button>
      <h2 className="text-3xl font-extrabold uppercase">Discover Our Category</h2>
      <div className="flex justify-center my-2">
        <div className="w-1 h-6 bg-red-500"></div>
      </div>
      <div className="flex justify-center space-x-1 mb-8">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="text-center px-6">
            <div className="w-full h-48 bg-gray-300 mb-4 rounded-sm"></div>
            <h3 className="font-extrabold uppercase">{cat.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCategorySection;
