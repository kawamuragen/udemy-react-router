import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();

  // const location = useLocation();
  // console.log(location);
  // {pathname: "/page2/999", search: "?name=hogehoge", hash: "", state: undefined, key: "9h13ey"}
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
