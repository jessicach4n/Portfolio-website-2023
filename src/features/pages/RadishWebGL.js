import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import '../../css/projects.css'

function RadishWebGL() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/RadishPartyGame.loader.js",
    dataUrl: "build/RadishPartyGame.data",
    frameworkUrl: "build/RadishPartyGame.framework.js",
    codeUrl: "build/RadishPartyGame.wasm",
  });
  return <Unity unityProvider={unityProvider} style={{ width: "1920px", height: "1080px"}}/>;
}

export default RadishWebGL;