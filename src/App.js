import React, { Component } from "react";
import { Theme } from "packard-belle";
import cx from "classnames";
import "./App.css";
import TaskBar from "./components/TaskBar";
import WindowManager from "./components/WindowManager";
import ProgramProvider from "./contexts/programs";
import SettingsProvider, { SettingsContext } from "./contexts/settings";
import TaskManager from "./components/TaskManager";
import DesktopView from "./components/DesktopView";
import Settings from "./components/Settings";

class Desktop extends Component {
  static contextType = SettingsContext;

  componentDidMount() {
    if (window.innerWidth < 800) {
      this.context.toggleMobile(true);
    }
  }

  render() {
    const { context } = this;
    return (
      <ProgramProvider>
        <Theme
          className={cx("desktop", {
            desktopX2: context.scale === 2,
            notMobile: !context.isMobile
          })}
        >
          <DesktopView />
          <TaskBar />
          <WindowManager />
          <TaskManager />
          <Settings />
        </Theme>
      </ProgramProvider>
    );
  }
}

const App = () => (
  <SettingsProvider>
    <Desktop />
  </SettingsProvider>
);

// include corner thing if resizable
// body of explorer window needs to fill space

export default App;
