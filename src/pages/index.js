import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RecipeList from "../components/recipeList";
import Search from "../components/search";

export default function Start() {
    return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Home" />
    <div className="margin-5-b"> 
            <Search />
        </div>
        <div>
            <RecipeList />
        </div>
        </div>
    </Layout>
    </>);
 }



