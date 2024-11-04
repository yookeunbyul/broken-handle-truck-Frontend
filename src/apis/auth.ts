import {
  CheckEmailApiParams,
  CheckEmailApiResponse,
  LoginApiDatas,
  SignupApiDatas,
  AuthApiResonse,
  EditNicknameApiDatas,
} from "../types/auth";
import { http } from "./apiClient";
import { BaseApiResponse } from "../types/response";

/**
 * @param email 이메일
 */
export const checkEmail = async (
  email: string,
): Promise<CheckEmailApiResponse> =>
  await http.get<CheckEmailApiResponse, CheckEmailApiParams>(
    `/auth/check-email`,
    { email },
  );

/**
 * @param email 이메일
 * @param password 비밀번호
 * @param nickname 닉네임
 */
export const signup = async ({
  email,
  password,
  nickname,
}: SignupApiDatas): Promise<AuthApiResonse> =>
  await http.post<AuthApiResonse, SignupApiDatas>(`/auth/register`, {
    email,
    password,
    nickname,
  });

/**
 * @param email 이메일
 * @param password 비밀번호
 */
export const login = async ({
  email,
  password,
}: LoginApiDatas): Promise<AuthApiResonse> =>
  await http.post<AuthApiResonse, LoginApiDatas>(`/auth/login`, {
    email,
    password,
  });

/**
 * 사용자의 닉네임을 변경하는 함수
 * @param nickname 닉네임
 */
export const editNickname = async ({
  nickname,
}: EditNicknameApiDatas): Promise<AuthApiResonse> =>
  await http.post<AuthApiResonse, EditNicknameApiDatas>("/auth/editNickname", {
    nickname,
  });

/**
 * 로그인 확인
 */
export const getAuthValidation = async (): Promise<AuthApiResonse> =>
  await http.get<AuthApiResonse>("/auth/valid");

/**
 * 로그아웃
 */
export const logout = async (): Promise<BaseApiResponse> =>
  await http.post<BaseApiResponse>("/auth/logout");

/**
 * 탈퇴하기
 */
export const withdraw = async (): Promise<BaseApiResponse> =>
  await http.delete<BaseApiResponse>("/auth/delete");
