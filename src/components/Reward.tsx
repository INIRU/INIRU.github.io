import rewardList from '../database/reward';
import { Container } from 'react-bootstrap';
import { setViewer } from '../store';
import { useDispatch } from 'react-redux';

function Reward(): JSX.Element {
  let dispatch = useDispatch();

  return (
    <div className="w-100 mt-5">
      <Container>
        <h2 className="code-html text-center">
          &lt;
          <span className="code-html-tag">Reward</span>
          &gt;
        </h2>
        <div className="w-100 d-flex flex-wrap justify-content-center gap-3 mt-3 mb-3">
          {rewardList.map((data: string, i: number): JSX.Element => {
            return (
              <img
                key={i}
                className="reward-image"
                src={data}
                alt=""
                onClick={() => {
                  dispatch(setViewer(data));
                }}
              />
            );
          })}
        </div>
        <h2 className="code-html text-center">
          &lt;/
          <span className="code-html-tag">Reward</span>
          &gt;
        </h2>
      </Container>
    </div>
  );
}

export default Reward;
