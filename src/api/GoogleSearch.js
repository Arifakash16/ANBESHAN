// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const ENGINE_ID = process.env.REACT_APP_GOOGLE_ENGINE_ID;
export const searchData = async (term) => {
    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyA0I00tYJhSoSuBtMzHGEU3Uc372IY7OFc&cx=85472b0d6e7104daf&q=${term}`
            );
    
    console.log(data);

    const result = data.json();
    return result;

};