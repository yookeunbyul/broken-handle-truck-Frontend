import { create, StateCreator } from 'zustand';
import { INotification } from '../types/notification';
import { getNotificationList, postNotificationAsRead, postNotificationAsReadAll } from '../apis/notification';

interface Notification {
	type: 'NEW_NOTIFICATION';
	data: INotification;
}

interface NotificationStore {
	notificationList: INotification[];
	isNewNotification: boolean;
	initializeSocket: (userId: string) => void;
	closeSocket: () => void;
	addNotification: (notification: Notification) => void;
	postAllAsRead: () => Promise<void>;
	postNotificationAsRead: (notification: string) => void;
}

const notificationStore: StateCreator<NotificationStore> = (set) => {
	let socket: WebSocket | null = null;
	let isConnected = false;

	const connectSocket = (userId: string) => {
		if (isConnected) {
			console.log('이미 WebSocket이 연결되어있습니다.');
			return;
		}

		const apiURL = import.meta.env.VITE_API_URL as string;
		const customURL = apiURL.substring(5);
		const wsURL = apiURL === 'product' ? `${apiURL}?userId=${userId}` : `ws${customURL}?userId=${userId}`;

		socket = new WebSocket(wsURL);
		isConnected = true;

		socket.onopen = () => {
			console.log('WebSocket이 연결되었습니다.');
		};

		socket.onmessage = (event) => {
			const newNotification = JSON.parse(event.data) as Notification;

			set((state) => ({
				notificationList: [...state.notificationList, newNotification.data],
				isNewNotification: true,
			}));
		};

		socket.onclose = () => {
			console.log('Websocket 연결이 닫혔습니다. 재연결을 시도합니다.');
			isConnected = false;
			socket = null;
			setTimeout(() => connectSocket(userId), 1000);
		};

		socket.onerror = (error) => {
			console.error('Websocket 오류 발생:', error);
			isConnected = false;
			socket?.close();
			socket = null;
			setTimeout(() => connectSocket(userId), 1000);
		};
	};

	return {
		notificationList: [],
		isNewNotification: false,

		addNotification: (notification) => {
			set((state) => ({
				notificationList: [...state.notificationList, notification.data],
				isNewNotification: true,
			}));
		},

		initializeSocket: async (userId) => {
			const data = await getNotificationList();
			const unreadNotifications = data.notifications || [];
			set({
				notificationList: unreadNotifications,
				isNewNotification: unreadNotifications.length > 0,
			});

			if (socket) {
				socket.close();
				socket = null;
			}

			connectSocket(userId);
		},

		closeSocket: () => {
			if (socket) {
				socket.close();
				socket = null;
				isConnected = false;
				console.log('WebSocket이 닫혔습니다.');
				// Toast 메시지 추가
			}
		},

		postAllAsRead: async () => {
			const res = await postNotificationAsReadAll();

			if (res.msg === 'ok') {
				set({
					notificationList: [],
					isNewNotification: false,
				});
				// 성공 Toast 메시지 추가
			} else {
				// 실패 Toast 메시지 추가
			}
		},

		postNotificationAsRead: async (notificationId) => {
			const res = await postNotificationAsRead({ notificationId });

			if (res.msg === 'ok') {
				set((state) => ({
					notificationList: state.notificationList.filter(
						(notification) => notification._id !== notificationId // 읽은 알림 제거
					),
					isNewNotification: state.notificationList.some((notification) => notification._id !== notificationId),
				}));
				// 성공 Toast 메시지 추가
			} else {
				// 실패 Toast 메시지 추가
			}
		},
	};
};

const useNotificationStore = create<NotificationStore>(notificationStore);

export default useNotificationStore;
