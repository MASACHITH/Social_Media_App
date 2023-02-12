import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="assets/person/girl1.jpg" alt="" className="postProfileImg" />
                <span className="postUserName">sachith Ishara</span>
                <span className="postDate">5 min ago</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon/>
            </div>
        </div>
        
        <div className="postCenter">
            <span className="postText">Hey! Its my first post:</span>
            <img src="assets/post/art.jpg" alt="" className="postImg" />
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/fblike.png" alt="" className="likeIcon" />
                <img src="assets/fbheart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">32 people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
        
      </div>
    </div>
  )
}
