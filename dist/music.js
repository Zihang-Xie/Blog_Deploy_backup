const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed: true,
    autoplay: false;
    audio: [  //音频信息,包含以下
        {
            name: '大风吹', //音频名称
            artist: '王赫野', //音频艺术家
            url: '/music/music1.m4a', //音频外链
            cover: '/music/music1.jpg', //音频封面
        },
    ]
});