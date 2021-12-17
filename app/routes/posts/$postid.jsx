import { useParams } from "remix"

function Post() {
  const params = useParams()
  return (
    <div>
      <h1>Post {params.postid} </h1>
    </div>
  )
}

export default Post
