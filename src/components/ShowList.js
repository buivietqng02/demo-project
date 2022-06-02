import React from "react";
import ShowItem from "./ShowItem";
import { useSelector } from "react-redux";
import { useAppContext } from "./AppContext";
const ShowList = ({ list }) => {
    const {searchString} =useAppContext()
  const showLikeList = useSelector((state) => state.favourite.showLike);
  const isShowLike = (item, showLikeList) => {
    for (let show of showLikeList) {
      if (item.url === show.url) {
        return true;
        break;
      }
    }
    return false;
  };
  return (
    <div className="items-wrapper">
      {list
      .filter((item)=> {
          const name= item.name.toLowerCase()
          const search=searchString.text.toLowerCase()
          return name.startsWith(search)
      })
      .map((item, index) => (
        <ShowItem key={index} item={item} liked= {isShowLike(item, showLikeList)} />
      ))}
    </div>
  );
};
export default ShowList;
