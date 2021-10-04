// Title: Assignment 8
// Author: Evan Durkin
// Date: October 3, 2021

export class HttpClient 
{
    async get(url, params = "") {
        let urlObject = new URL(url);
        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject;

        const res = await fetch(urlObject.toString(),{
            method: "GET"
        });
        return res.json();
    }
}