const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Food blog',
    author: 'Maija',
    url: 'nettisivu',
    likes: 1000
  },
  {
    title: 'Travel blog',
    author: 'Samuli',
    url: 'miniclip',
    likes: 500
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, blogsInDb
}