import ActivityBar from "./ActivityBar/ActivityBar";
import Editor from "./Editor/Editor";
import Sidebar from "./Sidebar/Sidebar";
import Status from "./StatusBar/StatusBar";

const Portfolio = () => {
  return (
    <div
      className="
        grid
        grid-cols-[48px_260px_1fr]
        grid-rows-[1fr_22px]
        h-screen
      "
    >
      <ActivityBar />
      <Sidebar />
      <Editor />
      <Status />

    </div>
  )
};

export default Portfolio;