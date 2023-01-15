import "./App.css";
import { AiFillDollarCircle, AiOutlineMobile,AiOutlineShareAlt } from "react-icons/ai";
import {
  BsBullseye,
} from "react-icons/bs";
import {MdOutlineHolidayVillage} from 'react-icons/md';
import {IoBulbOutline} from 'react-icons/io5';
import {GiChoice} from 'react-icons/gi';
import {RiExchangeDollarFill} from 'react-icons/ri';

const cards = [
  {
    icon: <MdOutlineHolidayVillage />,
    head: "BENIFITS OF ADVENTURE TIME HOLIDAYS",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <IoBulbOutline />,
    head: "The Concept",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <GiChoice />,
    head: "Choice",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <AiOutlineMobile />,
    head: "Use",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <AiOutlineShareAlt />,
    head: "Share",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <RiExchangeDollarFill />,
    head: "Exchange",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <AiFillDollarCircle />,
    head: "Rent",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <BsBullseye />,
    head: "Quality",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
  {
    icon: <AiFillDollarCircle />,
    head: "Flexibility",
    des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quos, cupiditate quis numquam consequatur maiores atque debitis non eum nihil explicabo! Ipsum optio cumque omnis enim non, adipisci tempore ea.",
  },
];

function App() {
  return (
    <div className="crypto__services">
      <h1 className="crypto__services-heading">
        <span>Why Us</span>
      </h1>
      <div className="crypto__services-box-container">
        {cards.map((card) => (
          <div className="crypto__services-box" key={card.head}>
            <div className="crypto__services-box-icon">{card.icon}</div>
            <h3>{card.head}</h3>
            <p>{card.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
