import React from "react";

export default function IndexSectionTestimonials7() {
  return (
    <React.Fragment>
      <section className="py-16 bg-white overflow-hidden">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center">
            <img className="rounded-xl" src="excercicsing.jpg" alt="Fitness Importance" />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              WHY <span className="text-blue-500">FITNESS</span> IS IMPORTANT?
            </h2>
            <p className="text-lg text-gray-900">
              Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
