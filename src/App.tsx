import Cover from "./components/cover/cover";
import "./App.css";
import FolderSection from "./components/Folders/FolderSection";

const App = () => {
	return (
		<div className="max-width ">
			<Cover />
			<FolderSection />
		</div>
	);
};

export default App;
