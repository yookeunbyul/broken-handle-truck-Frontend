import { BaseApiResponse } from './response';

interface INotification {
	_id: string;
	recipients: string[];
	sender: ISender;
	type: 'open' | 'close';
	createdAt: string;
}

interface ISender {
	category: string;
	name: string;
}

// GET Notification
interface NotificationListApiResponse extends BaseApiResponse {
	notifications: INotification[];
}

// POST Notification
interface PostNotificationApiResponse extends BaseApiResponse {
	notification: INotification;
}

// POST NotificationAsRead
interface PostNotificationAsReadApiParams {
	notificationId: string;
}

export type {
	INotification,
	NotificationListApiResponse,
	PostNotificationApiResponse,
	PostNotificationAsReadApiParams,
};
