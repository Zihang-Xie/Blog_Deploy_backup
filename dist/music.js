const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'none',  //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7,
    mutex: true,
    listFolded: true, //列表默认折叠
    listMaxHeight: 60,  //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [  //音频信息,包含以下
        {
            name: '大风吹', //音频名称
            artist: '王赫野', //音频艺术家
            url: '/music/music1.m4a', //音频外链
            cover: '/music/music1.jpg', //音频封面
            lrc: 'music1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#FADFA3' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
    ]
});