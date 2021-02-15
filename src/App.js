import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import { useEffect, useState } from 'react';

import api from './Api';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    api.getTopHeadlines({ language: 'en' }).then((data) => {
      setArticles(data.articles);
      setErrorText(null);
      setLoaded(true);
    }).catch((error) => {
      setErrorText(`We're sorry, this service is currently unavailable, please try again later. 😕`);
      setArticles([]);
      setLoaded(true);
    });
  }, []);

  return (
    <div className="font-body w-full md:w-3/4 lg:w-3/4 mx-auto bg-gray-50 min-h-screen">
      <Header/>
      <h1 className="my-2 text-center w-3/4 mx-auto text-red-600 bg-red-100">{errorText}</h1>
      <main className="min-h-screen">
        { 
          loaded ?
            articles.map((data, key) => {
              return <Article data={data} key={key} />;
            })
          : <Loader />
        }
      </main>
      <Footer/>
    </div>
  );
};

export default App;
