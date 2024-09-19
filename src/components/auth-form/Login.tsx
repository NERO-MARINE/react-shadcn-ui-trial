import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MyAlerts from "../my-alert/MyAlerts";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid Email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(5, "Password must have at least 5 characters"),
});

const Login = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setUsername(values.email);
    setSuccess(true);
    setAlertOpen(true); // Open alert on successful login
    console.log("Login successful", values);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign in</Button>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block  after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            If you don&apos;t have an account, please&nbsp; 😊
          </p>
        </form>
      </Form>

      {/* Automatically show the alert box when login is successful */}
      {success && (
        <MyAlerts
          open={alertOpen}
          setOpen={setAlertOpen}
          title="Login Successful"
          content={`Welcome, ${username}!`}
        />
      )}
    </>
  );
};

export default Login;
