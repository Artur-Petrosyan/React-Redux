import { useEffect } from "react";
import { useSelector } from "react-redux";
import Counter from "./containers/Counter";
import Settings from "./pages/Settings";
import "./App.css"
import { getTheme } from "./redux/selectors/theme";

const App = () => {
  const theme = useSelector(getTheme)
  useEffect(() => {
    document.body.className = ''
    document.querySelector('body').classList.add(theme)
  }, [theme])
  return (
    <div>
      <Counter />
      <Settings />
    </div>
  )
}


export default App;