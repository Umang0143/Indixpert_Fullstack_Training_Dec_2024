import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  age: yup
    .number()
    .typeError("Enter valid age")
    .required("Age required")
    .min(18, "Age must be >= 18")
    .max(40, "Age must be <= 40"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "Min 6 characters")
    .max(10, "Max 10 characters")
    .matches(/^\S*$/, "No spaces allowed"),

  phone: yup
    .string()
    .required("Phone required")
    .matches(/^[0-9]{10}$/, "Enter 10-digit phone number"),

  email: yup
    .string()
    .required("Email required")
    .email("Invalid email"),

  country: yup.string().required("Select country"),
  state: yup.string().required("Select state"),

  cities: yup
    .array()
    .min(2, "Select minimum 2 cities"),

  address: yup.string().required("Address required"),

  pincode: yup
    .string()
    .required("Pincode required")
    .matches(/^[0-9]{6}$/, "Enter 6-digit pincode"),

  joinDate: yup
    .string()
    .required("Joining date required")
    .test("joinDate", "Date must be less than today", (value) => {
      return new Date(value) <= new Date();
    }),

  gender: yup.string().required("Select gender"),

  hobbies: yup
    .array()
    .min(2, "Select minimum 2 hobbies"),

  profilePic: yup
    .mixed()
    .test("required", "Profile picture required", (value) => value && value.length > 0)
    .test("fileSize", "Max 6MB allowed", (value) =>
      value && value[0]?.size <= 6 * 1024 * 1024
    )
    .test("fileType", "Only JPG, PNG, GIF allowed", (value) =>
      value &&
      ["image/jpeg", "image/png", "image/gif"].includes(value[0]?.type)
    ),

  resume: yup
    .mixed()
    .test("required", "Resume required", (value) => value && value.length > 0)
    .test("fileSize", "Max 8MB allowed", (value) =>
      value && value[0]?.size <= 8 * 1024 * 1024
    )
    .test("fileType", "Only PDF or Word allowed", (value) =>
      value &&
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ].includes(value[0]?.type)
    ),

  terms: yup.boolean().oneOf([true], "Accept terms & conditions")
});

const RHFormYup = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
      toast.success("Form submitted successfully!");
      reset();
    }, 1500);
  };

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-primary fw-bold mb-3">
        Registration Form – Using Yup
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

        {/* FIRST NAME */}
        <div className="col-md-6">
          <label>First Name</label>
          <input className="form-control" {...register("firstName")} />
          <p className="text-danger">{errors.firstName?.message}</p>
        </div>

        {/* LAST NAME */}
        <div className="col-md-6">
          <label>Last Name</label>
          <input className="form-control" {...register("lastName")} />
          <p className="text-danger">{errors.lastName?.message}</p>
        </div>

        {/* AGE */}
        <div className="col-md-3">
          <label>Age</label>
          <input type="number" className="form-control" {...register("age")} />
          <p className="text-danger">{errors.age?.message}</p>
        </div>

        {/* PASSWORD */}
        <div className="col-md-9">
          <label>Password</label>
          <input type="password" className="form-control" {...register("password")} />
          <p className="text-danger">{errors.password?.message}</p>
        </div>

        {/* PHONE */}
        <div className="col-md-6">
          <label>Phone Number</label>
          <input className="form-control" {...register("phone")} />
          <p className="text-danger">{errors.phone?.message}</p>
        </div>

        {/* EMAIL */}
        <div className="col-md-6">
          <label>Email Address</label>
          <input className="form-control" {...register("email")} />
          <p className="text-danger">{errors.email?.message}</p>
        </div>

        {/* COUNTRY */}
        <div className="col-md-6">
          <label>Select Country</label>
          <select className="form-select" {...register("country")}>
            <option value="">Select country</option>
            <option>India</option>
            <option>USA</option>
          </select>
          <p className="text-danger">{errors.country?.message}</p>
        </div>

        {/* STATE */}
        <div className="col-md-6">
          <label>Select State</label>
          <select className="form-select" {...register("state")}>
            <option value="">Select state</option>
            <option>Gujarat</option>
            <option>Maharashtra</option>
          </select>
          <p className="text-danger">{errors.state?.message}</p>
        </div>

        {/* CITIES */}
        <div className="col-md-6">
          <label>Select Preferred Cities</label>
          <select multiple className="form-select" {...register("cities")}>
            <option value="jaipur">jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="mumbai">mumbai</option>
          </select>
          <p className="text-danger">{errors.cities?.message}</p>
        </div>

        {/* ADDRESS */}
        <div className="col-md-6">
          <label>Your Complete Address</label>
          <textarea className="form-control" {...register("address")} />
          <p className="text-danger">{errors.address?.message}</p>
        </div>

        {/* PINCODE */}
        <div className="col-md-6">
          <label>Zip/Pin Code</label>
          <input className="form-control" {...register("pincode")} />
          <p className="text-danger">{errors.pincode?.message}</p>
        </div>

        {/* JOIN DATE */}
        <div className="col-md-6">
          <label>Joining Date</label>
          <input type="date" className="form-control" {...register("joinDate")} />
          <p className="text-danger">{errors.joinDate?.message}</p>
        </div>

        {/* GENDER */}
        <div className="col-md-12">
          <label>Gender</label>
          <div>
            <input type="radio" value="Male" {...register("gender")} /> Male
            <input className="ms-3" type="radio" value="Female" {...register("gender")} /> Female
            <input className="ms-3" type="radio" value="Other" {...register("gender")} /> Other
          </div>
          <p className="text-danger">{errors.gender?.message}</p>
        </div>

        {/* HOBBIES */}
        <div className="col-md-12">
          <label>Hobbies</label>
          <div>
            <input type="checkbox" value="Drawing" {...register("hobbies")} /> Drawing
            <input className="ms-3" type="checkbox" value="Football" {...register("hobbies")} /> Football
            <input className="ms-3" type="checkbox" value="reading" {...register("hobbies")} /> reading
          </div>
          <p className="text-danger">{errors.hobbies?.message}</p>
        </div>

        {/* PROFILE PIC */}
        <div className="col-md-6">
          <label>Profile Picture</label>
          <input type="file" className="form-control" {...register("profilePic")} />
          <p className="text-danger">{errors.profilePic?.message}</p>
        </div>

        {/* RESUME */}
        <div className="col-md-6">
          <label>Resume</label>
          <input type="file" className="form-control" {...register("resume")} />
          <p className="text-danger">{errors.resume?.message}</p>
        </div>

        {/* TERMS */}
        <div className="col-md-12">
          <input type="checkbox" {...register("terms")} /> Agree to terms & conditions
          <p className="text-danger">{errors.terms?.message}</p>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="col-12">
          <button className="btn btn-danger w-100" disabled={loading}>
            {loading ? "Submitting..." : "Submit Form"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}


export default RHFormYup