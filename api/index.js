const IMDb = require('imdb-light');


function fetch(id) {
  return new Promise(function (resolve, reject) {
    IMDb.fetch(id, (details) => {
      resolve(details);
    });
  });
}

async function getImdbMovie(id) {
  var movie = await fetch(id);
  return movie;
}

module.exports = async (req, res) => {
  movie = await getImdbMovie(req.query.id)
  try {
    res.send({ result: { "imdbRating": movie.Rating, "movieName" : movie.Title, "poster" : movie.Poster } })
  } catch (err) {
    res.send(err)
  }
}