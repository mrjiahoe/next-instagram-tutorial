import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div>
			<h1>I am a modal</h1>

			{open && <p>THE MODAL IS OPEN</p>}
		</div>
	);
}

export default Modal;
