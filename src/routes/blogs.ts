import { Router } from "express";
import { deleteBlog, getBlog, getBlogs, postBlog, updateBlog } from "../controllers/blogs";



const router = Router()
/***
 * http://localhost:3000/blog [GET]
 */
router.get('/',getBlogs)
router.get('/:id',getBlog)
router.post('/',postBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)


export {router}