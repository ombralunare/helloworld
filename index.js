"use strict";


function hello()
{
    setTimeout(function()
    {
        document.body.innerHTML = `<h1 style="color:black">Bob's pawn store</h1>`;
    },5000);
};

hello();
