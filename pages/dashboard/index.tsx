import React from "react";
import Head from 'next/head'
import { baseUrl } from "@/config/appConfig";

import DashboardLayout from "@/layouts/DashboardLayout"



const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>

    </DashboardLayout>
  );
}

export default DashboardPage;