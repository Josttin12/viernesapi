import { pool } from "../db.js";

export const prueba= async(req,res)=> {
    const[result]=await pool.query("SELECT 'prueba exitosa' as result")
    res.json(result[0])
}