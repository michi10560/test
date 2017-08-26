(function(){
    document.addEventListener("DOMContentLoaded", function() {
        // HTML読み込み直後に実行したい処理
        var tocPlace = document.getElementById("js-toc-place");
        if (tocPlace) {
            tocPlace.appendChild(document.querySelector('.js-toc'));
        }
    });
})()
