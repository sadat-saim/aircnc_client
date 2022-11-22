import React, { useContext } from "react";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    const { email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      toast.error("Password is incorrect");
    }
    signup(email, password)
      .then((user) => {
        console.log(user);
        toast.success("Registered successfully");
        navigate("/");
      })
      .catch((err) => toast.error(`${err.message}`));
    console.log(data);
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="font-bold text-2xl text-center my-4">
        Register a new account
      </h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            {...register("email", { required: true })}
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required={true}
            shadow={true}
            {...register("confirmPassword", { required: true })}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" {...register("terms", { required: true })} />
          <Label htmlFor="agree">
            I agree with the{" "}
            <Link
              to="/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button
          type="submit"
          className="bg-gradient-to-r from-lime-400 to-green-300"
        >
          Register new account
        </Button>
      </form>
    </div>
  );
};

export default Register;
