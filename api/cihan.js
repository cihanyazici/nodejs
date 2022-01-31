const IMDb = require('imdb-light');


function fetch(id) {
  return new Promise(function (resolve, reject) {
          IMDb.fetch(id, (details) => {
                  resolve(details);
          });
  });
}

async function test(id) {
  var quote = await fetch(id);
  return "cihan";
}

module.exports = async (req, res) => { 
  const { id } = req.query;

  try {
    res.send(await test(id)) // send the lyrics
  } catch (err) {
    res.send(err) // send the thrown error
  }
}