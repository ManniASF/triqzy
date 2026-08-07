"use client";

import { useState } from "react";

import Reveal from "@/components/shared/Reveal";
import SectionTitle from "@/components/shared/SectionTitle";

import TaskCard from "@/components/allowlist/TaskCard";
import SubmissionForm from "@/components/allowlist/SubmissionForm";

export default function Allowlist() {
  const [completedTasks, setCompletedTasks] = useState(0);

  return (
    <section
      id="allowlist"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00C80510,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>
          <SectionTitle
            eyebrow="ALLOWLIST"
            title="Join The Genesis Allowlist"
            description="Complete every task below to unlock the allowlist submission form."
          />
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <Reveal>
            <TaskCard
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SubmissionForm
              completedTasks={completedTasks}
            />
          </Reveal>

        </div>

      </div>
    </section>
  );
}