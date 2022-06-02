import React, { useEffect, useState } from "react";
import EpisodeItem from "./EpisodeItem";
import { useSelector } from "react-redux";
import { useAppContext } from "./AppContext";
const EpisodeList = ({ list, show }) => {
  const { searchString } = useAppContext();
  const episodeLikeList = useSelector((state) => state.favourite.episodeLike);
  const checkIsLiked = (item, listLike) => {
    for (let episode of listLike) {
      if (item.url === episode.url) {
        return true;
      }
    }
    return false;
  };
  return (
    <div className="items-wrapper">
      {list
        .filter((item) => {
          const name = item.name.toLowerCase();
          const search = searchString.text.toLowerCase();
          return name.startsWith(search);
        })
        .filter((item) => {
          return searchString.number
            ? item.season === parseInt(searchString.number)
            : true;
        })
        .filter((item)=> {
            return searchString.date
            ? item.airdate === searchString.date
            : true;
        })
        .map((item, index) => (
          <EpisodeItem
            key={index}
            item={item}
            show={show}
            liked={checkIsLiked(item, episodeLikeList)}
          />
        ))}
    </div>
  );
};
export default EpisodeList;
