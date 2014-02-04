$(w).resize(function()
{
	sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});
  
//Check if Mobile
function checkMobile()
{
	mobile = (sw > breakpoint) ? false : true;
	if (!mobile) 
	{ 
		$('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
	} 
	else 
	{ 
		if(!$('#nav-anchors a').hasClass('active'))
		{
			$('#nav,#search').hide(); //Hide full navigation and search
		}
	}
}
function buildGallery()
{
	container.html('<div id="img-list"><ul /></div>');
  imgList = $('#img-list');
  nav.find('a:first').addClass('active');
  nav.find('a').each(function()
	{
		var $this = $(this);
		var href = $this.attr('href');
  	arr += '<li data-imgsrc="'+href+'"></li>';
 	});
  imgList.find('ul').append(arr);
  nav.on('click', 'a', function(e)
	{
  	var pos = $(this).parent().index();
		e.preventDefault();
		loadImg(pos);
 		if(swipeEnabled)
		{
  		mySwipe.slide(index, 300);
 		}
 		updateNav(pos);
 	});
}
Modernizr.load({
  test: Modernizr.touch && Modernizr.csstransitions,
  yep: 'js/swipe.js',
  complete: function() {
    if (Modernizr.touch && Modernizr.csstransitions) {
      swipeEnabled = true;
      buildSwipe();
    }
  }
});
function buildSwipe()
{
	w.mySwipe = new Swipe(document.getElementById('img-list'),
	{
		callback: function(event, index, elem)
		{
			updateNav(index);
			loadImg(index + 1);
		} 
	});
}
