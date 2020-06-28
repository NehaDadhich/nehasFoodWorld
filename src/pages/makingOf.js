import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechList from "../components/techList";


export default function makingOf() {
    return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Making Of" />
        <div>
            < TechList />
        </div>
        </div>
    </Layout>
    </>);
 }



