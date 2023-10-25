const DeleteFolder = ({ id }: { id: string }) => {
	return (
		<div>
			<button onClick={() => console.log(id)}>delete</button>
		</div>
	);
};

export default DeleteFolder;
