import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExampleList from "../components/ExampleList";
import Search from "../components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Start() {
    return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Home" />
        <div className="pad-5"> 
            <Search />
        </div>
        <div>
            <ExampleList />
        </div>
        </div>
    </Layout>
    </>);
 }



