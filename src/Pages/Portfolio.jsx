import Project from "../Components/Project";
import projectList from "../utils/projects";

export default function Portfolio(){
    return(
        <div className="portfolio-main">
            <h2>Portfolio</h2>
            <div className="portfolio-card">
                {projectList.map((project)=>(
                    <Project {...project} key={project.title}/>
                ))}
            </div>
        </div>
    )
}