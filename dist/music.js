const ap = new APlayer({
  container: document.getElementById('aplayer'), //播放器容器元素
  loop: 'all',				//音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
  order: 'list',			//音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
  volume: 0.7,				//默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true,			//列表默认折叠
  listMaxHeight: 60,			//列表最大高度
  fixed: true,
  preload: 'auto', 			//预加载，可选值: 'none', 'metadata', 'auto'
  theme: '#87daff',			//主题色
  autoplay: false,			//自动播放
  lrcType: 3,				//歌词传递方式
  mutex: true, 				//互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
  audio: [
    {  				        //音频信息,包含以下
      name: '大风吹', 			//音频名称
      artist: '王赫野', 		        //音频艺术家
      url: 'http://music.163.com/song/media/outer/url?id=1826179038.mp3', 	//音频外链
      cover: 'http://p2.music.126.net/EU8r6sBwJlGB8pNb8fIt7g==/109951165791943145.jpg', 	//音频封面
      lrc: '/music/music1.lrc', 
    },
    {  				        
      name: '恋愛サーキュレーション', 	
      artist: '花澤香菜', 		
      url: 'http://music.163.com/song/media/outer/url?id=579954.mp3', 						
      cover: 'http://p2.music.126.net/wImDxYDsJcWDIH9znDhEPA==/109951165561008752.jpg', 	
      lrc: '/music/music2.lrc',
    },
    {  				        
      name: '逍遥叹', 			
      artist: '胡歌', 		        
      url: 'http://ws.stream.qqmusic.qq.com/C400000CZa7c21FyFX.m4a?guid=2948374960&vkey=E59767DB3606F43A54B21E0F777F50D6C3D1BF5FC558226C9EBE5EDA5EFB1CF0A87AF9EEEEB1CB03DF95FAC6F0DE3BA19F531FC8CA2991B4', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002fNZDg1LHT3o_1.jpg', 	
      lrc: '/music/music3.lrc', 
    },
    {  				        
      name: '六月的雨', 			
      artist: '胡歌', 		        
      url: 'http://ws.stream.qqmusic.qq.com/C400004Ft5S91k70vW.m4a?guid=2948374960&vkey=ADF0E9A4E17B43B246084306E928420CAA955B7C0AFC8853DA381979BA3907C3758FBF552603A6106A0AAF40D26197AE6F3E3E72D8C51E33', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000pjTj301YeBh_1.jpg', 	
      lrc: '/music/music4.lrc', 
    },
    {  				        
      name: '一直很安静', 			
      artist: '阿桑', 		        
      url: 'http://ws.stream.qqmusic.qq.com/C4000032dTpd0ZgYaI.m4a?guid=2948374960&vkey=317AB42D526FF1FA4EA8D23602964DE91E824C9B6159F71CD99C966EE96FB1FA03BE8943497E21080CC76F562228A9EEF0F132B03AB25E0C', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Z5NxR0IQ5te_1.jpg', 	
      lrc: '/music/music6.lrc', 
    },
    {  				        
      name: '想见你想见你想见你', 			
      artist: '八三夭乐团 (831)', 		        
      url: 'http://ws.stream.qqmusic.qq.com/C400001wW0fs3vimi8.m4a?guid=2948374960&vkey=AFF140AF7682BC93FD22951A429567D1D814959DEE68427BF4EA7CE87D9F7749CF7537C662634586F4E1D47169770CD6413ACF2A43C555F9', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003MlPxI0gqWpU_1.jpg', 	
      lrc: '/music/music5.lrc', 
    }
  ]
});