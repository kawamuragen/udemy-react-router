import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  // {pathname: "/page1/detailA", state: Array(10), search: "", hash: "", key: "aw6428"}
  const { state } = useLocation();

  const history = useHistory();

  const onClickBack = () => history.goBack();

  console.log(state);
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <p>console.log に配列が渡された</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
