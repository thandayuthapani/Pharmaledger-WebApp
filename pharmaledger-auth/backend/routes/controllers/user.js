// routes/controllers/user.js

const User = require('../../models/user');

/**
 * API Controller for getting all the necessary information displayed in a tutorial session
 * omits all private information (e.g. lastName, password Hash, Email)
 * @param {Object} req
 * @param {Object} res
 */
const getUserById = async (req, res) => {
    User.find({ _id: req.params.id })
        .then(tutor => {
            const data = {
                accountName: tutor[0].accountName,
                lastOnline: tutor[0].lastOnline,
            };
            res.status(200).json(data);
        })
        .catch(error => {
            res.status(404).json({
                error: 'User not found',
                message: error.message
            });
        });
};



module.exports = {
    getUserById,
};
