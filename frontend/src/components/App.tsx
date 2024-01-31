import { useTranslation } from 'react-i18next';
import { ChangeLanguage } from './ChangeLanguage'
import { NavBar } from './NavBar';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <ChangeLanguage />
      <div>
        <p>{t('webpage under construction')}</p>
      </div>
    </>
  )
}

export default App
