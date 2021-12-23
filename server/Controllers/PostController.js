/* const Post = require("../models/Post")


const getPosts=async(request,response)=>{
    try {
const posts=await Post.find().populate('user')
        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json({error:'failed'})
    }
    
}


const addPost=async(req,res)=>{
    const {text}=req.body
    console.log(req.user)
    console.log(request.file)
    try {
        const post =new Post({
            text,user:req.user._id
        })
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(500).json({error:'failed'})
    }
}
module.exports={getPosts,addPost} */

const Movie = require("../models/Post");
//post
const PostMovie=async(request,response)=>{
    const movie=request.body;
    try {
        const newMovie=new Movie({
            title:request.body.title,
            rate:request.body.rate
        })
        await newMovie.save();
        response.status(200).json({message:'movie add successfully',movie:newMovie})
    } catch (error) {
        console.log(error)
    }
}
const searchMovie=async(request,response)=>{
    //elementMovie.title.toLowerCase().includes(caracter.toLowerCase()))
    const search=request.body;
    try {
        const movies =await Movie.find();
        const filteredMovies=await movies.filter((elt)=>elt.title.toLowerCase().includes(request.body.search))
        response.status(200).json({movies:filteredMovies})
    } catch (error) {
        console.log(error)
    }
}
module.exports={PostMovie,searchMovie}