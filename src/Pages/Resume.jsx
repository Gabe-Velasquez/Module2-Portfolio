export default function Resume(){
    return(
        <div>
            <div>
                <h2>Resume</h2>
                <span>
                    Download Resume{' '}
                    <a 
                        href="../src/assets/GabeVelasquez_Resume.pdf"
                        download="{GabeVelasquez_Resume.pdf}">
                            here!
                    </a>
                </span>
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
        </div>
    )
}