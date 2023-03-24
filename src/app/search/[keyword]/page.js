import React from "react";
import Movies from "@/componenets/Movies";

const page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=573f320b077c2c9d1d4178e4f8c4242a&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  return (
    <div>
      {
      !data?.results ?
        <div>Aranan Şey Bulunamadı</div> : 
        <div className="flex items-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      }
    </div>
  );
};

export default page;
