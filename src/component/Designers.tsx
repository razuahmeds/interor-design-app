import "../style/Designers.css";

function Designers() {
  return (
    <div className="designers-contenar">
      <img
        className="designers-img"
        src="https://img.freepik.com/free-photo/smiling-stylish-woman-designer-sitting-her-workdesk_171337-14522.jpg"
        alt=""
      />
      <div className="designers-text">
        <h5>WHO WE ARE</h5>
        <h1>Designers</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste harum,
          corporis alias eum in eos magnam quibusdam placeat omnis ea nihil
          iusto? Eveniet suscipit assumenda, sit architecto ab alias
          repellendus.
        </p>
        <div className="designers-text-p">
          <div>
            <hr className="designers-text-p-hr" />
            <h1>30%</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              voluptatem eaque consequatur consequuntur atque impedit, enim nam,
              pariatur nisi cupiditate quaerat.
            </p>
          </div>
          <div>
            <hr />
            <h1>25+</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio asperiores incidunt blanditiis, ut velit voluptatum quo
              dolor harum minus vero esse necessitatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designers;
