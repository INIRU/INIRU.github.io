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
          viewer:
            'You can exit the Viewer by clicking on the black background.',
        },
      },
      ko: {
        translation: {
          about: `안녕하세요. 저는 **\`Web Front-End 개발자\`<!--rehype:class=md-yellow-->** 를 꿈꾸고 있는 고등학생 개발자 입니다.
          \n저는 \`HTML\` 과 \`CSS\` 그리고 \`JavaScript\`를 유연하게 다룰 수 있으며, **React**와 **TypeScript** 그리고 **Next.js**는 공부중 입니다.
          \n항상 앞으로 나아갈 미래를 만드는 **개발자**가 되겠습니다.
          `,
          viewer: '검은 바탕을 클릭하여 Viewer를 종료할 수 있습니다.',
        },
      },
      jp: {
        translation: {
          about: `こんにちは。私は **\`Web Front-End Developer\`<!--rehype:class=md-yellow-->** を夢見る高校生開発者です。
          \n私は \`HTML\` と \`CSS\` そして \`JavaScript\`を柔軟に扱うことができ、 **React** と **TypeScript** そして **Next.js** は勉強中です。
          \n常に前へ進む未来を作る開発者になりたいと思います。
          `,
          viewer: '黒い背景をクリックしてViewerを終了することができます。',
        },
      },
    },
  });

export default i18n;
