import { AiOutlineYoutube } from "react-icons/ai";
const Youtube = () => {
  return (
    <div className="px-4 text-indigo-200 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h3 className=" font-semibold text-4xl text-center">YOUTUBE</h3>

      <p className="my-2">
        This is my youtube channel where i share my knowldge with people
      </p>

      <span className="block bg-primary h-1 w-36 mx-auto mb-10"></span>

      <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div>
          <iframe
            className="w-full h-[350px] border"
            src="https://www.youtube.com/embed/kVFCFetaZjU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-full h-[350px] border"
            src="https://www.youtube.com/embed/3hueYJbdFw0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
