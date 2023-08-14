import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="coffee beans"
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum
        <div className="singlePostEdit">
          <i class="singlePostIcon far fa-edit"></i>
          <i class="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          <b>Author : John Doe</b>
        </span>
        <span className="singlePostDate">
          <b>1 hr ago</b>
        </span>
        
      </div>
      <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          assumenda molestiae esse vel consequuntur adipisci nesciunt in rem eum
          corrupti, atque eos nam odit sint pariatur dolorem. Ea, deleniti quos!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          assumenda molestiae esse vel consequuntur adipisci nesciunt in rem eum
          corrupti, atque eos nam odit sint pariatur dolorem. Ea, deleniti quos!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          assumenda molestiae esse vel consequuntur adipisci nesciunt in rem eum
          corrupti, atque eos nam odit sint pariatur dolorem. Ea, deleniti quos!
        </p>
    </div>
  );
}
