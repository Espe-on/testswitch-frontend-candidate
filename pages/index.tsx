import React from "react";
import {NextPage} from 'next';
import scss from '../pageStyles/index.module.scss'
import Layout from "../components/Layout/layout";
import Link from 'next/link'
import {CheckUuid} from "../components/Uuid/Uuid";

const Home: NextPage = () =>  
    <Layout>
        <section className={scss.content}>
            <h1 className={scss.welcome} data-testid='page-render-test'>Welcome to the Test Zone</h1>
                <h2 className={scss.instructionsHeader}>Test Instructions</h2>
                <ul className={scss.instructions}>
                    <li>There is no time limit for this test, but time taken will be reviewed as part of our assessment.</li>
                    <li>You must complete the test in one sitting</li>
                    <li>When you are ready and sure you won’t be disturbed, please click “Start”</li>
                </ul>
            <CheckUuid/>
        </section>
    </Layout>;
export default Home;



