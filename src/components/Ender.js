import Doge from "../utils/doge.jpg";

const Ender = () => {
  return (
    <div>
      <img
        src={
          Doge ||
          "https://cdna.artstation.com/p/assets/images/images/037/395/606/4k/gabriel-lopes-silence-ok.jpg?1620257854"
        }
        alt="doge samurai"
        className="img-fluid rounded shadow"
      />
    </div>
  );
};

export default Ender;
