import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // detailA遷移時に以下の配列を渡すページ遷移
  const arr = [...Array(10).keys()];
  // console.log(arr);

  const history = useHistory();

  // Javascript で画面遷移したい場合の書き方
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
