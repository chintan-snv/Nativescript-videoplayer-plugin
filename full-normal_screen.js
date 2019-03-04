var viewx = android.view.View;
 const view_n = require("tns-core-modules/ui/core/view");

   var isFullScreen="";
    var fullscreenx = android.widget.MediaController.extend({
    init:function(context){
        ;
    },
    setAnchorView:function(view) {

        this.super.setAnchorView(view);

        //image button for full screen to be added to media controller
        var fullScreen = new      android.widget.ImageButton(this.super.getContext());

        var params = new FrameLayout.LayoutParams(80,80);
        params.gravity = Gravity.RIGHT;
        // params.layout_width = 'wrap_content';
        // params.layout_height = 'match_parent'; MATCH_PARENT
        //fullScreen.style="background-color:#000000; background-image: url('~/images/info.png'); background-repeat:no-repeat;background-size: 40 40;background-position:center center;";
        params.rightMargin = 80; 
  var x = this.super.getContext().getResources().getIdentifier("minimizescreen", "drawable", 
  this.super.getContext().getPackageName() );
  var y = this.super.getContext().getResources().getIdentifier("fullscreen", "drawable", 
  this.super.getContext().getPackageName() );
         
       // fullScreen.setBackgroundResource("@drawable/icon");
       
       this.addView(fullScreen, params);

        //fullscreen indicator from intent
     //   isFullScreen =  view.getContext().getIntent().
                             //   getStringExtra("fullScreenInd");

        if(isFullScreen=="y"){
             fullScreen.setImageResource(x);
            //fullScreen.setBackgroundResource(R.drawable.buttonOff);
            //fullScreen.setImageResource(this.getContext().getResources().getDrawable(android.support.customtabs.R.drawable.icon));
            // console.log('android.R.drawable.ic_fullscreen_exit=============',android.support.customtabs.R.drawable(), android.support.customtabs.R.drawable.abc_ic_star_black_16dp());
        }else{
             fullScreen.setImageResource(y);
            //fullScreen.setBackgroundResource(R.drawable.buttonOn);
  //fullScreen.setImageResource(this.getContext().getResources().getDrawable(android.support.customtabs.R.drawable.icon));
            // console.log('android.R.drawable.ic_fullscreen=============',android.support.customtabs.R.drawable, android.support.customtabs.R.drawable.abc_popup_background_mtrl_mult());
        }

            var completionListener = new  android.view.View.OnClickListener({
                onClick: function(v) {
                            if(isFullScreen=="y"){
                                isFullScreen ="";
                                var nativeVideoPlayer12 = frame.topmost().getViewById("nativeVideoPlayer12");
                                var currenttime12 =  nativeVideoPlayer12.getCurrentTime();
                                const navEntryWithContext = {
                                        moduleName: "home/videosingle",
                                        context: {
                                            url: url,
                                            currenttime:currenttime12,
                                            data:breadcrumvar[breadcrumvar.length-1]
                                        }
                                    };

                                frame.topmost().navigate(navEntryWithContext);    
                                console.log('Video small screen');
                            }else{ 
                                isFullScreen ="y";
                                console.log('Video fullscreen');
                                 var nativeVideoPlayer = frame.topmost().getViewById("nativeVideoPlayer");
                                   console.log(nativeVideoPlayer.getCurrentTime() ,nativeVideoPlayer.src);
                                   var url = nativeVideoPlayer.src;
                                   var currenttime =  nativeVideoPlayer.getCurrentTime();
                                   const navEntryWithContext = {
                                        moduleName: "home/v",
                                        context: {
                                            url: url,
                                            currenttime:currenttime,
                                            data:frame.topmost().navigationContext
                                        }
                                    };

                                    frame.topmost().navigate(navEntryWithContext);
                            }
                }
            });
            fullScreen.setOnClickListener(completionListener);
    }
});
