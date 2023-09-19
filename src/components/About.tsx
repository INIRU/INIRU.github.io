import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MarkdownPreview from '@uiw/react-markdown-preview';

function About(): JSX.Element {
  const { t, i18n } = useTranslation();

  console.log(i18n.resolvedLanguage);

  return (
    <Container className="w-100">
      <div className="about-container mt-4">
        <h2 className="about-title">About</h2>
        <div className="about-text-container d-flex gap-2">
          <div className="about-bar"></div>
          <MarkdownPreview source={t('about')} className="about-md" />
        </div>
      </div>
    </Container>
  );
}

export default About;
