import { notFound, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Helpers } from "..";
import { activeType, linkType } from "../types";

export const useResize = () => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [val]);
  return { val, setVal, textAreaRef };
};

export const useScrollTop = () => {
  const pathname = usePathname();
  const scrollBtn = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    if (scrollBtn.current) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        scrollBtn.current.style.bottom = "30px";
        scrollBtn.current.style.opacity = "1";
      } else {
        scrollBtn.current.style.bottom = "-20px";
        scrollBtn.current.style.opacity = "0";
      }
    }
  };
  const scrollTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { scrollTop, scrollBtn, pathname };
};

export const useStickyNav = (isStickyClass: string) => {
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (headerRef.current) {
      let number = headerRef.current.style.display === "" ? 120 : 175;
      const stickyClass = scrollTop >= number ? isStickyClass : "";
      setSticky(stickyClass);
    }
  };
  return { sticky, headerRef };
};
export const useSideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef<HTMLDivElement | null>(null);

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "70%";
        sideContent.current.style.visibility = "visible";
      }
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "0%";
        sideContent.current.style.visibility = "hidden";
      }
    }, 400);
  };
  return { show, hide, sidebar, sideContent };
};
export const useValidRoute = (pathname: string): boolean => {
  const params = usePathname();
  const validRoutes: string[] = [
    "/localhost:3000",
    "/contact",
    "/",
    "/cart",
    "/shop",
    "/shop/[id]",
    "/shop" + params.slice(6, params.length),
  ];
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return checkValid(pathname);
};
export const useHandles = (handleFilterFunc: any) => {
  const [index, setIndex] = useState<number>(0);
  const [titles, setTitles] = useState<activeType[]>([
    {
      title: "Shopping Cart",
      index: 0,
      active: true,
    },
    {
      title: "Checkout Detail",
      index: 1,
      active: false,
    },
    {
      title: "Order Complete",
      index: 2,
      active: false,
    },
  ]);
  const handleFilter = (data: activeType) => {
    handleFilterFunc(data);
  };
  return { titles, handleFilter, index, setTitles, setIndex };
};
