"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase";

import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import SignIn from "@/components/sign/SignIn";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Çıkış yapıldığında kullanıcıyı null yapar ve giriş sayfasına yönlendirir
      setUser(null);
      router.push("/signin"); // İstediğin sayfaya yönlendirebilirsin
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  return (
    <main>
      <Header
        handleSignOut={handleSignOut}
        showSignOutButton={user ? true : false}
      />
      {user ? (
        <>
          <div className="flex justify-center min-h-screen mt-20">
            <Drawer />
          </div>
        </>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </main>
  );
}
