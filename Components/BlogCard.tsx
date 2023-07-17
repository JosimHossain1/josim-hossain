import Image from "next/image";

const BlogCard = (props: any) => {
  const { date, image, title, des, like, comment, likeAmount, commentAmount } =
    props;
  return (
    <div>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
        <a href="/" aria-label="Article">
          <Image
            src={image}
            className="object-cover w-full h-64 rounded"
            alt=""
          />
        </a>
        <div className="py-5">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            {date}
          </p>
          <a
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-xl font-bold leading-5 text-green-500">
              {title}
            </p>
          </a>
          <p className="mb-4 text-gray-700">{des}</p>
          <div className="flex space-x-4">
            <a
              href="/"
              aria-label="Likes"
              className="flex items-center text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
            >
              <div className="mr-2">{like}</div>
              <p className="font-semibold">{likeAmount}</p>
            </a>
            <a
              href="/"
              aria-label="Comments"
              className="flex items-center text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
            >
              <div className="mr-2">{comment}</div>
              <p className="font-semibold">{commentAmount}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
