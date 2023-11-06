import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import { baseUrl } from '@/config/appConfig';
import DashboardSidebar from "@/layouts/DashboardSidebar";
import DashboardHeader from "@/layouts/DashboardHeader";

type Props = {
  children?: ReactNode;
  title?: string;
};

const DashboardLayout = ({ children, title }: Props): JSX.Element => {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("text-bodydark");
    document.body.classList.add("bg-boxdark-2");
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={`${baseUrl}/img/favicon.png`} type="image/x-icon" />
      </Head>

      {
        loading ? <div
          className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div> :
          <div className="flex h-screen overflow-hidden">
            <DashboardSidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <DashboardHeader />
              <main>
                {children}
              </main>
            </div>
          </div>
      }
    </>
  );
};

export default DashboardLayout;
