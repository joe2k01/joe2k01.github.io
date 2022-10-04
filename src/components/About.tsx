const center = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

const About: React.FC = () => {
  return (
    <div id="about" className="mt-10 md:mt-0">
      <div className="relative w-72 h-72">
        <div
          className={`absolute w-60 h-60 bg-orange-400/90 rounded-full z-20 ${center} animate-pulse`}
        />
        <div
          className={`absolute w-64 h-64 bg-orange-400/80 rounded-full z-20 ${center} animate-pulse`}
        />
        <div
          className={`absolute w-[17rem] h-[17rem] bg-orange-400/70 rounded-full z-20 ${center} animate-pulse`}
        />
        <img
          src="/assets/giuseppe.jpg"
          className={`rounded-full w-56 h-56 object-cover absolute z-30 ${center}`}
        />
      </div>
      <p className="text-center text-2xl my-4 font-bold bg-gradient-to-r from-orange-600 to-violet-600 bg-clip-text text-transparent">
        Giuseppe Barillari
      </p>
    </div>
  );
};

export { About };
