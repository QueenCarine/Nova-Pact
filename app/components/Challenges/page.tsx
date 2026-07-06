"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

type ScrollDirection = "left" | "right";

const cities = [
  {
    name: "Challenge 01: Introduction",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/4WreVjPbFw8?autoplay=1",
    description:
      "Elevator pitch video where we introduce our team, interests, roles, and goals for E-LAB while presenting who we are and what we bring to the Think Tank.",
    cta: "Watch Now",
  },
  {
    name: "Challenge 02: Discover Africa",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/LaEOEfh0hNc?autoplay=1",
    description:
      "Storytelling exercise where we explore and present a community’s story.",
    cta: "Watch Now",
  },
  {
    name: "Challenge 03: HELP-LAB",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/NI11jyLTpmo?autoplay=1",
    description:
      "Video reflection of our community engagement experience.",
    cta: "Watch Now",
  },
  {
    name: "Challenge 04: Hunt for Treasure",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/vrN6yqVzAq4?autoplay=1",
    description:
      "Interview-based challenge where we learn from an entrepreneur’s journey.",
    cta: "Watch Now",
  },
  {
    name: "Challenge 05: Launch Your Mission",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/NI11jyLTpmo?autoplay=1",
    description:
      "Pitch stage where we define our mission and present our solution.",
    cta: "Watch Now",
  },
  {
    name: "Challenge 06: Your Digital Print",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/NI11jyLTpmo?autoplay=1",
    description:
      "Final website bringing together all E-LAB challenges.",
    cta: "Watch Now",
  },
];

export default function Challenges() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const { clientWidth } = scrollRef.current;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section id="challenges" className="relative py-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-blue-500 md:text-3xl">
        Challenges
      </h2>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100"
        >
          <ChevronLeft size={20} className="text-blue-500" />
        </button>

        {/* Scroll Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {cities.map((city, index) => (
            <div
              key={city.name}
              className="group relative h-64 w-56 flex-shrink-0 overflow-hidden rounded-lg"
            >
              {/* Image */}
              <Image
                src={city.image}
                alt={city.name}
                fill
                priority={index === 0}
                quality={75}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 224px, 224px"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Hover Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {city.name}
                </h3>

                <p className="mb-4 text-sm text-white">
                  {city.description}
                </p>

                <button
                  onClick={() => setSelectedVideo(city.video)}
                  className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-blue-600"
                >
                  <Play size={14} />
                  {city.cta}
                </button>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-4 left-4 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-base font-semibold text-white">
                  {city.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-gray-100"
        >
          <ChevronRight size={20} className="text-blue-500" />
        </button>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white transition hover:text-gray-300"
            >
              <X size={30} />
            </button>

            <div className="relative aspect-video overflow-hidden rounded-lg">
              <iframe
                key={selectedVideo}
                src={selectedVideo}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}