const callAPI = {
  getListShows: async function () {
    try {
      let response = await fetch("https://api.tvmaze.com/shows");
      if (response.ok) {
        console.log("fetch ok");
        let movies = await response.json();
        console.log(movies.length);
        console.log(movies[0]);
        return movies
      } else {
        throw "error when fetching";
      }
    } catch (err) {
      alert(err.toString());
    }
  },
  getShowDetail: async function (id) {
    try {
      let response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      let show;
      if (response.ok) {
        show = await response.json();
        console.log(show);
        return show
      } else throw "error when fetching";
    } catch (err) {
      alert(err.toString());
    }
  },
  getListEpisode: async function (id) {
    try {
      let response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
      if (response.ok) {
        let listEpisode = await response.json();
        console.log(listEpisode[0]);
        return listEpisode
      } else {
        throw "error when fetching";
      }
    } catch (err) {
      alert(err.toString());
    }
  },
  getEpisodeDetail:  async function (id, season, number) {
   
    try {
    let response=await fetch(`https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${number}`)
    let episode
    if (response.ok) {
     episode= await response.json()
    return episode
   
    } else {
        throw 'error when fetching data'
    }
     }
     catch(err) {
         console.log(err.toString())
     }
    }
};
export default callAPI;
