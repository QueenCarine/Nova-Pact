import Image from "next/image";

const team = [
  {
    name: "Felicien Mukamarakiza",
    role: "President",
    image:"/team/felicien.jpg",
  },
  {
    name: "ZamZam Sarah",
    role: "Vice President",
    image:"/team/zamzam.jpg",
  },
  {
    name: "Mukunzi Dickson",
    role: "Creative Director",
    image: "/team/mukunzi.jpg",
  },
  {
    name: "Gihozo Emeline",
    role: "Coordinator",
    image: "/team/gihozo.jpg",
  },
  {
    name: "Queen Carine",
    role: "Engineering Lead",
    image: "/team/queen.jpg",
  },
  {
    name: "Zima Yann",
    role: "Operations",
    image: "/team/yann.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-blue-500 sm:text-3xl">
            The Team Behind It
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="text-center">
              <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-md border-2 border-white shadow-md">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-base font-semibold text-blue-500">
                {person.name}
              </h3>

              <p className="text-xs uppercase tracking-wide text-blue-500">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}