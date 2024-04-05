import React from "react";
import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";

const webWidth = window.innerWidth;
const webHeight = window.innerHeight;

const webglWidth =
  webWidth / webHeight > 1920 / 890 ? (webHeight * 1920) / 890 : webWidth;
const webglHeight =
  webWidth / webHeight > 1920 / 890 ? webHeight : (webWidth * 890) / 1920;

const App = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/WebGL.loader.js",
    dataUrl: "build/WebGL.data",
    frameworkUrl: "build/WebGL.framework.js",
    codeUrl: "build/WebGL.wasm",
  });

  return (
    <WebGLWrapper>
      <WebGLContainer>
        <WebGLProvider unityProvider={unityProvider} />
      </WebGLContainer>
    </WebGLWrapper>
  );
};

const WebGLWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const WebGLContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
`;
const WebGLProvider = styled(Unity)`
  width: ${webglWidth}px;
  height: ${webglHeight}px;
  
`;
export default App;
