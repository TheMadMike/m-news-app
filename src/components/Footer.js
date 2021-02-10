const footerLinks = [
    {href: '#', text: 'GitHub repository'},
    {href: 'https://newsapi.org/', text: 'News API'},
    {href: 'http://mgibas.me/', text: 'Developer'},
];

const Footer = () => {
    return (
        <footer className="flex w-full h-40 bg-gray-900 border-t-8 border-gray-600 justify-between text-xs md:text-sm text-gray-50">
            <div className="px-6 my-auto flex-col">
                { footerLinks.map((link, key) => {
                    return <a key={key} className="transition duration-500 my-6 lg:my-2 block underline hover:text-gray-300" href={link.href}> {link.text} </a>;
                })}
            </div>
            <div className="px-2 md:px-6 my-auto">
                Copyright &copy; 2021 Michał Gibas.
            </div>
        </footer>
    );
};

export default Footer;