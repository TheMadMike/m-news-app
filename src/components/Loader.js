import './Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loadingAnimWrapper rounded-full bg-gray-800 w-3 h-3 mx-auto my-20"></div>
            <div className="text-center text-xs md:text-sm text-gray-400 tracking-widest">loading...</div>
        </div>
    );
};

export default Loader;