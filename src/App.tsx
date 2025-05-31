import { useState } from "react";

function App() {
  const tabs = [
    {
      id: "greetings",
      text: "あいさつ",
      audios: [
        { audio: "good morning", text: "おはよう" },
        { audio: "hello", text: "こんにちは" },
        { audio: "hello1", text: "こ↓ん↑にちは" },
        { audio: "good evening", text: "こんばんは" },
      ],
    },
    {
      id: "thanks",
      text: "ありがとう",
      audios: [{ audio: "thanks", text: "ありがとう" }],
    },
    {
      id: "love",
      text: "愛",
      audios: [
        { audio: "I love you", text: "愛してる" },
        { audio: "I really love you", text: "ほんと愛してる" },
      ],
    },
  ];

  const [currentTab, setCurrentTab] = useState<string>("greetings");

  return (
    <>
      <h1 className="is-size-3 has-text-weight-semibold">
        ずんだもん VCボタン
      </h1>

      <div className="tab-buttons">
        {tabs.map((tab) => {
          return (
            <button
              className={"tab-btn" + (tab.id === currentTab ? " active" : "")}
              data-tab={tab.id}
              onClick={() => {
                setCurrentTab(tab.id);
              }}
            >
              {tab.text}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        return (
          <div
            className={"category" + tab.id === currentTab ? " active" : ""}
            id={tab.id}
          >
            {tab.audios.map((audio) => {
              return (
                <button
                  className={
                    "sound-button button" +
                    (tab.id === currentTab ? "" : " is-hidden")
                  }
                  data-audio={audio.audio}
                  onClick={() => {
                    new Audio(`/sounds/${audio.audio}.wav`).play();
                  }}
                >
                  {audio.text}
                </button>
              );
            })}
          </div>
        );
      })}

      <footer>
        音声：
        <a href="https://voicevox.hiroshiba.jp/" target="_blank">
          VOICEVOX:ずんだもん
        </a>
      </footer>
    </>
  );
}

export default App;
