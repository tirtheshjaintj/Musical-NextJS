'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-1 dark:bg-grid-white/[0.2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '#'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center pb-10">
          <Link href={"#"}
          className="px-4 py-2 rounded transition duration-200"
          >
                 <Button
                                   borderRadius="1.75rem"
                                  className=" bg-white font-bold  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
            View All webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars