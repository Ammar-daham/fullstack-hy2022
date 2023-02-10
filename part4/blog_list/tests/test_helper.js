const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
      title: 'Learning React',
      author: 'Ammar Daham',
      url: 'http://ammardaham.com',
      likes: 2,
    },
    {
      title: 'Learning Redux',
      author: 'Ammar Daham',
      url: 'http://ammardaham.com',
      likes: 4,
    },
]


const nonExistingId = async () => {
    const blog = new Blog({
        title: 'Learn Java',
        author: 'Ammar Daham',
        url: 'http://ammardaha.com'
    })

    await blog.save()
    await blog.remove()
    return person._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map((blog) => blog.toJSON())
  }

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
    blogsInDb,
    nonExistingId,
    initialBlogs,
    usersInDb
}