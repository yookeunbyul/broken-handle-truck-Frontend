import { BaseApiResponse } from './response';

interface INotification {
	_id: string;
	recipients: string[];
	sender: string;
	type: 'open' | 'close';
	conetent: string;
	createdAt: string;
}

// GET Notification
interface NotificationListApiResponse extends BaseApiResponse {
	notification: INotification[];
}

// POST Notification
interface PostNotificationApiResponse extends BaseApiResponse {
	notification: INotification;
}

export type { INotification, NotificationListApiResponse, PostNotificationApiResponse };
