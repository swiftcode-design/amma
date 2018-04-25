import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts,testString }) => {
  console.log('test', posts);
  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:{testString}
      <ul>

        {posts.map(post => (
          <li key={post.data.slug}>
            <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
})
