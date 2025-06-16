"use client";

import {
  useMiniKit,
  
} from "@coinbase/onchainkit/minikit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react";
import "./theme.css";
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
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
                </iframe>  
                
                </center>

        </main>

  <br></br>
  <div className="container">
        <nav className="bottom-nav">
            <a href="#home">
                <FontAwesomeIcon icon={["fas", "coffee"]} />Home
            </a>
            <a href="https://mangaplus.shueisha.co.jp/featured">
                <i className="fas fa-graduation-cap icon"></i>Hot
            </a>
            <a href="https://farcaster.xyz/~/channel/anime-manga">
                <i className="fas fa-briefcase icon"></i>Channel
            </a>
            
        </nav>
    </div>            
          
      </div>
    </div>
  );
}
