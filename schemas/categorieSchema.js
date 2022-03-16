const NAME_IS_REQUIRED = '"name" is required';

exports.validateCategorieName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name.length === 0) {
        return res.status(400).json({ message: NAME_IS_REQUIRED });
    }
    next();
};
