import axios from "axios";
import type { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Home: NextPage = ({ repositories, date }: any) => {
  return (
    <div>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo: any, index: any) => (
          <li key={index}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = (await axios.get("https://api.github.com/users/RHamudi/repos"))
    .data;

  const data = res.map((repo: any) => repo);

  return {
    props: {
      repositories: data,
      date: new Date().toISOString(),
    },
    revalidate: 10,
  };
}

export default Home;
