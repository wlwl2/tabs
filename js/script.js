//http://www.tutorialrepublic.com/codelab.php?topic=faq&file=bootstrap-keep-last-selected-tab-active-on-page-refresh

var juis = {};

juis.tabList = {
  tabs: document.querySelectorAll(".g-tab"),
  init: function() {
    //if the tab list doesn't exist
    if (!document.querySelector(".g-tablist")) {
      return;
    }
    juis.tabList.setup();
    juis.tabList.bind();
    juis.tabList.activateTab();
  },
  setup: function () {
    //show tabs
    document.querySelector(".g-tablist").setAttribute("aria-hidden", "false");

    //check if any tabs are highlighted
    //if not, default to first
    //hide non-selected tabs
    if (localStorage.length > 0) {
      var tabbuttonid = localStorage.getItem("selectedtab").substr(localStorage.getItem("selectedtab").length - 1)
      document.getElementById("tab"+tabbuttonid).setAttribute("aria-hidden", "false");
    }
    else {
      document.getElementById("tab1").setAttribute("aria-hidden", "false");
      document.getElementById("tab2").setAttribute("aria-hidden", "true");
      document.getElementById("tab3").setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', 'tabbutton1')
    }


  },
  bind: function() {
    //if any of the tabs are clicked run activateTab
    for (var i=0; i++; i < juis.tabList.tabs.length) {
      juis.tabList.tabs.addEventListener("click", juis.tabList.activateTab);
    }
  },
  activateTab: function () {
    //switch to the selected tab
    //when the first tab is clicked, show its tab panel and hide the other tab panels
    document.getElementById("tabbutton1").onclick = function(){
      document.getElementById("tab1").setAttribute("aria-hidden", "false");
      document.getElementById("tab2").setAttribute("aria-hidden", "true");
      document.getElementById("tab3").setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', 'tabbutton1')
    }
    //when the second tab is clicked, show its tab panel and hide the other tab panels
    document.getElementById("tabbutton2").onclick = function(){
      document.getElementById("tab2").setAttribute("aria-hidden", "false");
      document.getElementById("tab1").setAttribute("aria-hidden", "true");
      document.getElementById("tab3").setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', 'tabbutton2')
    }
    //when the third tab is clicked, show its tab panel and hide the other tab panels
    document.getElementById("tabbutton3").onclick = function(){
      document.getElementById("tab3").setAttribute("aria-hidden", "false");
      document.getElementById("tab2").setAttribute("aria-hidden", "true");
      document.getElementById("tab1").setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', 'tabbutton3')
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  juis.tabList.init();
});
