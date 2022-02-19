	//slide show function for home page only
	function slideShow(stageType) {
	  window.addEventListener("DOMContentLoaded", function(e) {
    const stage = document.getElementById(stageType);
    const fadeComplete = function(e) { stage.appendChild(arr[0]); };
    const arr = stage.getElementsByTagName("img");
    for(let i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  }, false);
}
	
	slideShow("stage_pc");
	slideShow("stage_tablet");
	



