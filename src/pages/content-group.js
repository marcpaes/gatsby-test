    
import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { testGroup } }) => {
  debugger;
  return (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>{testGroup.contentAreas[0].title}</h1>
    <p>{testGroup.contentAreas[0].excerptMarkdown}</p>

    <ul style={{ padding: 0 }}>
      {testGroup.contentAreas[1].posts.map(item => (
        <li
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          <Link to={`/area-2/${item.postId}`}>
            <p>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)};