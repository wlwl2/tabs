//http://www.tutorialrepublic.com/codelab.php?topic=faq&file=bootstrap-keep-last-selected-tab-active-on-page-refresh

var juis = {};

juis.tabList = {
  tabs: document.querySelectorAll(".g-tab"),
  tabpanels: document.querySelectorAll(".g-tabpanel"),
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
      document.getElementById("tab"+localStorage.getItem("selectedtab")).setAttribute("aria-hidden", "false");
    }
    else {
      juis.tabList.tabpanels[0].setAttribute("aria-hidden", "false");
      juis.tabList.tabpanels[1].setAttribute("aria-hidden", "true");
      juis.tabList.tabpanels[2].setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', '1')
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
    //no point having bind?
    //how to loop
    //when the first tab is clicked, show its tab panel and hide the other tab panels
    juis.tabList.tabs[0].onclick = function(){
      juis.tabList.tabpanels[0].setAttribute("aria-hidden", "false");
      juis.tabList.tabpanels[1].setAttribute("aria-hidden", "true");
      juis.tabList.tabpanels[2].setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', '1')
    }
    //when the second tab is clicked, show its tab panel and hide the other tab panels
    juis.tabList.tabs[1].onclick = function(){
      juis.tabList.tabpanels[1].setAttribute("aria-hidden", "false");
      juis.tabList.tabpanels[0].setAttribute("aria-hidden", "true");
      juis.tabList.tabpanels[2].setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', '2')
    }
    //when the third tab is clicked, show its tab panel and hide the other tab panels
    juis.tabList.tabs[2].onclick = function(){
      juis.tabList.tabpanels[2].setAttribute("aria-hidden", "false");
      juis.tabList.tabpanels[1].setAttribute("aria-hidden", "true");
      juis.tabList.tabpanels[0].setAttribute("aria-hidden", "true");
      localStorage.setItem('selectedtab', '3')
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  juis.tabList.init();
});
