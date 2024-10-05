const i18n = {
    CN: {
        gameTitle: "商业大亨：从零开始的富豪之路",
        pause: "暂停",
        resume: "继续",
        task1: "购买10双袜子",
        task2: "出售5部手机",
        task3: "积累100,000元资金",
        // 添加更多中文翻译
    },
    US: {
        gameTitle: "Business Tycoon: From Zero to Hero",
        pause: "Pause",
        resume: "Resume",
        task1: "Buy 10 pairs of socks",
        task2: "Sell 5 smartphones",
        task3: "Accumulate $100,000",
        // 添加更多英文翻译
    }
};

const eras = {
    modern: {
        CN: {
            items: {
                '方便面': { base: 5, min: 3, max: 7, unit: '包', icon: 'https://cdn-icons-png.flaticon.com/128/3480/3480618.png' },
                '矿泉水': { base: 2, min: 1, max: 3, unit: '瓶', icon: 'https://cdn-icons-png.flaticon.com/128/824/824239.png' },
                '口罩': { base: 1, min: 0.5, max: 2, unit: '个', icon: 'https://cdn-icons-png.flaticon.com/128/3365/3365873.png' },
                '智能手机': { base: 2000, min: 1500, max: 2500, unit: '部', icon: 'https://cdn-icons-png.flaticon.com/128/545/545245.png' },
                '电动车': { base: 30000, min: 25000, max: 35000, unit: '辆', icon: 'https://cdn-icons-png.flaticon.com/128/3774/3774278.png' },
                '茶叶': { base: 200, min: 150, max: 250, unit: '斤', icon: 'https://cdn-icons-png.flaticon.com/128/6866/6866526.png' },
                '太阳能板': { base: 5000, min: 4000, max: 6000, unit: '块', icon: 'https://cdn-icons-png.flaticon.com/128/2807/2807064.png' }
            },
            events: [
                { type: 'policy', message: '新的环保政策出台，影响了{item}的生产成本。', effect: 0.05, items: ['电动车', '太阳能板'] },
                { type: 'culture', message: '网络直播带货兴起，{item}销量激增。', effect: 0.1, items: ['智能手机', '化妆品'] },
                { type: 'economy', message: '人民币汇率波动，影响了{item}的进出口价格。', effect: -0.08, items: ['电子产品', '奢侈品'] },
                { type: 'technology', message: '国产芯片技术突破，降低了{item}的生产成本。', effect: -0.1, items: ['智能手机', '电脑'] },
                { type: 'social', message: '老龄化趋势加剧，增加了对{item}的需求。', effect: 0.15, items: ['保健品', '医疗器械'] }
            ],
            majorEvents: [
                { 
                    name: "中美贸易摩擦",
                    description: "中美贸易摩擦加剧，对多个行业产生影响。",
                    effects: {
                        '智能手机': -0.15,
                        '电动车': -0.1,
                        '太阳能板': -0.2
                    },
                    duration: 30 // 持续30天
                },
                {
                    name: "芯片封锁",
                    description: "全球芯片供应链受到影响，电子产品价格上涨。",
                    effects: {
                        '智能手机': 0.3,
                        '电脑': 0.25,
                        '电动车': 0.2
                    },
                    duration: 60
                },
                {
                    name: "新冠疫情",
                    description: "新冠疫情爆发，对全球经济造成冲击。",
                    effects: {
                        '口罩': 5,
                        '食品': 0.5,
                        '智能手机': -0.1,
                        '电动车': -0.2
                    },
                    duration: 90
                },
                {
                    name: "新基建计划",
                    description: "政府推出新基建计划，刺激相关行业发展。",
                    effects: {
                        '5G设备': 0.3,
                        '人工智能': 0.25,
                        '新能源': 0.2
                    },
                    duration: 60
                },
                {
                    name: "公共卫生事件",
                    description: "突发公共卫生事件，影响经济各个方面。",
                    effects: {
                        '医疗用品': 2,
                        '在线教育': 0.5,
                        '旅游业': -0.5,
                        '餐饮业': -0.3
                    },
                    duration: 90
                }
            ],
            specialMechanics: {
                // 模拟中国的"双十一"购物节
                "双十一": function(day) {
                    if (day % 365 === 315) { // 假设第315天是11月11日
                        return { message: "双十一购物节来临，所有商品价格下跌！", effect: -0.3 };
                    }
                    return null;
                }
            }
        },
        US: {
            items: {
                'Candy Bar': { base: 1, min: 0.5, max: 2, unit: 'pcs', icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081967.png' },
                'Soda': { base: 2, min: 1, max: 3, unit: 'cans', icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050154.png' },
                'Disposable Mask': { base: 0.5, min: 0.2, max: 1, unit: 'pcs', icon: 'https://cdn-icons-png.flaticon.com/128/3365/3365873.png' },
                'Smartphone': { base: 800, min: 600, max: 1000, unit: 'pcs', icon: 'https://cdn-icons-png.flaticon.com/128/545/545245.png' },
                'Electric Car': { base: 40000, min: 35000, max: 45000, unit: 'pcs', icon: 'https://cdn-icons-png.flaticon.com/128/3774/3774278.png' },
                'Coffee': { base: 15, min: 10, max: 20, unit: 'lbs', icon: 'https://cdn-icons-png.flaticon.com/128/751/751621.png' },
                'Tech Stocks': { base: 100, min: 50, max: 150, unit: 'shares', icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135706.png' }
            },
            events: [
                { type: 'policy', message: 'New data privacy regulations affect {item} sales.', effect: -0.1 },
                { type: 'culture', message: 'Black Friday boosts {item} demand.', effect: 0.3 },
                { type: 'economy', message: 'Federal Reserve changes interest rates, impacting {item} prices.', effect: 0.1 },
                { type: 'technology', message: 'Silicon Valley breakthrough increases {item} efficiency.', effect: 0.2 }
            ],
            majorEvents: [
                {
                    name: "US-China Trade War",
                    description: "Trade tensions between the US and China escalate, affecting various industries.",
                    effects: {
                        'Smartphone': -0.15,
                        'Electric Car': -0.1,
                        'Tech Stocks': -0.2
                    },
                    duration: 30
                },
                {
                    name: "Global Chip Shortage",
                    description: "A worldwide shortage of semiconductors impacts electronic product prices.",
                    effects: {
                        'Smartphone': 0.3,
                        'Electric Car': 0.25,
                        'Tech Stocks': 0.15
                    },
                    duration: 60
                },
                {
                    name: "COVID-19 Pandemic",
                    description: "The outbreak of COVID-19 causes global economic disruption.",
                    effects: {
                        'Disposable Mask': 5,
                        'Coffee': 0.3,
                        'Tech Stocks': -0.3,
                        'Electric Car': -0.2
                    },
                    duration: 90
                }
            ],
            specialMechanics: {
                // 模拟美国的"黑色星期五"
                "Black Friday": function(day) {
                    if (day % 365 === 329) { // 假设第329天是黑色星期五
                        return { message: "Black Friday sales begin! All prices drop significantly.", effect: -0.4 };
                    }
                    return null;
                }
            }
        }
    },
    // 可以继续添加其他时代，如 industrial, medieval 等
};

let currentCountry = 'CN';
let currentEra = 'modern';

let player = {
    name: "张三",
    age: 25,
    money: 10000,
    inventory: {},
    health: 100,
    energy: 100,
    skills: {
        negotiation: { level: 1, exp: 0 },
        marketAnalysis: { level: 1, exp: 0 },
        riskManagement: { level: 1, exp: 0 }
    },
    day: 1,
    season: 0,
    level: 1,
    exp: 0,
    expToNextLevel: 1000
};
// 在 player 对象中添加新的属性
player.attributes = {
    intelligence: 50,
    strength: 50,
    charisma: 50,
    luck: 50
};
player.happiness = 50;
player.relationships = {};

// 添加生活事件
const lifeEvents = [
    { name: "感冒", effect: { health: -10, money: -500 }, probability: 0.05 },
    { name: "参加朋友婚礼", effect: { happiness: 10, money: -1000 }, probability: 0.02 },
    { name: "获得意外惊喜", effect: { happiness: 20, money: 5000 }, probability: 0.01 },
    { name: "加班工作", effect: { money: 2000, energy: -20 }, probability: 0.1 },
    { name: "健身", effect: { strength: 5, energy: -10, health: 5 }, probability: 0.1 }
];

const seasons = ["春季", "夏季", "秋季", "冬季"];
let items = {
    '袜子': { base: 5, min: 3, max: 7, unit: '双', icon: 'https://cdn-icons-png.flaticon.com/128/843/843877.png' },
    '手机': { base: 2000, min: 1500, max: 2500, unit: '部', icon: 'https://cdn-icons-png.flaticon.com/128/545/545245.png' },
    '电脑': { base: 5000, min: 4000, max: 6000, unit: '台', icon: 'https://cdn-icons-png.flaticon.com/128/3659/3659899.png' },
    '汽车': { base: 100000, min: 80000, max: 120000, unit: '辆', icon: 'https://cdn-icons-png.flaticon.com/128/741/741407.png' },
    '食品': { base: 50, min: 30, max: 70, unit: '份', icon: 'https://cdn-icons-png.flaticon.com/128/851/851554.png' },
    '服装': { base: 200, min: 150, max: 250, unit: '件', icon: 'https://cdn-icons-png.flaticon.com/128/863/863684.png' },
    '珠宝': { base: 10000, min: 8000, max: 12000, unit: '件', icon: 'https://cdn-icons-png.flaticon.com/128/1867/1867957.png' }
};

let currentPrices = {};
let events = [];
let tasks = [
    { description: "购买10双袜子", reward: 500, completed: false },
    { description: "出售5部手机", reward: 1000, completed: false },
    { description: "积累100,000元资金", reward: 5000, completed: false }
];

let gameSpeed = 1;
let gamePaused = false;
let priceHistory = {};
let achievements = [
    { id: 'firstPurchase', description: '第一次购买', completed: false },
    { id: 'firstSale', description: '第一次销售', completed: false },
    { id: 'millionaire', description: '成为百万富翁', completed: false },
    { id: 'level5', description: '达到5级', completed: false },
    { id: 'level10', description: '达到10级', completed: false }
    // 添加更多成就...
];

let priceChart = null;

// 在文件顶部添加一个新的变量
let avatarSeed = Math.floor(Math.random() * 1000000);

// 添加一个新的函数来更新头像
function updateAvatar() {
    const avatarUrl = `https://avatars.dicebear.com/api/human/${avatarSeed}.svg`;
    document.getElementById('avatar').src = avatarUrl;
}

// 修改 initializePrices 函数
function initializePrices() {
    items = {...eras[currentEra][currentCountry].items};
    currentPrices = {};
    for (let item in items) {
        currentPrices[item] = getRandomPrice(item);
    }
    // 清空价格历史
    priceHistory = {};
}

// 添加更新语言的函数
function updateLanguage() {
    const languageData = i18n[currentCountry];
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (languageData[key]) {
            elem.textContent = languageData[key];
        }
    });
    // 更新其他需要翻译的元素
    document.getElementById('pauseButton').textContent = gamePaused ? languageData.resume : languageData.pause;
    // 可以继续添加其他需要翻译的元素
}

// 修改 generateRandomEvent 函数
function generateRandomEvent() {
    const eventTypes = eras[currentEra][currentCountry].events;
    let event;
    let item;
    let message;

    do {
        event = eventTypes[Math.floor(Math.random() * eventTypes.length)];
        item = Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)];
        
        // 确保"被偷"事件只发生在玩家拥有的物品上
        if (event.type === 'luck' && (!player.inventory[item] || player.inventory[item] <= 0)) {
            continue;
        }
        
        message = event.message.replace('{item}', item);
    } while (event.type === 'luck' && (!player.inventory[item] || player.inventory[item] <= 0));

    events.push(message);

    switch (event.type) {
        case 'health':
            player.health = Math.max(0, player.health + event.effect);
            player.energy = Math.max(0, player.energy + event.effect);
            break;
        case 'luck':
            if (player.inventory[item] > 0) {
                const stolenAmount = Math.min(player.inventory[item], Math.ceil(player.inventory[item] * 0.1));
                player.inventory[item] -= stolenAmount;
                message = `你的${stolenAmount}${items[item].unit}${item}被偷了！`;
            }
            break;
        case 'opportunity':
            currentPrices[item] *= (1 + event.effect);
            break;
        case 'naturalDisaster':
        case 'technologicalBreakthrough':
        case 'economicCrisis':
        case 'internationalTrade':
            currentPrices[item] *= (1 + event.effect);
            gainSkillExp('riskManagement', Math.abs(event.effect) * 100);
            break;
        default:
            currentPrices[item] *= (1 + event.effect);
    }

    return message;
}

