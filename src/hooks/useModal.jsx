import { useState } from 'react'

export const useModal = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [content, setContent] = useState([])
	return {
		open,
		handleOpen,
		handleClose,
		content,
		setContent
	}
}