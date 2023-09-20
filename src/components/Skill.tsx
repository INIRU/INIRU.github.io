import { Container } from 'react-bootstrap';
import info from '../database/info';
import { SkillCard } from './Cards';

function Skill(): JSX.Element {
  return (
    <Container className="w-100 mt-5">
      <h2 className="code-html text-center">
        &lt;<span className="code-html-tag">Skills</span>&gt;
      </h2>
      <div className="d-flex justify-content-center gap-4 mt-3 mb-3 flex-wrap w-100">
        {info['skills'].map((data, i): JSX.Element => {
          return (
            <SkillCard
              name={data.name}
              id={data.id}
              color={data.color}
              level={data.level}
              key={i}
            ></SkillCard>
          );
        })}
      </div>
      <h2 className="code-html text-center">
        &lt;/<span className="code-html-tag">Skills</span>&gt;
      </h2>
    </Container>
  );
}

export default Skill;
