import { FcOpenedFolder } from "react-icons/fc";
import { FolderNodeProps } from "../../../type/folderType";
import { useState } from "react";
import "./tree.css";
import CreateFolder from "./createFolder";
import DeleteFolder from "./deleteFolder";

export function FolderNode({ folder }: FolderNodeProps) {
	const [expanded, setExpanded] = useState(false);

	const handleToggle = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="folder-node">
			<div className="display-flex">
				<div className="folder-label" onClick={handleToggle}>
					{folder.children && (
						// collapse icon
						<div className={`collapse-icon ${expanded ? "expanded" : "collapsed"}`}>
							{expanded ? "▾" : "‣"}
						</div>
					)}
					{/* File Icon  */}
					<FcOpenedFolder />
					{/* File Name  */}
					<div>{folder.label}</div>
				</div>
				{/* CRUD Section  */}
				<div className="buttons">
					{/* Delete  */}
					{folder.label !== "Root" && <DeleteFolder folder={folder} />}
					{/* Create  */}
					<CreateFolder folder={folder} />
				</div>
			</div>
			{expanded && folder.children && (
				<div className="folder-children">
					{folder.children.map((child) => (
						<FolderNode key={child.id} folder={child} />
					))}
				</div>
			)}
		</div>
	);
}
