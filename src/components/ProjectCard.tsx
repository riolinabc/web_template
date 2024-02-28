import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectCardProps {
  //The className prop is used to add custom styles to the component
  className?: string;
  // The name prop is used to display the name of the project
  name: string;
  // The href prop is used to link to the project page
  href: string;
  // The description prop is used to display a brief description of the project
  description: string;
  // React.ComponentType is a type that represents a React component.
  // Here we are using it to define the type of the icon prop.
  icon: React.ComponentType<{ className: string }>;
}

export function ProjectCard({
  name,
  description,
  icon: Icon, // Here we use the icon prop
  href,
  className,
}: ProjectCardProps) {
  return (
    <div className={className}>
      {/*  Here is where we use the Icon component */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
        <Icon className="h-8 w-8" />
      </div>

      {/*  Here is where we use the name, description, and href props */}
      <div className="mt-2 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-zinc-900">{name}</h2>
        <p className="text-zinc-500 font-light">{description}</p>

        <Link
          target="_blank"
          href={href}
          className="flex text-zinc-600 items-center gap-1 hover:underline"
        >
          Learn more
          <IconArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
