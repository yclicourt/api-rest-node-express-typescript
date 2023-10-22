import { Request, Response } from "express";
import db from '../config/mongo'
import { handleHttp } from "../utils/error.handler";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

const postBlog = (req: Request, res: Response) => {
  try {

    const {body} = req
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog };
