import { NotificationStyle } from "./NotificationStyled"

export const Notification = ({ message }) => {
	return (
		<NotificationStyle><p>{message}</p></NotificationStyle>
	)
}