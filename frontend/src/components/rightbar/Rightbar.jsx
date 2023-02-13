import React from 'react'
import "./rightbar.css"
import { Users } from '../../pages/dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
      <>
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
      </>
    );
   
  };

const ProfileRightbar = ()=>{
  return(
      <>
      <h4 className='rightbarTitle'>User information </h4>
      <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Nigambo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Polonnaruwa</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/girl1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dilmi Nishanka</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/men1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ishan sharma</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/men5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">madura kumara</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/men5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">madura kumara</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/men4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">udukubua hasthi</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/men2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">ushath kumar</span>
        </div>
      </div>
    </>
  )
}
  return (

    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/>: <HomeRightbar/>}
      </div>
    </div>
  )
}
