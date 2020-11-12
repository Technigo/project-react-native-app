// URL_ASTRO_SIGNS ="http://sandipbgt.com/theastrologer/api/sunsigns/";
// URL_ASTRO_TODAY = "http://theastrologer-api.herokuapp.com/api/horoscope/{sunsign}/today";

export const getSigns = () => {
    return fetch("http://sandipbgt.com/theastrologer/api/sunsigns/")
    .then(res => res.json())
};



