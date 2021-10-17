const express = require('express')
const router = express.Router()

const { 
    categoryById,
    create,
    read,
    list,
    remove,
    update
} = require('../controllers/category')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')

router.get('/category/:categoryId', read)
router.get('/categories', list)
router.post(
    '/category/create/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    create
)
router.delete(
    '/category/:categoryId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    remove
)
router.put(
    '/category/:categoryId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    update
)

router.param('categoryId', categoryById)
router.param('userId', userById)

module.exports = router