// 添加国���和时代变更的事件监听器
document.getElementById('countrySelect').addEventListener('change', function() {
    currentCountry = this.value;
    resetGameState();
    tasks = generateTasks(); // 添加这行
    updateDisplay();
});

document.getElementById('eraSelect').addEventListener('change', function() {
    currentEra = this.value;
    resetGameState();
    tasks = generateTasks(); // 添加这行
    updateDisplay();
});

function resetGameState() {
    player = {
        name: "Player",
        age: 25,
        money: 10000,
        inventory: {},
        health: 100,
        energy: 100,
        skills: {
            negotiation: { level: 1, exp: 0 },
            marketAnalysis: { level: 1, exp: 0 },
            riskManagement: { level: 1, exp: 0 }
        },
        day: 1,
        season: 0,
        level: 1,
        exp: 0,
        expToNextLevel: 1000
    };
    events = [];
    tasks = generateTasks();
    achievements.forEach(a => a.completed = false);
    avatarSeed = Math.floor(Math.random() * 1000000);
    updateAvatar();
    updateLanguage();
    initializePrices();
    updateDisplay();
}
function generateTasks() {
    const currentItems = Object.keys(items);
    const tasks = [
        {
            description: `购买10${items[currentItems[0]].unit}${currentItems[0]}`,
            reward: Math.floor(currentPrices[currentItems[0]] * 10 * 0.1),
            completed: false,
            type: 'buy',
            item: currentItems[0],
            quantity: 10
        },
        {
            description: `出售5${items[currentItems[1]].unit}${currentItems[1]}`,
            reward: Math.floor(currentPrices[currentItems[1]] * 5 * 0.1),
            completed: false,
            type: 'sell',
            item: currentItems[1],
            quantity: 5
        },
        {
            description: `积累${(player.money * 2).toLocaleString()}元资金`,
            reward: Math.floor(player.money * 0.1),
            completed: false,
            type: 'accumulate',
            target: player.money * 2
        }
    ];
    return tasks;
}

