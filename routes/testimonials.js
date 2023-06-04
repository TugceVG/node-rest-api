const router = require("express").Router();
const Testimonial = require("../models/Testimonial");

//Create a testimonials
router.post("/add", async (req, res) => {
    const newTestimonial = new Testimonial(req.body);
    try {
        const savedTestimonial = await newTestimonial.save();
        res.status(200).json(savedTestimonial);
    } catch (err) {
        res.status(500).json(err);
    }

});

//Get all testimonials
router.get("/all", async (req, res) => {
    try {
        const testimonials = await Testimonial.find({});
        res.status(200).json(testimonials);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;