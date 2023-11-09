
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faXTwitter} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <footer>
        <ul className='social-links'>
            <li>
                <a href="https://github.com/Gabe-Velasquez">
                <FontAwesomeIcon icon={faGithub} size="4x" />
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/gabriel-velasquez-/">
                <FontAwesomeIcon icon={faLinkedin} size="4x" beat />
                </a>
            </li>

            <li>
                <a href="https://twitter.com/G4b3_29">
                <FontAwesomeIcon icon={faXTwitter} size="4x"/>
                </a>
            </li>
        </ul>
        <p>&copy; 2023</p>
        </footer>
    );
}