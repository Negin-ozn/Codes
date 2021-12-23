import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from "./store/action/action";
import ListItems from "./components/ListItems";

const MainScreen = () => {

  //--------- Get Data ---------//

  const dispatch = useDispatch();
  const { list } = useSelector(state => state.listReducer);

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  //-------- Pass Data To ListItems Componemt --------//

  return (
    <ListItems
      items={list}
    />
  );
};

export default MainScreen;
