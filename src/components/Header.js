import Logo from '../logo.svg';

const Header = () => {

    return (
        <header className="py-2 md:py-4 w-full bg-gray-100 border-b-2 border-gray-200 flex justify-center">
            <img src={Logo} alt="logo" className="my-auto mx-2 w-7 md:w-9 lg:w-12"/>
            <h1 className="font-header text-3xl md:text-5xl lg:text-6xl font-semibold">
                M-News
            </h1>
        </header>
    );
};

export default Header;