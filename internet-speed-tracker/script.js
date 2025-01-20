function startSpeedTest() {
  const imageUrl = "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"; // Test image URL
  const fileSize = 400000; //400kb size
  const progressBar = document.getElementById("progress");
  const statusElement = document.getElementById("status");
  const downloadSpeedElement = document.getElementById("downloadSpeed");

  progressBar.style.width = "0%";
  statusElement.textContent = "Testing download speed...";
  downloadSpeedElement.innerHTML = "";

  //downloding start time set
  const startTime = new Date().getTime();
  const img = new Image();

  //if img loaded then show msg
  img.onload = () => {
    const endTime = new Date().getTime();
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedInBps = fileSize / durationInSeconds; 
    const speedInKbps = speedInBps / 1024; 
    const speedInMbps = speedInKbps / 1024; 
    const speedInGbps = speedInMbps / 1024;

    statusElement.textContent = "Download test complete.";
    downloadSpeedElement.innerHTML = `
      <p><strong>Download Speed:</strong></p>
      <p>Bytes per sec (Byte): ${speedInBps.toFixed(2)}</p>
      <p>Kilobytes per sec (KB): ${speedInKbps.toFixed(2)}</p>
      <p>Megabytes per sec (MB): ${speedInMbps.toFixed(2)}</p>
      <p>Gigabytes per sec (GB): ${speedInGbps.toFixed(6)}</p>
    `;
    progressBar.style.width = "100%";
  };

  img.onerror = () => {
    statusElement.textContent = "Error: Unable to test download speed.";
  };

  //progress bar update while downloading
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;
    if (progress >= 90) clearInterval(progressInterval);
  }, 100);

  img.src = imageUrl + "?cacheBust=" + new Date().getTime();
}

document.getElementById("startTest").addEventListener("click", startSpeedTest);