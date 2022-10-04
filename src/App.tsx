import "./App.css";
import { Content, MobileMenu, SideBar } from "./components";

function App() {
  return (
    <div className="w-full h-full flex flex-col bg-gray-200 dark:bg-gray-900 text-black dark:text-slate-100">
      <SideBar />
      <MobileMenu />
      <Content />
    </div>
  );
}

export default App;
