$(w).resize(function()
{
	sw = document.documentElement.clientWidth;
  sh = document.documentElement.clientHeight;
  checkMobile();
});
  
//Check if Mobile
//function checkMobile()
//{
//	mobile = (sw > breakpoint) ? false : true;
//  if (!mobile) 
//  { 
//  	$('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
//  } 
//  else 
//  { 
//  	if(!$('#nav-anchors a').hasClass('active'))
//  	{
//    	$('#nav,#search').hide(); //Hide full navigation and search
//    }
//  }
//}
