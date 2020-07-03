import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RecipeList from "../components/recipeList";


export default function makingOf() {
    return (
    <>
    <Layout className="is-white-bg">
        <div>
            <SEO title="Recipes" />
        <div>
            < RecipeList />
        </div>
        </div>
    </Layout>
    </>);
 }