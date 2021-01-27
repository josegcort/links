import logoEncuentro from './assets/img/logo.png';
import logoYoutube from './assets/img/youtube.png';
import logoFacebook from './assets/img/facebook.png';
import logoInstagram from './assets/img/instagram.png';
import logoWhatsapp from './assets/img/whatsapp.png';

import { faYoutube, faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

var imagenes = [
	{
		"title": "Logo del Encuentro",
		"url": "",
		"img": logoEncuentro,
	},
	{
		"title": "YouTube",
		"url": "https://www.youtube.com/channel/UCfGWV-1TcTy-egaFGSYmboA",
		"img": logoYoutube,
		"icon":faYoutube
	},
	{
		"title": "Facebook",
		"url": "https://facebook.com/ccelencuentro/",
		"img": logoFacebook,
		"icon": faFacebookF
	},
	{
		"title": "Instagram",
		"url": "https://www.instagram.com/elencuentroiglesiacristiana/",
		"img": logoInstagram,
		"icon": faInstagram
	},
	{
		"title": "WhatsApp",
		"url": "https://wa.link/t50imm",
		"img": logoWhatsapp,
		"icon": faWhatsapp
	},
	{
		"title": "WhatsApp",
		"url": "https://wa.link/w9nl8p",
		"img": logoWhatsapp,
		"icon": faWhatsapp
	}
]

export default imagenes;
