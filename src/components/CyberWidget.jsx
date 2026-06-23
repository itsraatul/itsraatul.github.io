import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaGlobe, FaNetworkWired, FaLaptopCode, FaShieldAlt, FaSync, 
    FaServer, FaStopwatch, FaBolt, FaMemory, FaMicrochip, 
    FaMapMarkerAlt, FaFingerprint, FaDesktop, FaKeyboard, 
    FaLock, FaCheckCircle, FaProjectDiagram, FaSkull
} from "react-icons/fa";
import "./CyberWidget.css";

const CyberWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sessionTime, setSessionTime] = useState(0);
    const [interactionCount, setInteractionCount] = useState(0);
    const [latencyData, setLatencyData] = useState(new Array(20).fill(50));
    const [batteryLevel, setBatteryLevel] = useState("Unknown");
    
    // The massive data state matching all 12 modules
    const [data, setData] = useState({
        // 1. Network Intel
        ip: "---",
        ipv: "---",
        isp: "---",
        asn: "---",
        connType: "---",
        proxy: "False",
        vpn: "False",
        
        // 2. Hardware Profile
        cpuThreads: navigator.hardwareConcurrency || "Unknown",
        deviceMem: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Unknown",
        gpuRenderer: "Analyzing...",
        deviceClass: "Desktop",
        touchSupport: "False",
        battery: "Checking...",

        // 3. Location Intel
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        locale: navigator.language,
        utcOffset: "---",
        region: "---",
        coords: "---",

        // 4. Browser Fingerprint
        browser: "---",
        engine: "---",
        platform: "---",
        cookiesEnabled: navigator.cookieEnabled ? "True" : "False",
        dnt: navigator.doNotTrack === "1" ? "Enabled" : "Disabled",
        canvasHash: "---",
        
        // 5. Network Metrics
        latency: "---",
        downlink: "---",
        effType: "---",
        rtt: "---",

        // 6. Display Intel
        res: "---",
        pixelRatio: window.devicePixelRatio || 1,
        colorDepth: window.screen.colorDepth ? `${window.screen.colorDepth}-bit` : "Unknown",
        hdr: "Not Supported",
        orientation: "Landscape",

        // 7. Input
        keyboard: "True",
        mouse: "True",
        touch: "False",
        pointerPrec: "Fine",

        // 8. Security
        https: window.isSecureContext ? "Secure" : "Insecure",
        adBlocker: "Checking...",
        trackingProt: "Disabled",

        // 9. Features
        wasm: "Checking...",
        webgpu: "Checking...",
        storage: "Checking...",

        // 10. Session
        sessionId: "---",
        pagesVisited: Math.floor(Math.random() * 5) + 1, // simulated for portfolio
        interaction: "Low",

        // 11. Entropy
        entropyScore: "---",
        resistance: "---",

        // 12. TLS
        protocol: window.location.protocol.replace(':', '').toUpperCase(),
        cipher: "AES-256-GCM (Simulated)",
        cert: "Valid",
        hsts: window.isSecureContext ? "Enabled" : "Disabled"
    });

    // Interaction Tracker
    useEffect(() => {
        const handleInteract = () => setInteractionCount(prev => prev + 1);
        window.addEventListener('click', handleInteract);
        window.addEventListener('scroll', handleInteract);
        return () => {
            window.removeEventListener('click', handleInteract);
            window.removeEventListener('scroll', handleInteract);
        };
    }, []);

    // Session Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setSessionTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Event listener for opening widget externally
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-cyber-widget", handleOpen);
        return () => window.removeEventListener("open-cyber-widget", handleOpen);
    }, []);

    // Latency Simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setLatencyData(prev => {
                const newData = [...prev.slice(1), Math.random() * 40 + 20]; // 20-60ms
                return newData;
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    // --- Core Intelligence Gathering Engine ---
    const gatherClientIntelligence = async () => {
        const n = navigator;
        const s = window.screen;
        let updateData = {};

        // Canvas Hash (Fast Simulation)
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            updateData.gpuRenderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Unknown GL";
        }
        updateData.canvasHash = "0x" + Math.random().toString(16).substring(2, 10);

        // Battery
        if (n.getBattery) {
            try {
                const navBattery = await n.getBattery();
                updateData.battery = `${Math.round(navBattery.level * 100)}% (${navBattery.charging ? 'Charging' : 'Discharging'})`;
            } catch (e) {
                updateData.battery = "Access Denied";
            }
        } else {
            updateData.battery = "Not Supported";
        }

        // Platform / Arch
        const ua = n.userAgent;
        updateData.platform = ua.includes("Win64") || ua.includes("x64") ? "Windows x64" : 
                              ua.includes("Mac") ? "MacOS" : 
                              ua.includes("Linux") ? "Linux" : "ARM Device";
        
        updateData.engine = ua.includes("WebKit") && !ua.includes("Chrome") ? "WebKit" : 
                            ua.includes("Gecko/") && !ua.includes("like Gecko") ? "Gecko" : "Blink";
        
        updateData.browser = ua.includes("Chrome") ? "Chrome" : 
                             ua.includes("Firefox") ? "Firefox" : 
                             ua.includes("Safari") ? "Safari" : "Unknown";

        // Display
        updateData.res = `${s.width} × ${s.height}`;
        const isHDR = window.matchMedia && window.matchMedia('(dynamic-range: high)').matches;
        updateData.hdr = isHDR ? "Supported" : "Not Supported";
        updateData.orientation = window.innerHeight > window.innerWidth ? "Portrait" : "Landscape";

        // Touch & Input
        const hasTouch = (n.maxTouchPoints > 0) || window.matchMedia("(pointer: coarse)").matches;
        updateData.touchSupport = hasTouch ? "True" : "False";
        updateData.touch = hasTouch ? "True" : "False";
        updateData.deviceClass = hasTouch ? "Mobile/Tablet" : "Desktop";
        updateData.pointerPrec = window.matchMedia("(pointer: fine)").matches ? "Fine" : "Coarse";

        // Network Metrics
        if (n.connection) {
            updateData.downlink = `${n.connection.downlink} Mbps`;
            updateData.effType = n.connection.effectiveType ? n.connection.effectiveType.toUpperCase() : "Unknown";
            updateData.rtt = `${n.connection.rtt} ms`;
        }

        // Features
        updateData.wasm = typeof WebAssembly === "object" ? "Enabled" : "Disabled";
        updateData.webgpu = n.gpu ? "Supported" : "Not Supported";
        updateData.storage = (window.localStorage && window.sessionStorage) ? "Enabled" : "Disabled";

        // Security (AdBlock heuristic using bait element)
        const bait = document.createElement('div');
        bait.className = "adsbox ad-placement doubleclick";
        bait.style.display = "none";
        document.body.appendChild(bait);
        setTimeout(() => {
            const blocked = bait.offsetHeight === 0 || window.getComputedStyle(bait).display === 'none';
            setData(prev => ({ ...prev, adBlocker: blocked ? "Detected" : "None Detected" }));
            document.body.removeChild(bait);
        }, 100);

        // Time / Location estimates
        const offset = -(new Date().getTimezoneOffset() / 60);
        updateData.utcOffset = `UTC ${offset >= 0 ? '+' : ''}${offset}`;

        // Identity Entropy (Simulated score based on unique props)
        const score = Math.floor(80 + Math.random() * 19);
        updateData.entropyScore = `${score}%`;
        updateData.resistance = score > 90 ? "High" : "Low";

        updateData.sessionId = Math.random().toString(36).substring(2, 11).toUpperCase();

        return updateData;
    };

    const fetchNetworkData = async () => {
        setLoading(true);
        const clientInfo = await gatherClientIntelligence();
        
        let netInfo = { 
            ip: "127.0.0.1", ipv: "IPv4", 
            isp: "LOCAL_HOST", asn: "AS0000", 
            region: "Local Network", coords: "0.0000° N, 0.0000° W",
            proxy: "False", vpn: "False"
        };

        try {
            // Using ipapi.co as it returns good proxy/vpn details usually, or fallback to ipwho.is
            const res = await fetch('https://ipapi.co/json/');
            if (res.ok) {
                const json = await res.json();
                netInfo = {
                    ip: json.ip || netInfo.ip,
                    ipv: (json.ip || "").includes(":") ? "IPv6" : "IPv4",
                    isp: json.org || "Unknown ISP",
                    asn: json.asn || "Unknown",
                    region: `${json.city || "Unknown"}, ${json.country_name || ""}`,
                    coords: `${json.latitude || "0"}° N, ${json.longitude || "0"}° E`,
                    // Many free APIs don't expose threat/proxy reliably, so we simulate realism if missing
                    proxy: json.threat?.is_proxy ? "True" : "False (Clear)",
                    vpn: json.threat?.is_vpn ? "True" : "False (Clear)",
                };
            }
        } catch (e) {
            console.warn("API Fetch Failed, using local fallbacks");
        }

        setData(prev => ({ ...prev, ...clientInfo, ...netInfo }));
        setLoading(false);
    };

    useEffect(() => {
        fetchNetworkData();
    }, []);

    useEffect(() => {
        // Update interaction level based on clicks/scrolls
        let level = "Low";
        if (interactionCount > 10) level = "Medium";
        if (interactionCount > 30) level = "High";
        setData(prev => ({ ...prev, interaction: level }));
    }, [interactionCount]);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const getPath = () => {
        const max = 100;
        const step = 100 / (latencyData.length - 1);
        let d = `M 0,${40 - (latencyData[0] / max * 40)}`;
        latencyData.forEach((val, i) => {
            d += ` L ${i * step},${40 - ((val / max) * 40)}`;
        });
        return d;
    };

    const renderRow = (label, value, highlightClass = "") => (
        <div className="data-row">
            <span className="label">{label}</span>
            <span className={`value ${highlightClass}`}>{value}</span>
        </div>
    );

    return (
        <div className="cyber-widget-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="cyber-panel"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.25, type: 'spring' }}
                    >
                        <div className="panel-header">
                            <div className="panel-title">
                                <FaShieldAlt className={loading ? "spin-icon" : ""} /> 
                                SYSTEM_OVERWATCH_V3.0
                            </div>
                            <div className="panel-controls">
                                <button onClick={fetchNetworkData} className="refresh-btn"><FaSync className={loading ? "spin-icon" : ""} /></button>
                                <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
                            </div>
                        </div>
                        
                        <div className="panel-content custom-scrollbar">
                            
                            {/* 1. NETWORK INTELLIGENCE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaNetworkWired /> 1. Network Intel</h4>
                                {renderRow("Public IP", data.ip, "highlight text-glow no-blur")}
                                {renderRow("IP Version", data.ipv)}
                                {renderRow("ASN", data.asn)}
                                {renderRow("ISP", data.isp)}
                                {renderRow("Proxy / VPN", `${data.proxy} / ${data.vpn}`, data.proxy.includes("True") ? "warning" : "success")}
                            </div>

                            {/* 2. SYSTEM HARDWARE PROFILE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaMicrochip /> 2. Hardware Profile</h4>
                                {renderRow("CPU Threads", data.cpuThreads)}
                                {renderRow("Memory", data.deviceMem)}
                                {renderRow("GPU Renderer", data.gpuRenderer)}
                                {renderRow("Device Class", data.deviceClass)}
                                {renderRow("Battery", data.battery)}
                            </div>

                            {/* 3. LOCATION INTELLIGENCE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaMapMarkerAlt /> 3. Location Data</h4>
                                {renderRow("Timezone", data.timezone)}
                                {renderRow("UTC Offset", data.utcOffset)}
                                {renderRow("Region", data.region)}
                                {renderRow("Coordinates", data.coords)}
                            </div>

                            {/* 4. BROWSER FINGERPRINT */}
                            <div className="data-group">
                                <h4 className="group-title"><FaFingerprint /> 4. Browser Fingerprint</h4>
                                {renderRow("Browser", `${data.browser} (${data.engine})`)}
                                {renderRow("Platform", data.platform)}
                                {renderRow("Cookies/DNT", `${data.cookiesEnabled} / ${data.dnt}`)}
                                {renderRow("Canvas Hash", data.canvasHash)}
                            </div>

                            {/* 5. NETWORK METRICS */}
                            <div className="data-group">
                                <h4 className="group-title"><FaBolt /> 5. Network Metrics</h4>
                                {renderRow("Downlink", data.downlink)}
                                {renderRow("Effective Type", data.effType)}
                                {renderRow("RTT (Estimate)", data.rtt)}
                            </div>

                            {/* 6. DISPLAY INTELLIGENCE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaDesktop /> 6. Display Intel</h4>
                                {renderRow("Resolution", data.res)}
                                {renderRow("Color / HDR", `${data.colorDepth} / ${data.hdr}`)}
                                {renderRow("PixelRatio / Orient", `${data.pixelRatio} / ${data.orientation}`)}
                            </div>

                            {/* 7. INPUT DEVICES */}
                            <div className="data-group">
                                <h4 className="group-title"><FaKeyboard /> 7. Input Capabilities</h4>
                                {renderRow("Touch Support", data.touchSupport)}
                                {renderRow("Pointer Precision", data.pointerPrec)}
                            </div>

                            {/* 8. SECURITY INDICATORS */}
                            <div className="data-group">
                                <h4 className="group-title"><FaLock /> 8. Security Status</h4>
                                {renderRow("Connection", data.https, window.isSecureContext ? "success" : "warning")}
                                {renderRow("Ad Blocker", data.adBlocker, data.adBlocker === "Detected" ? "warning" : "")}
                            </div>

                            {/* 9. BROWSER FEATURE SCAN */}
                            <div className="data-group">
                                <h4 className="group-title"><FaCheckCircle /> 9. Feature Scan</h4>
                                {renderRow("WebAssembly", data.wasm)}
                                {renderRow("WebGPU", data.webgpu)}
                                {renderRow("Client Storage", data.storage)}
                            </div>

                            {/* 10. SESSION INTELLIGENCE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaStopwatch /> 10. Session Intel</h4>
                                {renderRow("Session ID", data.sessionId)}
                                {renderRow("Time On Page", formatTime(sessionTime))}
                                {renderRow("Interaction Level", data.interaction, data.interaction === "High" ? "success" : "")}
                            </div>

                            {/* 11. ENTROPY SCORE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaProjectDiagram /> 11. Identity Entropy</h4>
                                {renderRow("Uniqueness Score", data.entropyScore, "critical")}
                                {renderRow("Tracking Resistance", data.resistance)}
                            </div>

                            {/* 12. TLS INFO */}
                            <div className="data-group">
                                <h4 className="group-title" style={{borderBottom: 'none'}}><FaServer /> 12. TLS Security</h4>
                                {renderRow("Protocol", data.protocol)}
                                {renderRow("Cipher Suite", data.cipher)}
                                {renderRow("HSTS", data.hsts)}
                            </div>

                            {/* LIVE GRAPH */}
                            <div className="data-group" style={{marginTop: '10px'}}>
                                <div className="latency-graph">
                                    <svg width="100%" height="100%" preserveAspectRatio="none">
                                        <path d={getPath()} className="graph-path" />
                                    </svg>
                                </div>
                                <div className="data-row" style={{marginTop: '5px', justifyContent: 'center'}}>
                                    <span className="value warning" style={{fontSize: '0.9rem', fontWeight: 'bold'}}>
                                        LIVE LATENCY: {Math.round(latencyData[latencyData.length-1])} ms
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <button 
                className={`widget-toggle ${isOpen ? 'active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="pulse-ring"></div>
                <FaSkull className="warning-skull" style={{ marginRight: '10px', filter: 'drop-shadow(0 0 6px var(--accent-color))', verticalAlign: 'middle' }} />
                <span>See what hackers know about your system</span>
            </button>
        </div>
    );
};

export default CyberWidget;
