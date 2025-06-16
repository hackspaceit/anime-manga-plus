"use client";

import {
  useMiniKit,
  
} from "@coinbase/onchainkit/minikit";

import { useEffect } from "react";
import "./theme.css";

export default function App() {
  const { setFrameReady, isFrameReady, } = useMiniKit();
  
  

 

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);


  

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-0 py-3">
        <header className="flex justify-between items-center mb-13 h-110">
          <div>
            <div className="flex items-center ">
         
            </div>
          </div>
        
        </header>

        <main className="flex-1">
         <center>
          
<iframe width="100%" height="840" allow="fullscreen"
                        src=
"https://mangaplus.shueisha.co.jp/updates" >
                </iframe><br></br>
  <div className="container">
        <nav className="bottom-nav">
            <a href="#home">
                <i className="fas fa-home icon"></i>Home
            </a>
            <a href="#courses">
                <i className="fas fa-graduation-cap icon"></i>Courses
            </a>
            <a href="#jobs">
                <i className="fas fa-briefcase icon"></i>Jobs
            </a>
            <a href="#news">
                <i className="fas fa-newspaper icon"></i>News
            </a>
            <a href="#contact">
                <i className="fas fa-envelope icon"></i>Contact
            </a>
            <a href="#about">
                <i className="fas fa-info-circle icon"></i>About
            </a>
        </nav>
    </div>              
                
                </center>

        </main>

  
          
      </div>
    </div>
  );
}
