import React from "react"
import { Link } from "gatsby";
import Card from 'react-bootstrap/Card';

function PostLink({ post }: any) {

  return (
    <>
      <Card className='mt-3'>
        <Card.Body>
          <Card.Title><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.frontmatter.date}</Card.Subtitle>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}


export default PostLink