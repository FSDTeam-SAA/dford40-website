const Page = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide">
          Coming Soon Opportunities page
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
      </div>

      {/* Optional floating shadow/overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
    </div>
  );
};

export default Page;
