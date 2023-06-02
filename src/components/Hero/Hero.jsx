import React from "react";
import { FiSearch } from "react-icons/fi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import images from "../../assets/HeroImage.svg";

const validationSchema = yup.object({
  search: yup
    .string("Enter your search query")
    .required("This field cannot be empty"),
});

const Hero = () => {
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      navigate("/home");
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Find Your Dream Job
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Take the next step in your career. Explore a wide range of job
          opportunities and unlock your potential.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
              <input
                className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
                type="text"
                placeholder="Search for jobs"
                id="search"
                name="search"
                value={values.search}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
            >
              Search
            </button>
          </div>
          {touched.search && errors.search && (
            <span style={{ color: "orange" }}>{errors.search}</span>
          )}
        </form>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img className="w-full" src={images} alt="users are reading articles" />
      </div>
    </section>
  );
};

export default Hero;
