import Image from "next/image";

const BlogCard = (props: any) => {
  const { date, image, title, des } = props;
  return (
    <div>
      <div className="overflow-hidden bg-white rounded border">
        <a href="/" aria-label="Article">
          <Image
            src={image}
            className="object-cover rounded"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
        <div className="p-5">
          <p className="mb-2 text-xs font-semibold text-gray-300 uppercase">
            {date}
          </p>
          <a
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-xl font-bold leading-5 text-white">{title}</p>
          </a>
          <p className="mb-4 text-gray-300 line-clamp-2">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
