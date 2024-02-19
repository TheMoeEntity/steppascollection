"use client";
import { useScrollTop } from "@/Helpers/hooks";
import React, { ReactNode } from "react";
import Header from "./Header";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop, pathname } = useScrollTop();
  return (
    <>
      <Header />
      {children}
      <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </>
  );
};

export default AppLayout;
