
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return(
        <footer>
        <ul className='social-links'>
            <li>
                <a href="https://github.com/Gabe-Velasquez">
                <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/gabriel-velasquez-/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" beat />
                </a>
            </li>

            <li>
                <a href="https://twitter.com/G4b3_29">
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                </a>
            </li>
        </ul>
        <p>&copy; 2023</p>
        </footer>
    );
}