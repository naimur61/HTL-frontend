export interface Folder {
	id: string;
	label: string;
	children?: Folder[];
	_id?: string;
}

export interface FolderNodeProps {
	folder: Folder;
}

export type Inputs = {
	label: string;
};
