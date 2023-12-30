import "../style/Navbars.css";

function Navbars() {
  return (
    <div className="navbare-link">
      <img
        className="navbare-logo"
        src="https://i.pinimg.com/originals/5c/dc/d6/5cdcd6015c0e30ce63d208ffcd829fbf.png"
        alt="logo"
      />
      <div className="link">
        <a href="">HOME</a>
        <a href="">ABOUT AU</a>
        <a href="">BLOG</a>
        <a href="">WORK</a>
        <a href="">CONTAC US</a>
      </div>
    </div>
  );
}

export default Navbars;
