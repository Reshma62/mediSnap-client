import { useState } from "react";
import Container from "../Shared/Container";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DoctorsReview from "./DoctorsReview";
const DoctorDetails = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <>
      <Container>
        <section className="py-16 space-y-4">
          <div>
            {" "}
            <h2 className="text-2xl font-bold capitalize text-teal-900">
              Doctor name
            </h2>
            <p className="text-slate-800 font-medium text-lg">
              Mbbs Doctor in Dhaka medical
            </p>
            <img
              src="https://media.istockphoto.com/id/985607098/photo/asian-woman-doctor-with-stethoscope-in-uniform-over-background-with-copy-space-medical-concept.webp?b=1&s=612x612&w=0&k=20&c=wE4uJ-cOGY009ayf1HvyKR02095t9HNOY-xSRVbo8-A="
              alt=""
            />
          </div>
          <div className="flex gap-8">
            <div className="flex-1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque accusamus tempora possimus? Laboriosam ipsa, nobis
                aut quidem sequi inventore eum quia, excepturi animi
                reprehenderit numquam eius exercitationem consectetur eos
                laborum.
              </p>
            </div>
            <div className="basis-96">
              <Calendar onChange={onChange} value={value} />
              <div>
                <button className="bg-gradient-to-t text-white w-[91%] py-2 rounded-md my-5 from-teal-900 to-teal-600">
                  Appoinment Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <DoctorsReview />
    </>
  );
};

export default DoctorDetails;
