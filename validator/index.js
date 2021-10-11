exports.userSignupValidator = (req, res, next) => {
    // name
    req.check('name', 'Name is required').notEmpty()
    // email
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        })
    // password
    req.check('password', "password is required").notEmpty()
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number')
    
    const errors = req.validationErrors()
    if (errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({
            error: firstError
        })
    }
    next()
}