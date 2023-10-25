import "./Folder.css";
import { Folder } from "../../type/folderType";
import { FolderNode } from "./folderTree/folderNode";
import { useQuery } from "react-query";

const FolderSection = () => {
	// Fetch Data
	const {
		isLoading,
		refetch,
		data: folderData = [],
	} = useQuery<Folder[]>("repoData", async () => {
		const res = await fetch("http://localhost:5000/folders");
		const jsonData = await res.json();
		return jsonData as Folder[];
	});

	refetch();

	if (isLoading) return <h2 className="loader">Loading...</h2>;

	return (
		<>
			<div>
				{folderData.map((folder) => (
					<FolderNode key={folder.id} folder={folder} />
				))}
			</div>
		</>
	);
};

export default FolderSection;
