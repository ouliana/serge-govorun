import { useState, useEffect } from 'react';
import { Container, ProfileText } from './styles';
import useLocaleRu from '../../hooks/useLocaleRu';
import useBlock from '../../hooks/useBlock';

const About = () => {
  const { t, isRu } = useLocaleRu();
  const { block } = useBlock('about');
  const [text, setText] = useState<string>('');
  // const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    if (block) setText(isRu ? block.textRu : block.textEn);
  }, [block, isRu]);

  // let key = 0;
  return (
    <Container>
      <h2>{t('about')}</h2>
      <ProfileText data-testid='paragraphs-list'>{text}</ProfileText>
    </Container>
  );
};

export default About;
