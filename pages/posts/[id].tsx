import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  let post;
  if (id == "1") {
    post = { title: "First Post", content: "This is the first post." }
  } else if (id == "2") {
    post = { title: "Second Post", content: "This is the second post." }
  } else {
    post = { title: "Not Found", content: "No post content." }
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <a href="/">Go Back</a>
    </div>
  )
}