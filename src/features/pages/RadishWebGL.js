import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../../css/projects.css'

function RadishWebGL() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/RadishPartyGame.loader.js",
    dataUrl: "build/RadishPartyGame.data",
    frameworkUrl: "build/RadishPartyGame.framework.js",
    codeUrl: "build/RadishPartyGame.wasm"
  });
  return <Unity unityProvider={unityProvider} devicePixelRatio={window.devicePixelRatio} style={{ width: "100vw", height: "100vh"}}/>;
}

export default RadishWebGL;