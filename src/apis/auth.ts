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

export const signup = async ({ email, password, nickname }: SignupApiDatas): Promise<AuthApiResonse> =>
    await http.post<AuthApiResonse, SignupApiDatas>(`/auth/register`, { email, password, nickname });

export const login = async ({ email, password }: LoginApiDatas): Promise<AuthApiResonse> =>
    await http.post<AuthApiResonse, LoginApiDatas>(`/auth/login`, { email, password });
