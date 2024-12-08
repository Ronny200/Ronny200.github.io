function updateImageLinks() {
    document.querySelectorAll('a').forEach(anchor => {
        const img = anchor.querySelector('img');
        if (img && img.hasAttribute('data-canonical-src')) {
            const canonicalSrc = img.getAttribute('data-canonical-src');
            anchor.setAttribute('href', canonicalSrc);
            img.setAttribute('src', canonicalSrc);
            img.removeAttribute('data-canonical-src');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // 调用更新图片链接的函数
    updateImageLinks();

    console.log("\n %c Update Image Links Plugin \n","padding:5px 0;background:#35495e;color:#fff");
});