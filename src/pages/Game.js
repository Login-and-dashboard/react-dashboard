import React, { useEffect, useRef } from "react";
import "../game.css";

const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/Build/btcwars_webgl.loader.js";
    script.async = true;
    script.onload = () => {
      const container = document.querySelector("#unity-container");
      const loadingBar = document.querySelector("#unity-loading-bar");
      const progressBarFull = document.querySelector(
        "#unity-progress-bar-full"
      );
      const fullscreenButton = document.querySelector(
        "#unity-fullscreen-button"
      );
      const warningBanner = document.querySelector("#unity-warning");

      function unityShowBanner(msg, type) {
        function updateBannerVisibility() {
          warningBanner.style.display = warningBanner.children.length
            ? "block"
            : "none";
        }
        var div = document.createElement("div");
        div.innerHTML = msg;
        warningBanner.appendChild(div);
        if (type === "error") div.style = "background: red; padding: 10px;";
        else {
          if (type === "warning")
            div.style = "background: yellow; padding: 10px;";
          setTimeout(function () {
            warningBanner.removeChild(div);
            updateBannerVisibility();
          }, 5000);
        }
        updateBannerVisibility();
      }

      const buildUrl = "Build";
      const config = {
        dataUrl: buildUrl + "/btcwars_webgl.data",
        frameworkUrl: buildUrl + "/btcwars_webgl.framework.js",
        codeUrl: buildUrl + "/btcwars_webgl.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "BTC MACHINE",
        productName: "BTC WARS",
        productVersion: "1.1",
        showBanner: unityShowBanner,
      };

      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content =
          "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
        document.getElementsByTagName("head")[0].appendChild(meta);
        container.className = "unity-mobile";
        canvasRef.current.className = "unity-mobile";
        unityShowBanner("WebGL builds are not supported on mobile devices.");
      } else {
        canvasRef.current.style.width = "960px";
        canvasRef.current.style.height = "600px";
      }

      loadingBar.style.display = "block";

      const loaderScript = document.createElement("script");
      loaderScript.src = buildUrl + "/btcwars_webgl.loader.js";
      loaderScript.onload = () => {
        window
          .createUnityInstance(canvasRef.current, config, (progress) => {
            if (progressBarFull) {
              progressBarFull.style.width = 100 * progress + "%";
            }
          })
          .then((unityInstance) => {
            loadingBar.style.display = "none";
            if (fullscreenButton) {
              fullscreenButton.onclick = () => {
                unityInstance.SetFullscreen(1);
              };
            }
          })
          .catch((message) => {
            alert(message);
          });
      };
      document.body.appendChild(loaderScript);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      
      <div id="unity-container" className="unity-desktop">
        <canvas
          ref={canvasRef}
          id="unity-canvas"
          width={960}
          height={600}
        ></canvas>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div id="unity-fullscreen-button"></div>
          <div id="unity-build-title">BTC WARS</div>
        </div>
      </div>
    </>
  );
};

export default Game;
