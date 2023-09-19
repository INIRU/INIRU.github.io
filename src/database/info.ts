type Skills = {
  name: string;
  id: string;
  color: string;
  level: number;
};

type Info = {
  skills: Skills[];
};

const info: Info = {
  skills: [
    { name: 'HTML', id: 'html5', color: '#E34F26', level: 100 },
    { name: 'CSS', id: 'css3', color: '#1572B6', level: 100 },
    {
      name: 'JavaScript',
      id: 'javascript',
      color: '#F7DF1E',
      level: 80,
    },
    {
      name: 'TypeScript',
      id: 'typescript',
      color: '#3178C6',
      level: 60,
    },
    { name: 'React', id: 'react', color: '#61DAFB', level: 80 },
    { name: 'Node.Js', id: 'nodejs', color: '#339933', level: 50 },
    { name: 'Vue.Js', id: 'vuejs', color: '#4FC08D', level: 30 },
    { name: 'Python', id: 'python', color: '#3776AB', level: 100 },
    { name: 'Git', id: 'git', color: '#F05032', level: 80 },
  ],
};

export default info;
