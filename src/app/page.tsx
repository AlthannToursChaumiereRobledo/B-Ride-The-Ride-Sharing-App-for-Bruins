"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (email && password) {
      router.push("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">B-Ride</h1>
      <Card className="w-96 shadow-xl bg-white text-gray-800">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleLogin}>Login</Button>
            <div className="text-center text-sm text-gray-600 mt-2">
              Don't have an account? 
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white"  onClick={handleSignup}> Sign up</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="mt-6 text-center text-lg max-w-md">
        B-Ride is a community-driven ride-sharing platform for UCLA students, providing safe and efficient travel options. Join today and make your commute easier!
      </p>
    </div>
  );
}
