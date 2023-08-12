import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/17613477/pexels-photo-17613477/free-photo-of-elderly-man-with-mustache.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="oldman"
          
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          nesciunt tempora nemo culpa quia aliquam adipisci vel, impedit atque
          minus ullam dolore et, fugiat provident, aliquid excepturi nostrum
          nisi saepe.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sideabarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcons fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcons fa-brands fa-square-twitter"></i>
          <i className=" sidebarIcons fa-brands fa-square-pinterest"></i>
          <i className=" sidebarIcons fa-brands fa-square-instagram"></i>
          <i className=" sidebarIcons fa-brands fa-square-whatsapp"></i>
        </div>
      </div>
    </div>
  );
}
