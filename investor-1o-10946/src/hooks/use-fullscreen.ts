import { useCallback, useEffect, useState } from "react";

interface FullScreenApi {
  requestFullscreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
}

interface FullScreenDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  webkitFullscreenElement?: Element;
  msFullscreenElement?: Element;
  mozFullScreenElement?: Element;
}

export const useFullScreen = () => {
  const [isNativeFullScreen, setIsNativeFullScreen] = useState<boolean>(false);
  const [isPseudoFullScreen, setIsPseudoFullScreen] = useState<boolean>(false);

  // Combined fullscreen state (either native or pseudo)
  const isFullScreen = isNativeFullScreen || isPseudoFullScreen;

  const request = useCallback(async () => {
    const element = document.documentElement as FullScreenApi;
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
        return true;
      }
      if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
        return true;
      }
      if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
        return true;
      }
      if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
        return true;
      }
      console.warn("[Fullscreen] No fullscreen API available");
      return false;
    } catch (error) {
      console.warn("[Fullscreen] Native fullscreen request failed:", error);
      return false;
    }
  }, []);

  const exit = useCallback(async () => {
    const doc = document as FullScreenDocument;
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        return true;
      }
      if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
        return true;
      }
      if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
        return true;
      }
      if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
        return true;
      }
      return false;
    } catch (error) {
      console.warn("[Fullscreen] Native fullscreen exit failed:", error);
      return false;
    }
  }, []);

  const toggle = useCallback(async () => {
    if (isFullScreen) {
      // Try to exit native fullscreen first
      if (isNativeFullScreen) {
        await exit();
      }
      // Always turn off pseudo fullscreen
      setIsPseudoFullScreen(false);
    } else {
      // Try native fullscreen first
      const success = await request();
      if (!success) {
        // Fall back to pseudo fullscreen if native fails
        console.log("[Fullscreen] Using pseudo-fullscreen fallback");
        setIsPseudoFullScreen(true);
      }
    }
  }, [isFullScreen, isNativeFullScreen, exit, request]);

  // Listen for native fullscreen changes
  useEffect(() => {
    const handler = () => {
      const doc = document as FullScreenDocument;
      const fullscreenElement =
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.msFullscreenElement ||
        doc.mozFullScreenElement;
      setIsNativeFullScreen(Boolean(fullscreenElement));
      
      // If native fullscreen is exited, also exit pseudo fullscreen
      if (!fullscreenElement) {
        setIsPseudoFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler as EventListener);
    document.addEventListener("msfullscreenchange", handler as EventListener);
    document.addEventListener("mozfullscreenchange", handler as EventListener);

    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler as EventListener);
      document.removeEventListener("msfullscreenchange", handler as EventListener);
      document.removeEventListener("mozfullscreenchange", handler as EventListener);
    };
  }, []);

  // Handle Escape key to exit pseudo fullscreen
  useEffect(() => {
    if (!isPseudoFullScreen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPseudoFullScreen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isPseudoFullScreen]);

  return { 
    isFullScreen, 
    isNativeFullScreen,
    isPseudoFullScreen,
    toggleFullScreen: toggle 
  };
};
