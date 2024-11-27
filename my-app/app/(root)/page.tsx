import Image from "next/image";
import SearchForm from "@/components/SearchForm";

import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParms: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Adrian' },
    _id: 1,
    description: 'This is a description',
    image: 'https://storage.googleapis.com/pod_public/1300/216439.jpg',
    category: 'Robots',
    title: 'We Robots',
  },

  ];


  return (
    <>
      <section className="pink_container">

        <h1 className="heading">Pitch Your Startup <br /> Connect With Enterpreneurs</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pithes, and Get Noticed in Virtual Competitions </p>

        <SearchForm query={query}></SearchForm>

      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? 'Search results for ${query} ' : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map((post: StartupCardType, index: number) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results"> No startups found</p>
            )
          }
        </ul>
      </section>




    </>
  );
}
