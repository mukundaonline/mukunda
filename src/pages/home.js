import React from "react";
// import {styles} from "./home.module.css";

const bgPicture = new URL("../images/bg.jpg",import.meta.url);

function home() {
  return (
    <div /*className={styles.homepageBackground}*/>
        <p>
            <a
                href="https://www.freepik.com/free-photo/3d-man-stood-top-mountain-against-space-sky_2999966.htm#query=blue%20sky%20out%20of%20space&position=7&from_view=search&track=ais">
                Image by kjpargeter
            </a>
            on Freepik
        </p> 
    </div> 
  );
}

export default home;
