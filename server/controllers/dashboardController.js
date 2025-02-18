
async function allLead(req, res){
  try{
      return res.status(200).send({
          status: 'success',
          message: 'All leads successfully'
      })
  }  catch(error){
      console.log(`Error occurred: ${error}`);
      return res.status(500).send({
          status: 'error',
          message: 'Something went wrong'
      })
  }
}

module.exports = {
    allLead,
}