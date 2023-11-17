import Profile from "./Profile";

const ProfileCover = () => {
  return (
    <div className="mt-8">
      <h2 className="w-full text-3xl md:text-5xl font-extrabold text-center mb-12 dark:text-gray-300">
        Development Team
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 flex-col px-7 mb-6">
        <Profile
          name="Nurdaulet"
          linkedin="https://www.linkedin.com/in/nurdamiron"
          github="https://github.com/nurdamiron"
          img="./images/nurda.png"
        ></Profile>
        <Profile
          name="Zharbol"
          linkedin="https://www.linkedin.com/in/nurdamiron/"
          github="https://github.com/nurdamiron "
          img="./images/nurda-1.png"
        ></Profile>
      </div>
    </div>
  );
};

export default ProfileCover;
