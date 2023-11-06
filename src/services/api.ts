// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TItem, TUser } from '../../types';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: builder => ({
    getUsersItems: builder.query<TItem[], void>({
      query: () => 'products',
    }),
    editItem: builder.mutation<TItem, Partial<TItem>>({
      query: body => ({
        url: `products/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteItem: builder.mutation<TItem, Partial<TItem>>({
      query: body => ({
        url: `products/${body.id}`,
        method: 'DELETE',
        body,
      }),
    }),
    updateProfilePhoto: builder.mutation<TUser, Partial<TUser>>({
      query: body => ({
        url: `users/${body.id}`,
        method: 'PATCH',
        body,
      }),
    }),
    updateUser: builder.mutation<TUser, Partial<TUser>>({
      query: body => ({
        url: `users/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),

    sendOtp: builder.mutation<void, string>({
      query: phone => ({
        url: 'otp',
        method: 'POST',
        body: { phone },
      }),
    }),

    verifyOtp: builder.mutation<boolean, { phone: string; otp: number }>({
      query: ({ phone, otp }) => ({
        url: 'otp/verify',
        method: 'POST',
        body: { phone, otp },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersItemsQuery,
  useEditItemMutation,
  useDeleteItemMutation,
  useUpdateProfilePhotoMutation,
  useUpdateUserMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
} = api;
