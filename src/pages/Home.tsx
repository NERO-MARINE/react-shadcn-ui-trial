import Login from "@/components/auth-form/Login";

const Home = () => {
  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-2 bg-[#1a1a1a] text-white gap-y-8 lg:gap-0">
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-sky-500 text-5xl lg:text-[3rem] font-bold mb-2">
          DeepArtsLab
        </h1>
        <p className="lg:text-[1.5rem] text-center">
          DeepArtsLab helps you connect and share with the Deep things of Lab.
        </p>
      </div>
      <div className="flex items-center justify-center lg:p-4 p-2">
        <Login />
      </div>
    </div>
  );
};

export default Home;
