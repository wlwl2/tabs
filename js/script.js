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
  },
  setup: function () {
    //show tabs
    document.querySelector(".g-tablist").setAttribute("aria-hidden", "false");

    //check if any tabs are highlighted
    //if not, default to first
    //hide non-selected tabs

  },
  bind: function() {
    for (var i=0; i++; i < juis.tabList.tabs.length) {
      juis.tabList.tabs.addEventListener("click", juis.tabList.activateTab);
    }
  },
  activateTab: function () {
    //switch to the selected tab

  }
};

document.addEventListener("DOMContentLoaded", function() {
  juis.tabList.init();
});
