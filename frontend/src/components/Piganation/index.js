import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {AiFillLeftCircle} from 'react-icons/ai'
import {AiFillRightCircle} from 'react-icons/ai'


const Piganation = () => {
  const [page, setPage] = useState([]);
  const [count, setCount] = useState(0);
  const[ nm,setNum]=useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/page/${count}`)
      .then((result) => {
        console.log(result);
        setPage(result.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);
 

  return (
    <div className="div_page1">
      {page &&
        page.map((elem) => {
          return (
            <div className="div_page2">
              <img src={elem.image}></img>
              <p>{elem.name}</p>
              <p>{elem.price}</p>
            </div>
          );
        })}
        <div className="div_move">
      <button
        className="but_11"
        onClick={() => {
          setCount(count + 9);
        }}
      >
        <AiFillLeftCircle></AiFillLeftCircle>
      </button>
       {false && <button
        className="but_22"
        onClick={() => {
          setCount(count -9);
        }}
      >
        <AiFillRightCircle></AiFillRightCircle>
      </button> }
      </div>
    </div>
  );
};

export default Piganation;
