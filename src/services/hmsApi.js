// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const hmsApi = createApi({
  reducerPath: "hmsApi", 
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/user/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "register/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: "profile/",
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "Authorization":`Bearer ${access_token}`,
          },
        };
      },
    }),
    getDoctorsDetail: builder.query({
      query: () => {
        return {
          url: "getdoctors/",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    bookAppoinment: builder.mutation({
      query: (appoinment) => {
        return {
          url: "bookappoinment/",
          method: "POST",
          body: appoinment,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    viewAppoinment: builder.query({
      query: () => {
        return {
          url: "viewappoinment/",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    bookDoctorAppoinment: builder.mutation({
      query: (appoinment) => {
        return {
          url: "bookdoctorappoinment/",
          method: "POST",
          body: appoinment,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    viewDoctorAppoinment: builder.query({
      query: () => {
        return {
          url: "viewdoctorappoinment/",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    insertContactUs: builder.mutation({
      query: (contact) => {
        return {
          url: "contactus/",
          method: "POST",
          body:contact,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation , useLoginUserMutation , useGetLoggedUserQuery ,useGetDoctorsDetailQuery,useBookAppoinmentMutation,useViewAppoinmentQuery,useBookDoctorAppoinmentMutation,useViewDoctorAppoinmentQuery,useInsertContactUsMutation } = hmsApi;
