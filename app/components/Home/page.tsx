import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <Image
        src="/home/home.jpg"
        alt="NovaPact Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Revolutionalizing Education
        </h1>

        <p className="mt-6 text-white/80 drop-shadow-md">
          We are ready to connect every family to their child's education
        </p>
      </div>
    </section>
  );
}