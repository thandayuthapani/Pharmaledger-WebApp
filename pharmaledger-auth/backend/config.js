// Configuration variables
const port = process.env.PORT || '8082';
const JwtSecret = process.env.JWT_SECRET || 'very secret secret';
const mongoURI =
    process.env.MONGODB_URI ||
    'mongodb+srv://pharmaledger:pharmaledger@cluster0.aapmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = {
    port,
    mongoURI,
    JwtSecret
};