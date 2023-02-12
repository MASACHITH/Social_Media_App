import React from 'react'
import "./profile.css"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function () {
  return (
    <>
    <Topbar />
    <div className="profile" >
         <Sidebar/>
         <div className="profileRight">
            <div className="profileRightTop">
               <div className="profileCover">
                    <img src="assets/post/art.jpg" alt="" className="profileCoverImg" />
                    <img src="assets/person/men3.jpg" alt="" className="profileUserImg" />
               </div>
               <div className="profileInfo">
                    <h4 className="profileInfoName">Sachith Ishara</h4>
                    <span className="profileInfoDesc">Hellow my friend!</span>
               </div>
            <div/>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar />
            </div>
         </div>
        </div>
    </div>
    </>
  )
}
