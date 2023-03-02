import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getEmojiFavicon } from './utils/randomFavicon';

function App() {
  const [favicon, setFavicon] = useState(getEmojiFavicon());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFavicon(getEmojiFavicon());
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [favicon]);

  return (
    <>
      <Helmet>
        <link
          rel='icon'
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
        />
      </Helmet>
    </>
  );
}

export default App;
