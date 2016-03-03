//声明short_name 示例为funny
var duoshuoQuery = {short_name:"funny"}
//disqus 多说评论加载方法
var disqus = {
  	load : function(){
		var disqus_config = function () {
			this.page.url = '{{@blog.url}}{{url}}'; 
			this.page.identifier = 'ghost-{{id}}'; 
		};
			
		(function() {
			var d = document, s = d.createElement('script');
			s.src = '//funnyang.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
		
      		$('#load-disqus').attr("onclick","disqus.show()");
		disqus.show();
	},
  	hide : function(){
      		$('#disqus_thread').hide(); 
	},
  	show : function(){
      		$('#disqus_thread').show(); 
		duoshuo.hide();
	}
  }
var duoshuo = {
  	load : function(){
		(function() {
			var ds = document.createElement('script');
			ds.type = 'text/javascript';ds.async = true;
			ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
			ds.charset = 'UTF-8';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
		})();
			  
		$('#load-duoshuo').attr("onclick","duoshuo.show()");
		duoshuo.show();
	},
  	hide : function(){
        	$('#ds-thread').hide(); 
	},
  	show : function(){
        	$('#ds-thread').show(); 
		disqus.hide();
	}
}
  
//快滚动到底部时加载评论
var articleHeight = $('header.main-header').height() + $('header.post-header').height() + $('section.post-content').height() - 400;
$(window).scroll(function(){
	if($(window).scrollTop() >= articleHeight-$(window).height()){
		disqus.load();
	    	$(window).unbind('scroll');
    }
})
