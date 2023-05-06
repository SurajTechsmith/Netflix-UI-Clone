
const API_KEY= 'fc6a9a8fb2f8fe2bbd771b04b922a977';

 
  const request = {
    fetchLatest: `/trending/all/day?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, 
    fetchHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchOriginals: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTop: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
}
  
  export default request;