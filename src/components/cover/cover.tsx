import logo from "/src/assets/content.png";
import "./cover.css";

const Cover = () => {
	return (
		<div className="cover">
			{/* Logo Section  */}
			<div className="logo-section">
				<img src={logo} alt="logo" className="logo-style" />
				<p className=" logo-text">Folder Tree</p>
			</div>
		</div>
	);
};

export default Cover;
