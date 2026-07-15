"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const chapters = [
  {
    number: "01",
    name: "Introduction",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/4WreVjPbFw8?autoplay=1",
    description:
      "Elevator pitch video where we introduce our team, interests, roles, and goals for E-LAB while presenting who we are and what we bring to the Think Tank.",
    tag: "Beginning",
  },
  {
    number: "02",
    name: "Discover Africa",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/LaEOEfh0hNc?autoplay=1",
    description: "Storytelling exercise where we explore and present a community's story.",
    tag: "Storytelling",
  },
  {
    number: "03",
    name: "HELP-LAB",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/NI11jyLTpmo?autoplay=1",
    description: "Video reflection of our community engagement experience.",
    tag: "Reflection",
  },
  {
    number: "04",
    name: "Hunt for Treasure",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/vrN6yqVzAq4?autoplay=1",
    description: "Interview-based challenge where we learn from an entrepreneur's journey.",
    tag: "Interview",
  },
  {
    number: "05",
    name: "Launch Your Mission",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/dBNgomju8SQ?autoplay=1",
    description: "Pitch stage where we define our mission and present our solution.",
    tag: "Pitch",
  },
  {
    number: "06",
    name: "Your Digital Print",
    image: "/home/home.jpg",
    video: "https://www.youtube.com/embed/NI11jyLTpmo?autoplay=1",
    description: "Final website bringing together all E-LAB challenges.",
    tag: "Finale",
  },
];

export default function Challenges() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="challenges" className="bg-blue-400 py-16 text-white">
      <div className="mx-auto max-w-5xl px-5">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            E-LAB Series
          </p>
          <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
            Challenges
          </h1>
          <p className="mt-2 max-w-md text-sm text-white">
            Six chapters. One mission — building E-LAB from pitch to launch.
          </p>
        </div>

        {/* Chapter rows */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {chapters.map((chapter, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={chapter.number}
                className={`flex flex-col items-center gap-6 sm:gap-10 md:flex-row ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Thumbnail */}
                <button
                  onClick={() => setSelectedVideo(chapter.video)}
                  className="group relative aspect-video w-full shrink-0 overflow-hidden rounded-lg md:w-1/2"
                >
                  <Image
                    src={chapter.image}
                    alt={chapter.name}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Play size={20} fill="black" className="ml-0.5 text-black" />
                    </span>
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`flex w-full flex-col md:w-1/2 ${
                    reversed ? "md:items-end md:text-right" : "md:items-start md:text-left"
                  } items-center text-center`}
                >
                  <div
                    className={`mb-2 flex items-center gap-3 ${
                      reversed ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-3xl font-black tabular-nums text-white">
                      {chapter.number}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-400 shadow-sm">
                      {chapter.tag}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold sm:text-2xl">{chapter.name}</h3>

                  <p className="mb-4 max-w-md text-sm text-white/60 sm:text-base">
                    {chapter.description}
                  </p>

                  <button
                    onClick={() => setSelectedVideo(chapter.video)}
                    className="flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-bold text-blue-500 transition hover:bg-white/85"
                  >
                    <Play size={14} fill="blue" />
                    Watch Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white transition hover:text-white/60"
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