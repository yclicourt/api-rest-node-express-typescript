import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/session";

const router = Router();
/***
 * Esta ruta solo puede acceder las personas que tienen sesiona activa
 * que tenga un JWT valido
 */

router.get("/",checkJWT,getItems)
export { router };
