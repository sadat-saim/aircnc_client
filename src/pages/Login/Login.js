import React from "react";
import { Label, TextInput, Button, Checkbox } from "flowbite-react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="font-bold text-2xl text-center my-4">
        Login to your account
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@provider.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button
          type="submit"
          className="bg-gradient-to-r from-lime-400 to-green-300"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
