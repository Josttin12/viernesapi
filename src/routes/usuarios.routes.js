import { Router } from "express";
import { createUsuarios, delateUsuarios, getUsuarios, updateUsuarios, getUsuario } from "../controller/usuarios.controller.js";

const router=Router()

router.get('/usuarios',getUsuarios)
router.get('/usuarios/:id',getUsuario)
router.post('/usuarios',createUsuarios)
router.put('/usuarios/:id',updateUsuarios)
router.delete('/usuarios/:id',delateUsuarios)

export default router