function updateDisplay() {
    document.getElementById('character-age').textContent = player.age;
    document.getElementById('money').textContent = player.money.toLocaleString();
    document.getElementById('game-time').textContent = `第${player.day}`;
    document.getElementById('season').textContent = seasons[player.season];
    document.getElementById('health-bar').style.width = `${player.health}%`;
    document.getElementById('energy-bar').style.width = `${player.energy}%`;

    const netWorth = calculateNetWorth();
    document.getElementById('net-worth').textContent = netWorth.toLocaleString();
    
    updateMarketPrices();
    updateInventory();
    updateTradeControls();
    updateEvents();
    updateTasks();
    updateAchievements();
    updatePriceChart();
    document.getElementById('player-level').textContent = player.level;
    document.getElementById('exp-bar').style.width = `${(player.exp / player.expToNextLevel) * 100}%`;
    updateSkills();
}

function updateMarketPrices() {
    const marketPrices = document.getElementById('market-prices');
    marketPrices.innerHTML = '';
    for (let item in items) {
        const currentPrice = currentPrices[item];
        const priceChange = currentPrice - items[item].base;
        const changeClass = priceChange >= 0 ? 'price-increase' : 'price-decrease';
        marketPrices.innerHTML += `
            <div class="price-item">
                <img src="${items[item].icon}" alt="${item}" class="item-icon">
                <div>
                    <div>${item}</div>
                    <div class="item-price ${changeClass}">${currentPrice.toLocaleString()} 元</div>
                </div>
            </div>
        `;
    }
}

function updateInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    for (let item in items) {
        const quantity = player.inventory[item] || 0;
        inventoryList.innerHTML += `
            <div class="inventory-item">
                <img src="${items[item].icon}" alt="${item}" class="item-icon">
                <span>${item}: ${quantity} ${items[item].unit}</span>
            </div>
        `;
    }
}

function updatePrices() {
    for (let item in items) {
        // 基于当前价格进行小幅度调整，而不是完全随机
        let change = (Math.random() - 0.5) * 0.1; // -5% 到 5% 的变化
        currentPrices[item] = Math.max(items[item].min, Math.min(items[item].max, 
            Math.round(currentPrices[item] * (1 + change))));
    }
}

function updateTradeControls() {
    const tradeControls = document.getElementById('trade-controls');
    tradeControls.innerHTML = '';
    for (let item in items) {
        tradeControls.innerHTML += `
            <div class="trade-controls">
                <img src="${items[item].icon}" alt="${item}" class="item-icon">
                <span>${item}:</span>
                <input type="number" id="quantity-${item}" min="1" value="1">
                <button onclick="buyItem('${item}')">买入</button>
                <button onclick="sellItem('${item}')">卖出</button>
            </div>
        `;
    }
}

function updateEvents() {
    const eventsList = document.getElementById('events-list');
    eventsList.innerHTML = '';
    events.slice(-5).reverse().forEach(event => {
        eventsList.innerHTML += `<div class="event-item">${event}</div>`;
    });
}

