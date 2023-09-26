import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguaeDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguaeDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          about: `Hello. I'm a high school student to be a **\`Web Front-End Developer\`<!--rehype:class=md-yellow-->**.
          \nI am good at \`HTML\`, \`CSS\`, \`JavaScript\`. I am learning **React**, **TypeScript**, and **Next.js**.
          \nI wish to be a **developer** who creates the future to move forward.
          `,
          viewer: 'You can exit the Viewer by clicking on the desktop.',
          browserCom: {
            title: 'Incompatible with browsers.',
            desc: 'Use the latest version of your Chrome, Safari, Edge, or Chromium browser.',
          },
        },
      },
      ko: {
        translation: {
          about: `안녕하세요. 저는 **\`Web Front-End Developer\`<!--rehype:class=md-yellow-->** 를 꿈꾸고 있는 고등학생 개발자 입니다.
          \n저는 \`HTML\` 과 \`CSS\` 그리고 \`JavaScript\`를 유연하게 다룰 수 있으며, **React**와 **TypeScript** 그리고 **Next.js**는 공부중 입니다.
          \n항상 앞으로 나아갈 미래를 만드는 **개발자**가 되겠습니다.
          `,
          viewer: '바탕을 클릭하여 Viewer를 종료할 수 있습니다.',
          browserCom: {
            title: '브라우저와 호환성이 맞지 않습니다.',
            desc: 'Chrome, Safari, Edge,  Chromium 브라우저의 최신 버전을 사용해주세요.',
          },
        },
      },
      jp: {
        translation: {
          about: `こんにちは。私は **\`Web Front-End Developer\`<!--rehype:class=md-yellow-->** を夢見る高校生開発者です。
          \n私は \`HTML\` と \`CSS\` そして \`JavaScript\`を柔軟に扱うことができ、 **React** と **TypeScript** そして **Next.js** は勉強中です。
          \n常に前へ進む未来を作る開発者になりたいと思います。
          `,
          viewer: 'デスクトップをクリックしてViewerを終了することができます。',
          browserCom: {
            title: 'ブラウザとの互換性がありません。',
            desc: 'Chrome、Safari、Edge、Chromiumブラウザの最新バージョンをご使用ください。',
          },
        },
      },
    },
  });

export default i18n;
