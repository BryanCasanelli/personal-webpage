import { useTranslation } from 'react-i18next';

export function ChangeLanguage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end space-y-2.5 space-x-2.5 space-x-reverse">
      <div></div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded" onClick={() => changeLanguage("en")}>{t('english')}</button>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded" onClick={() => changeLanguage("es")}>{t('spanish')}</button>
    </div>
  );
}