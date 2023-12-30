import "../style/Completed.css";

function Completed() {
  return (
    <div className="completed">
      <div className="completed-contenr">
        <div className="completed-contenr-text">
          <h5>OUR WORK</h5>
          <h1>Completed Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempora
            in! Voluptatem reiciendis animi, excepturi, sed doloribus vero autem
            eaque aut maiores magnam eum quas hic. Iusto, dolores? Tenetur,
            blanditiis.
          </p>
          <button className="completed-contenr-btn">ALL PROJECTS</button>
        </div>
        <img
          className="completed-contenr-img"
          src="https://i0.wp.com/theinterioreditor.com/wp-content/uploads/2016/11/Small-dining-room-idea.jpg?fit=600%2C743&resize=200%2C200"
          alt=""
        />
      </div>
    </div>
  );
}

export default Completed;
