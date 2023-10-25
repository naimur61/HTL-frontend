export interface Folder {
	id: string;
	label: string;
	children?: Folder[];
}

export interface FolderNodeProps {
	folder: Folder;
}

export type Inputs = {
	example: string;
	exampleRequired: string;
};
