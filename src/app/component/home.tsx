import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreState from "../types/user";

function Home() {
  const a = useSelector((state: StoreState) => state.user.userId);

  return <div></div>;
}

export default Home;
