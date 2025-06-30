'use client'; // 👈 Add this at the very top
import { userType } from "@/types/userType";
import { useQuery } from "@tanstack/react-query";
import React from "react";

async function getUsers(): Promise<userType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/users`);
  const data = await res.json();
  const users: userType[] = data.users;
  return users;
}

export default function GetAllusers() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>error...</div>;
  console.log("get data :>> ", data);
  return <div>user</div>;
}
