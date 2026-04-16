import ProjectCard from "@/components/ProjectCard"
import { Project } from "@/types/project"

const projects: Project[] = [
    {
        title:"Portfolio website", 
        description:"A personal website to showcase my projects and skills. ", 
        link:"https://github.com/shubhamKumarRaman/portfolio"
    }, 
    {
        title:"todo App", 
        description:"A simple task manage app with CRUD operation features", 
        link:"https://github.com/shubhamKumarRaman/todo"
    }, 
    {
        title:"Weather app", 
        description:"A weather app that shows real-time weather by city name", 
        link:"https://github.com/shubhamKumarRaman/weather-app"
    }
];

export default function ProjectPage(){
    return(
        <section>
            <h1 className="text-3xl font-bold mb-6">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project)=>(
                    <ProjectCard key={project.title} project={project}/>
                ))}
            </div>
        </section>
    )
}