import React from "react";
import Layout from "@/components/common/layout/layout";
import Top from "@/components/top/Top";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Skill from "@/components/skill/Skill";

function Home() {
  return (
    <>
      <Layout>
        <Top />
        <div>page</div>
        <About />
        <Skill />
        <Contact />
      </Layout>
    </>
  );
}

export default Home;
