import { IJoinReq, ProfileResponse } from '../types/auth';

import { publicInstance } from './instance/publicInstance';
import { clientAuthInstance } from './instance/clientAuthInstance';

export const createUserInfo = async (data: IJoinReq) => {
  const response = await publicInstance.post('/user/join/', data);
  return response.data;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const refreshAccessToken = async (
  refreshToken?: string,
): Promise<string> => {
  try {
    const response = await fetch(`${baseURL}/user/api/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      throw new Error('토큰 갱신 실패');
    }

    const responseData = await response.json();
    return responseData.access;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

export const getUserProfile = async () => {
  const response =
    await clientAuthInstance.get<ProfileResponse>('/user/profile/');
  return response.data;
};

export const postLogoutUser = async () => {
  const response = await clientAuthInstance.post('/user/logout/');
  return response.data;
};

export const removeWithdrawUser = async () => {
  const response = await clientAuthInstance.delete('/user/withdrawal/');
  return response.data;
};

export const editUserProfile = async (data: FormData) => {
  const response = await clientAuthInstance.put('/user/profile/edit/', data);
  return response.data;
};
