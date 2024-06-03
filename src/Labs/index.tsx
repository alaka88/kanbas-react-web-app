import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";
import store from "./store";

export default function Labs(){
    return (
        <Provider store={store}>
        <div className="container-fluid">
            <h1>Zhimin Wang</h1>
            <h1>Labs</h1>
            <TOC />
            <Routes>
               <Route path="/" element={<Navigate to="Labs" />} />
               <Route path="/Lab1" element={<Lab1 />} />
               <Route path="/Lab2" element={<Lab2 />} />
               <Route path="Lab3/*" element={<Lab3 />} />
               <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
        <a href="https://github.com/alaka88/kanbas-react-web-app">
          GitHub
        </a>
        </div>
        </Provider>
    );
}