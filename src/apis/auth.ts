import {
	CheckEmailApiParams,
	CheckEmailApiResponse,
	LoginApiDatas,
	SignupApiDatas,
	AuthApiResonse,
} from '../types/auth';
import { http } from './apiClient';

/**
 * @param email 이메일
 */
export const checkEmail = async (email: string): Promise<CheckEmailApiResponse> =>
	await http.get<CheckEmailApiResponse, CheckEmailApiParams>(`/auth/check-email`, { email });

/**
 * @param email 이메일
 * @param password 비밀번호
 * @param nickname 닉네임
 */
export const signup = async ({ email, password, nickname }: SignupApiDatas): Promise<AuthApiResonse> =>
	await http.post<AuthApiResonse, SignupApiDatas>(`/auth/register`, { email, password, nickname });

/**
 * @param email 이메일
 * @param password 비밀번호
 */
export const login = async ({ email, password }: LoginApiDatas): Promise<AuthApiResonse> =>
	await http.post<AuthApiResonse, LoginApiDatas>(`/auth/login`, { email, password });

/**
 * 로그인 확인
 */
export const getAuthValidation = async (): Promise<AuthApiResonse> => await http.get<AuthApiResonse>('/auth/valid');
