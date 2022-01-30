const Genius = require("genius-lyrics") // import the library
const Client = new Genius.Client() // setup the Genius Lyrics API
const IMDb = require('imdb-light');

async function retrieveLyrics() {
  const songs = await Client.songs.search("Pop Smoke") // Get songs from Pop Smoke

  const indexSongs = Math.floor(Math.random() * Math.floor(songs.length))
  const lyrics = await songs[indexSongs].lyrics() // Get random song

  const arrLyrics = lyrics.split("\n").filter(l => l.length && l[0] !== '[')
  const indexLyrics = Math.floor(Math.random() * Math.floor(arrLyrics.length))
  return arrLyrics[indexLyrics] // Return random lyrics
}

function fetch(id) {
  return new Promise(function (resolve, reject) {
          IMDb.fetch(id, (details) => {
                  resolve(details);
          });
  });
}

async function test(id) {
  var quote = await fetch(id);
  return quote;
}

module.exports = async (req, res) => { // this function will be launched when the API is called.ü
  const { id } = req.query;

  try {
    res.send(await test(id)) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}