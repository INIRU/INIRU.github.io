import { Container } from 'react-bootstrap';
import { typing, erase, wait } from '../modules/hangul';
import { useEffect, useState } from 'react';

function Intro(): JSX.Element {
  let [name, setName] = useState('');

  function typeName(letter: string[], i: number) {
    typing({ text: letter[i], state: name, setState: setName }).then(
      async (state): Promise<void> => {
        await wait(2000);
        await erase(state, setName, 100);
        await wait(1000);
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
    <div className="info-container shadow-lg">
      <Container className="h-100">
        <div className="d-flex justify-content-around h-100">
          <div className="info-text-container w-50">
            <code className="info-code">
              <span className="code-white">I'm</span>{' '}
              <span className="code-purple">{'=>'}</span>{' '}
              <span className="code-yellow">
                (<span className="code-value me">{name}</span>)
                <span className="code-semi">;</span>
              </span>
            </code>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
