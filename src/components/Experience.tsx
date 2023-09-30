import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Experience(): JSX.Element {
  let { t } = useTranslation();

  let [fade, setFade] = useState('');
  let [page, setPage] = useState(0);

  let experi = t('experience', {
    returnObjects: true,
  }) as { year: number; title: string; desc: string }[];

  function PageNext() {
    if (page >= experi.length - 1) {
      setPage(0);
    } else {
      setPage(++page);
    }
  }

  function PageBack() {
    if (page <= 0) {
      setPage(experi.length - 1);
    } else {
      setPage(--page);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade('fade-out');
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [fade]);

  useEffect(() => {
    setFade('fade-in');
  }, [page]);

  return (
    <div className="experi-container w-100 mt-5 shadow-sm">
      <h2 className="code-html text-center pt-3">
        &lt;<span className="code-html-tag">Experience</span>&gt;
      </h2>
      <Container>
        <div className={`mt-5 w-100 d-flex gap-3 ${fade}`}>
          <FontAwesomeIcon
            className="experi-page align-self-center"
            icon={faAngleLeft}
            onClick={() => {
              PageBack();
            }}
          ></FontAwesomeIcon>
          <div className="w-100">
            <h2 className="experi-title">
              <span className="experi-year">
                <MarkdownPreview
                  source={`\`${experi[page].year}\``}
                  className="experi-year-md"
                />
              </span>
              {experi[page].title}
            </h2>
            <MarkdownPreview
              source={experi[page].desc}
              className="experience mt-3"
            />
          </div>
          <FontAwesomeIcon
            className="experi-page align-self-center"
            icon={faAngleRight}
            onClick={() => {
              PageNext();
            }}
          ></FontAwesomeIcon>
        </div>
      </Container>
      <div className="experi-page-status d-flex justify-content-center gap-2 mt-3 mb-3">
        {experi.map((_, i: number): JSX.Element => {
          return (
            <div
              key={i}
              className={`experi-status ${i === page ? 'active' : ''}`}
              onClick={() => {
                setPage(i);
              }}
            ></div>
          );
        })}
      </div>
      <h2 className="code-html text-center pb-3">
        &lt;/<span className="code-html-tag">Experience</span>&gt;
      </h2>
    </div>
  );
}

export default Experience;