function updateTasks() {
    const tasksList = document.getElementById('tasks-list');
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        if (!task.completed) {
            tasksList.innerHTML += `
                <li class="task-item">
                    <span>${task.description} (奖励: ${task.reward.toLocaleString()}元)</span>
                    <button onclick="completeTask(${index})">完成</button>
                </li>
            `;
        }
    });
}

function log(message) {
    const logElement = document.getElementById('game-log');
    logElement.innerHTML += `<p>${message}</p>`;
    logElement.scrollTop = logElement.scrollHeight;
}

function getRandomPrice(item) {
    const itemInfo = items[item];
    let price = itemInfo.base + (Math.random() - 0.5) * (itemInfo.max - itemInfo.min);
    return Math.round(price);
}

function buyItem(item) {
    if (!items[item]) {
        log(`错误：未知的商品 ${item}`);
        return;
    }
    const quantityInput = document.getElementById(`quantity-${item}`);
    if (!quantityInput) {
        log(`错误：无法找到商品 ${item} 的数量输入框`);
        return;
    }
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        log(`错误：无效的购买数量`);
        return;
    }
    const price = currentPrices[item];
    const totalCost = price * quantity;
    if (player.money >= totalCost && player.energy >= 10) {
        player.money -= totalCost;
        player.inventory[item] = (player.inventory[item] || 0) + quantity;
        player.energy -= 10;
        log(`购买了${quantity}${items[item].unit}${item}，总花费${totalCost.toLocaleString()}元`);
        updateDisplay();
        checkTasks();
        gainExp(Math.floor(totalCost / 10)); // 获得交易额 1/10 的经验
        gainSkillExp('negotiation', Math.floor(totalCost / 1000));
        gainSkillExp('marketAnalysis', Math.floor(totalCost / 2000));
        animateElement('money');
        animateElement('inventory-list');
    } else if (player.money < totalCost) {
        log(`资金不足，无法购买${quantity}${items[item].unit}${item}`);
    } else {
        log(`精力不足，无法进行交易`);
    }

    // 检查成就
    if (!achievements.find(a => a.id === 'firstPurchase').completed) {
        achievements.find(a => a.id === 'firstPurchase').completed = true;
        log('成就解锁：第一次购买');
    }
}

