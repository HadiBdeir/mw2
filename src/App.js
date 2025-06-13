import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "./HomeScreen";
import CyberSecurityAndPrivacy from "./CybersecurityAndPrivacy.js";
import AccountProtectionScreen from "./Account_Protection_Screen";
import DeviceProtectionScreen from "./Device_Protection_Screen";
import PhishingScreen from "./Phishing_Screen.js";
import BlackmailScreen from "./Blackmail_screen.js";
import Cyberattacks from "./Cyberattack_screen.js";
import DigitalPrivacyScreen from "./Digital_Privacy_Screen.js";
import CreatingStrongPasswordScreen from "./Creating_Strong_Password_Screen.js";
import ComingSoonScreen from "./Coming_Soon_Screen.js";
import DictionaryScreen from "./Dictionary_Screen.js";
import DigitalCitizenship from "./Digital_Citizenship_Screen.js";
import AboutUs from "./About_Us.js";
import DigitalJourneysHomepage from "./Digital_Journeys_Homepage_Screen.js";
import DigitalJourneysSample from "./Digital_Journeys_Sample_Screen.js";

function App() {
    return (
        <BrowserRouter basename="/mw2">
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/resources-cybersecurity" element={<CyberSecurityAndPrivacy />} />
                <Route path="/account-protection-screen" element={<AccountProtectionScreen />} />
                <Route path="/device-protection-screen" element={<DeviceProtectionScreen />} />
                <Route path="/phishing-screen" element={<PhishingScreen />} />
                <Route path="/blackmail-screen" element={<BlackmailScreen />} />
                <Route path="/cyberattacks-screen" element={<Cyberattacks />} />
                <Route path="/digital_privacy_screen" element={<DigitalPrivacyScreen />} />
                <Route path="/creating_strong_password_screen" element={<CreatingStrongPasswordScreen />} />
                <Route path="/coming-soon-screen" element={<ComingSoonScreen />} />
                <Route path="/dictionary-screen" element={<DictionaryScreen />} />
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/digital-citizenship" element={<DigitalCitizenship/>}/>
                <Route path="/digital-journeys-homepage-screen" element={<DigitalJourneysHomepage/>}/>
                <Route path="/digital-journeys-sample-screen" element={<DigitalJourneysSample/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
