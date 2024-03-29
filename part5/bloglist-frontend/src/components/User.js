import { useParams } from 'react-router-dom'

const User = ({ users }) => {
  const id = useParams().id
  console.log('userId: ', id)
  const user = users.find((u) => u.id === id)
  console.log('user: ', user)
  if (!user) {
    return null
  }
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>added blogs</h4>
      <ul>
        {user.blogs.map((blog) => {
          return <li key={blog.id}>{blog.title}</li>
        })}
      </ul>
    </div>
  )
}

export default User
