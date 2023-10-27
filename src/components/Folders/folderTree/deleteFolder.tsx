import { useState } from "react";
import { Folder } from "../../../type/folderType";
import "./modal.css";

const DeleteFolder = ({ folder }: { folder: Folder }) => {
	const [modalStatus, setModalStatus] = useState(false);

	const SubmitHandler = (id: string) => {
		fetch(`https://backend-delta-ruby.vercel.app/delete/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			<button className="cancel" onClick={() => setModalStatus(true)}>
				Delete
			</button>

			{modalStatus && (
				<div className="modal">
					<div className="modal-body">
						<h3>Are you want to Delete "{folder.label}" </h3>
						<div className="content">
							<div className="buttons">
								<button className="cancel" onClick={() => setModalStatus(false)}>
									Cancel
								</button>
								<button className="prosed" onClick={() => SubmitHandler(folder.id)}>
									Delete
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteFolder;
