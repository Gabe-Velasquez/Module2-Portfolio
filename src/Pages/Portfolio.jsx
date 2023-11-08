import Project from "../Components/Project";
import projectList from "../utils/projects";

export default function Portfolio(){
    return(
        <div>
            <h2>Portfolio</h2>
            <div>
                {projectList.map((project)=>(
                    <Project {...project} key={project.title}/>
                ))}
            </div>
        </div>
    )
}