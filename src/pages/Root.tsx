import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen py-8">
        <Content />
      </div>
    </div>
  );
};

export default Root;
