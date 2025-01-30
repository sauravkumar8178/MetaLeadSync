
async function signUp (req, res) {
    try{
        return res.status(200).send({
            status: 'success',
        })
    } catch (error){
        console.log(`Error occurred: ${error}`);
        return res.status(500).send({
            status: 'error',
            message: "Something went wrong"
        });
    }
}

async function signIn (req, res) {
    try{
        return res.status(200).send({
            status: 'success',
        })
    } catch (error){
        console.log('Error occurred');
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong'
        });
    }
}

async function signOut (req, res) {
    try{
        return res.status(200).send({
            status: 'success',
        })
    } catch (error) {
        console.log('Error occurred');
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong'
        });
    }
}

async function resetPassword(req, res){
    try{
        return res.status(200).send({
            status: 'success',
        })
    } catch (error){
        console.log('Error occurred');
        return res.status(500).send({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}


module.exports = {
    signUp,
    signIn,
    signOut,
    resetPassword,
}