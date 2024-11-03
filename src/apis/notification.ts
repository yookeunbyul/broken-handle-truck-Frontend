import {
	NotificationListApiResponse,
	PostNotificationApiResponse,
	PostNotificationAsReadApiParams,
} from '../types/notification';
import { BaseApiResponse } from '../types/response';
import { http } from './apiClient';

/**
 * 알림 리스트 조회
 */
export const getNotificationList = async (): Promise<NotificationListApiResponse> =>
	await http.get<NotificationListApiResponse>('/notification');

/**
 * 알림 등록
 */
export const postNotification = async (): Promise<PostNotificationApiResponse> =>
	await http.post<PostNotificationApiResponse>('/notification');

/**
 * 알림 읽음 등록
 * @param notificationId notificationId
 */
export const postNotificationAsRead = async ({
	notificationId,
}: PostNotificationAsReadApiParams): Promise<BaseApiResponse> =>
	await http.post<BaseApiResponse, PostNotificationAsReadApiParams>('/notification/read', {
		notificationId,
	});

/**
 * 모든 알림 읽음 등록
 */
export const postNotificationAsReadAll = async (): Promise<BaseApiResponse> =>
	await http.post<BaseApiResponse>('/readAll');
