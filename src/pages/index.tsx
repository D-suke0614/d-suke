import React from "react";
import Layout from "@/components/common/layout/layout";
import Top from "@/components/top/Top";
import Contact from "@/components/contact/Contact";

function Home() {
  return (
    <>
      <Layout>
        <Top />
        <div>page</div>
        <Contact />
      </Layout>
    </>
  );
}

export default Home;
