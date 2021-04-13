const ap = new APlayer({
  container: document.getElementById('aplayer'), //播放器容器元素
  loop: 'all',				//音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
  order: 'list',			//音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
  volume: 0.7,				//默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true,			//列表默认折叠
  listMaxHeight: 60,			//列表最大高度
  fixed: true,
  preload: 'auto', 			//预加载，可选值: 'none', 'metadata', 'auto'
  theme: '#ff9566',			//主题色
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
      url: '/music/music3.m4a', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000002fNZDg1LHT3o_1.jpg', 	
      lrc: '/music/music3.lrc', 
    },
    {  				        
      name: '六月的雨', 			
      artist: '胡歌', 		        
      url: '/music/music4.m4a', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000pjTj301YeBh_1.jpg', 	
      lrc: '/music/music4.lrc', 
    },
    {  				        
      name: '一直很安静', 			
      artist: '阿桑', 		        
      url: '/music/music5.m4a', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Z5NxR0IQ5te_1.jpg', 	
      lrc: '/music/music5.lrc', 
    },
    {  				        
      name: '想见你想见你想见你', 			
      artist: '八三夭乐团 (831)', 		        
      url: '/music/music6.m4a', 						
      cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003MlPxI0gqWpU_1.jpg', 	
      lrc: '/music/music6.lrc', 
    }
  ]
});