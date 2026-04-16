    import { Project } from "@/types/project";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 p-4 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <Link
        href={project.link}
        target="_blank"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        View Project →
      </Link>
    </article>
  );
}