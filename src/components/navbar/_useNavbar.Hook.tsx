"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { RootState } from "@/redux/store";
import { setActiveSearch } from "@/redux/slice/navbarSlice";

const GetDataNavbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const patchRoute = (name: string) => {
    console.log(name)
    dispatch(setActiveSearch(name));
  };
  const activeSearch = useSelector(
    (state: RootState) => state.navbarReducer.activeSearch
  )
  
  const handleSearchSubmit = () => {
    console.log('Search value:', searchValue);
    patchRoute(searchValue)
  };
  useEffect(() => {
    console.log('Search value:', searchValue);
  }, []);
 
  return {
    activeSearch,
    patchRoute,
    searchValue,
    setSearchValue,
    handleSearchSubmit
  };
};
export default GetDataNavbar;
