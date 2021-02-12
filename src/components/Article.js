const Article = ({data}) => {
    let img = null;
    if(data.urlToImage !== null) {
        img = <img className="rounded-t-md w-full" src={data.urlToImage} alt="article img" />;
    }

    return (
        <article className="rounded-md mx-auto my-4 flex-col justify-center w-3/4 md:w-1/2 border border-gray-200 shadow-lg">
            <div className="w-full">
                {img}
            </div>
            <div className="w-full px-0.5 md:px-2 text-justify">
                <h2 className="border-b border-gray-300 text-sm md:text-xl text-gray-900 font-semibold"> {data.title} </h2>
                <p className="block text-xs md:text-sm text-gray-400"> 
                    {data.publishedAt + ' - ' + data.source.name}
                </p>
                <p className="block text-xs md:text-sm text-gray-700">
                    {data.content}
                </p>
                <a className="hover:text-gray-600 text-right block text-gray-900 text-sm" href={data.url}>[Read more]</a>
            </div>
        </article>
    );
};

export default Article;