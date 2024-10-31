import { BaseApiResponse } from './response';

// GET	bookmark
interface IBookmarkListItem {
	name: string;
	category: string;
	isOpen: boolean;
	comments: number;
}

interface BookmarkListApiResponse extends BaseApiResponse {
	bookmarks: IBookmarkListItem[];
}

// POST	bookmark
interface IBookmark {
	_id: string;
	userId: string;
	storeId: string;
}

interface PostBookmarkApiParams {
	storeId: string;
}

interface PostBookmarkResponse extends BaseApiResponse {
	bookmark: IBookmark;
}

export type { IBookmarkListItem, BookmarkListApiResponse, IBookmark, PostBookmarkApiParams, PostBookmarkResponse };
