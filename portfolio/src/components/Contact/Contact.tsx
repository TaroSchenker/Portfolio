import React from "react";
import { useForm } from "react-hook-form";
import { Element, scroller } from "react-scroll";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log("contat scroll", scroller.getActiveLink())
  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-12 lg:px-24 text-center bg-blue-100"
    >
      <div className="mx-auto max-w-2xl">
        <Element name="contact" className="section">
          <h2 className="text-4xl mb-6 font-semibold">Contact Me</h2>
        </Element>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full py-2 px-4 border border-gray-300 rounded"
          />
          {errors.name && <p>This field is required</p>}

          <input
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full py-2 px-4 border border-gray-300 rounded"
          />
          {errors.email && <p>This field is required</p>}

          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            className="w-full py-2 px-4 border border-gray-300 rounded"
            rows={5}
          />
          {errors.message && <p>This field is required</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;