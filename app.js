// Application data
const appData = {
  "platform": {
    "name": "StartupAI Analyst",
    "tagline": "AI-Powered Investment Intelligence",
    "features": ["Document Analysis", "Risk Assessment", "Benchmarking", "Deal Notes Generation"]
  },
  "sampleStartups": [
    {
      "id": "1",
      "name": "NeuralFlow AI",
      "sector": "AI/ML Infrastructure", 
      "stage": "Series A",
      "revenue": 2400000,
      "employees": 45,
      "location": "San Francisco, CA",
      "description": "Enterprise AI platform for automated data pipeline optimization",
      "metrics": {
        "revenue_multiple": 18.5,
        "growth_rate": 245,
        "gross_margin": 78,
        "burn_rate": 180000,
        "runway_months": 18
      },
      "benchmarks": {
        "industry_avg_multiple": 15.2,
        "sector_growth": 180,
        "margin_percentile": 85
      },
      "risks": {
        "market_risk": "Medium",
        "team_risk": "Low", 
        "competitive_risk": "High",
        "financial_risk": "Medium",
        "overall_score": 6.8
      },
      "recommendation": "INVEST",
      "confidence": 78,
      "key_insights": [
        "Strong technical team with proven AI expertise",
        "Growing market with limited direct competition",
        "Impressive revenue growth but high burn rate",
        "Need for Series A+ funding within 12 months"
      ]
    },
    {
      "id": "2", 
      "name": "FinGuard Security",
      "sector": "FinTech/Security",
      "stage": "Seed",
      "revenue": 480000,
      "employees": 12,
      "location": "New York, NY", 
      "description": "AI-powered fraud detection for digital banking platforms",
      "metrics": {
        "revenue_multiple": 12.5,
        "growth_rate": 320,
        "gross_margin": 82,
        "burn_rate": 85000,
        "runway_months": 14
      },
      "benchmarks": {
        "industry_avg_multiple": 14.8,
        "sector_growth": 210,
        "margin_percentile": 92
      },
      "risks": {
        "market_risk": "Low",
        "team_risk": "Medium",
        "competitive_risk": "Medium", 
        "financial_risk": "High",
        "overall_score": 7.2
      },
      "recommendation": "CAUTIOUS OPTIMISM",
      "confidence": 68,
      "key_insights": [
        "Exceptional product-market fit in growing FinTech sector",
        "Strong gross margins indicate scalable business model", 
        "Limited runway requires immediate funding",
        "Team needs senior business development expertise"
      ]
    },
    {
      "id": "3",
      "name": "BioSense Diagnostics", 
      "sector": "HealthTech",
      "stage": "Series B",
      "revenue": 8500000,
      "employees": 78,
      "location": "Boston, MA",
      "description": "AI-enhanced diagnostic platform for early disease detection",
      "metrics": {
        "revenue_multiple": 8.2,
        "growth_rate": 145,
        "gross_margin": 68,
        "burn_rate": 420000,
        "runway_months": 28
      },
      "benchmarks": {
        "industry_avg_multiple": 9.8,
        "sector_growth": 125,
        "margin_percentile": 71
      },
      "risks": {
        "market_risk": "Medium",
        "team_risk": "Low",
        "competitive_risk": "Low",
        "financial_risk": "Low", 
        "overall_score": 8.1
      },
      "recommendation": "STRONG BUY",
      "confidence": 85,
      "key_insights": [
        "Proven revenue model with strong customer retention",
        "Experienced leadership team with healthcare background",
        "Regulatory approvals provide competitive moat",
        "Healthy financials with clear path to profitability"
      ]
    },
    {
      "id": "4",
      "name": "GreenTech Solutions",
      "sector": "CleanTech",
      "stage": "Series A", 
      "revenue": 1200000,
      "employees": 28,
      "location": "Austin, TX",
      "description": "IoT-enabled smart energy management for commercial buildings",
      "metrics": {
        "revenue_multiple": 15.0,
        "growth_rate": 185,
        "gross_margin": 45,
        "burn_rate": 125000,
        "runway_months": 22
      },
      "benchmarks": {
        "industry_avg_multiple": 12.3,
        "sector_growth": 165,
        "margin_percentile": 35
      },
      "risks": {
        "market_risk": "High",
        "team_risk": "Medium",
        "competitive_risk": "Medium",
        "financial_risk": "Medium",
        "overall_score": 5.9
      },
      "recommendation": "PASS",
      "confidence": 62,
      "key_insights": [
        "Market timing uncertain due to regulatory dependencies",
        "Low gross margins indicate unit economics challenges", 
        "Solid technology but lacks differentiation",
        "Requires significant capital for market penetration"
      ]
    }
  ],
  "industryBenchmarks": {
    "AI_ML": {"avg_multiple": 15.2, "growth_rate": 180, "margin": 72},
    "FinTech": {"avg_multiple": 14.8, "growth_rate": 210, "margin": 68}, 
    "HealthTech": {"avg_multiple": 9.8, "growth_rate": 125, "margin": 71},
    "CleanTech": {"avg_multiple": 12.3, "growth_rate": 165, "margin": 58}
  },
  "riskMatrix": [
    {"risk": "Team Risk", "weight": 25, "factors": ["Experience", "Track Record", "Completeness"]},
    {"risk": "Market Risk", "weight": 30, "factors": ["Size", "Growth", "Competition"]}, 
    {"risk": "Product Risk", "weight": 20, "factors": ["PMF", "Technology", "IP"]},
    {"risk": "Financial Risk", "weight": 25, "factors": ["Burn Rate", "Runway", "Unit Economics"]}
  ],
  "analysisSteps": [
    {"step": "Document Processing", "duration": 2000, "description": "Extracting text from pitch decks and documents"},
    {"step": "AI Analysis", "duration": 3000, "description": "Analyzing business model and market opportunity"}, 
    {"step": "Financial Modeling", "duration": 2500, "description": "Calculating valuation multiples and benchmarks"},
    {"step": "Risk Assessment", "duration": 2000, "description": "Identifying potential red flags and risks"},
    {"step": "Report Generation", "duration": 1500, "description": "Compiling insights into investment recommendation"}
  ]
};

