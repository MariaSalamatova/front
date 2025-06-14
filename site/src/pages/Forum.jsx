import React from "react";

const Forum = () => {
  return <div>
  <section className="post-writing"> 
  <label for="postInput">Enter your post or select media:</label> 
  <br>
  <textarea id="postInput" rows="4" cols="50" placeholder="Write something..."></textarea><br>
  <input type="file" id="mediaInput" accept="image/*,video/*,audio/*"><br>
  <div id="preview"></div>
  <button id="sendButton">Send</button>
   </br>
   </section>

 <div id="posts"></div>
  </div>;
};

export default Forum;