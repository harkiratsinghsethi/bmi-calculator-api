module.exports = {

    getBMI: (req, res) => {
        let weight = req.query.weight;
        const height = req.query.height;
        weight = 703 * weight;
        console.log(weight, height);
        let bmi = weight / (height * height);
        bmi = bmi.toString();
        res.send(bmi);

    }
};
