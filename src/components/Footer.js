import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark p-4 text-center text-white mt-3">
      Copyright &copy; 2021 <br />
      <div className="d-flex justify-content-center">
        <a
          className="h4"
          // rel="noopener"
          rel="noreferrer"
          href="https://twitter.com/zekiul"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>
        <a
          className="ms-4 me-4 h4"
          href="https://facebook.com/eeki.py"
          target="_blank"
          // rel="noopener"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          className="h4"
          href="https://www.instagram.com/zzzakiul/"
          target="_blank"
          // rel="noopener"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
