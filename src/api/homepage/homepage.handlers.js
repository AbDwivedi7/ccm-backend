

const hello = async function(req, res) {
  try {
    res.json('All todo s');
  } catch(e) {
    console.log(e.message)
    res.status(500).send({ error: 'Error in hello api' });
  }
}

const homepageHandlers = { hello }

export default homepageHandlers