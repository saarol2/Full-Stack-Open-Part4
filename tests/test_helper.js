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

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, blogsInDb, usersInDb
}