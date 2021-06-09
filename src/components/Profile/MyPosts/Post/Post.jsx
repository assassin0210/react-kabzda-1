import React from "react";
import s from "./Post.module.css";



const Post = (props) => {
  return (
     <div className = {s.post}>
       <div className={s.avatar}></div>
       <div className={s.item}>{ props.message }</div>
       <div className={s.like}>
        <img src="https://downloader.disk.yandex.ru/preview/76468923e9392455143ce637dd554dd5e213a37896f693df6c6f573507350507/60bcfe3e/orniP-zGsVifTbzpbi7WtnmfPr3mqyTPNhJCTiObHExntz1scpT3eKKweDzF_EMQmzAKk4ZELrREHw3BNzmfMA%3D%3D?uid=0&filename=heart.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2424x1263"  />
        <p>{props.likeCount}</p>
         </div>
     </div>



  );
};

export default Post;

