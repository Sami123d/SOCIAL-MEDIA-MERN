import express from "express";
 const Router = express.Router();
 import Post from "../models/post.js"
// create a post
Router.post("/",async (req, res)=>{
    const newPost = new Post(req.body);
    try{
         const savedPost = await newPost.save();
         res.status(200).json(savedPost)
    }catch(Err){
       res.status(400).json(Err)
    }
})
// update a post

Router.put("/:id", async(req, res)=> {
    
    try{
        const post =await Post.findById(req.params.id);
       if(post.userId === req.body.userId){
         await post.updateOne({$set: req.body});
          res.status(200).json("the post updated successfully")
    }else{
        res.status(200).json("you can update only your posts")
    } 
    }catch(Err){
        res.status(200).json(Err)
    }
    
})
// delete a post
Router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
// like a post
Router.put("/:id/like", async (req, res)=> {
    try{
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)){
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked")
        }else{
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked")
        }
    }catch(err){
        res.status(500).json(err)
    }
})
// get a post
// get timeline posts
export default Router