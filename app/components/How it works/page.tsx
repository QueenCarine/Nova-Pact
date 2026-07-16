"use client";
import type { ReactNode } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
  color: string; // hex
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const steps: Step[] = [
  {
    number: "01",
    title: "Parents join PEP",
    description:
      "A parent signs up for the Parent Engagement Program through their child's school.",
    color: "#5B3A9E",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M3 20c0-3 2.2-5 5-5s5 2 5 5" />
        <path d="M14.5 20c.2-2.2 1.6-3.8 3.5-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Attend workshops",
    description:
      "Monthly mentorship sessions build practical skills: homework support, positive parenting, home routines.",
    color: "#E08A3C",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="14" height="10" rx="1" />
        <path d="M6 7h8M6 10h5" />
        <path d="M17 20l4-2-4-2v4z" />
        <path d="M9 17.5V14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Join teacher–parent meetings",
    description:
      "Regular check-ins with the teacher cover attendance, progress, behavior, and goals for the month ahead.",
    color: "#2F6FA3",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="10" width="18" height="2.2" rx="1.1" transform="rotate(0)" />
        <path d="M4 10V8.5a2 2 0 0 1 2-2h1" />
        <circle cx="8" cy="5" r="1.6" />
        <circle cx="16" cy="5" r="1.6" />
        <path d="M6.5 8.5c.4-1 1-1.5 1.5-1.5s1.1.5 1.5 1.5" />
        <path d="M14.5 8.5c.4-1 1-1.5 1.5-1.5s1.1.5 1.5 1.5" />
        <path d="M6 12.2V17M18 12.2V17" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Receive SMS parent tips",
    description:
      "Weekly Kinyarwanda messages via Urubuto — practical tips, reminders, and positive parenting nudges, sent to any phone.",
    color: "#3E8B5C",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M7 5.5h10M7 18.5h10" />
        <path d="M10.5 9.5h4M10.5 12h5.5M10.5 14.5h3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Apply it at home",
    description:
      "Parents put workshop skills and SMS tips into practice, supporting their child's learning day to day.",
    color: "#5B3A9E",
    icon: (
      <svg {...iconProps}>
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10.5V20h12v-9.5" />
        <path d="M12 20v-5.5" />
        <path d="M9.5 20v-3.2c0-.8.6-1.4 1.4-1.4h2.2c.8 0 1.4.6 1.4 1.4V20" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Child progress improves",
    description:
      "Better support at home means stronger learning, more confidence, and steady progress at school.",
    color: "#3E8B5C",
    icon: (
      <svg {...iconProps}>
        <path d="M4 18 9 12l4 3 7-8" />
        <path d="M15 6.5h5V11.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="prototype" className="relative overflow-hidden bg-[#FBF8F3] px-6 py-24 sm:px-10 lg:px-16">
      {/* faint paper grain, nods to the hand-drawn poster this is built from */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#241F3D 0.6px, transparent 0.6px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <h1 className="text-3xl leading-none tracking-tight sm:text-4xl text-blue-500 mt-6  ">
            Prototype || How it works
          </h1>
          <p className="text-1xl leading-none tracking-tight sm:text-1xl text-blue-500 mt-6">
            One pact, six steps, a whole family moving forward.
          </p>
        </div>

        
        <div className="hidden lg:block">
          <svg
            aria-hidden
            viewBox="0 0 1200 90"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-[172px] h-[90px] w-full text-[#241F3D]/15"
          >
            <path
              d="M 40 45 C 160 5, 260 85, 400 45 S 640 5, 800 45 S 1040 85, 1160 45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="1 10"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative grid grid-cols-6 gap-4">
            {steps.map((step, i) => {
              const lift = i % 2 === 0 ? "lg:mt-0" : "lg:mt-10";
              return (
                <li key={step.number} className={`flex flex-col items-start ${lift}`}>
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border-[1.5px] bg-[#FBF8F3] shadow-[0_1px_0_rgba(36,31,61,0.06)]"
                    style={{ borderColor: step.color, color: step.color }}
                  >
                    {step.icon}
                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full font-[family-name:var(--font-mono,monospace)] text-[10px] font-medium text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-display,serif)] text-lg leading-snug text-[#241F3D]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body,sans-serif)] text-[13px] leading-relaxed text-[#241F3D]/65">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ---------- Mobile / tablet-down: vertical path ---------- */}
        <ol className="relative flex flex-col gap-10 lg:hidden">
          <div
            aria-hidden
            className="absolute left-8 top-2 bottom-2 w-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(36,31,61,0.18) 0 4px, transparent 4px 12px)",
            }}
          />
          {steps.map((step) => (
            <li key={step.number} className="relative flex gap-5 pl-0">
              <div
                className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full border-[1.5px] bg-[#FBF8F3]"
                style={{ borderColor: step.color, color: step.color }}
              >
                {step.icon}
                <span
                  className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full font-[family-name:var(--font-mono,monospace)] text-[10px] font-medium text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="font-[family-name:var(--font-display,serif)] text-lg leading-snug text-[#241F3D]">
                  {step.title}
                </h3>
                <p className="mt-1.5 font-[family-name:var(--font-body,sans-serif)] text-sm leading-relaxed text-[#241F3D]/65">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}