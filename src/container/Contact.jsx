import React from "react";
//import { useForm } from 'react-hook-form';
import Scroll from "./Scroll"

// export default function Form() {
//   const {
//       register,
//       handleSubmit,
//       formState: { errors },
//   } = useForm({
//     defaultValues: {
//         name: "",
//         email: "",
//     },
// });
// const onSubmit = (data) => {
//   console.log(data);
// };
// return (
//       <div name="Contact" className="w-full md:h-full bg-[#0f223f] text-gray-300">
//         <div className="max-w-[1000] mx-auto p-4 flex flex-col justify-center items-center w-full">
//           <form onSubmit={handleSubmit(onSubmit)}
//             method="POST"
//             //enctype="multipart/form-data"
//             //target="_blank"
//             action="https://getform.io/f/4ce566d7-d4d7-431d-b96a-ec45b0d905fa"
//             className="max-w-[600px] flex flex-col justify-center w-full mt-12"
//           >
//             <div className="pb-8">
//               <div className="text-4xl font-bold inline border-b-4 border-[#07706b]">
//                 Contact🙂
//                 <p className="py-4 text-lg text-gray-400">
//                   I am intrested in freelance oppourtunities. However <br />
//                   if you have other request or questions. <br />
//                   My inbox is always open! Thanks.🤝
//                 </p>
//               </div>
//             </div>
//             <input
//             className="bg-[#bbc7ee] p-2 text-xl text-2sm text-black"
//              type="text"
//             name="name"
//              {...register("name",{
//               required:true,
//               validate:{
//                 minLength:(v) => v.length >=5,
//                 maxLength: (v) => v.length <= 20,
//                 matchPattern:(v) => /^[a-zA-Z0-9_]+$/.test(v),
//               }
//              })
            
//             }
//              placeholder="Name"
//            />
//             {errors.name?.type === "required" && (
//     <small>Username is required</small>
//   )}

//   {errors.name?.type === "minLength" && (
//     <small>The username should have at least 5 characters</small>
//   )}
//   {errors.name?.type === "maxLength" && (
//     <small>Name should not exceed 20 characters</small>
//   )}

//   {errors.name?.type === "matchPattern" && (
//     <small>Username must contain only letters, numbers and _</small>
//   )}
//            <br />
//            <input
//              className="bg-[#bbc7ee] p-2 py-4 text-xl text-2sm text-black"
//              type="email"
//              name="email"
//              {...register("email", {
//               required: "Email is required",
//               validate: {
//                 maxLength: (v) =>
//                   v.length <= 50 || "The email should have at most 50 characters",
//                 matchPattern: (v) =>
//                   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
//                   "Email address must be a valid address",
//               },
//             })}
//              placeholder="Email"
//            />
//            {errors.email?.message && (
//     <small>{errors.email.message}</small>
//   )}
//            <br />
//            <textarea
//             className="bg-[#bbc7ee] p-2 text-2sm text-xl text-black"
//              rows="8"
//              name="message"
//              {...register('message',{
//               required:true,
//               validate: {
//                 minLength:(v) => v.length >=10,
//                 maxLength:(v)=> v.length <= 300
//               }
//              })}
           
//              placeholder="Message"
//            />
//             {errors.message?.type === "required" && (
//     <small>Message is required</small>
//   )}
//  {errors.message?.type === "maxLength" && (
//     <small>Message should not exceed 300 characters</small>
//   )}
//    {errors.message?.type === "minLength" && (
//     <small>Message should have at least 15 characters</small>
//   )}
//            <button 
//              className="text-white border-2 mx-auto justify-center py-2 px-6 my-6 hover:bg-yellow-700 hover:border-yellow-700"
//            >
//              Let Collaborates
//            </button>

//             </form>
//             </div>
//             <Scroll />
//             </div>
// )}


const Contact = () => {

  return (
    <div name="Contact" className="w-full md:h-full bg-[#0f223f] text-gray-300">
      <div className="max-w-[1000] mx-auto p-4 flex flex-col justify-center items-center w-full">
        <form 
          method="POST"
          action="https://getform.io/f/4ce566d7-d4d7-431d-b96a-ec45b0d905fa"
          className="max-w-[600px] flex flex-col justify-center w-full mt-12"
        >
          <div className="pb-8">
            <div className="text-4xl font-bold inline border-b-4 border-[#07706b]">
              Contact🙂
              <p className="py-4 text-lg text-gray-400">
                I am intrested in freelance oppourtunities. However <br />
                if you have other request or questions. <br />
                My inbox is always open! Thanks.🤝
              </p>
            </div>
          </div>
          <input
            className="bg-[#bbc7ee] p-2 text-xl text-2sm text-black"
            type="text"
            name="name"
            required
            placeholder="Name"
          />
          <br />
          <input
            className="bg-[#bbc7ee] p-2 py-4 text-xl text-2sm text-black"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
          <br />
          <textarea
            className="bg-[#bbc7ee] p-2 text-2sm text-xl text-black"
            rows="8"
            name="message"
            required
            placeholder="Message"
          />
          <button 
            className="text-white border-2 mx-auto justify-center py-2 px-6 my-6 hover:bg-green-800 hover:border-white-700  rounded-lg "
          >
            Let Collaborates
          </button>
        </form>
        <div>
          <Scroll />
        </div>
      </div>
    </div>
  );
};

export default Contact;
