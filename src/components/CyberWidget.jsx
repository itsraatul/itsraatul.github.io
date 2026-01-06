import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaNetworkWired, FaLaptopCode, FaShieldAlt, FaSync } from "react-icons/fa";
import "./CyberWidget.css";

const CyberWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        ip: "---",
        isp: "---",
        city: "---",
        country: "---",
        os: "---",
        browser: "---",
        timezone: "---",
        connection: "---",
        screen: "---"
    });

    const getBrowserData = () => {
        const n = navigator;
        const ua = n.userAgent;
        
        let os = "Unknown";
        if (ua.indexOf("Win") !== -1) os = "Windows";
        else if (ua.indexOf("Mac") !== -1) os = "MacOS";
        else if (ua.indexOf("Linux") !== -1) os = "Linux";
        else if (ua.indexOf("Android") !== -1) os = "Android";
        else if (ua.indexOf("iPhone") !== -1) os = "iOS";
        
        let browser = "Unknown";
        if (ua.indexOf("Chrome") !== -1 && ua.indexOf("Edg") === -1) browser = "Chrome";
        else if (ua.indexOf("Edg") !== -1) browser = "Edge";
        else if (ua.indexOf("Firefox") !== -1) browser = "Firefox";
        else if (ua.indexOf("Safari") !== -1) browser = "Safari";

        const conn = n.connection ? n.connection.effectiveType.toUpperCase() : "WIRED/WIFI";

        return {
            os,
            browser,
            screen: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            connection: conn
        };
    };

    const fetchNetworkData = async () => {
        setLoading(true);
        const browserInfo = getBrowserData();
        
        // Waterfall API strategy
        // 1. ipapi.co (Detailed)
        // 2. ipwho.is (Detailed)
        // 3. ipify.org (IP Only)
        // 4. cloudflare.com/cdn-cgi/trace (Text fallback, extremely reliable)
        
        const apis = [
            { url: 'https://ipapi.co/json/', type: 'json_full' },
            { url: 'https://ipwho.is/', type: 'json_full' },
            { url: 'https://api.ipify.org?format=json', type: 'json_simple' },
            { url: 'https://www.cloudflare.com/cdn-cgi/trace', type: 'text_trace' }
        ];

        let networkInfo = { ip: "UNAVAILABLE", isp: "UNKNOWN", city: "UNKNOWN", country: "UNKNOWN" };
        let success = false;

        for (const api of apis) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000);
                
                const res = await fetch(api.url, { signal: controller.signal });
                clearTimeout(timeoutId);
                
                if (!res.ok) continue;
                
                if (api.type.startsWith('json')) {
                    const json = await res.json();
                    if (api.type === 'json_full') {
                        networkInfo = {
                            ip: json.ip,
                            isp: json.org || json.connection?.isp || "Unknown ISP",
                            city: json.city || "Unknown",
                            country: json.country_name || json.country || "Unknown"
                        };
                    } else {
                        networkInfo = { ...networkInfo, ip: json.ip };
                    }
                } else if (api.type === 'text_trace') {
                    const text = await res.text();
                    const lines = text.split('\n');
                    const ipLine = lines.find(l => l.startsWith('ip='));
                    if (ipLine) {
                        networkInfo = { ...networkInfo, ip: ipLine.split('=')[1] };
                    }
                }
                success = true;
                break;
            } catch (e) {
                console.warn(`Failed to fetch from ${api.url}`, e);
            }
        }

        if (!success) {
            networkInfo.ip = "BLOCKED / OFFLINE";
        }

        setData({ ...browserInfo, ...networkInfo });
        setLoading(false);
    };

    useEffect(() => {
        fetchNetworkData();
    }, []);

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
                                {loading ? "SCANNING_NETWORK..." : "SYSTEM_MONITOR_ACTIVE"}
                            </div>
                            <div className="panel-controls">
                                <button onClick={fetchNetworkData} className="refresh-btn" title="Refresh Data">
                                    <FaSync className={loading ? "spin-icon" : ""} />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
                            </div>
                        </div>
                        
                        <div className="panel-content">
                            <div className="data-group">
                                <h4 className="group-title"><FaGlobe /> PUBLIC IDENTITY</h4>
                                <div className="data-row">
                                    <span className="label">IP ADDRESS</span>
                                    <span className="value highlight">{data.ip}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">ISP / ORG</span>
                                    <span className="value">{data.isp}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">GEO-LOCATION</span>
                                    <span className="value">{data.city}, {data.country}</span>
                                </div>
                            </div>

                            <div className="data-divider"></div>

                            <div className="data-group">
                                <h4 className="group-title"><FaLaptopCode /> LOCAL ENVIRONMENT</h4>
                                <div className="data-row">
                                    <span className="label">OS / BROWSER</span>
                                    <span className="value">{data.os} / {data.browser}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">DISPLAY</span>
                                    <span className="value">{data.screen}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">TIMEZONE</span>
                                    <span className="value">{data.timezone}</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">CONN_TYPE</span>
                                    <span className="value success">{data.connection}</span>
                                </div>
                            </div>
                            
                            <div className="panel-footer">
                                <span className="status-dot"></span> ENCRYPTED · TSL v1.3
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
                SYS_INFO
            </button>
        </div>
    );
};

export default CyberWidget;
