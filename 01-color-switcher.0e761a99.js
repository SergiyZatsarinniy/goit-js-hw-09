!function(){var t=null,n={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};n.startBtn.addEventListener("click",(function(){n.startBtn.disabled=!0,n.stopBtn.disabled=!1,t=setInterval((function(){n.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.stopBtn.addEventListener("click",(function(){n.startBtn.disabled=!1,n.stopBtn.disabled=!0,clearInterval(t)})),n.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.0e761a99.js.map