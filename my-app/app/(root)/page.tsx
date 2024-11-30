import Image from "next/image";
import SearchForm from "@/components/SearchForm";

import StartupCard from "@/components/StartupCard";
import { client } from '@/sanity/lib/client'
import { STARTUPS_QUERY } from "@/lib/queries";
import { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParms: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY)





  return (
    <>
      <section className="pink_container">

        <h1 className="heading">Pitch Your Startup <br /> Connect With Enterpreneurs</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pithes, and Get Noticed in Virtual Competitions </p>

        <SearchForm query={query}></SearchForm>

      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}" ` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupTypeCard, index: number) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results"> No startups found</p>
            )
          }
        </ul>
      </section >




    </>
  );
}
