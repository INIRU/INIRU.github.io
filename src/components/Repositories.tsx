import { Container } from 'react-bootstrap';
import { RepoCard } from './Cards';
import repoApi from '../modules/repoApi';
import { useEffect, useState } from 'react';
import Loding from './Loding';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { typing, erase } from '../modules/hangul';
import AnimateHeight from 'react-animate-height';

function Repositories(): JSX.Element {
  let [apiStatus, setApiStatus] = useState(false);
  let [height, setHeight] = useState<number | 'auto'>('auto');
  let [htmlClass, setHtmlClass] = useState('');
  let [repoList, setRepoList] = useState<{ [key: string]: string }[]>();

  useEffect(() => {
    repoApi().then((response) => {
      if (response.status === 200) {
        setApiStatus(true);
        let temp: { [key: string]: string }[] = [];
        response.data.forEach((data: { [key: string]: string }) => {
          if (
            !data.fork &&
            data.description != null &&
            !data.description.startsWith('.')
          ) {
            temp.push(data);
          }
        });
        setRepoList(temp);
      }
    });
  }, []);

  return (
    <Container className="w-100 mt-5">
      <div className="d-flex align-items-center justify-content-center gap-2">
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`collpase-icon ${height === 0 ? 'close' : ''}`}
          aria-expanded={height !== 0}
          aria-controls="skill-panel"
          onClick={() => {
            setHeight(height === 0 ? 'auto' : 0);
            if (height !== 0) {
              typing({
                text: 'Collpase',
                state: htmlClass,
                setState: setHtmlClass,
                intervalType: 70,
              });
            } else if (htmlClass) {
              erase(htmlClass, setHtmlClass, 70);
            }
          }}
        />
        <h2 className="code-html text-center">
          &lt;
          <span className="code-html-tag">
            Repositories
            <span className="code-class">
              {htmlClass ? ` ${htmlClass}` : ''}
            </span>
          </span>
          &gt;
        </h2>
      </div>
      <AnimateHeight id="skill-panel" duration={500} height={height}>
        <div className="mt-3 mb-3 d-flex flex-wrap justify-content-center gap-4">
          {repoList && apiStatus ? (
            repoList.map((data: {}, i: number): JSX.Element => {
              return <RepoCard key={i} data={data}></RepoCard>;
            })
          ) : (
            <Loding />
          )}
        </div>
      </AnimateHeight>
      <h2 className="code-html text-center">
        &lt;/<span className="code-html-tag">Repositories</span>&gt;
      </h2>
    </Container>
  );
}

export default Repositories;
