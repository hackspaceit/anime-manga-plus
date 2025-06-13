"use client";

import {
  useMiniKit,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";

import { useEffect } from "react";
import { Button } from "./components/DemoComponents";

export default function App() {
  const { setFrameReady, isFrameReady, } = useMiniKit();
  
  

  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);



    

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
        <header className="flex justify-between items-center mb-3 h-11">
          <div>
            <div className="flex items-center space-x-2">
             
            </div>
          </div>
        
        </header>

        <main className="flex-1">
         
<iframe width="100%"
                        height="690"
                        src=
"https://mangaplus.shueisha.co.jp/updates" >
                </iframe>

        </main>

        <footer className="mt-2 pt-4 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-[var(--ock-text-foreground-muted)] text-xs"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}
