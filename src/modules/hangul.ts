import { d, a } from 'hangul-js';

type State = (x: string) => void;

interface Options {
  state: string | null;
  text: string | null;
  intervalType?: number;
  setState: State | null;
}

let defaultOptions: Options = {
  state: null,
  text: null,
  intervalType: 120,
  setState: null,
};

function merge(obj1: Options, obj2: Options) {
  return Object.assign({}, obj1, obj2);
}

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function typing(options: Options): Promise<string> {
  options = merge(defaultOptions, options);

  if (!options.text) throw Error('not Text');
  if (!options.state && options.state !== '') throw Error('not State');
  if (!options.setState) throw Error('not setState');

  let letter = d(options.text, true);
  let typingLetter: string = '';
  let temp: string = '';
  for (let i in letter) {
    temp += typingLetter;
    for (let x in letter[i]) {
      typingLetter = a(letter[i].slice(0, parseInt(x) + 1));
      options.setState(temp + typingLetter);
      await wait(options.intervalType as number);
    }
  }
  return temp + typingLetter;
}

async function erase(
  state: string,
  setState: State,
  speed: number
): Promise<void> {
  let letter: string[] = state.split('');
  const lastLetter: string[] = d(letter[letter.length - 1]);
  letter = letter.slice(0, letter.length - 1);

  while (letter.length + lastLetter.length) {
    let temp = '';
    if (lastLetter.length) {
      lastLetter.pop();
      temp = a(lastLetter);
    } else {
      letter.pop();
    }
    setState(letter.toString().replaceAll(',', '') + temp);
    await wait(speed);
  }
}

export { typing, erase, wait };
