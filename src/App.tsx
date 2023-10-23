import FolderSection from "./components/Folders/displayFolder";
import Cover from "./components/cover/cover";
import "./App.css";

const App = () => {
	return (
		<div className="max-width ">
			<Cover />
			<FolderSection />
		</div>
	);
};

export default App;
