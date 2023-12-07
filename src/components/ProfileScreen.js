import React from "react";
import PostsSection from "./PostsSection";

import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { CiHeart } from "react-icons/ci";
import profileData from "./profileData.json";

function ProfileScreen() {
  const {
    name,
    backgroundPic,
    profilePic,
    followers,
    following,
    position,
    website,
    socialStats,
  } = profileData;
  return (
    <div>
      <header>
        <div className="ttt">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/ttt.svg"}
              width="50px"
              height="40px"
              alt="logo error"
            />
          </div>
          <div className="title">
            <h3>S T O R I E S</h3>{" "}
          </div>
        </div>

        <div className="courses">
          <h3>Courses</h3>
        </div>
      </header>
      <div className="bg">
        <img src={backgroundPic} alt="bg img error" />
      </div>
      <div className="about">
        <div className="top">
          <div className="img">
            <img src={profilePic} alt="img error" />
          </div>
          <div className="name">
            <div className="name-top">
              <h3>{name}</h3>
              <i>
                <IoDiamondOutline
                  style={{
                    backgroundColor: "navy",
                    color: "white",
                    padding: " 2px",
                    borderRadius: "50%",
                    marginLeft: "-50px",
                    marginTop: "40px",
                  }}
                />
              </i>
              <i>
                <FaCheck
                  style={{
                    backgroundColor: "lightgreen",
                    color: "white",
                    padding: "3px",
                    borderRadius: "50%",
                    marginLeft: "-90px",
                    marginTop: "40px",
                  }}
                />
              </i>
            </div>

            <div className="name-bottom">
              <div style={{ marginRight: "6%" }}>
                <h2>{followers}</h2>
                <h3>Followers</h3>
              </div>
              <div style={{ marginLeft: "6%" }}>
                <h2>{following}</h2>
                <h3>Following</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          {/* <h2>{position}</h2> */}
          <h2 style={{ marginTop: "20px" }}>{position}</h2>
          <a
            href="http://www.instagram.com1/anujgosalia"
            target="blank"
            style={{ color: "skyblue" }}
          >
            {website}
          </a>
          <div className="reach">
            <div className="star">
              <i>
                <CiStar
                  style={{
                    color: "white",
                    backgroundColor: "skyblue",
                    padding: "3px",
                    fontSize: "1rem",
                    borderRadius: "50%",
                  }}
                />
              </i>
              <p>{socialStats.star}</p>
            </div>
            <div className="star">
              <i>
                <AiOutlineLike
                  style={{
                    color: "white",
                    backgroundColor: "#f5aa42",
                    padding: "3px",
                    fontSize: "1rem",
                    borderRadius: "50%",
                  }}
                />
              </i>
              <p>{socialStats.like}</p>
            </div>
            <div className="star">
              <i>
                <ImEye
                  style={{
                    color: "white",
                    backgroundColor: "gray",
                    padding: "3px",
                    fontSize: "1rem",
                    borderRadius: "50%",
                  }}
                />
              </i>
              <p>{socialStats.seen}</p>
            </div>
            <div className="star">
              <i>
                <CiHeart
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "3px",
                    fontSize: "1rem",
                    borderRadius: "50%",
                  }}
                />
              </i>
              <p>{socialStats.heart}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="post-count">
        <div className="demo">
          <h3>134 Posts</h3>
        </div>
        <PostsSection />
      </div>
    </div>
  );
}

export default ProfileScreen;
