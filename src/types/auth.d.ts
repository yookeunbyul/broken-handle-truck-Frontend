import { BaseApiResponse } from './response';

export interface IUser {
	_id: string;
	nickname: string;
	role: string;
	thumnail: string;
}

interface CheckEmailApiResponse extends BaseApiResponse {
	isAble: boolean;
}

interface CheckEmailApiParams {
	email: string;
}

interface AuthApiResonse extends BaseApiResponse {
	user: IUser;
}

interface SignupApiDatas {
	email: string;
	password: string;
	nickname: string;
}

interface LoginApiDatas {
	email: string;
	password: string;
}

interface EditNicknameApiDatas {
	nickname: string;
}

export type {
	CheckEmailApiResponse,
	CheckEmailApiParams,
	AuthApiResonse,
	SignupApiDatas,
	LoginApiDatas,
	EditNicknameApiDatas,
};
