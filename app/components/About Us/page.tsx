import { Target, TriangleAlert, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Mission Statement",
    text: "To empower African children and communities through mentorship in arts, design and culture thereby shifting mindsets, keeping every child in school, and unlocking the future they were always meant to have.",
  },
  {
    icon: TriangleAlert,
    title: "Problem Statement",
    text: "How might we improve foundational learning outcomes by strengthening parental involvement, reducing household barriers, and fostering creativity so that children become more engaged, confident, and strong in critical thinking through better home–school collaboration?",
  },
  {
    icon: Lightbulb,
    title: "Solution Statement",
    text: "Nova Pact’s Parent Engagement Program (PEP) empowers parents to support learning through mentorship workshops, teacher–parent meetings, and Kinyarwanda SMS updates. Working with schools and community leaders in Kabuga Sector, it strengthens home–school collaboration and improves children’s learning through an accessible, community-led approach.",
  },
];

export default function Services() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-3 text-center">
        <p className="text-3xl leading-none tracking-tight sm:text-4xl text-blue-500 mt-6">
          The Challenge We Address
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-10 sm:grid-cols-3">
        {services.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-md bg-white p-8 text-center shadow-lg"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-500">
              <Icon size={28} />
            </div>

            <h3 className="mb-2 text-lg font-bold text-blue-500">
              {title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-600">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}