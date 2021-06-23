/* IMPORTING MODULES */

const express = require("express");
const app = express();

app.get("/test", (req, res, next) => {
    const test = {
        "success": true,
        "totalRecords": 2, "list": [{ "Id": 5299687, "fullName": "Patrick Dalton", "displayName": "Patrick Dalton", "birthDate": null, "deathDate": "06/30/2019", "linkUrl": "Patrick-Dalton", "pictureMain": "https://cdn.OURAPP.com/photo/users/207x207/5299687/Patrick-Dalton-1561910313.jpg", "pictureThumb": "https://cdn.OURAPP.com/photo/photo/76x76/5299687/Patrick-Dalton-1561910313.jpg" },
        { "Id": 4822563, "fullName": "Patrick E. McNeely", "displayName": "Patrick E. McNeely", "birthDate": null, "deathDate": "05/06/2018", "linkUrl": "Patrick-Mcneely", "pictureMain": "https://cdn.OURAPP.com/photo/tributes/207x207/4822563/Patrick-Mcneely-1525779127.jpg", "pictureThumb": "https://cdn.OURAPP.com/photo/tributes/76x76/4822563/Patrick-Mcneely-1525779127.jpg" }]
    }

    console.log("called...")
    return res.status(200).json({
        ...test
    })

})

const port = 2526;

/* lISTENING PORT */
app.listen(process.env.PORT || port, function () {
    console.log("Node server is up and running.. on ", port);
});
