import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <div>
        <p>{t('webpage under construction')}</p>
      </div>
    </>
  )
}

export default App
