import { Container } from 'react-bootstrap';
import info from '../database/info';
import { SkillCard } from './Cards';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { typing, erase } from '../modules/hangul';

function Skill(): JSX.Element {
  let [height, setHeight] = useState<number | 'auto'>('auto');
  let [htmlClass, setHtmlClass] = useState('');

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
            Skills
            <span className="code-class">
              {htmlClass ? ` ${htmlClass}` : ''}
            </span>
          </span>
          &gt;
        </h2>
        <FontAwesomeIcon icon={faAngleDown} className="collpase-icon dummy" />
      </div>
      <AnimateHeight id="skill-panel" duration={500} height={height}>
        <div className="skill-list d-flex justify-content-center gap-4 mt-3 mb-3 flex-wrap w-100">
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
      </AnimateHeight>
      <h2 className="code-html text-center">
        &lt;/<span className="code-html-tag">Skills</span>&gt;
      </h2>
    </Container>
  );
}

export default Skill;