function sellItem(item) {
    if (!items[item]) {
        log(`错误：未知商品 ${item}`);
        return;
    }
    const quantityInput = document.getElementById(`quantity-${item}`);
    if (!quantityInput) {
        log(`错误：无法找到商品 ${item} 的数量输入框`);
        return;
    }
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        log(`错误：无效的出售数量`);
        return;
    }
    if ((player.inventory[item] || 0) >= quantity && player.energy >= 10) {
        const price = currentPrices[item];
        const totalEarning = price * quantity;
        player.money += totalEarning;
        player.inventory[item] -= quantity;
        player.energy -= 10;
        log(`卖出了${quantity}${items[item].unit}${item}，总收入${totalEarning.toLocaleString()}元`);
        updateDisplay();
        checkTasks();
        gainExp(Math.floor(totalEarning / 10)); // 获得交易额 1/10 的经验
        gainSkillExp('negotiation', Math.floor(totalEarning / 1000));
        gainSkillExp('marketAnalysis', Math.floor(totalEarning / 2000));
        animateElement('money');
        animateElement('inventory-list');
    } else if ((player.inventory[item] || 0) < quantity) {
        log(`库存不足，无法卖出${quantity}${items[item].unit}${item}`);
    } else {
        log(`精力不足，无法进行交易`);
    }

    // 检查成就
    if (!achievements.find(a => a.id === 'firstSale').completed) {
        achievements.find(a => a.id === 'firstSale').completed = true;
        log('成就解锁：第一次销售');
    }
}

function saveGame() {
    const gameState = {
        player: player,
        currentPrices: currentPrices,
        events: events,
        tasks: tasks
    };
    localStorage.setItem('tycoonGameSave', JSON.stringify(gameState));
    log('游戏已保存');
}

function loadGame() {
    const savedGame = localStorage.getItem('tycoonGameSave');
    if (savedGame) {
        const gameState = JSON.parse(savedGame);
        player = gameState.player;
        currentPrices = gameState.currentPrices;
        events = gameState.events;
        tasks = gameState.tasks;
        updateDisplay();
        log('游戏已加载');
    } else {
        log('没有找到保存的游戏');
    }
}

let currentMajorEvent = null;
let majorEventDaysLeft = 0;

