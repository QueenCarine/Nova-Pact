const team = [
  {
    name: "Felicien Mukamarakiza",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "ZamZam Sarah Uwonkunda",
    role: "Vice President",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mukunzi Ruyumbu Dickson ",
    role: "Creative Director",
    image:"/team/mukunzi.jpg",
  },
  {
    name: "Gihozo Emeline",
    role: "Coordinator",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Queen Carine",
    role: "Engineering Lead",
    image:"/team/queen.jpg",
  },
  {
    name: "Zima Yann",
    role: "Operations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-blue-400 py-16">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            The Team Behind It
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="text-center">
              <img
                src={person.image}
                alt={person.name}
                className="mb-4 h-85 w-full rounded-md object-cover border-2 border-white shadow-md"
              />

              <h3 className="text-base font-semibold text-white">
                {person.name}
              </h3>

              <p className="text-white/70 text-xs uppercase tracking-wide">
                {person.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}