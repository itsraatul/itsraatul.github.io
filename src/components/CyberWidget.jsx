import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaNetworkWired, FaLaptopCode, FaShieldAlt, FaSync, FaServer, FaStopwatch, FaBolt, FaMemory, FaMicrochip } from "react-icons/fa";
import "./CyberWidget.css";

const CyberWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sessionTime, setSessionTime] = useState(0);
    const [latencyData, setLatencyData] = useState(new Array(20).fill(50));
    
    const [data, setData] = useState({
        ip: "---",
        isp: "---",
        city: "---",
        country: "---",
        
        // Network Intelligence
        asn: "---",
        connType: "---",
        ipv6: "---",
        bandwidth: "---",
        
        // Client Env
        engine: "---",
        arch: "---",
        os: "---",
        browser: "---",
        res: "---",
        depth: "---",
        lang: "---",
        
        // Other
        timezone: "---",
        threat: "---",
        sessionId: "---"
    });

    // Session Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setSessionTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Latency Simulation (Heartbeat)
    useEffect(() => {
        const interval = setInterval(() => {
            setLatencyData(prev => {
                const newData = [...prev.slice(1), Math.random() * 60 + 20]; // Random 20-80ms
                return newData;
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const getBrowserData = () => {
        const n = navigator;
        const ua = n.userAgent;
        
        // Engine Analysis
        let engine = "Gecko (Mozilla)";
        if (ua.includes("WebKit")) engine = "WebKit (Apple)";
        if (ua.includes("Chrome") || ua.includes("Edg")) engine = "Blink (Google)";

        // Arch Analysis
        let arch = "x86";
        if (ua.includes("Win64") || ua.includes("x64")) arch = "x64";
        else if (ua.includes("ARM") || ua.includes("Android")) arch = "ARM";

        // Display
        const depth = window.screen.colorDepth ? `${window.screen.colorDepth}-bit` : "Unknown";
        const isHDR = window.matchMedia && window.matchMedia('(dynamic-range: high)').matches;
        const displayMode = isHDR ? "HDR" : "SDR";

        // Connection
        const conn = n.connection || {};
        const effType = conn.effectiveType ? conn.effectiveType.toUpperCase() : "UNKNOWN";
        const down = conn.downlink || 0;
        let bandTier = "Low Bandwidth";
        if (down > 5) bandTier = "Medium Tier";
        if (down > 20) bandTier = "High Velocity";

        // Lang
        const lang = n.language.toUpperCase();

        return {
            engine,
            arch,
            depth: `${depth} / ${displayMode}`,
            lang,
            connType: effType,
            bandwidth: bandTier,
            res: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            
            // Basic
            os: ua.includes("Win") ? "Windows" : ua.includes("Mac") ? "MacOS" : "Linux/Unix",
            browser: ua.includes("Chrome") ? "Chrome" : ua.includes("Firefox") ? "Firefox" : "Safari",
            
            threat: Math.random() > 0.7 ? "CRITICAL" : "MONITORED",
            sessionId: Math.random().toString(36).substring(2, 12).toUpperCase()
        };
    };

    const fetchNetworkData = async () => {
        setLoading(true);
        const browserInfo = getBrowserData();
        
        const apis = [
            { url: 'https://ipapi.co/json/', type: 'json_full' },
            { url: 'https://ipwho.is/', type: 'json_full' },
            { url: 'https://api.ipify.org?format=json', type: 'json_simple' }
        ];

        let netInfo = { ip: "127.0.0.1", isp: "LOCAL_HOST", asn: "AS0000", ipv6: "UNAVAILABLE", city: "UNKNOWN", country: "NET" };
        let success = false;

        for (const api of apis) {
            try {
                const controller = new AbortController();
                setTimeout(() => controller.abort(), 2000);
                const res = await fetch(api.url, { signal: controller.signal });
                if (!res.ok) continue;
                
                const json = await res.json();
                
                if (api.type === 'json_full') {
                    netInfo = {
                        ip: json.ip,
                        isp: json.org || json.connection?.isp || "Unknown ISP",
                        asn: json.asn || json.connection?.asn || "AS-UNKNOWN",
                        city: json.city,
                        country: json.country_code || json.country,
                        ipv6: json.ip.includes(":") ? "Supported" : "Not Detected"
                    };
                } else {
                    netInfo.ip = json.ip;
                }
                success = true;
                break;
            } catch (e) { console.warn(e); }
        }

        setData(prev => ({ ...prev, ...browserInfo, ...netInfo }));
        setLoading(false);
    };

    useEffect(() => {
        fetchNetworkData();
    }, []);

    // Generate Graph Path
    const getPath = () => {
        const max = 100;
        const min = 0;
        const width = 100; // percent
        const step = 100 / (latencyData.length - 1);
        
        let d = `M 0,${40 - (latencyData[0] / max * 40)}`;
        latencyData.forEach((val, i) => {
            const x = i * step;
            const y = 40 - ((val / max) * 40);
            d += ` L ${x},${y}`;
        });
        return d;
    };

    return (
        <div className="cyber-widget-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="cyber-panel"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="panel-header">
                            <div className="panel-title">
                                <FaShieldAlt className={loading ? "spin-icon" : ""} /> 
                                SYSTEM_OVERWATCH_V2.0
                            </div>
                            <div className="panel-controls">
                                <button onClick={fetchNetworkData} className="refresh-btn"><FaSync className={loading ? "spin-icon" : ""} /></button>
                                <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
                            </div>
                        </div>
                        
                        <div className="panel-content">
                            {/* NETWORK INTELLIGENCE */}
                            <div className="data-group">
                                <h4 className="group-title"><FaServer /> NETWORK INTELLIGENCE</h4>
                                <div className="data-row">
                                    <span className="label">PUBLIC IP</span>
                                    {/* EXPLICIT NO BLUR inline style to be 100% sure */}
                                    <span className="value highlight" style={{ textShadow: 'none', filter: 'none', color: '#00ff41', fontWeight: 'bold' }}>
                                        {data.ip}
                                    </span>
                                </div>
                                <div className="data-row">
                                    <span className="label">ASN / ISP</span>
                                    <span className="value" style={{maxWidth: '180px'}}>{data.asn} / {data.isp}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">CONN TYPE</span>
                                    <span className="value">{data.connType} [{data.ipv6}]</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">BANDWIDTH</span>
                                    <span className="value success">{data.bandwidth}</span>
                                </div>
                            </div>

                            <div className="data-divider"></div>

                            {/* CLIENT ENVIRONMENT */}
                            <div className="data-group">
                                <h4 className="group-title"><FaLaptopCode /> CLIENT ENVIRONMENT</h4>
                                <div className="data-row">
                                    <span className="label">ENGINE / ARCH</span>
                                    <span className="value">{data.engine} / {data.arch}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">DISPLAY</span>
                                    <span className="value">{data.res} [{data.depth}]</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">LOCALE</span>
                                    <span className="value">{data.lang} / {data.timezone}</span>
                                </div>
                            </div>

                            <div className="data-divider"></div>

                            {/* REAL-TIME INTERACTIVE */}
                            <div className="data-group">
                                <h4 className="group-title" style={{color: 'var(--accent-color)'}}><FaBolt /> REAL-TIME METRICS</h4>
                                <div className="latency-graph">
                                    <svg width="100%" height="100%" preserveAspectRatio="none">
                                        <path d={getPath()} className="graph-path" />
                                    </svg>
                                </div>
                                <div className="data-row" style={{marginTop: '5px'}}>
                                    <span className="label">LATENCY</span>
                                    <span className="value warning">
                                        {Math.round(latencyData[latencyData.length-1])}ms
                                    </span>
                                </div>
                                <div className="data-row">
                                    <span className="label">SESSION</span>
                                    <span className="value">
                                        <FaStopwatch style={{marginRight: '5px', fontSize: '0.8rem'}}/>
                                        You've been here for {formatTime(sessionTime)}
                                    </span>
                                </div>
                            </div>

                            <div className="panel-footer">
                                <span className="value critical blink-slow" style={{fontSize: '0.7rem'}}>
                                    THREAT_LEVEL: {data.threat}
                                </span>
                                <span style={{marginLeft: 'auto'}}>SID: {data.sessionId}</span>
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
                VISITOR'S CONTEXT
            </button>
        </div>
    );
};

export default CyberWidget;
