import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useLocaleRu = () => {
  const { t, i18n } = useTranslation();

  const [isRu, setIsRu] = useState(i18n.language.split('-').includes('ru'));

  useEffect(() => {
    setIsRu(i18n.language.split('-').includes('ru'));
  }, [i18n.language]);

  return { t, isRu };
};

export default useLocaleRu;
