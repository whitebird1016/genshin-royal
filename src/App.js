import React from "react";
import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";
import LoadImg from "./assets/load.gif";
import LogoImg from "./assets/logo.png";

const webWidth = window.innerWidth;
const webHeight = window.innerHeight;

const webglWidth =
  webWidth / webHeight > 1920 / 890 ? (webHeight * 1920) / 890 : webWidth;
const webglHeight =
  webWidth / webHeight > 1920 / 890 ? webHeight : (webWidth * 890) / 1920;

const App = () => {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "build/WebGL.loader.js",
    dataUrl: "build/WebGL.data",
    frameworkUrl: "build/WebGL.framework.js",
    codeUrl: "build/WebGL.wasm",
  });

  const outputConsole = () => {
    const progress = Math.floor(loadingProgression * 100);
    switch (progress) {
      case 1:
        console.log("Just Started");
        break;
      case 50:
        console.log("Please take your time");
        break;
      case 90:
        console.log("Almost Done");
        break;

      default:
        break;
    }
  }
  outputConsole()
  return (
    <WebGLWrapper>
      {loadingProgression < 1 && (
        <LoadWrapper>
          <Logo src={LogoImg} alt="logo" />
          <Load src={LoadImg} alt="Loading..." />
        </LoadWrapper>
      )}

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
  background:black;
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
const LoadWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%
`
const Load = styled.img`
`
const Logo = styled.img`
  width:350px;
`
export default App;
