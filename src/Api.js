import axios from 'axios';

const makeGetRequest = async (uri) => {
    try {
        const response = await axios.get(uri);
        return response.data;
    } catch(error) {
        console.error(error);
        return null;
    }
};

const constructUri = (base, query) => {
    let uri = base;
    
    for(const p in query) {
        if(query.hasOwnProperty(p)) {
            uri += `?${p}=${query[p]}&`;
        }
    }
    
    uri = uri.substring(0, uri.length-1);

    return uri;
};

const getTopHeadlines = async (options) => {
    const uri = constructUri('top-headlines', options);
    return await makeGetRequest(uri);
};

const getEverything = async (options) => {
    const uri = constructUri('everything', options);
    return await makeGetRequest(uri);
}

const getAllSources = async (options) => {
    const uri = constructUri('sources', options);
    return await makeGetRequest(uri);
};

export default { getAllSources, getTopHeadlines, getEverything };