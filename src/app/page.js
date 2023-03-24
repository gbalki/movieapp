import Movies from "@/componenets/Movies";
import React from "react";

const page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=573f320b077c2c9d1d4178e4f8c4242a&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default page;
