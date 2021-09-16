import React from 'react';

import { Card, Button, Image, Header, } from 'semantic-ui-react'
import Raiting from '../../components/Raiting/Raiting'


const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <div className="flex-row my-4" style={{ paddingTop: '3rem' }}> <h3 id='fonts'>No Comments Yet . . .</h3> </div>;
  }

  return (
    <>
      <div className="flex-row my-4" id="fonts">
        {comments &&
          comments.map((comment) => (
            <Card key={comment._id} style={{ width: '50rem'}}>
            <div class="content" >
              <Header id="fonts">
              {comment.commentAuthor} {' '}
                <span style={{ fontSize: '0.825rem', marginBottom: '.1rem' }} >
                  commented on {comment.createdAt}
                </span>
                <span style={{ display: 'flex', justifyContent: 'flex-end' }}><Raiting /></span>

              </Header>

              <p className="card-body" id="secFont">{comment.commentText}</p>
            </div>
          </Card>
          ))}
      </div>
    </>
  );
};

export default CommentList;
