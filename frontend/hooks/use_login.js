"use client";

import { gql, useMutation } from '@apollo/client';

import React from 'react'

export default function useLogin(email, password) {  
  const LOGIN = gql`
  mutation Login($data: CreateSessionInput!) {
    sessionCreate(input: { data: $data }) {
      user {
        id
        fullName
        email
      }
      token
    }
  }`;
      
  const [mutateFunction, {data, loading, error}] = useMutation(LOGIN)

  function loginUser() {
    mutateFunction({
    variables: {
      data: {
        email, // "next@a.a",
        password, //"111111"
      }
    }})
  }

  React.useEffect(() => {
    if (data) {
      window.localStorage.setItem("jwtToken", data.sessionCreate.token)
      window.localStorage.setItem("userId", data.sessionCreate.user.id)
    }
  }, [data])

  return [loginUser, {data, loading, error}]
}
