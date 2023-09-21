import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Selector(): JSX.Element {
  const { i18n } = useTranslation();

  let [openSelector, setOpenSelector] = useState(false);
  let langs: { [key: string]: string } = {
    ko: '한국어',
    en: 'English',
    jp: '日本語',
  };

  return (
    <div
      className="selector d-flex align-items-center p-2"
      onClick={() => {
        setOpenSelector(!openSelector);
      }}
    >
      <p className="w-100">
        {
          langs[
            typeof i18n.resolvedLanguage == 'string'
              ? i18n.resolvedLanguage
              : 'en'
          ]
        }
      </p>
      <span className={`icon ${openSelector ? 'active' : null}`}>
        <FontAwesomeIcon icon={faAngleDown} />
      </span>

      <div className={`selector-list ${openSelector ? 'active' : null}`}>
        {Object.keys(langs).map(
          (data: string, i: number): JSX.Element | null => {
            if (data === i18n.resolvedLanguage) return null;

            return (
              <li
                key={i}
                className="selector-item"
                onClick={() => {
                  i18n.changeLanguage(data);
                }}
              >
                {langs[data]}
              </li>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Selector;
