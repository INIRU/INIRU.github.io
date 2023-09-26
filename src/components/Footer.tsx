import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Footer(): JSX.Element {
  let navigate = useNavigate();

  let socialList = [
    { icon: faGithub, link: 'https://github.com/INIRU' },
    { icon: faEnvelope, link: 'mailto:iniru@kakao.com' },
    { icon: faInstagram, link: 'https://www.instagram.com/sonsonson_05/' },
    { icon: faDiscord, link: 'https://discord.com/users/340124004599988234' },
  ];

  return (
    <div className="mt-5 w-100">
      <div className="w-100 d-flex justify-content-center align-items-center gap-2">
        <img alt="" src={process.env.PUBLIC_URL + '/INIRU.png'} width="50" />
        <h3 className="footer-me">INIRU</h3>
      </div>
      <div className="d-flex justify-content-center w-100 mt-3 mb-4 gap-3">
        {socialList.map(
          (
            data: { icon: IconDefinition; link: string },
            i: number
          ): JSX.Element => {
            return (
              <div
                className="footer-social shadow-sm d-flex justify-content-center align-items-center"
                key={i}
                onClick={() => {
                  navigate('/redirect', {
                    state: { url: data.link },
                  });
                }}
              >
                <FontAwesomeIcon icon={data.icon} />
              </div>
            );
          }
        )}
      </div>
      <p className="text-center w-100 pb-2">
        © Design by <b>INIRU</b>
      </p>
    </div>
  );
}

export default Footer;
