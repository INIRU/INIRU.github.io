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
          experience: [
            {
              year: 2021,
              title:
                '6th Annual National High School Club Software Competition',
              desc: 'In 2021, I took on the challenge of an on-campus program exhibition to test my abilities. I created **`Math Rain!`** in `Python PyQt5` with the motif of `acid rain` from the old `Hancomta Nature Learning` program and received many praises.<br/><br/>However, I wanted to make a mobile app to solve the inconvenience of my daily life, not a computer program, and I wanted to make it public. At that time, my teacher gave me a flyer for the national high school club program presentation, and I developed a **`Nofy`** using subway station `WiFi BSSID` as a project leader, and I presented it to my high school club friends across the country and received a lot of praise. 2021 was an important year for me to develop my capabilities and collaboration in team projects.',
            },
            {
              year: 2022,
              title: 'Program maintenance and a heart for teaching juniors',
              desc: "When 2022 came around, I was very excited to see how many juniors would join our club. In fact, more juniors came to our club than I expected, and my teacher asked me if I would teach my knowledge to the juniors every Friday. I worked hard because I wanted to gain experience in teaching someone and because I think teaching someone is the best way to remember and learn, and it paid off.<br/><br/>However, I didn't neglect my own development. I upgraded the **`Nofy`** I developed last year, improved the UI and performance, and presented it at the `Korean Code Fair`.",
            },
            {
              year: 2023,
              title: 'Time to reflect',
              desc: "I'm already in my third year of high school. It's been a fast time and a slow time. My third year of high school has been the most reflective time for me. I've been studying **`Next.Js`** and **`TypeScript`**, thinking about what I need to fulfill my dreams and what I lack. As the trend is changing from **CSR** to **SSR**, I thought that **front-end** developers should also learn **`Next.Js`**. So, I learned **`TypeScript`**, **`React`**, and **`Next.Js`** while working on my **portfolio** to pass the Gachon University Dcarrick.<br/><br/>While learning **`React`** and **`TypeScript`**, I had a lot of fun, but I also had a lot of difficulties. I think I was Googling every hour because of the **type** designation. However, when I completed the current **portfolio**, I thought that the path I had taken so far was still not bad, but I still wished I had tried a little harder. I have no regrets, though. I like myself as I practice hard and change.<br/><br/>I'll keep pushing forward, thank you very much.",
            },
          ],
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
          experience: [
            {
              year: 2021,
              title: '제 6회 전국 고등학교 동아리 소프트웨어 전시회',
              desc: '2021년은 저에게 있어 제 역량을 테스트하기 위해 교내 프로그램 전시회를 도전하였습니다. 저는 예전 `한컴타자연습` 프로그램에 있던 `산성비` 를 모티브로 **`Math Rain!`** 을 `Python PyQt5`로 제작하여 많은 찬사를 받았습니다. 하지만 저는 컴퓨터 프로그램 보다는 더 나아가 생활의 불편함을 해결하고자 모바일 앱을 만들고 싶었습니다.<br/><br/>그때 선생님께서 전국 고등학교 동아리 소프트웨어 전시회 전단지를 주셨고 저는 프로젝트 리더로 지하철 역의 WiFi BSSID를 이용한 **`Nofy`** 를 개발하여 전국의 고등학교 동아리 친구들에게 발표하여 많은 찬사와 인기를 얻었습니다.\n<br/>저에게 2021년은 팀 프로젝트를 통해 협동심과 역량을 키울 수 있었던 중요한 해였습니다.',
            },
            {
              year: 2022,
              title: '프로그램의 유지보수와 후배를 가르치는 모습',
              desc: '2022년이 다가왔을 때 저는 얼마나 많은 후배들이 우리 동아리에 들어올지 가장 기대가 되었습니다. 실제로 생각보다 많은 후배들이 동아리를 찾아왔고, 선생님께서 매주 금요일마다 후배들에게 제가 가진 지식을 가르쳐줄 수 있겠냐고 물어보셨습니다.<br/><br/>저는 누군가를 가르치는 경험을 쌓고 싶었고, 누군가를 가르치는 것이 가장 좋은 기억과 배움의 방법이라고 생각하여 열심히 후배들에게 알려주었고 그 결과는 좋았습니다. 하지만 저는 제 자신의 개발도 게을리하지 않았습니다. 작년에 개발하였던 **`Nofy`** 를 업그레이드하여 UI와 30%의 퍼포먼스 개선을 하여 `한국 코드페어`에서 발표하기도 했습니다.',
            },
            {
              year: 2023,
              title: '자신을 돌아보는 시간',
              desc: '벌써 고등학교 3학년이 되었습니다. 빠르다면 빠른 시간이고 느리다면 느린 시간이겠죠. 고등학교 3학년은 제 자신을 돌아보는 시간이 가장 많았습니다. 내 꿈을 이루려면 무엇이 필요한가 나에게 무엇이 부족한가 생각을 하며 **`Next.Js`**, **`TypeScript`** 공부를 했습니다. 요즘 **CSR**에서 **SSR**로 유행이 점점 바뀌고 있는 가운데 **Front-End** 개발자도 **`Next.Js`** 를 배워야겠다는 생각을 많이 했습니다. 그래서 **`TypeScript`**, **`React`**, **`Next.Js`** 을 배워가며 **포트폴리오** 작업을 했습니다.<br/><br/>**`React`** 와 **`TypeScript`** 를 배우면서 재밌기도 했지만 힘든점도 많았습니다. **Type**지정 때문에 구글링을 매 시간마다 한 것 같습니다. 그래도 현재 **포트폴리오**를 완성하니 여태까지 제가 걸어온 길은 그래도 나쁘지 않았지만 그래도 조금만 더 노력했으면 좋았겠다는 생각했습니다. 그래도 후회는 없습니다. 전 열심히 연습하며 바뀌는 제 자신이 좋습니다.<br/><br/>더 앞으로 향해 달려나가겠습니다. 감사합니다.',
            },
          ],
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
          experience: [
            {
              year: 2021,
              title:
                '6th Annual National High School Club Software Competition',
              desc: 'In 2021, I took on the challenge of an on-campus program exhibition to test my abilities. I created **`Math Rain!`** in `Python PyQt5` with the motif of `acid rain` from the old `Hancomta Nature Learning` program and received many praises.<br/><br/>However, I wanted to make a mobile app to solve the inconvenience of my daily life, not a computer program, and I wanted to make it public. At that time, my teacher gave me a flyer for the national high school club program presentation, and I developed a **`Nofy`** using subway station `WiFi BSSID` as a project leader, and I presented it to my high school club friends across the country and received a lot of praise. 2021 was an important year for me to develop my capabilities and collaboration in team projects.',
            },
            {
              year: 2022,
              title: 'Program maintenance and a heart for teaching juniors',
              desc: "When 2022 came around, I was very excited to see how many juniors would join our club. In fact, more juniors came to our club than I expected, and my teacher asked me if I would teach my knowledge to the juniors every Friday. I worked hard because I wanted to gain experience in teaching someone and because I think teaching someone is the best way to remember and learn, and it paid off.<br/><br/>However, I didn't neglect my own development. I upgraded the **`Nofy`** I developed last year, improved the UI and performance, and presented it at the `Korean Code Fair`.",
            },
            {
              year: 2023,
              title: 'Time to reflect',
              desc: "I'm already in my third year of high school. It's been a fast time and a slow time. My third year of high school has been the most reflective time for me. I've been studying **`Next.Js`** and **`TypeScript`**, thinking about what I need to fulfill my dreams and what I lack. As the trend is changing from **CSR** to **SSR**, So I worked on my portfolio, learning TypeScript, React, and Next.Js.<br/><br/>While learning **`React`** and **`TypeScript`**, I had a lot of fun, but I also had a lot of difficulties. I think I was Googling every hour because of the **type** designation. However, when I completed the current **portfolio**, I thought that the path I had taken so far was still not bad, but I still wished I had tried a little harder. I have no regrets, though. I like myself as I practice hard and change.<br/><br/>I'll keep pushing forward, thank you very much.",
            },
          ],
        },
      },
    },
  });

export default i18n;
