"use client";

import useUser from "@/lib/hooks/useUser";

export default function UserDebug() {
  const { user } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h2>{user?.username}</h2>
        <p>{JSON.stringify(user)}</p>
      </div>
    )
  );
}
