// models/user.js

const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    // Login happens through account/mail
    email: {
        type: String,
        required: true,
        unique: true
    },
    accountName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['pharma', 'medical', 'logistics'],
        default: 'pharma'
    },
    lastOnline: {
        type: Date,
        required: true
    },
});

// adds createdAt, updatedAt properties which are fetched for profile information
UserSchema.set('timestamps', true);
UserSchema.set('versionKey', false);

module.exports = User = mongoose.model('user', UserSchema);
