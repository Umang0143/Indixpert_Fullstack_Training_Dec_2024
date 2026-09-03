import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const RHForm = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

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
                Registration Form Without YUP Form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

                {/* FIRST NAME */}
                <div className="col-md-6">
                    <label>First Name</label>
                    <input
                        className="form-control"
                        {...register("firstName", { required: "First name required" })}
                    />
                    <p className="text-danger">{errors.firstName?.message}</p>
                </div>

                {/* LAST NAME */}
                <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                        className="form-control"
                        {...register("lastName", { required: "Last name required" })}
                    />
                    <p className="text-danger">{errors.lastName?.message}</p>
                </div>

                {/* AGE */}
                <div className="col-md-3">
                    <label>Age</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("age", {
                            required: "Age required",
                            min: { value: 18, message: "Must be >= 18" },
                            max: { value: 40, message: "Must be <= 40" }
                        })}
                    />
                    <p className="text-danger">{errors.age?.message}</p>
                </div>

                {/* PASSWORD */}
                <div className="col-md-9">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", {
                            required: "Password required",
                            minLength: { value: 6, message: "Min 6 chars" },
                            maxLength: { value: 10, message: "Max 10 chars" },
                            validate: (v) =>
                                !/\s/.test(v) || "No spaces allowed"
                        })}
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                </div>

                {/* PHONE */}
                <div className="col-md-6">
                    <label>Phone Number</label>
                    <input
                        className="form-control"
                        {...register("phone", {
                            required: "Phone required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter 10-digit number"
                            }
                        })}
                    />
                    <p className="text-danger">{errors.phone?.message}</p>
                </div>

                {/* EMAIL */}
                <div className="col-md-6">
                    <label>Email Address</label>
                    <input
                        className="form-control"
                        {...register("email", {
                            required: "Email required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email"
                            }
                        })}
                    />
                    <p className="text-danger">{errors.email?.message}</p>
                </div>

                {/* COUNTRY */}
                <div className="col-md-6">
                    <label>Select Country</label>
                    <select
                        className="form-select"
                        {...register("country", { required: "Select country" })}
                    >
                        <option value="">Select country</option>
                        <option>India</option>
                        <option>USA</option>
                    </select>
                    <p className="text-danger">{errors.country?.message}</p>
                </div>

                {/* STATE */}
                <div className="col-md-6">
                    <label>Select State</label>
                    <select
                        className="form-select"
                        {...register("state", { required: "Select state" })}
                    >
                        <option value="">Select state</option>
                        <option>Gujarat</option>
                        <option>Maharashtra</option>
                    </select>
                    <p className="text-danger">{errors.state?.message}</p>
                </div>

                {/* MULTI SELECT CITIES */}
                <div className="col-md-6">
                    <label>Select Preferred Cities</label>
                    <select
                        multiple
                        className="form-select"
                        {...register("cities", {
                            validate: (v) => v.length >= 2 || "Select minimum 2 cities"
                        })}
                    >
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Somnath">Somnath</option>
                    </select>
                    <p className="text-danger">{errors.cities?.message}</p>
                </div>

                {/* ADDRESS */}
                <div className="col-md-6">
                    <label>Your Complete Address</label>
                    <textarea
                        className="form-control"
                        {...register("address", { required: "Address required" })}
                    />
                    <p className="text-danger">{errors.address?.message}</p>
                </div>

                {/* PINCODE */}
                <div className="col-md-6">
                    <label>Zip/Pin Code</label>
                    <input
                        className="form-control"
                        {...register("pincode", {
                            required: "Pincode required",
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "Enter 6-digit pincode"
                            }
                        })}
                    />
                    <p className="text-danger">{errors.pincode?.message}</p>
                </div>

                {/* JOIN DATE */}
                <div className="col-md-6">
                    <label>Joining Date</label>
                    <input
                        type="date"
                        className="form-control"
                        {...register("joinDate", {
                            required: "Joining date required",
                            validate: (v) =>
                                new Date(v) <= new Date() ||
                                "Date must be less than today"
                        })}
                    />
                    <p className="text-danger">{errors.joinDate?.message}</p>
                </div>

                {/* GENDER */}
                <div className="col-md-12">
                    <label>Gender</label>
                    <div>
                        <input type="radio" value="Male" {...register("gender", { required: "Select gender" })} /> Male
                        <input className="ms-3" type="radio" value="Female" {...register("gender")} /> Female
                        <input className="ms-3" type="radio" value="Transgender" {...register("gender")} /> Transgender
                    </div>
                    <p className="text-danger">{errors.gender?.message}</p>
                </div>

                {/* HOBBIES */}
                <div className="col-md-12">
                    <label>Hobbies</label>
                    <div>
                        <input type="checkbox" value="Drawing" {...register("hobbies",{ required: "Select hobbies" })} /> Drawing
                        <input className="ms-3" type="checkbox" value="Singing" {...register("hobbies")} /> Singing
                        <input className="ms-3" type="checkbox" value="Dancing" {...register("hobbies")} /> Dancing
                    </div>

                    <p className="text-danger">{watch("hobbies")?.length < 2 ? "Select minimum 2 hobbies" : ""}</p>
                </div>

                {/* PROFILE PIC */}
                <div className="col-md-6">
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        className="form-control"
                        {...register("profilePic", {
                            required: "Required",
                            validate: {
                                size: (f) =>
                                    f?.[0]?.size <= 6 * 1024 * 1024 || "Max 6MB allowed",
                                type: (f) =>
                                    ["image/png", "image/jpeg", "image/gif"].includes(f?.[0]?.type) ||
                                    "Only JPG, PNG, GIF allowed"
                            }
                        })}
                    />
                    <p className="text-danger">{errors.profilePic?.message}</p>
                </div>

                {/* RESUME */}
                <div className="col-md-6">
                    <label>Resume</label>
                    <input
                        type="file"
                        className="form-control"
                        {...register("resume", {
                            required: "Required",
                            validate: {
                                size: (f) =>
                                    f?.[0]?.size <= 8 * 1024 * 1024 || "Max 8MB allowed",
                                type: (f) =>
                                    ["application/pdf", "application/msword",
                                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    ].includes(f?.[0]?.type) ||
                                    "Only PDF or Word file allowed"
                            }
                        })}
                    />
                    <p className="text-danger">{errors.resume?.message}</p>
                </div>

                {/* TERMS */}
                <div className="col-md-12">
                    <input
                        type="checkbox"
                        {...register("terms", { required: "Accept terms" })}
                    />{" "}
                    Agree to terms & conditions
                    <p className="text-danger">{errors.terms?.message}</p>
                </div>

                {/* SUBMIT */}
                <div className="col-12">
                    <button className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Form"}
                    </button>
                </div>
            </form>

            <ToastContainer />
        </div>
    )
}

export default RHForm