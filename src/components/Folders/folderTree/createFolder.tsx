import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../../type/folderType";
import "./modal.css";

const CreateFolder = ({ id }: { id: string }) => {
	const [modalStatus, setModalStatus] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	// const handleSubmit = () => {
	// 	console.log(name);

	// 	// const data: string = { name: name };
	// 	// fetch(`http://localhost:5000/folders/${id}`, {
	// 	// 	method: "POST",
	// 	// 	headers: { "Content-Type": "application/json" },
	// 	// 	body: JSON.stringify(data),
	// 	// })
	// 	// .then(res=>res.json())
	// 	// .then(data => console.log(data))
	// };
	return (
		<div>
			<button onClick={() => setModalStatus(true)}>create {id}</button>

			{modalStatus && (
				<div className="modal">
					<div className="modal-body">
						<form onSubmit={handleSubmit(onSubmit)} className="content">
							<input {...register("exampleRequired", { required: true })} />

							{errors.exampleRequired && <span className="required">This field is required</span>}

							<div className="buttons">
								<button className="cancel" onClick={() => setModalStatus(false)}>
									Cancel
								</button>
								<button className="prosed" type="submit">
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateFolder;
