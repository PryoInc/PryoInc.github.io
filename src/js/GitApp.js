'use strict'

import { } from "isomorphic-git";

export default class GitApp {

    static main() {
        let app = new GitApp();
        app.run();
    }

    constructor() {

    }

    run() {
        git.config({
            fs: "IndexedDB",
            options: {

            }
        }).then((v) => {
            console.log("config successful", v);
        }, (e) => {
            console.error(e);
        });
    }

}
