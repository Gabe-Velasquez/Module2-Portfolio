export default function Resume(){
    return(
        <div className="res-main">
            <div className="res-top">
                <div >
                    <h2>Resume</h2>
                    <span>
                        Download Resume{' '}
                        <a 
                            href="../GabeVelasquez_Resume.pdf"
                            download={"GabeVelasquez_Resume.pdf"}>
                                here!
                        </a>
                    </span>
                </div>

                <div>
                    <h3>Certifications</h3>
                    <span>
                        <a href="../certificate-of-completion-for-complete-web-developer-in-2020-zero-to-mastery.pdf" target="_blank">Zero to Mastery Web Developer</a>
                    </span>
                </div>
            </div>

            <div className="skills">
                <div>
                <h3>Front End Skills</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>CSS Frameworks like Bootstrap, Bulma and Tachyons</li>
                    <li>jQuery</li>
                    <li>Git</li>
                </ul>
                </div>
                <div>
                <h3>Backend Skills</h3>
                <ul>
                    <li>Node</li>
                    <li>Deno</li>
                    <li>Bun</li>
                    <li>MySQL</li>
                    <li>GraphQL</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>RESTful APIs</li>
                    <li>Apollo Server</li>
                    <li>Sequelize</li>
                </ul>
                </div>
            </div>
        </div>
    )
}