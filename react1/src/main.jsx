import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import Com from "./Com"

let root= createRoot(document.querySelector("#root"))
root.render(
 <Com/>
)
