import '../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-headerTop">
        <h1>Beautiful Future Privacy Policy</h1>
        <div className="longTextContainer">
          <p className="heading">Introduction</p>
          <p>
This Privacy Policy governs the collection, use, and disclosure of personal information collected through the game "Beautiful Future", which includes a multiplayer component. This policy applies to all users of the game, including those who play the game on any platform (including mobile devices, computer systems, or gaming consoles).
</p>
<p className="heading">Information Collection and Use</p> 
<p>
"Beautiful Future" collects personal information in several ways, including:
<ul>
  <li>Information you provide: When you create a user account in the game, you may be asked to provide personal information such as your username, email address, and password.</li>
  <li>Information collected through gameplay: The game collects information about your gameplay, including your scores, achievements, and interactions with other players.</li>
  <li>Information from third-party services: If you choose to connect your "Beautiful Future" account with a third-party service (such as Facebook or Google), we may collect information from that service, including your name, profile picture, and friends list.</li>
</ul>
"Beautiful Future" uses the information collected for the following purposes:
<ul>
  <li>To provide the game and its features: We use the information to provide you with the game and its features, including the multiplayer component.</li>
  <li>To improve the game: We use the information to understand how players use the game and to make improvements.</li>
  <li>To communicate with you: We may use your email address or in-game messaging system to communicate with you about the game, including updates, promotions, and other news.</li>
</ul>
<p className="heading">Disclosure of Personal Information</p> 
"Beautiful Future" will not disclose your personal information to third parties, except in the following circumstances:
<ul>
  <li>With your consent: We may share your personal information with third parties if you have provided your consent.</li>
  <li>For legal reasons: We may disclose your personal information if we are required to do so by law or if we believe that such action is necessary to comply with legal process, to protect and defend the rights or property of "Beautiful Future", or to protect the personal safety of users of the game.</li>
</ul>
<p className="heading">Data Security</p> 
"Beautiful Future" takes reasonable measures to protect the security of your personal information. However, no data transmission over the internet can be guaranteed to be 100% secure, and we cannot guarantee the security of any information you transmit to us.

<p className="heading">Changes to This Privacy Policy</p> 
"Beautiful Future" may modify this Privacy Policy from time to time, and any changes will be posted on this page. If we make any material changes to this Privacy Policy, we will notify you through the game or by email.

<p className="heading">Contact Information</p>

If you have any questions or concerns about this Privacy Policy, please contact us at awingaming420@gmail.com.

<p className="heading">Effective Date: 02/11/2023</p>
</p>
        </div>
        <div className="ButtonMenu">
          <button onClick={() => navigate('/')}>Return Home</button>
        </div>
      </header>
    </div>
  )
}