import { useState } from 'react';
import Select from './Select';

const languages = [
    {name: 'English', code: 'en'  },
    {name: 'Arabic', code: 'ar'   },
    {name: 'Dutch', code: 'nl'    },
    {name: 'French', code: 'fr'   },
    {name: 'German', code: 'de'   },
    {name: 'Hebrew', code: 'he'   },
    {name: 'Italian', code: 'it'  },
    {name: 'Norwegian', code: 'no'},
    {name: 'Polish', code: 'pl'   },
    {name: 'Portuguese', code: 'pt'},
    {name: 'Russian', code: 'ru'  },
    {name: 'Spanish', code: 'es'  },
];

const Filters = ({ submitHandler }) => {
    const [lang, setLanguage] = useState('en');

    return (
        <div className="w-full py-2 border-b-2 border-gray-200">
            <form className="flex justify-center" onSubmit={(event) => {
                event.preventDefault();
                submitHandler({ language: lang });
            }}>
                <label>Language:</label>
                <Select getValue={(value) => setLanguage(value) } name="language" data={languages}/>
                <input className="cursor-pointer px-2 bg-gray-300 rounded-md mx-1" type="submit" value="🔍" />
            </form>
        </div>
    );
};

export default Filters;