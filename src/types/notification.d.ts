import { BaseApiResponse } from './response';

interface INotification {
	_id: string;
	recipients: string[];
	sender: ISender;
	type: 'open' | 'close';
	conetent: string;
	createdAt: string;
}

interface ISender {
	category: string;
	name: string;
}

// GET Notification
interface NotificationListApiResponse extends BaseApiResponse {
	notification: INotification[];
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
