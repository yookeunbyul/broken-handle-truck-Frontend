import { create, StateCreator } from 'zustand';
import { INotification } from '../types/notification';

interface Notification {
	type: 'NEW_NOTIFICATION';
	data: INotification;
}

interface NotificationStore {
	notifications: Notification[];
	initializeSocket: (userId: string) => void;
	closeSocket: () => void;
	addNotification: (notification: Notification) => void;
}

const notificationStore: StateCreator<NotificationStore> = (set) => {
	let socket: WebSocket | null = null;

	return {
		notifications: [],
		addNotification: (notification) => {
			set((state) => ({
				notifications: [...state.notifications, notification],
			}));
		},
		initializeSocket: (userId) => {
			if (socket) {
				socket.close();
			}

			socket = new WebSocket(`${import.meta.env.VITE_API_URL}:8080?userId=${userId}`);

			socket.onopen = () => {
				console.log(`WebSocket 연결이 ${userId}로 열렸습니다.`);
			};

			socket.onmessage = (event) => {
				const newNotification = JSON.parse(event.data) as Notification;
				set((state) => ({
					notifications: [...state.notifications, newNotification],
				}));
			};

			socket.onclose = () => {
				console.log('WebSocket 연결이 닫혔습니다.');
				socket = null;
			};
		},
		closeSocket: () => {
			if (socket) {
				socket.close();
				socket = null;
			}
		},
	};
};

const useNotificationStore = create<NotificationStore>(notificationStore);

export default useNotificationStore;