// Global state
let currentStartup = null;
let uploadedFiles = [];
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeUpload();
    populateStartupSelector();
    loadDashboard();
    
    // Load first startup by default
    if (appData.sampleStartups.length > 0) {
        currentStartup = appData.sampleStartups[0];
        const selector = document.getElementById('startupSelector');
        if (selector) {
            selector.value = currentStartup.id;
        }
        loadStartupAnalysis();
    }
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav__btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    console.log('Switching to section:', sectionName);
    
    // Update navigation
    document.querySelectorAll('.nav__btn').forEach(btn => {
        btn.classList.remove('nav__btn--active');
    });
    const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('nav__btn--active');
    }
    
    // Show section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('section--active');
    });
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('section--active');
    }
    
    // Initialize section-specific content
    setTimeout(() => {
        if (sectionName === 'benchmarking') {
            createBenchmarkingCharts();
        } else if (sectionName === 'risks') {
            loadRiskAssessment();
        } else if (sectionName === 'analysis') {
            loadStartupAnalysis();
        }
    }, 100);
}

// Dashboard
function loadDashboard() {
    const recentAnalyses = document.getElementById('recentAnalyses');
    if (!recentAnalyses) return;
    
    recentAnalyses.innerHTML = '';
    
    appData.sampleStartups.slice(0, 3).forEach(startup => {
        const item = document.createElement('div');
        item.className = 'recent-item';
        item.innerHTML = `
            <div class="recent-item__info">
                <h4>${startup.name}</h4>
                <p>${startup.sector} • ${startup.stage}</p>
            </div>
            <span class="status status--${getRecommendationClass(startup.recommendation)}">${startup.recommendation}</span>
        `;
        item.addEventListener('click', () => {
            currentStartup = startup;
            const selector = document.getElementById('startupSelector');
            if (selector) {
                selector.value = startup.id;
            }
            loadStartupAnalysis();
            showSection('analysis');
        });
        recentAnalyses.appendChild(item);
    });
}

function getRecommendationClass(recommendation) {
    switch(recommendation) {
        case 'INVEST': case 'STRONG BUY': return 'success';
        case 'CAUTIOUS OPTIMISM': return 'warning';
        case 'PASS': return 'error';
        default: return 'info';
    }
}

