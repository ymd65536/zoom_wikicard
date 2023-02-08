document.getElementById("btn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onRun,
  });
});

function onRun() {
  chrome.storage.sync.get(null, (options) => {
    let table = window.open("about:blank");
    // table.document.write(window.document.getElementById("loom").innerHTML);
    body_html = window.document.body.innerHTML;
    head_html = window.document.head.innerHTML;
    table.document.write(body_html + head_html);
    table.document.getElementById("global").remove();
    table.document.getElementById("projectNav").remove();
    table.document.getElementById("bodyRight").remove();
    content_outer = table.document.getElementsByClassName("content-outer").item(0);
    content_outer.style.margin = "0";
  });
}