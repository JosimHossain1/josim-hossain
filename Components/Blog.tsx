import blog1 from "../Assets/blog/blog1.jpg";
import blog2 from "../Assets/blog/blog2.jpg";
import blog3 from "../Assets/blog/blog3.jpg";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import BlogCard from "./BlogCard";

export const Blog = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h3 className="text-[#209C5E] font-semibold text-2xl text-center">
        OUR BLOG
      </h3>
      <span className="block bg-[#209C5E] h-1 w-36 mx-auto mb-10 mt-4 "></span>

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <BlogCard
          date="20 June 2023"
          title="What are 5 harmful effects of plastic?"
          image={blog1}
          des="The adverse effects of plastic are particularly acute children in the womb and young ones, with increased risks of prematurity, stillbirth, birth ....."
          like={<AiOutlineLike />}
          comment={<AiOutlineComment />}
          likeAmount="43.6k"
          commentAmount="3.0k"
        />
        <BlogCard
          date="21 June 2023"
          title="How do we collect plastic waste?"
          image={blog2}
          des="The majority of our plastic efforts are door-to-door collection or
            other smart ways to aggregate waste in one point. We also finance
            projects with...."
          like={<AiOutlineLike />}
          comment={<AiOutlineComment />}
          likeAmount="90.7k"
          commentAmount="10.5k"
        />
        <BlogCard
          date="22 June 2023"
          title="Why important to recycle plastic?"
          image={blog3}
          des="Plastic is a popular and highly versatile material, and we use a lot of it. Re-using and recycling items as many times as possible....."
          like={<AiOutlineLike />}
          comment={<AiOutlineComment />}
          likeAmount="50.2k"
          commentAmount="5.0k"
        />
      </div>
    </div>
  );
};
