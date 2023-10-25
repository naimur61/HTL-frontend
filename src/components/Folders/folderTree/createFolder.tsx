const CreateFolder = ({ id }: { id: string }) => {
	return (
		<div>
			<button onClick={() => console.log(id)}>create</button>
		</div>
	);
};

export default CreateFolder;
