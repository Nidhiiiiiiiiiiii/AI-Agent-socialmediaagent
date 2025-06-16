// import React, { useState } from "react";
// import { generatePost } from "../services/api";

// export default function GeneratorForm() {
//   const [videoId, setVideoId] = useState("");
//   const [platform, setPlatform] = useState("LinkedIn");
//   const [post, setPost] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     try {
//       const data = await generatePost(videoId, platform);
//       setPost(data.post);
//     } catch (error) {
//       alert("Error generating post");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Social Media Post Generator</h2>
//       <input
//         type="text"
//         placeholder="Enter YouTube Video ID"
//         value={videoId}
//         onChange={(e) => setVideoId(e.target.value)}
//       />
//       <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
//         <option>LinkedIn</option>
//         <option>Instagram</option>
//       </select>
//       <button onClick={handleGenerate} disabled={loading}>
//         {loading ? "Generating..." : "Generate Post"}
//       </button>
//       {post && (
//         <div style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>
//           <h4>{platform} Post:</h4>
//           <p>{post}</p>
//         </div>
//       )}
//     </div>
//   );
// }








import React, { useState } from "react";
import { generatePost } from "../services/api";
import { Youtube, Sparkles, Copy, Check, Loader2, AlertCircle } from "lucide-react";

export default function GeneratorForm() {
  const [videoId, setVideoId] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!videoId.trim()) {
      setError("Please enter a YouTube video ID");
      return;
    }

    setLoading(true);
    setError("");
    setPost("");
    
    try {
      const data = await generatePost(videoId.trim(), platform);
      setPost(data.post);
    } catch (error) {
      setError("Failed to generate post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(post);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text');
    }
  };

  const extractVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return url;
  };

  const handleVideoIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const extractedId = extractVideoId(value);
    setVideoId(extractedId);
    setError("");
  };

  return (
    <div className="app-container">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-icon">
            <Sparkles />
          </div>
          <h1>
            Social Media Post
            <span className="gradient-text"> Generator</span>
          </h1>
          <p>
            Transform your YouTube videos into engaging social media content with AI-powered captions
          </p>
        </div>

        {/* Main Form */}
        <div className="main-card">
          <div className="form-grid">
            {/* Input Section */}
            <div className="input-section">
              <div className="form-group">
                <label className="form-label">
                  YouTube Video
                </label>
                <div className="input-wrapper">
                  <Youtube className="input-icon" />
                  <input
                    type="text"
                    placeholder="Enter video ID or YouTube URL"
                    value={videoId}
                    onChange={handleVideoIdChange}
                    className="form-input"
                  />
                </div>
                <p className="input-help">
                  Paste a YouTube URL or enter the video ID directly
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Target Platform
                </label>
                <div className="platform-grid">
                  {['LinkedIn', 'Instagram'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`platform-button ${platform === p ? 'active' : ''}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !videoId.trim()}
                className="generate-button"
              >
                {loading ? (
                  <>
                    <Loader2 className="loading-spinner" />
                    Generating Magic...
                  </>
                ) : (
                  <>
                    <Sparkles />
                    Generate Post
                  </>
                )}
              </button>

              {error && (
                <div className="error-message">
                  <AlertCircle />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Preview Section */}
            <div className="preview-section">
              <h3 className="preview-header">Preview</h3>
              
              {loading ? (
                <div className="preview-loading">
                  <div className="preview-loading-content">
                    <Loader2 className="loading-spinner" />
                    <p>Creating your perfect post...</p>
                  </div>
                </div>
              ) : post ? (
                <div className="preview-content">
                  <div className="preview-meta">
                    <span className="platform-tag">
                      {platform} Post
                    </span>
                    <button onClick={handleCopy} className="copy-button">
                      {copied ? (
                        <>
                          <Check />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="post-content">
                    {post}
                  </div>
                </div>
              ) : (
                <div className="preview-empty">
                  <div className="preview-empty-content">
                    <Youtube />
                    <p>Your generated post will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon purple">
              <Sparkles />
            </div>
            <h3>AI-Powered</h3>
            <p>
              Advanced AI analyzes your video content to create engaging posts
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon blue">
              <Copy />
            </div>
            <h3>One-Click Copy</h3>
            <p>
              Copy your generated content instantly with a single click
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon indigo">
              <Youtube />
            </div>
            <h3>Multi-Platform</h3>
            <p>
              Optimized content for LinkedIn, Instagram, and more platforms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}