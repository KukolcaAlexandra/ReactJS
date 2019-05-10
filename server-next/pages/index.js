import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Main from './main';

function PostLink(props) {
  return (
    <li>
      <Link as={`/${props.page}/${props.id}`} href={`/${props.page}?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default class Index extends React.Component {

  render () {
    return (
      <div>
        <ul>
          <PostLink page="search" id="moviest-list" title="Movies List" />
          <PostLink page="film" id="1" title="Movie Description" />
        </ul>
        <h1>Main page</h1>
        <Main/>
      </div>
    )
  }
}
