import { NotificationListApiResponse, PostNotificationApiResponse } from '../types/notification';
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
