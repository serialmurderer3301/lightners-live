let romance = null;
let aww = null;
let laugh = null;

let laughTimeoutId = null;

function play_se() {
    stop_se();  // 再生済みがあれば停止してリセット

    romance = new Audio("audio/tvromance.mp3");

    romance.play().catch((e) => {
        console.warn("tvromance.mp3 再生失敗:", e);
    });

    // 1秒後に audience_aww.mp3 を再生
    setTimeout(() => {
        aww = new Audio("audio/audience_aww-alt.mp3");
        aww.play().catch((e) => {
            console.warn("audience_aww-alt.mp3 再生失敗:", e);
        });
    }, 1000);

    // romanceが終了したらaudience_laughを再生する予約をセット
    romance.addEventListener("ended", () => {
        laugh = new Audio("audio/audience_laugh.mp3");

        laugh.addEventListener("ended", () => {
            window.location.href = "sadly.html";
        });

        laugh.play().catch((e) => {
            console.warn("audience_laugh.mp3 再生失敗:", e);
        });
    });
}

function stop_se() {
    // 再生予約キャンセル
    if (laughTimeoutId) {
        clearTimeout(laughTimeoutId);
        laughTimeoutId = null;
    }

    if (romance) {
        romance.pause();
        romance.currentTime = 0;
        romance = null;
    }
    if (aww) {
        aww.pause();
        aww.currentTime = 0;
        aww = null;
    }
    if (laugh) {
        laugh.pause();
        laugh.currentTime = 0;
        laugh = null;
    }
}

// モーダルを閉じるときに必ず呼ぶ
function onModalClose() {
    stop_se();
}

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('opening-video');

    if (video) {
        video.addEventListener('ended', function () {
            // モーダルを閉じる
            window.location.hash = '#';  // URLの #modal0 を消す → モーダル非表示
        });
    }
});
