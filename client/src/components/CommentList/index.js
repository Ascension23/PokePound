import React from 'react';

import { Card, Button, Image, Header, } from 'semantic-ui-react'


const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <div className="flex-row my-4" style={{ paddingTop: '3rem' }}> <h3>No Comments Yet . . .</h3> </div>;
  }

  return (
    <>
      <div className="flex-row my-4" >
        {comments &&
          comments.map((comment) => (
            <Card key={comment._id} style={{ width: '50rem'}}>
            <div class="content" >
              <Header >
              {comment.commentAuthor} {' '}
                <span style={{ fontSize: '0.825rem' }}>
                  commented on {comment.createdAt}
                </span>
              </Header>

              <p className="card-body">{comment.commentText}</p>
            </div>
          </Card>
          ))}
      </div>
    </>
  );
};

export default CommentList;
