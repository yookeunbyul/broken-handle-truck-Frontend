import { BookmarkListApiResponse, PostBookmarkApiParams, PostBookmarkResponse } from '../types/bookmark';
import { http } from './apiClient';

/**
 * 북마크 리스트 조회
 */
export const getBookmark = async (): Promise<BookmarkListApiResponse> =>
	await http.get<BookmarkListApiResponse>('/bookmark');

/**
 * 북마크 등록/취소
 * @param storeId 스토어 ID
 */
export const postBookmark = async ({ storeId }: PostBookmarkApiParams) =>
	await http.post<PostBookmarkResponse, PostBookmarkApiParams>('/bookmark', { storeId });
