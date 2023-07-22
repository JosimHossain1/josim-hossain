"use client";
import BlogCard from "./BlogCard";
import post from "../Data/blog";
import Bar from "./shared/Bar";

export const Blog = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
      <h3 className="font-semibold text-4xl text-center">OUR BLOG</h3>
      <Bar />

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {post.map((data) => (
          <BlogCard
            key={data.title}
            date={data.date}
            title={data.title}
            image={data.image}
            des={data.short_description}
          />
        ))}
      </div>
    </div>
  );
};
