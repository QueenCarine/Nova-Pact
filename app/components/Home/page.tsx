export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[550px] items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/home.jpg')",
        }}
      />

      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-white drop-shadow-lg">
          Revolutionizing Education
        </h1>

        <p className="mt-6 text-white/80 drop-shadow-md">
          We are ready to connect every family to their child's education
        </p>

      </div>
    </section>
  );
}