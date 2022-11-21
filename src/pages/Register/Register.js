import React from "react";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";

const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="font-bold text-2xl text-center my-4">
        Register a new account
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
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
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{" "}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
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
