import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg" 
        alt="river" 
        className="headerImg" />
    </div>
  )
}


