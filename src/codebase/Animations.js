
document.addEventListener("click", function(e) {
    var RoomFooter = document.getElementById('RoomFooter');
    var guyssvg = document.getElementById('guyssvg');
    var settingsContainer = document.getElementById('settingsContainer');
    if (e.target.className!="addlist" && Animations.SocialOptionsDropUpListOpened) {
        Animations.OpenAddList(false);
    }
    else if ((e.target.parentNode === RoomFooter || e.target.parentNode === guyssvg) && !Animations.SocialOptionsDropUpListOpened) {
        Animations.OpenAddList(true);
    }
    if(e.target.parentNode === settingsContainer && !Animations.SocialOptionsDropUpSettingsOpened){
        Animations.OpenSettings(false);
    }
    else if(Animations.SocialOptionsDropUpSettingsOpened){
        Animations.OpenSettings(true);
    }
});
class Animations {
static SocialOptionsDropUpListOpened = false;
static SocialOptionsDropUpSettingsOpened = false;
static CloseModal(){
    document.location= "#close"
  }
static OpenModal(adrs){
document.location= "#openModal" + adrs;
}
static OpenSettings(flag){
    var Cog = document.getElementById('settings');
    var List = document.getElementById('settingsList');
    var chathead = document.getElementById('chathead');
    var s1 = document.getElementById('setting1');
    var s2 = document.getElementById('setting2');
    var s3 = document.getElementById('setting3');
    var s4 = document.getElementById('setting4');
    var s5 = document.getElementById('setting5');
    if(!flag){  
        List.style.display = 'flex';
        let start = Date.now();
    
          let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            Cog.style.transform  = 'rotate('+ (timePassed / 4) +'deg)';
            List.style.width = (timePassed *75  /800)  + '%';
            List.style.left = (88-timePassed *70  /800)+'%';
            chathead.style.backgroundColor = 'rgba(22, 34, 48,'+ timePassed / 1600 +')';
            if(timePassed > 0){ s1.style.display = 'flex';}
            if(timePassed > 160){ 
                s2.style.display = 'flex';}
            if(timePassed > 320 ){ 
                s1.style.opacity = (timePassed-320)/480;
                s2.style.opacity = (timePassed-320)/480;
                s3.style.opacity = (timePassed-320)/480;
                s4.style.opacity = (timePassed-320)/480;
                s5.style.opacity = (timePassed-320)/480;
                s3.style.display = 'flex';}
            if(timePassed > 480){ s4.style.display = 'flex';}
            if(timePassed > 640){ s5.style.display = 'flex';}
            if (timePassed > 800 ) {
                List.style.left = '18%';
                List.style.width = '75%';
                chathead.style.backgroundColor = 'rgba(22, 34, 48,0.5)';
              clearInterval(timer);
            }
    
          }, 20);
          this.SocialOptionsDropUpSettingsOpened = true;
    }
    else{
        let start = Date.now();
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            Cog.style.transform  = 'rotate('+ (timePassed / 4) +'deg)';
            List.style.width = 75 -(timePassed *75  /800)  + '%';
            List.style.left = (18+timePassed *70  /800)+'%';
            chathead.style.backgroundColor = 'rgba(22, 34, 48,'+ (0.5 - (timePassed / 1600)) +')';
            if(timePassed > 0){ 
                s1.style.opacity = 1-(timePassed)/480;
                s2.style.opacity = 1-(timePassed)/480;
                s3.style.opacity = 1-(timePassed)/480;
                s4.style.opacity = 1-(timePassed)/480;
                s5.style.opacity = 1-(timePassed)/480;
            }
            if (timePassed > 800 ) {
                s1.style.display ='none';
                s2.style.display ='none';
                s3.style.display ='none';
                s4.style.display ='none';
                s5.style.display ='none';
                List.style.left = '88%';
                List.style.width = '0%';
                chathead.style.backgroundColor = 'rgba(22, 34, 48,0)';
              clearInterval(timer);
            }
    
          }, 20);
            this.SocialOptionsDropUpSettingsOpened = false;
    }
}
static OpenAddList(flag){
  
    var lol1 = document.getElementById('arrow1');
    var lol2 = document.getElementById('arrow2');
    var List = document.getElementById('addlist');
    if(!flag){
  
      let start = Date.now();
  
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
  
          lol1.style.transform  = 'rotate('+ (180 - (timePassed / 2)) +'deg)';
          lol2.style.transform  = 'rotate('+ (180 - (timePassed / 2)) +'deg)';
          List.style.top = '-'+ (120 - (timePassed / 3)) +'%';
          lol1.style.opacity = 1 - timePassed/358;
          lol2.style.opacity = 1 - timePassed/358;
  
          if (timePassed > 358) {
            List.style.display = 'none';
            lol1.style.display = "none";
            lol2.style.display = "none";
            clearInterval(timer);
          }
  
        }, 10);
        this.SocialOptionsDropUpListOpened = false;
    }
    else if(flag){
      List.style.display = 'flex';
      let start = Date.now();
  
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
  
        lol1.style.transform  = 'rotate('+ timePassed / 2 +'deg)';
        lol2.style.transform  = 'rotate('+ timePassed / 2 +'deg)';
        List.style.top = '-'+ timePassed / 3 +'%';
        lol1.style.opacity = timePassed/358;
        lol2.style.opacity = timePassed/358;
  
        if (timePassed > 358) clearInterval(timer);
  
      }, 10);
      this.SocialOptionsDropUpListOpened = true;
      lol1.style.display = "flex";
      lol2.style.display = "flex";
    }
  }
}
export default Animations;