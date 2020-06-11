import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechList from "../components/techList";


export default function tech() {
    return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Tech Articles" />
        <div>
            < TechList />
        </div>
        </div>
    </Layout>
    </>);
 }



