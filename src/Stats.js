import mobile from "./images/image-header-mobile.jpg";
import desktop from "./images/image-header-desktop.jpg";

export default function Stats() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <section className="bg-[#1B1938] mx-5 max-w-xs rounded-xl md:rounded-md flex flex-col md:max-w-6xl md:flex-row-reverse">
        <div className="relative">
          <div className="flex absolute w-full h-full bg-[#AA5CDB]/50 rounded-t-xl md:rounded-r-xl"></div>
          <img src={mobile} alt="" className="md:hidden  rounded-t-xl " />
          <img
            src={desktop}
            alt=""
            className="hidden md:block md:rounded-r-xl w-full h-full object-cover"
          />
        </div>

        <div className="p-5 flex flex-col text-center justify-center gap-6 mt-6 md:max-w-sm md:mx-9 lg:max-w-lg">
          <h1 className="text-3xl font-bold text-center md:text-left lg:text-[38px] md:mr-6 ">
            Get <span className="text-[#AA5CDB] leading-relaxed	">insights</span>{" "}
            that help your business grow.
          </h1>
          <p className="text-[#73708B] md:text-left text-[15px]  lg:max-w-sm ">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.{" "}
          </p>

          <div className="flex flex-col md:flex-row gap-8  text-center my-5 mb-8 lg:mt-16">
            <span>
              <h3 className="font-bold text-2xl">10k+</h3>
              <p className="text-sm lexend text-[#73708B] mt-1 ">COMPANIES</p>
            </span>
            <span>
              <h3 className="font-bold text-2xl">314 </h3>
              <p className="text-sm lexend text-[#73708B] mt-1 uppercase ">
                templates
              </p>
            </span>
            <span>
              <h3 className="font-bold text-2xl">12M+</h3>
              <p className="text-sm lexend text-[#73708B] mt-1 uppercase">
                queries
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
