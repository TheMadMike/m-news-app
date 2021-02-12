import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import { useEffect, useState } from 'react';

import Api from './Api';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Api.getTopHeadlines({ language: 'en' }).then((data) => {
      setArticles(data.articles);
      setLoaded(true);
    });
  }, []);

  return (
    <div className="font-body w-full md:w-3/4 lg:w-3/4 mx-auto bg-gray-50 min-h-screen">
      <Header/>
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
