import express from "express";
import {registerController,loginController,testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { forgotPasswordController } from "../controllers/authController.js";

const router=express.Router();

router.post('/register', registerController)

router.post('/login', loginController)

router.post("/forgot-password", forgotPasswordController);

router.get('/test',requireSignIn,isAdmin, testController)  //have to provide jwt

//protected route, dashboard only acccess if uer
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router