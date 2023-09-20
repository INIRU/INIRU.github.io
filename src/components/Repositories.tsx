import { Container } from 'react-bootstrap';
import { RepoCard } from './Cards';
import repoApi from '../modules/repoApi';
import { useEffect, useState } from 'react';
import Loding from './Loding';

function Repositories(): JSX.Element {
  let [apiStatus, setApiStatus] = useState(false);
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
      <h2 className="code-html text-center">
        &lt;<span className="code-html-tag">Repositories</span>&gt;
      </h2>
      <div className="mt-3 mb-3 d-flex flex-wrap justify-content-center gap-4">
        {repoList && apiStatus ? (
          repoList.map((data: {}, i: number): JSX.Element => {
            return <RepoCard key={i} data={data}></RepoCard>;
          })
        ) : (
          <Loding />
        )}
      </div>
      <h2 className="code-html text-center">
        &lt;/<span className="code-html-tag">Repositories</span>&gt;
      </h2>
    </Container>
  );
}

export default Repositories;
