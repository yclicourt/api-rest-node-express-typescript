import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({
        data:"Esto solo lo ve las personas con session/JWT",
        user:req.user
    })
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export { getItems };
