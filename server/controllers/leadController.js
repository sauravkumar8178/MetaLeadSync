
async function addLead (req, res) {
    try{
        return res.status(201).send({
            status: 'success',
            message: 'Lead added successfully.'
        })
    } catch (error){
        console.log(`Error occurred: ${error}`);
        return res.status(500).send({
            status: 'error',
            message: "Something went wrong",
        });
    }
}

async function deleteLead (req, res) {
    try{
        return res.status(201).send({
            status: 'success',
            message: 'Lead added successfully.'
        })
    } catch (error){
        console.log(`Error occurred: ${error}`);
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong',
        })
    }
}

async function getLead(req, res) {
    try{
        return res.status(201).send({
            status: 'success',
            message: 'Lead added successfully.'
        })
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}

async function editLead(req, res){
    try{
        return res.status(201).send({
            status: 'success',
            message: 'Lead added successfully.'
        })
    } catch (error) {
        console.log(`Error occurred: ${error}`);
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong',
        });
    }
}

module.exports = {
    addLead,
    deleteLead,
    getLead,
    editLead
}