const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        userTitle: {
            type: String,
            required: true,
        },
        userCompany: {
            type: String,
            required: true,
        },
        userPicture: {
            type: String,
            required: false,
        },
        comment: {
            type: String,
            max: 500,
            required: true,
        },
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true });

module.exports = mongoose.model("Testimonial", TestimonialSchema);