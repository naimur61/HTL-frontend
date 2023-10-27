import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Folder, Inputs } from "../../../type/folderType";
import "./modal.css";

const CreateFolder = ({ folder }: { folder: Folder }) => {
	const [modalStatus, setModalStatus] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(folder.id);
		fetch(`https://backend-delta-ruby.vercel.app/folders/${folder.id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			<button className="prosed" onClick={() => setModalStatus(true)}>
				create
			</button>

			{modalStatus && (
				<div className="modal">
					<div className="modal-body">
						<h3>Add folder in "{folder.label}" </h3>
						<div>
							<form onSubmit={handleSubmit(onSubmit)} className="content">
								<input {...register("label", { required: true })} />

								{errors.label && <span className="required">This field is required</span>}

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
				</div>
			)}
		</div>
	);
};

export default CreateFolder;
