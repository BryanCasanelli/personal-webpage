import { useTranslation } from 'react-i18next';
import styles from './ChangeLanguage.module.css';

export function ChangeLanguage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.language_buttons}>
      <button className="btn btn-primary btn-sm me-1" onClick={() => changeLanguage("en")}>{t('english')}</button>
      <button className="btn btn-primary btn-sm me-1" onClick={() => changeLanguage("es")}>{t('spanish')}</button>
    </div>
  );
}