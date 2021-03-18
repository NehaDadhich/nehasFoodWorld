import React from "react"
import Layout from "../components/Layout"
import Search from "../components/search"
import SEO from "../components/seo";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "gatsby"

export default function search() {
    return (<>
    <Layout>
    <SEO
        title={"Search"}
        description={"Search recipes or tech articles"}
      />
      <div className="row margin-0-t is-black pad-2-l" style={{fontSize: '1.5em'}}>
            <Link to="/"> <FontAwesomeIcon className="icon-link" icon={faHome}/> </Link>
            <span className="is-black"> &nbsp;  {"<<"} Search </span>
      </div>
        <Search />
        </Layout>
    </>);
}