export default function OurStory() {
  return (
    <section id="about" className="bg-blue-400 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-6 text-1xl font-bold uppercase tracking-[0.3em] text-white">
            Our Story
          </p>

          <h2 className="mb-6 text-4xl font-bold text-white">
            Empowering Families, Strengthening Education.
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-white/90">
           NovaPact was founded on a simple belief: 
           a child's education thrives when schools and 
           families work together. As an eLab think tank
            empowering African children and communities through 
            mentorship in arts, design, and culture, we strengthen 
            the home–school partnership through parent mentorship, 
            consultation meetings, and timely SMS updates. By equipping
             parents to actively support their children's learning, we 
             help build stronger and brighter 
             futures for every child.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src="/story/story.jpg"
            alt="Team collaboration"
            className="h-32 w-28 -translate-y-2 rotate-[-6deg] rounded-lg border-4 border-white object-cover shadow-xl sm:h-40 sm:w-36"
          />

          <img
            src="/story/father.jpg"
            alt="Community work"
            className="z-10 h-40 w-32 rounded-lg border-4 border-white object-cover shadow-xl sm:h-52 sm:w-40"
          />

          <img
            src="/story/bill.jpg"
            alt="Innovation"
            className="h-32 w-28 -translate-y-2 rotate-[6deg] rounded-lg border-4 border-white object-cover shadow-xl sm:h-40 sm:w-36"
          />
        </div>

      </div>
    </section>
  );
}