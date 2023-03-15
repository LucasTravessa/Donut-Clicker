import { Component } from "react";
import "./styles.css";

// Import your audio file
import song from "../../assets/sound.mp3";

class AudioButton extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <>
        {/* Button to call our main function */}
        <div
          onClick={this.playPause}
          className={this.state.isPlaying ? "play-btn" : "pause-btn"}
        ></div>
      </>
    );
  }
}

export default AudioButton;
