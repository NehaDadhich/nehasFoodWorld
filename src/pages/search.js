import React from "react"
import Layout from "../components/Layout"
import Search from "../components/search"
import SEO from "../components/seo";

export default function search() {
    return (<>
    <Layout>
    <SEO
        title={"Search"}
        description={"Search recipes or tech articles"}
      />
        <Search />
        </Layout>
    </>);
}