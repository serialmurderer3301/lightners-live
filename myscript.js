let romance = null;  // グローバルに保持
let aww = null;

function play_se() {
    // すでに再生中なら一度止めて巻き戻す
    if (romance) {
        romance.pause();
        romance.currentTime = 0;
    }

    if (aww) {
        aww.pause();
        aww.currentTime = 0;
    }

    romance = new Audio("audio/tvromance.mp3");
    romance.play().catch((e) => {
        console.warn("音声の再生に失敗しました：", e);
    });

    setTimeout(() => {
        aww = new Audio("audio/audience_aww.mp3");
        aww.play().catch((e) => {
            console.warn("audience_aww.mp3 の再生に失敗しました：", e);
        });
    }, 1000); // ← 1000ミリ秒 = 1秒
}

function stop_se() {
    if (romance) {
        romance.pause();
        romance.currentTime = 0;
    }

    if (aww) {
        aww.pause();
        aww.currentTime = 0;
    }
}
