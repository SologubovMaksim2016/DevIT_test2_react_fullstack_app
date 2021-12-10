
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
 *    @swagger 
 * /auth/registration:
 *   post:
 *     summary: User registration.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                  type: string
 *                  example: Max
 *               lastName:
 *                  type: string
 *                  example: Admin
 *               email:
 *                  type: string
 *                  example: axm@mail.com
 *               password:
 *                  type: string
 *                  example: 3240fsdmf34
 *     responses:
 *       200:
 *         description:  User
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
router.post('/registration', corsMiddleware,
    [
        check('firstName', "Uncorrect name").isString(),
        check('lastName', "Uncorrect lastname").isString(),
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 21').isLength({
            min: 3,
            max: 21
        })
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
                firstName,
                lastName,
                email,
                password
            } = req.body
            const candidate = await User.findOne({
                email
            })
            if (candidate) {
                return res.status(400).json({
                    message: `User with email ${email} already exist`
                })
            }
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({
                firstName,
                lastName,
                email,
                password: hashPassword
            })
            await user.save()
            res.json({
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
/**
 *    @swagger 
 * /auth/login:
 *   post:
 *     summary: User login in.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *                  example: axm@mail.com
 *               password:
 *                  type: string
 *                  example: 3240fsdmf34
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThlNGY2YWQ3ZjRhNTdjNDc4N2I0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODU5NjI2MywiZXhwIjoxNjM4NTk5ODYzfQ.OtlM5en3iR7E4ylo141zC9yPlrnrZkPWh2S2Ms0tUJk 
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       firstName:
 *                         type: string
 *                         example: Max
 *                       lastName:
 *                          type: string
 *                          example: Admin
 *                       id:
 *                          type: string
 *                          example: 61a8e4f6ad7f4a57c4787b4e
 *                       email:
 *                          type: string
 *                          example: email@email.com
 *                       isBlocked:
 *                          type: boolean
 *                          example: false
 *                       isAdmin:
 *                          type: boolean
 *                          example: true
 */
router.post('/login', corsMiddleware,
    async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body
            const user = await User.findOne({
                email
            })
            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                })
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({
                    message: "Invalid password"
                })
            }
            const token = jwt.sign({
                id: user.id,
                isAdmin: user.isAdmin,
            }, config.get("secretKey"), {
                expiresIn: "250h"
            })
            return res.json({
                token,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    id: user.id,
                    email: user.email,
                    isBlocked: user.isBlocked,
                    isAdmin: user.isAdmin
                }
            })
        } catch (e) {
            console.log(e)
            res.send({
                message: "Server error"
            })
        }
    })
router.get('/', authMiddleware,  corsMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({
                _id: req.user.id
            })
            const token = jwt.sign({
                id: user.id
            }, config.get("secretKey"), {
                expiresIn: "1h"
            })
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


