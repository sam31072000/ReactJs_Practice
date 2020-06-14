import React from "react"; 

function Card(props){
    return (
      <>
      <div className="cards">
      <div className="card">
      <img src={props.imgsrc} alt="myPic" className="card_img"></img>  
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.watch_link} target="_blank">
          <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
   </> );
  };

  const Sdata=[{
    imgsrc:"https://source.unsplash.com/collection/190727/400x200",
    title:"A Netflix Original Series",
    sname:"Random1",
    watch_link:"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=25&t=953s"},
    {
    imgsrc:"https://source.unsplash.com/collection/190727/400x200",
    title:"A Netflix Original Series",
    sname:"Random1",
    watch_link:"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=25&t=953s"
},
 {
    imgsrc:"https://source.unsplash.com/collection/190727/400x200",
    title:"A Netflix Original Series",
    sname:"Random1",
    watch_link:"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=25&t=953s"
},
{imgsrc:"https://source.unsplash.com/collection/190727/400x200",
title:"A Netflix Original Series",
sname:"Random1",
watch_link:"https://www.youtube.com/watch?v=HRhJVGjIraE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=25&t=953s"},
];
  export default Card;
  export {Sdata};
