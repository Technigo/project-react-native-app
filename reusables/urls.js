export const COMICS_URL = "https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&hasDigitalIssue=true&orderBy=issueNumber&limit=20&ts=1&apikey=d6f1564ebbdf6dd5b7db12b7c0f038e3&hash=1016b6c2128aeb5bd2aa4fee45e8b2c2"
export const FULLCOMIC_URL = (id) => `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=d6f1564ebbdf6dd5b7db12b7c0f038e3&hash=1016b6c2128aeb5bd2aa4fee45e8b2c2`
export const HERO_URL = (id) => `https://gateway.marvel.com:443/v1/public/characters/${id}?&ts=1&apikey=d6f1564ebbdf6dd5b7db12b7c0f038e3&hash=1016b6c2128aeb5bd2aa4fee45e8b2c2`

/* http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/portrait_uncanny.jpg THOR
http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_uncanny.jpg SPIDER-MAN
http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/portrait_uncanny.jpg CAPTAIN MARVEL
http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d/portrait_uncanny.jpg STORM*/
