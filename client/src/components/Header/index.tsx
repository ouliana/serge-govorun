import { useTranslation } from 'react-i18next';
import { Green, ProfileImage, TextWrapper, White, Wrapper } from './styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ProfileImage />
      <TextWrapper>
        <Green>{t('serge')}</Green>
        <White>
          {t('composer')} & {t('musician')}
        </White>
      </TextWrapper>
    </Wrapper>
  );
};

export default Header;
