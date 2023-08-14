import './post.css'

export default function Post() {
  return (
    <div className='post'>
       <img src="https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg" 
       alt="cofee" 
       className="postImg" />

       <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr />
            <span className="postDate">1 Hr ago</span>
       </div>
       <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero error vel explicabo culpa saepe itaque quis praesentium assumenda qui, hic facilis consectetur eum adipisci? Dignissimos aut libero adipisci eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero error vel explicabo culpa saepe itaque quis praesentium assumenda qui, hic facilis consectetur eum adipisci? Dignissimos aut libero adipisci eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero error vel explicabo culpa saepe itaque quis praesentium assumenda qui, hic facilis consectetur eum adipisci? Dignissimos aut libero adipisci eaque.</p>
    </div>
  )
}
