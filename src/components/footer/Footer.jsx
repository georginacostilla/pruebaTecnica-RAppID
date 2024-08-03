import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './footer.css';

const Footer = () => {
	return (
		<footer className="d-flex flex-column align-items-center justify-content-center mt-5">
			<div className="iconos-redes d-flex flex-wrap align-items-center justify-content-center">
				<a href="https://www.linkedin.com/in/georgina-costilla/" target="_blank" rel="noopener noreferrer">
					<BsLinkedin size={25} color="#0077b5" />
				</a>
				<a href="https://github.com/georginacostilla" target="_blank" rel="noopener noreferrer">
					<FaGithub size={25} color="#333" />
				</a>
				<a href="mailto:georginacostilla@gmail.com" target="_blank" rel="noopener noreferrer">
					<MdEmail size={25} color="#f00" />
				</a>
			</div>
			<div className="derechoAutor">Creado por Georgina Costilla (2024) &#169;</div>
		</footer>
	);
}

export default Footer;