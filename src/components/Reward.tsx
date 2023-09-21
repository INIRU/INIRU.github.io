import rewardList from '../database/reward';
import { Container } from 'react-bootstrap';

function Reward(): JSX.Element {
  return (
    <div className="w-100 mt-5">
      <Container>
        <h2 className="code-html text-center">
          &lt;
          <span className="code-html-tag">Reward</span>
          &gt;
        </h2>
        <div className="w-100 d-flex flex-warp justify-content-center gap-3 mt-3 mb-3">
          {rewardList.map((data: string): JSX.Element => {
            return <img className="reward-image" src={data} alt="" />;
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
