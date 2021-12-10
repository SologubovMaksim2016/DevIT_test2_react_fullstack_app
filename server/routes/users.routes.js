

const Router = require("express");
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {
    check,
    validationResult
} = require("express-validator")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const corsMiddleware = require('../middleware/cors.middleware')

/**
* @swagger
* /users:
*   get:
*     summary: Get all users
*     parameters:
*       - name: authorization
*         in: header
*         description: admin's token
*         required: true
*         type: string
*     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                   example: Max 
 *                 lastName:
 *                   type: string
 *                   example: Ivanov 
 *                 isBlocked:
 *                   type: boolean
 *                   example: false 
 *                 isAdmin:
 *                   type: boolean
 *                   example: true 
*/
router.get("/", authMiddleware, corsMiddleware,
    async (req, res) => {
        try {
            const users = await User.find({
                _id: {
                    $ne: req.user.id
                }
            })
            return res.json(users)
        } catch (e) {
            console.log(e)            
            res.send({
                message: "Server error"
            })
        }
    })

/**
 * @swagger
 * /users/:id:
 *   delete:
 *     description: Remove user
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the requested user
 *         required: true
 *         type: string
 *       - name: authorization
 *         in: header
 *         description: admin's token
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                   example: Max 
 *                 lastName:
 *                   type: string
 *                   example: Ivanov 
 *                 isBlocked:
 *                   type: boolean
 *                   example: false 
 *                 isAdmin:
 *                   type: boolean
 *                   example: true 
 */
router.delete("/:id", authMiddleware, corsMiddleware,

    async (req, res) => {
        try {

            const {
                isAdmin
            } = req.user

            if (!isAdmin) {
                return res.status(401).json({
                    message: 'access denied'
                })
            }
            const user = await User.findByIdAndDelete(req.params.id)

            return res.json(user)
        } catch (e) {
            console.log(e)
            res.send({
                message: "Server error"
            })
        }
    })
/**
 * @swagger
 * /users/:id:
 *   put:
 *     description:  Update user
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the requested user
 *         required: true
 *         type: string
 *       - name: authorization
 *         in: header
 *         description: admin's token
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Updated user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                   example: Max 
 *                 lastName:
 *                   type: string
 *                   example: Ivanov 
 *                 isBlocked:
 *                   type: boolean
 *                   example: false 
 *                 isAdmin:
 *                   type: boolean
 *                   example: true 
 */
router.put("/:id", authMiddleware, corsMiddleware,
    [
        check('firstName', "Uncorrect name").isString().optional(),
        check('lastName', "Uncorrect lastname").isString().optional(),
        check('email', "Uncorrect email").isEmail().optional(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({
            min: 3,
            max: 12
        }).optional(),
        check('isBlocked', "Uncorrect data").isBoolean().optional(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: "Uncorrect request",
                    errors
                })
            }
            const {
                isAdmin
            } = req.user

            if (!isAdmin) {
                return res.status(401).json({
                    message: 'access denied'
                })
            }
            const user = await User.findById(req.params.id)
            for (const [key, value] of Object.entries(req.body)) {
                user[key] = value;
            }
            await user.save()
            return res.json({
                firstName: user.firstName,
                lastName: user.lastName,
                id: user.id,
                email: user.email,
                isBlocked: user.isBlocked,
                isAdmin: user.isAdmin
            })
        } catch (e) {
            console.log(e)
            res.send({
                message: "Server error"
            })
        }
    })

module.exports = router
