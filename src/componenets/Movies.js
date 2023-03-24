"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Movies({ dt }) {
  const router = useRouter();
  return (
    <Link href={`/movie/${dt?.id}`}>
      <div className="min-w-[400px] imgContainer cursor-pointer">
        <Image
          style={{ objectFit: "cover" }}
          alt=""
          width={400}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            dt?.backdrop_path || dt?.poster_path
          }`}
        />
        <div className="body justify-end opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-2xl font-bold">{dt?.title}</div>
          <div>
            {dt?.release_date} - {dt?.vote_average}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Movies;
