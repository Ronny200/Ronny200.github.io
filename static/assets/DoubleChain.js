function convertLinks() {
    var postBody = document.getElementById('postBody');
    if (postBody) {
        var currentUrl = new URL(window.location.href);
        var newHtml = postBody.innerHTML.replace(/$\[(.*?)$\]/g, function(match, p1)  {
        var urlPart = encodeURIComponent(p1).replace(/%20/g, '%20');
        var linkUrl = new URL('/post/' + urlPart + '.html', currentUrl).href;
        return `<a href="${linkUrl}">${p1}</a>`;
    });
        postBody.innerHTML = newHtml;
    } else {
        console.log("\n %c Element with id 'postBody' not found \n","padding:5px 0;background:#bc4c00;color:#fff");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    convertLinks();
    console.log("\n %c Double Chain Plugins \n","padding:5px 0;background:#bc4c00;color:#fff");
});