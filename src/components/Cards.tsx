import { useState } from 'react';
import { useSelector } from 'react-redux';
import Wave from 'react-wavify';
import { RootState } from '..';

type Skill = {
  name: string;
  id: string;
  color: string;
  level: number;
};

function SkillCard(props: Skill): JSX.Element {
  let state = useSelector((state: RootState) => state);

  let [border, setBorder] = useState(0);
  let [level, setLevel] = useState(0);

  return (
    <div
      style={{
        border: `${border}px solid ${props.color}`,
      }}
      onMouseOver={() => {
        setBorder(5);

        let now = props.level;
        let levelHandler: NodeJS.Timer = setInterval(() => {
          setLevel(Math.ceil(props.level - now));

          if (now < 1) {
            clearInterval(levelHandler);
          }

          const step = now / 7;

          now -= step;
        }, 50);
      }}
      onMouseOut={() => {
        setBorder(0);
      }}
      className="skill-item d-flex shadow-sm justify-content-center align-items-center position-relative"
    >
      <Wave
        fill={state.isDarkMode ? 'var(--code-value)' : 'var(--code-value)'}
        className="skill-wave position-absolute bottom-0 h-100"
        options={{
          height: 100 - props.level,
          amplitude: 20,
          speed: 0.25,
          points: 2,
        }}
      />
      <div className="overlay w-100 position-absolute d-flex justify-content-center">
        <p className="level text-center align-self-center">{level}%</p>
      </div>
      <div className="skill-info">
        <img
          className="skill-item-icon"
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.id}/${props.id}-original.svg`}
          alt=""
        />
        <p className="badge-text text-center">{props.name}</p>
      </div>
    </div>
  );
}

export default SkillCard;
