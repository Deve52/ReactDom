import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App";

let root = createRoot(document.querySelector("#root"))
root.render(
<App/>
)