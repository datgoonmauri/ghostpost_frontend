import React, { Component } from 'react';
import "./GhostPost.css"

  // const post = [
  //   {
  // "url": "http://127.0.0.1:8000/api/PostItem/1/?format=json",
  // "category_choice": "roast",
  // "text": "hey guys",
  // "upvotes": 1,
  // "downvotes": 1,
  // "submission_time": "2020-06-23T17:13:00.960728Z",
  // "magic_key": "wUvBeS",
  // "vote_score": 2
  // },
  // {
  // "url": "http://127.0.0.1:8000/api/PostItem/2/?format=json",
  // "category_choice": "boast",
  // "text": "hey guys",
  // "upvotes": 3,
  // "downvotes": 2,
  // "submission_time": "2020-06-25T21:58:18.193523Z",
  // "magic_key": "qcxPnL",
  // "vote_score": 5
  // },
  // {
  // "url": "http://127.0.0.1:8000/api/PostItem/3/?format=json",
  // "category_choice": "boast",
  // "text": "cows",
  // "upvotes": 1,
  // "downvotes": 1,
  // "submission_time": "2020-06-25T21:58:36.346303Z",
  // "magic_key": "qcxPnL",
  // "vote_score": 2
  // }
  // ]
class Post extends Component {
    state = {
        post: [
          "id"
      ]
    };
  
    async componentDidMount() {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/Post/');
        const post = await res.json();
        this.setState({
          post
        });
      } catch (e) {
        console.log(e);
      }
    }
    render() {
      return (
            <div>
          { this.state.post.map(item => (
              <div className="data">
                  <button className="btn btn-danger button-form js-tooltip" title="" data-toggle="post" data-target="#deleteModal" data-original-title="Make a DELETE request on the Post Item Instance resource">DELETE</button>
                  <p>I.D:{item.posts}</p>
              <p>Category:{ item.category_choice }</p>
              <p>Text: {item.text}</p>
             <button className="btn btn-danger button-form js-tooltip" ><p>Upvotes:{item.upvote}</p></button>
              <p>Downvotes:{ item.downvote }</p>
              <p>Score:{ item.vote}</p>
              <p>Submission Time:{ item.submission_time }</p>
              <p>MagicKey:{item.magic_key}</p>
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Post;
  