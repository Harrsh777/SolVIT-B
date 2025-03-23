'use client';

import LoginForm from "@/components/login-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Aurora from "./components/Aurora";
import Footer from "./components/footer";
import AITextAssistant from "./components/ChatAssistant";

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 gap-4 overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <LoginForm />
      <Button onClick={() => router.push("/mainpage")} className="mt-4">
        Go to Admin Dashboard
      </Button>
      <div>
        <AITextAssistant/>
      <Footer/>
        </div>
      
    </div>
    
  );
}
