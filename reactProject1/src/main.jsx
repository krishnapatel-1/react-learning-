import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Parent from "./component/state-lifting/parent.jsx";

import App0 from "./component/prop-pasing/app0.jsx";
import App1 from "./component/state-lifting/app1.jsx";
import App2 from "./component/conditional-render/app2.jsx";
import App3 from "./component/event/app3.jsx";
import App4 from "./component/useEffect/app4.jsx";
import App5 from "./component/usecontext/app5.jsx";
import App5_1 from "./component/usecontext/app5-1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App5_1 />
  </StrictMode>
);