function gameLoop() {
    if (gamePaused) return;
    
    player.day++;
    player.season = Math.floor((player.day - 1) / 30) % 4;
    
    // 检查是否有正在进行的重大事件
    if (currentMajorEvent) {
        applyMajorEventEffects(currentMajorEvent);
        majorEventDaysLeft--;
        if (majorEventDaysLeft <= 0) {
            log(`${currentMajorEvent.name}的影响已经结束。`);
            currentMajorEvent = null;
        }
    } else if (Math.random() < 0.01) { // 1% 的概率触发重大事件
        triggerMajorEvent();
    }

    // 检查特殊机制
    const specialEvent = eras[currentEra][currentCountry].specialMechanics[player.day];
    if (specialEvent) {
        const event = specialEvent(player.day);
        if (event) {
            log(event.message);
            for (let item in currentPrices) {
                currentPrices[item] *= (1 + event.effect);
            }
        }
    }

    // 恢复健康和精力
    player.health = Math.min(100, player.health + 5);
    player.energy = Math.min(100, player.energy + 20);

    if (Math.random() < 0.3) {  // 30% 概率发生随机事件
        const event = generateRandomEvent();
        log(event);
    }

    // 更新当前价格
    updatePrices();

    // 更新价格历史
    for (let item in items) {
        if (!priceHistory[item]) {
            priceHistory[item] = [];
        }
        priceHistory[item].push(currentPrices[item]);
        // 只保留最近100天的数据
        if (priceHistory[item].length > 100) {
            priceHistory[item].shift();
        }
    }

    // 随机技能提升
    const skills = Object.keys(player.skills);
    const randomSkill = skills[Math.floor(Math.random() * skills.length)];
    player.skills[randomSkill].exp += 1;
    if (player.skills[randomSkill].exp >= player.skills[randomSkill].level * 100) {
        player.skills[randomSkill].level++;
        player.skills[randomSkill].exp = 0;
        log(`你的${getSkillName(randomSkill)}技能提升到了${player.skills[randomSkill].level}级！`);
    }

    // 检查成就
    checkAchievements();

    updateDisplay();
}

function triggerMajorEvent() {
    const majorEvents = eras[currentEra][currentCountry].majorEvents;
    currentMajorEvent = majorEvents[Math.floor(Math.random() * majorEvents.length)];
    majorEventDaysLeft = currentMajorEvent.duration;
    log(`重大事件：${currentMajorEvent.name}！${currentMajorEvent.description}`);
}

function applyMajorEventEffects(event) {
    for (let item in event.effects) {
        if (currentPrices[item]) {
            currentPrices[item] *= (1 + event.effects[item]);
        }
    }
}

function completeTask(index) {
    if (!tasks[index].completed) {
        player.money += tasks[index].reward;
        tasks[index].completed = true;
        gainExp(tasks[index].reward); // 获得与奖励金额相等的经验
        log(`完成任务：${tasks[index].description}，获得奖励${tasks[index].reward}元和${tasks[index].reward}点经验`);
        updateDisplay();
    }
}

function checkTasks() {
    tasks.forEach((task, index) => {
        if (!task.completed) {
            switch(task.type) {
                case 'buy':
                    if ((player.inventory[task.item] || 0) >= task.quantity) {
                        completeTask(index);
                    }
                    break;
                case 'sell':
                    if ((player.inventory[task.item] || 0) <= 0) {
                        completeTask(index);
                    }
                    break;
                case 'accumulate':
                    if (player.money >= task.target) {
                        completeTask(index);
                    }
                    break;
            }
        }
    });
}

function calculateNetWorth() {
    let inventoryValue = 0;
    for (let item in player.inventory) {
        inventoryValue += player.inventory[item] * currentPrices[item];
    }
    return player.money + inventoryValue;
}

function updatePriceChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    const selectElement = document.getElementById('chartItemSelect');
    
    // 如果选择框为空，填充选项
    if (selectElement.options.length === 0) {
        for (let item in items) {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        }
    }
    
    const selectedItem = selectElement.value || Object.keys(items)[0];
    
    // 如果图表已经存在，先销毁它
    if (priceChart) {
        priceChart.destroy();
    }
    
    // 获取最近30天的数据
    const days = Math.min(30, player.day);
    const labels = Array.from({length: days}, (_, i) => player.day - days + i + 1);
    
    // 创建新的图表
    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: selectedItem,
                data: priceHistory[selectedItem] ? priceHistory[selectedItem].slice(-days) : [],
                borderColor: getRandomColor(),
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '天数'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '价格'
                    }
                }
            }
        }
    });
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function updateAchievements() {
    const achievementsList = document.getElementById('achievements-list');
    achievementsList.innerHTML = '';
    achievements.forEach(achievement => {
        const achievementClass = achievement.completed ? 'completed' : '';
        achievementsList.innerHTML += `
            <li class="achievement-item ${achievementClass}">
                ${achievement.description}
            </li>
        `;
    });
}

