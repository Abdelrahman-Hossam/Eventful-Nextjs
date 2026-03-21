import React from "react";
import Link from "next/link";

const dashboard = () => {
  return (
    <>
      <h1>Dashboard Users</h1>
      <ul>
        <li>
          <Link href="/dashboard/users/user1">user#1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user2">user#2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user3">user#3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user4">user#4</Link>
        </li>
      </ul>
    </>
  );
};

export default dashboard;
