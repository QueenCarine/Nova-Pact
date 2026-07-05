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
    <section id="challenges" className="py-10 relative">
      <div className="relative mx-auto max-w-6xl px-6">

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={20} className="text-blue-500" />
        </button>

        {/* Scroll Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative h-64 w-56 flex-shrink-0 overflow-hidden rounded-lg"
            >
              {/* Image */}
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 px-3 transition pointer-events-none group-hover:pointer-events-auto z-10">

                <p className="text-white text-lg font-semibold mb-2">
                  {city.name}
                </p>

                <p className="text-white text-sm mb-4">
                  {city.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedVideo(city.video)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 flex items-center gap-2"
                >
                  <Play size={14} />
                  {city.cta}
                </button>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity">
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
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={20} className="text-blue-500" />
        </button>
      </div>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-[90%] max-w-3xl">

            {/* Close */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white"
            >
              <X size={28} />
            </button>

            <iframe
              key={selectedVideo}
              src={selectedVideo}
              className="w-full h-[400px] rounded-lg"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}