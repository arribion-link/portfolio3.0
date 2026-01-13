// import React from 'react'

import BlogCard from "./Blog-card"

const LatestBlogs = () => {
  return (
    <section className="my-20 px-4 min-h-screen">
      <h1 className="font-bold text-center text-slate-800 text-[clamp(1.5rem,4vw,2.5rem)]">
        LATEST BLOGS
      </h1>
      <p className="text-center text-slate-600 my-4">
        Discover the latest insights and updates from my blog.
      </p>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {/* Blog items will go here */}{" "}
        <BlogCard
          title="My First Blog Post"
          excerpt="This is the excerpt for my first blog post."
          date="2023-04-15"
        />
        <BlogCard
          title="My First Blog Post"
          excerpt="This is the excerpt for my first blog post."
          date="2023-04-15"
        />
        <BlogCard
          title="My First Blog Post"
          excerpt="This is the excerpt for my first blog post."
          date="2023-04-15"
        />
        <BlogCard
          title="My First Blog Post"
          excerpt="This is the excerpt for my first blog post."
          date="2023-04-15"
        />
        <BlogCard
          title="My First Blog Post"
          excerpt="This is the excerpt for my first blog post."
          date="2023-04-15"
        />
        <BlogCard
          title="My First Blog Post"
          excerpt="This is the excerpt for my first blog post."
          date="2023-04-15"
        />
      </div>
    </section>
  );
}

export default LatestBlogs
