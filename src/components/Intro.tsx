import { Container } from 'react-bootstrap';
import { typing, erase, wait } from '../modules/hangul';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function Intro(): JSX.Element {
  let [name, setName] = useState('');

  function typeName(letter: string[], i: number) {
    typing({ text: letter[i], state: name, setState: setName }).then(
      async (state): Promise<void> => {
        await wait(2000);
        await erase(state, setName, 100);
        await wait(500);
        i += 1;
        if (i === letter.length) {
          i = 0;
        }
        typeName(letter, i);
      }
    );
  }

  useEffect(() => {
    let letter: string[] = ['INIRU', 'YEON_JE', '연제'];
    typeName(letter, 0);
  }, []);

  return (
    <div className="info-container shadow-lg ps-2">
      <Container className="h-100">
        <div className="d-flex justify-content-around h-100 pt-2">
          <div className="info-text-container w-100">
            <code className="info-code">
              <span className="code-white">I'm</span>{' '}
              <span className="code-purple">{'=>'}</span>{' '}
              <span className="code-yellow">
                (<span className="code-value me">{name}</span>)
                <span className="code-semi">;</span>
              </span>
            </code>
            <div className="info-field">
              <p>
                Web Front-End & Python
                <br />
                Developer
              </p>
            </div>
            <Button
              variant="outline-primary"
              className="mt-3 border-2 info-btn"
            >
              node contect.js
            </Button>
          </div>
          <div className="info-image-container position-relative h-100 d-flex justify-content-end">
            <div className="info-image-flexbox position-absolute bottom-0 z-1">
              <img
                className="info-image position-absolute bottom-0 z-0"
                src={process.env.PUBLIC_URL + '/INIRU.png'}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
