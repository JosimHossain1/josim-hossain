import Image from "next/image";
import { projectData } from "../Data/data";

const Project = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h3 className=" font-semibold text-4xl text-center">Latest Project</h3>
      <span className="block bg-primary h-1 w-36 mx-auto mb-10 mt-4"></span>

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {projectData.map((item, key) => (
          <div className=" border-2  overflow-hidde rounded" key={item.demoURL}>
            {/* Project Display Image */}
            <a href={item.demoURL}>
              <Image
                src={item.imageURL}
                alt={item.name}
                width={400}
                height={400}
              />
            </a>
            <div className="px-4 text-left space-y-1">
              {/* Project Name */}
              <a href="#" className="block mt-2">
                Name: {item.name}
              </a>
              <a href="" className=" block underline">
                Project Study Case
              </a>
            </div>
            {/* Demo */}
            <a href={item.demoURL} className="bg-[#672FED] mt-4 py-1 block">
              View Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
