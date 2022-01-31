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
  return quote;
}

module.exports = async (req, res) => { 
  movie=await test(req.query.id)
  try {
    res.send({movie}) 
  } catch (err) {
    res.send(err) 
  }
}