// Upload functionality
function initializeUpload() {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    if (!uploadZone || !fileInput || !analyzeBtn) return;
    
    // Drag and drop
    uploadZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('upload-zone--dragover');
    });
    
    uploadZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('upload-zone--dragover');
    });
    
    uploadZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('upload-zone--dragover');
        handleFiles(e.dataTransfer.files);
    });
    
    uploadZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
    
    analyzeBtn.addEventListener('click', startAnalysis);
}

// Make loadSampleStartup globally accessible
window.loadSampleStartup = function() {
    const randomStartup = appData.sampleStartups[Math.floor(Math.random() * appData.sampleStartups.length)];
    currentStartup = randomStartup;
    const selector = document.getElementById('startupSelector');
    if (selector) {
        selector.value = randomStartup.id;
    }
    loadStartupAnalysis();
    showSection('analysis');
};

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert(`File ${file.name} is too large. Maximum size is 10MB.`);
            return;
        }
        
        uploadedFiles.push({
            name: file.name,
            size: formatFileSize(file.size),
            type: file.type,
            icon: getFileIcon(file.name)
        });
    });
    
    displayUploadedFiles();
    updateAnalyzeButton();
}

function displayUploadedFiles() {
    const container = document.getElementById('uploadedFiles');
    if (!container) return;
    
    container.innerHTML = '';
    
    uploadedFiles.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-item__info">
                <span class="file-item__icon">${file.icon}</span>
                <div class="file-item__details">
                    <h4>${file.name}</h4>
                    <p>${file.size}</p>
                </div>
            </div>
            <button class="file-item__remove" onclick="removeFile(${index})">Remove</button>
        `;
        container.appendChild(fileItem);
    });
}

window.removeFile = function(index) {
    uploadedFiles.splice(index, 1);
    displayUploadedFiles();
    updateAnalyzeButton();
};

function updateAnalyzeButton() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const companyName = document.getElementById('companyName');
    if (analyzeBtn && companyName) {
        analyzeBtn.disabled = uploadedFiles.length === 0 && !companyName.value;
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileIcon(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    switch(ext) {
        case 'pdf': return '📄';
        case 'doc': case 'docx': return '📝';
        case 'ppt': case 'pptx': return '📊';
        case 'txt': return '📃';
        default: return '📋';
    }
}

// Analysis simulation
function startAnalysis() {
    showModal('progressModal');
    simulateAnalysis();
}

function simulateAnalysis() {
    const steps = appData.analysisSteps;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const progressSteps = document.getElementById('progressSteps');
    
    if (!progressFill || !progressText || !progressSteps) return;
    
    // Create progress steps
    progressSteps.innerHTML = '';
    steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'progress-step';
        stepElement.innerHTML = `
            <span>${step.step}</span>
            <span class="step-status"></span>
        `;
        progressSteps.appendChild(stepElement);
    });
    
    let currentStep = 0;
    let totalProgress = 0;
    
    function processStep() {
        if (currentStep >= steps.length) {
            // Analysis complete
            progressFill.style.width = '100%';
            progressText.textContent = 'Analysis complete!';
            
            setTimeout(() => {
                closeModal('progressModal');
                // Load sample data if no startup selected
                if (!currentStartup) {
                    loadSampleStartup();
                }
                showSection('analysis');
            }, 1000);
            return;
        }
        
        const step = steps[currentStep];
        const stepElements = progressSteps.children;
        
        // Mark current step as active
        if (stepElements[currentStep]) {
            stepElements[currentStep].classList.add('progress-step--active');
        }
        progressText.textContent = step.description;
        
        setTimeout(() => {
            // Mark step as completed
            if (stepElements[currentStep]) {
                stepElements[currentStep].classList.remove('progress-step--active');
                stepElements[currentStep].classList.add('progress-step--completed');
            }
            
            currentStep++;
            totalProgress = (currentStep / steps.length) * 100;
            progressFill.style.width = totalProgress + '%';
            
            processStep();
        }, step.duration);
    }
    
    processStep();
}

// Startup selector and analysis
function populateStartupSelector() {
    const selector = document.getElementById('startupSelector');
    if (!selector) return;
    
    selector.innerHTML = '<option value="">Choose startup...</option>';
    
    appData.sampleStartups.forEach(startup => {
        const option = document.createElement('option');
        option.value = startup.id;
        option.textContent = `${startup.name} (${startup.sector})`;
        selector.appendChild(option);
    });
}

window.loadStartupAnalysis = function() {
    const selector = document.getElementById('startupSelector');
    if (!selector) return;
    
    const selectedId = selector.value;
    if (!selectedId) return;
    
    currentStartup = appData.sampleStartups.find(s => s.id === selectedId);
    if (!currentStartup) return;
    
    displayAnalysis(currentStartup);
};

function displayAnalysis(startup) {
    const grid = document.getElementById('analysisGrid');
    if (!grid) return;
    
    grid.innerHTML = `
        <div class="analysis-card company-overview">
            <div class="company-header">
                <div class="company-info">
                    <h2>${startup.name}</h2>
                    <div class="company-meta">
                        <span><strong>Sector:</strong> ${startup.sector}</span>
                        <span><strong>Stage:</strong> ${startup.stage}</span>
                        <span><strong>Location:</strong> ${startup.location}</span>
                        <span><strong>Employees:</strong> ${startup.employees}</span>
                    </div>
                    <p>${startup.description}</p>
                </div>
                <div class="recommendation-badge recommendation-badge--${getRecommendationClass(startup.recommendation).toLowerCase()}">
                    ${startup.recommendation}
                </div>
            </div>
            
            <div class="metrics-grid">
                <div class="metric-item">
                    <div class="metric-item__value">$${(startup.revenue / 1000000).toFixed(1)}M</div>
                    <div class="metric-item__label">Annual Revenue</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.metrics.revenue_multiple}x</div>
                    <div class="metric-item__label">Revenue Multiple</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.metrics.growth_rate}%</div>
                    <div class="metric-item__label">Growth Rate</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.metrics.gross_margin}%</div>
                    <div class="metric-item__label">Gross Margin</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">$${(startup.metrics.burn_rate / 1000).toFixed(0)}K</div>
                    <div class="metric-item__label">Monthly Burn</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.metrics.runway_months}mo</div>
                    <div class="metric-item__label">Runway</div>
                </div>
            </div>
        </div>
        
        <div class="analysis-card">
            <h3><span class="analysis-card__icon">🎯</span>Key Insights</h3>
            <ul class="insights-list">
                ${startup.key_insights.map(insight => `<li>${insight}</li>`).join('')}
            </ul>
        </div>
        
        <div class="analysis-card">
            <h3><span class="analysis-card__icon">📊</span>Financial Metrics</h3>
            <div class="metrics-grid">
                <div class="metric-item">
                    <div class="metric-item__value">${startup.benchmarks.industry_avg_multiple}x</div>
                    <div class="metric-item__label">Industry Avg Multiple</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.benchmarks.sector_growth}%</div>
                    <div class="metric-item__label">Sector Growth</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.benchmarks.margin_percentile}th</div>
                    <div class="metric-item__label">Margin Percentile</div>
                </div>
                <div class="metric-item">
                    <div class="metric-item__value">${startup.risks.overall_score}/10</div>
                    <div class="metric-item__label">Risk Score</div>
                </div>
            </div>
        </div>
    `;
}

// Benchmarking charts
function createBenchmarkingCharts() {
    if (!currentStartup) return;
    
    // Destroy existing charts
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
    charts = {};
    
    setTimeout(() => {
        createMultipleChart();
        createGrowthChart();
        createSectorChart();
    }, 100);
}

function createMultipleChart() {
    const ctx = document.getElementById('multipleChart');
    if (!ctx || !currentStartup) return;
    
    const sectorKey = currentStartup.sector.includes('AI') ? 'AI_ML' : 
                     currentStartup.sector.includes('FinTech') ? 'FinTech' : 
                     currentStartup.sector.includes('HealthTech') ? 'HealthTech' : 'CleanTech';
    
    charts.multiple = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [currentStartup.name, 'Industry Average'],
            datasets: [{
                label: 'Revenue Multiple',
                data: [currentStartup.metrics.revenue_multiple, appData.industryBenchmarks[sectorKey].avg_multiple],
                backgroundColor: ['#1FB8CD', '#FFC185'],
                borderColor: ['#1FB8CD', '#FFC185'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Revenue Multiple (x)'
                    }
                }
            }
        }
    });
}

function createGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx || !currentStartup) return;
    
    const sectorKey = currentStartup.sector.includes('AI') ? 'AI_ML' : 
                     currentStartup.sector.includes('FinTech') ? 'FinTech' : 
                     currentStartup.sector.includes('HealthTech') ? 'HealthTech' : 'CleanTech';
    
    charts.growth = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [currentStartup.name, 'Industry Average'],
            datasets: [{
                data: [currentStartup.metrics.growth_rate, appData.industryBenchmarks[sectorKey].growth_rate],
                backgroundColor: ['#B4413C', '#ECEBD5'],
                borderColor: ['#B4413C', '#ECEBD5'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createSectorChart() {
    const ctx = document.getElementById('sectorChart');
    if (!ctx) return;
    
    const sectors = Object.keys(appData.industryBenchmarks);
    const multiples = sectors.map(sector => appData.industryBenchmarks[sector].avg_multiple);
    const growthRates = sectors.map(sector => appData.industryBenchmarks[sector].growth_rate);
    
    charts.sector = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Industry Benchmarks',
                data: sectors.map((sector, index) => ({
                    x: multiples[index],
                    y: growthRates[index],
                    sector: sector
                })),
                backgroundColor: ['#5D878F', '#DB4545', '#D2BA4C', '#964325'],
                borderColor: ['#5D878F', '#DB4545', '#D2BA4C', '#964325'],
                borderWidth: 2,
                pointRadius: 8
            }, {
                label: currentStartup ? currentStartup.name : 'Current Startup',
                data: currentStartup ? [{
                    x: currentStartup.metrics.revenue_multiple,
                    y: currentStartup.metrics.growth_rate
                }] : [],
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                borderWidth: 3,
                pointRadius: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Revenue Multiple (x)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Growth Rate (%)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const point = context[0];
                            return point.dataset.label === 'Industry Benchmarks' ? 
                                sectors[point.dataIndex] : point.dataset.label;
                        }
                    }
                }
            }
        }
    });
}

// Risk assessment
function loadRiskAssessment() {
    if (!currentStartup) return;
    
    const riskMatrix = document.getElementById('riskMatrix');
    if (!riskMatrix) return;
    
    const risks = currentStartup.risks;
    
    riskMatrix.innerHTML = `
        <div class="risk-grid">
            <div class="risk-item">
                <div class="risk-item__header">
                    <h4>Market Risk</h4>
                    <span class="risk-level risk-level--${risks.market_risk.toLowerCase()}">${risks.market_risk}</span>
                </div>
                <div class="risk-score">${getRiskScore(risks.market_risk)}/10</div>
                <ul class="risk-factors">
                    <li>Market Size & Growth</li>
                    <li>Competitive Landscape</li>
                    <li>Market Timing</li>
                </ul>
            </div>
            
            <div class="risk-item">
                <div class="risk-item__header">
                    <h4>Team Risk</h4>
                    <span class="risk-level risk-level--${risks.team_risk.toLowerCase()}">${risks.team_risk}</span>
                </div>
                <div class="risk-score">${getRiskScore(risks.team_risk)}/10</div>
                <ul class="risk-factors">
                    <li>Founder Experience</li>
                    <li>Team Completeness</li>
                    <li>Track Record</li>
                </ul>
            </div>
            
            <div class="risk-item">
                <div class="risk-item__header">
                    <h4>Competitive Risk</h4>
                    <span class="risk-level risk-level--${risks.competitive_risk.toLowerCase()}">${risks.competitive_risk}</span>
                </div>
                <div class="risk-score">${getRiskScore(risks.competitive_risk)}/10</div>
                <ul class="risk-factors">
                    <li>Differentiation</li>
                    <li>Barriers to Entry</li>
                    <li>Competitive Moat</li>
                </ul>
            </div>
            
            <div class="risk-item">
                <div class="risk-item__header">
                    <h4>Financial Risk</h4>
                    <span class="risk-level risk-level--${risks.financial_risk.toLowerCase()}">${risks.financial_risk}</span>
                </div>
                <div class="risk-score">${getRiskScore(risks.financial_risk)}/10</div>
                <ul class="risk-factors">
                    <li>Unit Economics</li>
                    <li>Burn Rate</li>
                    <li>Funding Runway</li>
                </ul>
            </div>
        </div>
    `;
    
    loadRecommendationPanel();
}

function getRiskScore(riskLevel) {
    switch(riskLevel.toLowerCase()) {
        case 'low': return Math.floor(Math.random() * 3) + 8; // 8-10
        case 'medium': return Math.floor(Math.random() * 4) + 4; // 4-7
        case 'high': return Math.floor(Math.random() * 4) + 1; // 1-4
        default: return 5;
    }
}

function loadRecommendationPanel() {
    if (!currentStartup) return;
    
    const panel = document.getElementById('recommendationPanel');
    if (!panel) return;
    
    panel.innerHTML = `
        <div class="recommendation-header">
            <h3>Investment Recommendation</h3>
            <div class="confidence-meter">
                <span>Confidence:</span>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${currentStartup.confidence}%"></div>
                </div>
                <span>${currentStartup.confidence}%</span>
            </div>
        </div>
        
        <div class="recommendation-badge recommendation-badge--${getRecommendationClass(currentStartup.recommendation).toLowerCase()}">
            ${currentStartup.recommendation}
        </div>
        
        <p><strong>Overall Risk Score:</strong> ${currentStartup.risks.overall_score}/10</p>
        
        <h4>Key Insights Summary:</h4>
        <ul class="insights-list">
            ${currentStartup.key_insights.map(insight => `<li>${insight}</li>`).join('')}
        </ul>
        
        <div class="recommendation-actions">
            <button class="btn btn--primary" onclick="showModal('exportModal')">📄 Export Deal Notes</button>
            <button class="btn btn--secondary" onclick="shareResults()">🔗 Share Analysis</button>
        </div>
    `;
}

// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Make modal functions globally accessible
window.showModal = showModal;
window.closeModal = closeModal;

// Export functions
window.exportToPDF = function() {
    if (!currentStartup) return;
    
    // Simulate PDF generation
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(
        `DEAL NOTES - ${currentStartup.name}\n\n` +
        `Sector: ${currentStartup.sector}\n` +
        `Stage: ${currentStartup.stage}\n` +
        `Recommendation: ${currentStartup.recommendation}\n` +
        `Confidence: ${currentStartup.confidence}%\n\n` +
        `KEY INSIGHTS:\n${currentStartup.key_insights.map(insight => `• ${insight}`).join('\n')}\n\n` +
        `FINANCIAL METRICS:\n` +
        `• Revenue: $${(currentStartup.revenue / 1000000).toFixed(1)}M\n` +
        `• Growth Rate: ${currentStartup.metrics.growth_rate}%\n` +
        `• Gross Margin: ${currentStartup.metrics.gross_margin}%\n` +
        `• Runway: ${currentStartup.metrics.runway_months} months\n\n` +
        `RISK ASSESSMENT:\n` +
        `• Overall Score: ${currentStartup.risks.overall_score}/10\n` +
        `• Market Risk: ${currentStartup.risks.market_risk}\n` +
        `• Team Risk: ${currentStartup.risks.team_risk}\n` +
        `• Competitive Risk: ${currentStartup.risks.competitive_risk}\n` +
        `• Financial Risk: ${currentStartup.risks.financial_risk}`
    );
    link.download = `${currentStartup.name.replace(/\s+/g, '_')}_DealNotes.txt`;
    link.click();
    
    closeModal('exportModal');
};

window.exportToJSON = function() {
    if (!currentStartup) return;
    
    const link = document.createElement('a');
    link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentStartup, null, 2));
    link.download = `${currentStartup.name.replace(/\s+/g, '_')}_Analysis.json`;
    link.click();
    
    closeModal('exportModal');
};

window.shareResults = function() {
    if (!currentStartup) return;
    
    const shareText = `Check out this AI-powered analysis of ${currentStartup.name} - ${currentStartup.recommendation} with ${currentStartup.confidence}% confidence. Key insight: ${currentStartup.key_insights[0]}`;
    
    if (navigator.share) {
        navigator.share({
            title: `${currentStartup.name} - Investment Analysis`,
            text: shareText
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Analysis summary copied to clipboard!');
        });
    }
    
    closeModal('exportModal');
};

// Form validation
const companyNameInput = document.getElementById('companyName');
const companySectorSelect = document.getElementById('companySector');
const companyStageSelect = document.getElementById('companyStage');

if (companyNameInput) {
    companyNameInput.addEventListener('input', updateAnalyzeButton);
}
if (companySectorSelect) {
    companySectorSelect.addEventListener('change', updateAnalyzeButton);
}
if (companyStageSelect) {
    companyStageSelect.addEventListener('change', updateAnalyzeButton);
}