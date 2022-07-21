import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  // Switch内でどのパスでどのコンポーネントを出すか決める
  // exact 完全一致にする場合に入れる
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* 標準でpropsを受け取る */}
      {/* より厳密にルートのネストを定義するために、urlを変数化 */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
