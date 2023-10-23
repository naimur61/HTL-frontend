import "./Folder.css";
import { Folder } from "../../type/folderType";
import { FolderNode } from "./folderTree/folderNode";

const FolderSection = () => {
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

// Fake JSON
const folderData: Folder[] = [
	{
		id: "006",
		label: "Root",
		children: [
			{
				id: "1",
				label: "Applications",
				children: [
					{ id: "2", label: "Calendar" },
					{ id: "3", label: "Chrome" },
					{ id: "4", label: "Webstorm" },
				],
			},
			{
				id: "5",
				label: "Documents",
				children: [
					{
						id: "6",
						label: "MUI",
						children: [
							{
								id: "7",
								label: "src",
								children: [
									{ id: "8", label: "index.js" },
									{ id: "9", label: "tree-view.js" },
								],
							},
						],
					},
				],
			},
		],
	},
];