// 添加游戏控制功能
document.getElementById('pauseButton').addEventListener('click', function() {
    gamePaused = !gamePaused;
    this.textContent = gamePaused ? '继续' : '暂停';
});

document.getElementById('gameSpeed').addEventListener('change', function() {
    gameSpeed = parseInt(this.value);
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 10000 / gameSpeed);
});

// 初始化游戏
initializePrices();
updateDisplay();
updatePriceChart();
let gameInterval = setInterval(gameLoop, 10000);

// 支持页面刷新
window.onload = function() {
    resetGameState();
    updatePriceChart();
    updateAvatar();
    gameInterval = setInterval(gameLoop, 10000 / gameSpeed);
    // 不要在这里直接开始游戏，而是显示开始界面
    document.getElementById('start-screen').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
}

// 添加新函数
function gainExp(amount) {
    player.exp += amount;
    if (player.exp >= player.expToNextLevel) {
        levelUp();
    }
    updateDisplay();
}

function levelUp() {
    player.level++;
    player.exp -= player.expToNextLevel;
    player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5);
    log(`恭喜！你升到了${player.level}级！`);
    // 可以在这里添加升级奖励
}

// 添加技能经验和升级函数
function gainSkillExp(skill, amount) {
    player.skills[skill].exp += amount;
    if (player.skills[skill].exp >= player.skills[skill].level * 100) {
        player.skills[skill].level++;
        player.skills[skill].exp = 0;
        log(`你的${getSkillName(skill)}技能提升到了${player.skills[skill].level}级！`);
    }
    updateDisplay();
}

// 添加新的函数来更新技能显示
function updateSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = '';
    for (let skill in player.skills) {
        skillsList.innerHTML += `
            <div class="skill-item">
                <div class="skill-name">${getSkillName(skill)}</div>
                <div class="skill-level">等级 ${player.skills[skill].level}</div>
            </div>
        `;
    }
}

function getSkillName(skill) {
    const skillNames = {
        negotiation: "谈判",
        marketAnalysis: "市场分析",
        riskManagement: "风险管理"
    };
    return skillNames[skill] || skill;
}

// 添加事件监听器，当选择变化时更新图表
document.getElementById('chartItemSelect').addEventListener('change', updatePriceChart);

// 添加简单的动画效果
function animateElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('animated');
    setTimeout(() => {
        element.classList.remove('animated');
    }, 500);
}

// 添加一个新的函数来检查成就
function checkAchievements() {
    const netWorth = calculateNetWorth();
    if (netWorth >= 1000000 && !achievements.find(a => a.id === 'millionaire').completed) {
        achievements.find(a => a.id === 'millionaire').completed = true;
        log('成就解锁：成为百万富翁');
    }
    if (player.level >= 5 && !achievements.find(a => a.id === 'level5').completed) {
        achievements.find(a => a.id === 'level5').completed = true;
        log('成就解锁：达到5级');
    }
    if (player.level >= 10 && !achievements.find(a => a.id === 'level10').completed) {
        achievements.find(a => a.id === 'level10').completed = true;
        log('成就解锁：达到10级');
    }
}

// 添加一个事件监听器来更换头像
document.getElementById('changeAvatar').addEventListener('click', function() {
    avatarSeed = Math.floor(Math.random() * 1000000);
    updateAvatar();
});
document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');
    const startButton = document.getElementById('start-game');

    if (startButton) {
        startButton.addEventListener('click', function() {
            startScreen.style.display = 'none';
            gameContainer.style.display = 'block';
            resetGameState();
            updateDisplay();
            updatePriceChart();
            gameInterval = setInterval(gameLoop, 10000 / gameSpeed);
        });
    }
});