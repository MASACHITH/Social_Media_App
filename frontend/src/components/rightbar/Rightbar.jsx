import React from 'react'
import "./rightbar.css"
import { Users } from '../../pages/dummyData'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b >Ishara Madusanka</b> and <b >3 others friends</b> have a birthday today
          </span>
        </div>

        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
            
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
            
        </ul>
      </div>
    </div>
  )
}
