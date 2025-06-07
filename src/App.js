import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "./HomeScreen";
import ResourcesCyberSecurityAndPrivacy from "./CybersecurityAndPrivacy.js";
import AccountProtectionScreen from "./Account_Protection_Screen";
import DeviceProtectionScreen from "./Device_Protection_Screen";
import PhishingScreen from "./Phishing_Screen.js";
import BlackmailScreen from "./Blackmail_screen.js";
import Cyberattacks from "./Cyberattack_screen.js";
import DigitalPrivacyScreen from "./Digital_Privacy_Screen.js";
import CreatingStrongPasswordScreen from "./Creating_Strong_Password_Screen.js";

function App() {
    return (
        <BrowserRouter basename="/mw2">
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/resources-cybersecurity" element={<ResourcesCyberSecurityAndPrivacy />} />
                <Route path="/account-protection-screen" element={<AccountProtectionScreen />} />
                <Route path="/device-protection-screen" element={<DeviceProtectionScreen />} />
                <Route path="/phishing-screen" element={<PhishingScreen />} />
                <Route path="/blackmail-screen" element={<BlackmailScreen />} />
                <Route path="/cyberattacks-screen" element={<Cyberattacks />} />
                <Route path="/digital_privacy_screen" element={<DigitalPrivacyScreen />} />
                <Route path="/creating_strong_password_screen" element={<CreatingStrongPasswordScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
