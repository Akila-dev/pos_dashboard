"use server";

import Link from "next/link";
import { InputBlock, Button } from "@/components";

import { AtSign } from "lucide-react";

export default async function Login() {
  return (
    <main className="container flex-center h-full">
      <div className="w-full md:max-w-25 space-y-1.5 bg-white lg:bg-none rounded-[0.5em] shadow lg:shadow-none border border-outline lg:border-0 p-1 py-2 lg:p-0">
        <div className="border-b border-outline border-dotte pb-1.5">
          <h3 className="font-semibold! text-[2em]!">Admin Login</h3>
          <p className="text-light mt-0.25">Get access to your account</p>
        </div>
        <form method="post" action="/" className="space-y-1">
          <InputBlock label="Email Address" name="email" type="email" />
          <InputBlock label="Password" name="password" type="password" />
          <div className="flex-between pb-1">
            <div className="flex-v-center gap-0.5!">
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me" className="whitespace-nowrap">
                Remember me
              </label>
            </div>
            <Link href="/" className="text-accent">
              Forgot Password
            </Link>
          </div>
          <Button text="Login" link="/" className="w-full block text-center" />
          {/* <Button text="Login" type="submit" className="w-full" /> */}
        </form>
      </div>
    </main>
  );
}
