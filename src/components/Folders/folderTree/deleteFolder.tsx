import { Folder } from "../../../type/folderType";

const DeleteFolder = ({ folder }: { folder: Folder }) => {
	return (
		<div>
			<button onClick={() => console.log(folder)}>delete</button>
		</div>
	);
};

export default DeleteFolder;
