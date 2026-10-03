'use strict';

// 1. DADOS EDITÁVEIS — referências ilustrativas, não ofertas ou fichas oficiais.
// Para adicionar uma foto real, troque image: null pelo caminho local do modelo.
const CAR_CATALOG = [
  { id: 'onix', brand: 'Chevrolet', model: 'Onix', version: '1.0', category: 'economico', bodyType: 'hatch', useProposal: 'urban', drivetrain: 'ice', fuel: 'flex', transmission: 'Manual', seats: 5, image: 'assets/onix.png',
    subscriptionPrice: 2290, kmPerLiterCity: 13, kmPerLiterRoad: 15, tankLiters: 44 },
  { id: 'hb20', brand: 'Hyundai', model: 'HB20', version: '1.0', category: 'economico', bodyType: 'hatch', useProposal: 'urban', drivetrain: 'ice', fuel: 'flex', transmission: 'Manual', seats: 5, image: 'assets/hb20.png',
    subscriptionPrice: 2390, kmPerLiterCity: 12.8, kmPerLiterRoad: 14.6, tankLiters: 50 },
  { id: 'argo', brand: 'Fiat', model: 'Argo', version: 'Drive 1.0', category: 'economico', bodyType: 'hatch', useProposal: 'urban', drivetrain: 'ice', fuel: 'flex', transmission: 'Manual', seats: 5, image: 'assets/argo.png',
    subscriptionPrice: 2190, kmPerLiterCity: 13.2, kmPerLiterRoad: 14.7, tankLiters: 48 },
  { id: 'polo', brand: 'Volkswagen', model: 'Polo', version: 'TSI', category: 'intermediario', bodyType: 'hatch', useProposal: 'versatile', drivetrain: 'ice', fuel: 'flex', transmission: 'Automática', seats: 5, image: 'assets/polo.png',
    subscriptionPrice: 2690, kmPerLiterCity: 12.5, kmPerLiterRoad: 14.8, tankLiters: 52 },
  { id: 'city', brand: 'Honda', model: 'City', version: 'Sedan EX', category: 'intermediario', bodyType: 'sedan', useProposal: 'versatile', drivetrain: 'ice', fuel: 'flex', transmission: 'Automática', seats: 5, image: 'assets/city.png',
    subscriptionPrice: 3190, kmPerLiterCity: 12.8, kmPerLiterRoad: 15.2, tankLiters: 44 },
  { id: 'pulse', brand: 'Fiat', model: 'Pulse', version: 'Drive 1.3', category: 'suv', bodyType: 'suv', useProposal: 'urban', drivetrain: 'ice', fuel: 'flex', transmission: 'Automática', seats: 5, image: 'assets/pulse.png',
    subscriptionPrice: 2990, kmPerLiterCity: 12, kmPerLiterRoad: 14, tankLiters: 47 },
  { id: 'tracker', brand: 'Chevrolet', model: 'Tracker', version: '1.0 Turbo AT', category: 'suv', bodyType: 'suv', useProposal: 'urban', drivetrain: 'ice', fuel: 'flex', transmission: 'Automática', seats: 5, image: 'assets/tracker.png',
    subscriptionPrice: 3604, kmPerLiterCity: 12, kmPerLiterRoad: 14, tankLiters: 44 },
  { id: 'tcross', brand: 'Volkswagen', model: 'T-Cross', version: '1.0 TSI', category: 'suv', bodyType: 'suv', useProposal: 'urban', drivetrain: 'ice', fuel: 'flex', transmission: 'Automática', seats: 5, image: 'assets/tcrosss-removebg-preview.png',
    subscriptionPrice: 3490, kmPerLiterCity: 12.5, kmPerLiterRoad: 14.2, tankLiters: 52 },
  { id: 'creta', brand: 'Hyundai', model: 'Creta', version: 'Comfort 1.0 Turbo', category: 'suv', bodyType: 'suv', useProposal: 'family', drivetrain: 'ice', fuel: 'flex', transmission: 'Automática', seats: 5, image: 'assets/creta.png',
    subscriptionPrice: 3890, kmPerLiterCity: 11.5, kmPerLiterRoad: 13.4, tankLiters: 50 },
  { id: 'dolphin-mini', brand: 'BYD', model: 'Dolphin Mini', version: '5 lugares', category: 'eletrico', bodyType: 'hatch', useProposal: 'urban', drivetrain: 'ev', fuel: 'electric', transmission: 'Automática', seats: 5, image: 'assets/byd.png',
    subscriptionPrice: 2790, batteryKwh: 38.9, rangeKm: 280, kwhPer100Km: { city: 13.5, mixed: 14.3, road: 15.6 }, co2ReferenceId: 'onix' },
  { id: 'dolphin', brand: 'BYD', model: 'Dolphin', version: 'GS', category: 'eletrico', bodyType: 'hatch', useProposal: 'versatile', drivetrain: 'ev', fuel: 'electric', transmission: 'Automática', seats: 5, image: 'assets/dolphin.png',
    subscriptionPrice: 3090, batteryKwh: 44.9, rangeKm: 291, kwhPer100Km: { city: 14.8, mixed: 15.8, road: 17.2 }, co2ReferenceId: 'polo' },
  { id: 'ex2-pro', brand: 'Geely', model: 'EX2', version: 'Pro', category: 'eletrico', bodyType: 'hatch', useProposal: 'urban', drivetrain: 'ev', fuel: 'electric', transmission: 'Automática', seats: 5, image: 'assets/ex2.png',
    subscriptionPrice: 3707, batteryKwh: 39.4, rangeKm: 289, kwhPer100Km: { city: 13.7, mixed: 14.6, road: 16 }, co2ReferenceId: 'polo' },
  { id: 'yuan-pro', brand: 'BYD', model: 'Yuan Pro', version: 'GL', category: 'eletrico', bodyType: 'suv', useProposal: 'family', drivetrain: 'ev', fuel: 'electric', transmission: 'Automática', seats: 5, image: 'assets/yuan pro.png',
    subscriptionPrice: 4190, batteryKwh: 45.1, rangeKm: 250, kwhPer100Km: { city: 16.5, mixed: 17.5, road: 19 }, co2ReferenceId: 'creta' },
  { id: 'strada', brand: 'Fiat', model: 'Strada', version: 'Freedom cabine dupla', category: 'utilitario', bodyType: 'pickup', useProposal: 'work', drivetrain: 'ice', fuel: 'flex', transmission: 'Manual', seats: 5, image: 'assets/strada.png',
    subscriptionPrice: 2890, kmPerLiterCity: 12.5, kmPerLiterRoad: 13.8, tankLiters: 55 },
];

// Curadoria determinística: uso/categoria → carroceria/espaço → preço → proposta → autonomia.
// "nearby" NÃO significa equivalente direto. Toda concessão aparece na interface.
const EV_RECOMMENDATIONS = {
  onix: { evId: 'dolphin-mini', fit: 'direct' },
  hb20: { evId: 'dolphin-mini', fit: 'direct' },
  argo: { evId: 'dolphin-mini', fit: 'direct' },
  polo: { evId: 'dolphin', fit: 'direct' },
  city: { evId: 'dolphin', fit: 'nearby', limitation: 'O City é um sedã e o Dolphin é um hatch. Compare porta-malas e espaço para bagagem antes de decidir.' },
  pulse: { evId: 'ex2-pro', fit: 'nearby', limitation: 'O EX2 é um hatch urbano, não um SUV. A proposta cotidiana é próxima, mas altura, acesso e bagagem precisam ser avaliados.' },
  tracker: { evId: 'ex2-pro', fit: 'nearby', limitation: 'O Tracker é um SUV; o EX2 é um hatch. A sugestão prioriza deslocamentos urbanos e ocupantes, sem prometer a mesma altura ou capacidade de bagagem.' },
  tcross: { evId: 'ex2-pro', fit: 'nearby', limitation: 'O T-Cross é um SUV; o EX2 é um hatch. A rotina urbana pode ser semelhante, mas a carroceria e o espaço de bagagem são diferentes.' },
  creta: { evId: 'yuan-pro', fit: 'direct' },
  strada: { evId: 'yuan-pro', fit: 'nearby', limitation: 'Não há picape elétrica no catálogo. O Yuan Pro não tem caçamba e não substitui a Strada no transporte de carga. A simulação só ajuda a explorar o uso de passageiros.' },
};
const CATEGORIES = { all: 'Todos', economico: 'Econômico', intermediario: 'Intermediário', suv: 'SUV', eletrico: 'Elétrico', utilitario: 'Utilitário', premium: 'Premium' };
const BODY_LABELS = { hatch: 'Hatch', sedan: 'Sedã', suv: 'SUV', pickup: 'Picape' };
// Parâmetros compartilhados do cenário, separados das especificações dos veículos.
const SIMULATION_CONFIG = {
  homeEnergyPrice: 0.92, publicEnergyPrice: 1.58, gasolineCO2KgPerLiter: 2.31,
  electricityCO2KgPerKwh: 0.075, daysPerMonth: 30, monthsPerYear: 12, contractMonths: 24,
  mixedCityShare: 0.5, goodDailyRangeRatio: 0.4, planningDailyRangeRatio: 0.7,
};
const LOCALIZA_ELECTRIC_IMPACT = { electricVehicles: 12.902, avoidedCO2Tonnes: 380.000 };
const FORCE_DEMO_MODE = false;
const GOOGLE_MAPS_CONFIG = {
  apiKey: window.APP_CONFIG?.GOOGLE_MAPS_API_KEY || '',
  mapId: window.APP_CONFIG?.GOOGLE_MAPS_MAP_ID || 'DEMO_MAP_ID',
  searchRadiusMeters: 10000, maxResults: 15, timeoutMs: 12000,
};
const DEMO_ORIGIN = { lat: -19.9245, lng: -43.9352 };
const DEMO_CHARGING_POINTS = [
  ['Centro', -19.922, -43.938], ['Savassi', -19.938, -43.934],
  ['Lourdes', -19.933, -43.945], ['Funcionários', -19.934, -43.927],
  ['Santa Efigênia', -19.925, -43.917], ['Floresta', -19.912, -43.929],
  ['Prado', -19.932, -43.967], ['Buritis', -19.974, -43.963],
  ['Pampulha', -19.855, -43.974], ['Cidade Nova', -19.889, -43.926],
].map(([district, lat, lng], index) => ({
  id: `demo-${index}`, lat, lng, name: `Recarga ${district} · demo`, address: `${district}, Belo Horizonte`,
  charger: index % 2 ? 'CCS2 · DC (ilustrativo)' : 'Tipo 2 · AC (ilustrativo)',
}));

// 2. ESTADO E UTILITÁRIOS
const state = {
  selectedCarId: null, recommendedEvId: null, category: 'all', step: 1, hasAnalysis: false,
  userProfile: { monthlyKm: 1000, useType: 'city', homeCharging: true, gasPrice: 6.50 },
  location: null, charging: { mode: 'idle', stations: [], activeId: null, busy: false, requestId: 0 },
};
const byId = (id) => document.getElementById(id);
const getCar = (id) => CAR_CATALOG.find((car) => car.id === id);
const carName = (car) => `${car.brand} ${car.model}`;
const selectedCar = () => getCar(state.selectedCarId);
const electricCar = () => selectedCar()?.drivetrain === 'ev' ? selectedCar() : getCar(state.recommendedEvId);
const money = (value) => value == null ? 'Sob consulta' : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
const number = (value, decimals = 0) => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: decimals }).format(value);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const motion = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
function goTo(id, headingId) {
  byId(id).scrollIntoView({ behavior: motion(), block: 'start' });
  if (headingId) byId(headingId).focus({ preventScroll: true });
}
function carVisual(car) {
  return `<div class="vehicle-visual ${car.image ? '' : 'pending-image'}"><img src="${escapeHTML(car.image || 'assets/car-placeholder.svg')}" alt="${car.image ? escapeHTML(carName(car)) : 'Imagem do modelo a adicionar'}" ${car.image ? '' : 'aria-hidden="true"'} />${car.image ? '' : '<span>Imagem do modelo em breve</span>'}</div>`;
}
function carSummary(car, label) {
  return `<article class="journey-car ${car.drivetrain === 'ev' ? 'journey-ev' : ''}"><span class="tiny-label">${label}</span>${carVisual(car)}<small>${escapeHTML(car.brand)}</small><h3>${escapeHTML(car.model)} <span>${escapeHTML(car.version)}</span></h3><p>${BODY_LABELS[car.bodyType]} · ${car.seats} ocupantes · ${car.drivetrain === 'ev' ? '100% elétrico' : 'Combustão'}</p></article>`;
}
function renderProgress() {
  document.querySelectorAll('[data-step]').forEach((button) => {
    const step = Number(button.dataset.step);
    button.disabled = step === 2 ? !state.selectedCarId : step === 3 ? !state.hasAnalysis : false;
    if (step === state.step) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
    button.classList.toggle('complete', step < state.step);
  });
}

// 3. CATÁLOGO E JORNADAS
function renderCarCatalog() {
  const cars = CAR_CATALOG.filter((car) => state.category === 'all' || car.category === state.category);
  byId('carCatalog').innerHTML = cars.map((car) => {
    const selected = car.id === state.selectedCarId;
    return `<article class="catalog-card ${selected ? 'selected' : ''}"><div class="catalog-card-heading"><span>${CATEGORIES[car.category]}</span><span class="selected-check" ${selected ? '' : 'hidden'}>✓ Selecionado</span></div>${carVisual(car)}<div class="catalog-card-body"><small>${escapeHTML(car.brand)}</small><h3>${escapeHTML(car.model)}</h3><p class="car-version">${escapeHTML(car.version)}</p><div class="car-specs"><span>${car.drivetrain === 'ev' ? '↯ Elétrico' : 'Combustão · flex'}</span><span>${escapeHTML(car.transmission)}</span></div><div class="catalog-price"><small>Mensalidade de referência</small><strong>${money(car.subscriptionPrice)}${car.subscriptionPrice == null ? '' : '<span>/mês</span>'}</strong></div><button class="btn btn-ghost full" data-select-car="${car.id}" aria-pressed="${selected}" aria-label="${selected ? 'Selecionado' : 'Escolher'} ${escapeHTML(carName(car))}">${selected ? '✓ Selecionado' : 'Escolher este carro'}</button></div></article>`;
  }).join('');
  byId('catalogEmpty').hidden = cars.length > 0;
  document.querySelectorAll('[data-category]').forEach((button) => button.setAttribute('aria-pressed', button.dataset.category === state.category));
  byId('selectedCarLabel').textContent = selectedCar() ? `${carName(selectedCar())} · ${selectedCar().version}` : 'Selecione um modelo para começar';
  byId('continueCar').disabled = !selectedCar();
  byId('selectionBar').hidden = !selectedCar();
}
function filterCars(category) {
  if (!(category in CATEGORIES)) return;
  state.category = category;
  renderCarCatalog();
}
function selectCar(id) {
  if (!getCar(id)) return;
  state.selectedCarId = id;
  state.recommendedEvId = null;
  state.hasAnalysis = false;
  state.step = 1;
  byId('resultado').hidden = true;
  document.querySelectorAll('[data-after-analysis]').forEach((section) => { section.hidden = true; });
  renderCarCatalog();
  renderProgress();
  document.querySelector(`[data-select-car="${id}"]`)?.focus({ preventScroll: true });
}
function recommendElectricAlternative(car) {
  if (car.drivetrain === 'ev') return null;
  const config = EV_RECOMMENDATIONS[car.id];
  if (!config) return null; // Não inventar recomendação para um novo perfil sem curadoria.
  const ev = getCar(config.evId);
  if (!ev || ev.drivetrain !== 'ev') return null;
  const sameBody = car.bodyType === ev.bodyType;
  const reasons = [
    car.useProposal === 'work' ? 'Alternativa apenas para deslocamentos de passageiros; não para carga.' : car.useProposal === 'family' ? 'Proposta de uso familiar, com foco em espaço e deslocamentos cotidianos.' : 'Proposta de deslocamentos cotidianos, com foco no uso urbano.',
    `${sameBody ? `Carroceria ${BODY_LABELS[ev.bodyType].toLowerCase()} nos dois modelos` : `${BODY_LABELS[car.bodyType]} → ${BODY_LABELS[ev.bodyType]}: carrocerias diferentes`}; ${ev.seats} ocupantes no elétrico. Isso não garante o mesmo espaço interno.`,
    car.subscriptionPrice != null && ev.subscriptionPrice != null ? `Mensalidade de referência: ${money(car.subscriptionPrice)} → ${money(ev.subscriptionPrice)}. A análise vai incluir o consumo.` : 'Mensalidade a confirmar em orçamento.',
    `Autonomia de referência de ${number(ev.rangeKm)} km; vamos conferir o que isso representa para sua rotina.`,
  ];
  return { car: ev, direct: config.fit === 'direct', reasons, limitation: config.limitation || 'A proximidade de perfil não significa veículos idênticos. Confira espaço, equipamentos e condições do plano.' };
}
function continueWithSelectedCar() {
  const car = selectedCar();
  if (!car) return;
  const recommendation = recommendElectricAlternative(car);
  state.recommendedEvId = recommendation?.car.id || null;
  state.step = 2;
  byId('inicio').hidden = byId('catalogo').hidden = true;
  byId('jornada').hidden = false;
  byId('simulador').hidden = car.drivetrain !== 'ev';
  byId('gasPriceField').hidden = car.drivetrain === 'ev';
  byId('gasPrice').disabled = car.drivetrain === 'ev';
  byId('analyzeButton').textContent = car.drivetrain === 'ev' ? 'Ver o raio-x da minha escolha' : 'Ver minha comparação';
  if (car.drivetrain === 'ev') renderElectricJourney(car); else renderCombustionJourney(car, recommendation);
  renderRoutineContext();
  renderProgress();
  goTo('jornada', 'journeyTitle');
}
function renderCombustionJourney(car, recommendation) {
  byId('journeyTitle').textContent = `Você escolheu o ${carName(car)}.`;
  byId('journeySubtitle').textContent = recommendation?.direct ? 'Existe uma opção elétrica para o seu tipo de rotina.' : 'Vamos explorar a opção elétrica mais próxima deste perfil.';
  if (!recommendation) {
    byId('journeyContent').innerHTML = '<p class="empty-state">Ainda não temos uma opção elétrica cadastrada para este perfil. Escolha outro modelo para simular.</p>';
    return;
  }
  byId('journeyContent').innerHTML = `<div class="journey-pair">${carSummary(car, 'SUA ESCOLHA')}<span class="journey-arrow" aria-hidden="true">→</span>${carSummary(recommendation.car, recommendation.direct ? 'OPÇÃO ELÉTRICA PARA AVALIAR' : 'ALTERNATIVA MAIS PRÓXIMA')}</div><div class="recommendation-panel"><div><span class="eyebrow">UMA SUGESTÃO EXPLICADA</span><h3>Por que sugerimos o ${escapeHTML(carName(recommendation.car))}?</h3><ul>${recommendation.reasons.map((reason) => `<li>${escapeHTML(reason)}</li>`).join('')}</ul></div><div class="recommendation-note">${recommendation.direct ? '' : '<strong>Não encontramos um equivalente elétrico direto para este perfil, mas esta é a alternativa elétrica mais próxima disponível no protótipo.</strong>'}<p>${escapeHTML(recommendation.limitation)}</p><button class="btn btn-primary" data-action="start-routine">Comparar minha escolha →</button></div></div>`;
}
function renderElectricJourney(car) {
  byId('journeyTitle').textContent = `Você escolheu o ${carName(car)}.`;
  byId('journeySubtitle').textContent = 'Veja como ele se encaixa na sua rotina. Vamos conferir autonomia, energia e onde recarregar.';
  byId('journeyContent').innerHTML = `<div class="ev-welcome">${carSummary(car, 'SUA ESCOLHA ELÉTRICA')}<div><span class="eyebrow">SUA ESCOLHA, COM MAIS CONFIANÇA</span><h3>Você não precisa imaginar como seria. Vamos mostrar.</h3><p>A partir dos seus quilômetros, veja quanto gastaria com energia e qual parte da autonomia usaria por dia.</p><a class="text-button" href="#simulador">Conte sua rotina ↓</a></div></div>`;
}
function renderRoutineContext() {
  const ev = electricCar();
  if (!ev) return;
  byId('routineContext').innerHTML = `<span class="status-pill">${selectedCar().drivetrain === 'ev' ? 'RAIO-X DA SUA ESCOLHA' : 'VAMOS COLOCAR NA PONTA DO LÁPIS'}</span><h3>${escapeHTML(carName(ev))}</h3>${carVisual(ev)}<p>Autonomia de referência: <strong>${number(ev.rangeKm)} km</strong>.</p><div class="insight-callout"><span>O que vamos descobrir</span><strong>Quanto você roda. Quanto gastaria. Onde poderia carregar.</strong><p>A análise considera seu perfil de uso e diferencia recarga em casa e recarga pública.</p></div>`;
}
function chooseAnotherCar() {
  state.step = 1;
  byId('inicio').hidden = false;
  byId('catalogo').hidden = false;
  byId('jornada').hidden = byId('simulador').hidden = byId('resultado').hidden = true;
  document.querySelectorAll('[data-after-analysis]').forEach((section) => { section.hidden = true; });
  renderProgress();
  goTo('catalogo', 'catalogTitle');
}

// 4. CÁLCULOS PUROS — especificações vêm do catálogo, tarifas do cenário.
function calculateICECost(car, profile) {
  const cityShare = profile.useType === 'city' ? 1 : profile.useType === 'road' ? 0 : SIMULATION_CONFIG.mixedCityShare;
  const liters = profile.monthlyKm * (cityShare / car.kmPerLiterCity + (1 - cityShare) / car.kmPerLiterRoad);
  const fuelCost = liters * profile.gasPrice;
  return { liters, fuelCost, fuelStops: Math.ceil(liters / car.tankLiters), total: car.subscriptionPrice == null ? null : car.subscriptionPrice + fuelCost };
}
function calculateEVCost(car, profile) {
  const tariff = profile.homeCharging ? SIMULATION_CONFIG.homeEnergyPrice : SIMULATION_CONFIG.publicEnergyPrice;
  const kwh = profile.monthlyKm * car.kwhPer100Km[profile.useType] / 100;
  const energyCost = kwh * tariff;
  const dailyKm = profile.monthlyKm / SIMULATION_CONFIG.daysPerMonth;
  return { kwh, tariff, energyCost, dailyKm, rangeRatio: dailyKm / car.rangeKm, charges: kwh / car.batteryKwh,
    total: car.subscriptionPrice == null ? null : car.subscriptionPrice + energyCost };
}
function calculateCO2Impact(ice, ev, profile) {
  const iceKg = calculateICECost(ice, profile).liters * SIMULATION_CONFIG.gasolineCO2KgPerLiter;
  const evKg = calculateEVCost(ev, profile).kwh * SIMULATION_CONFIG.electricityCO2KgPerKwh;
  const monthly = iceKg - evKg; // Não limitar a zero: um cenário desfavorável também é mostrado.
  return { monthly, annual: monthly * SIMULATION_CONFIG.monthsPerYear, contractTonnes: monthly * SIMULATION_CONFIG.contractMonths / 1000 };
}
function calculateEVFit(car, profile) {
  const { rangeRatio } = calculateEVCost(car, profile);
  if (!profile.homeCharging || rangeRatio > SIMULATION_CONFIG.planningDailyRangeRatio) {
    return { level: 'EXIGE PLANEJAMENTO', title: 'Seu uso exige mais atenção à recarga.', description: !profile.homeCharging ? 'Sem recarga em casa ou no trabalho, confirme pontos, horários e preços antes de contar com a rede pública.' : 'Sua média diária utiliza boa parte da autonomia. Planeje paradas e mantenha uma margem de segurança.' };
  }
  if (profile.useType === 'road' || rangeRatio > SIMULATION_CONFIG.goodDailyRangeRatio) {
    return { level: 'BOA COMPATIBILIDADE', title: 'Pode funcionar, com algum planejamento.', description: 'Você tem acesso à recarga, mas viagens e dias mais longos pedem atenção à autonomia e às paradas.' };
  }
  return { level: 'ALTA COMPATIBILIDADE', title: 'Combina muito com sua rotina.', description: 'A média diária ocupa uma parte menor da autonomia de referência e você tem acesso à recarga em casa ou no trabalho.' };
}
function readUserProfile() {
  state.userProfile = { monthlyKm: Number(byId('monthlyKm').value), useType: document.querySelector('[name="useType"]:checked').value,
    homeCharging: document.querySelector('[name="charging"]:checked').value === 'yes', gasPrice: Number(byId('gasPrice').value) };
  byId('monthlyKmOutput').value = `${number(state.userProfile.monthlyKm)} km`;
}
function metric(label, value, id = '') {
  return `<li><span>${label}</span><strong ${id ? `id="${id}"` : ''}>${value}</strong></li>`;
}
function rangeBar(car, costs) {
  const percent = costs.rangeRatio * 100;
  return `<div class="range-card"><div><span>Sua média diária</span><strong>${number(costs.dailyKm, 1)} km <small>/ ${number(car.rangeKm)} km de autonomia</small></strong></div><div class="autonomy-track" role="meter" aria-label="Autonomia utilizada por dia" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.min(100, percent).toFixed(1)}" aria-valuetext="${number(percent)}% da autonomia por dia"><span style="width:${Math.min(100, percent)}%"></span></div><p>Na sua rotina média, você utilizaria aproximadamente <strong>${number(percent)}% da autonomia disponível por dia</strong>. Dias mais longos precisam de planejamento próprio.</p></div>`;
}
function renderComparison(car, ev) {
  const profile = state.userProfile;
  const iceCost = calculateICECost(car, profile), evCost = calculateEVCost(ev, profile);
  const delta = car.subscriptionPrice == null || ev.subscriptionPrice == null ? null : ev.subscriptionPrice - car.subscriptionPrice;
  const totalSaving = iceCost.total == null || evCost.total == null ? null : iceCost.total - evCost.total;
  let conclusion = 'Confirme as mensalidades para comparar o custo total.';
  if (totalSaving != null) {
    if (Math.abs(totalSaving) < 0.5) conclusion = 'Neste perfil, os dois custos mensais estimados ficam próximos.';
    else if (totalSaving > 0) conclusion = `${delta > 0 ? 'Mesmo com uma mensalidade maior, sua' : 'Sua'} mobilidade pode custar ${money(totalSaving)} menos por mês com o elétrico.`;
    else conclusion = `Neste perfil, o elétrico ainda custa aproximadamente ${money(-totalSaving)} a mais por mês.`;
  }
  const recommendation = recommendElectricAlternative(car);
  byId('resultContent').innerHTML = `<div class="subscription-delta"><span>MENSALIDADE DO ELÉTRICO</span><strong>${delta == null ? 'A confirmar' : delta === 0 ? 'Mesmo valor de referência' : `${money(Math.abs(delta))} ${delta > 0 ? 'a mais' : 'a menos'} na assinatura`}</strong><p>Quando consideramos sua rotina de ${number(profile.monthlyKm)} km/mês, o consumo também entra na conta.</p></div>${!recommendation.direct ? `<p class="comparison-caveat">Comparação de custos, sem equivalência direta de veículos. ${escapeHTML(recommendation.limitation)}</p>` : ''}<div class="comparison-grid"><article class="compare-card">${carSummary(car, 'SUA ESCOLHA')}<ul class="metric-list">${metric('Assinatura de referência', money(car.subscriptionPrice))}${metric('Gasolina por mês', money(iceCost.fuelCost), 'gasCost')}${metric('Tanques equivalentes / mês', number(iceCost.liters / car.tankLiters, 1))}${metric('Total mensal estimado', money(iceCost.total), 'iceTotal')}</ul></article><div class="vs-column"><span>VS</span></div><article class="compare-card electric-card">${carSummary(ev, 'OPÇÃO ELÉTRICA')}<ul class="metric-list">${metric('Assinatura de referência', money(ev.subscriptionPrice))}${metric('Energia por mês', money(evCost.energyCost), 'energyCost')}${metric('Recargas equivalentes / mês', `≈ ${number(evCost.charges, 1)}`)}${metric('Total mensal estimado', money(evCost.total), 'evTotal')}</ul></article></div><div class="cost-conclusion ${totalSaving != null && totalSaving < 0 ? 'cost-higher' : ''}"><span class="eyebrow">ASSINATURA + CONSUMO</span><h3 id="totalDifference">${conclusion}</h3><p>Combustível: ${money(iceCost.fuelCost)}/mês · Energia: ${money(evCost.energyCost)}/mês.</p><small>Total estimado inclui mensalidade e consumo. Não inclui instalação de carregador, estacionamento, pedágios ou taxas adicionais de recarga. Custos operacionais menores não garantem um total menor.</small></div>${rangeBar(ev, evCost)}`;
}
function renderEVConfidenceResult(car) {
  const costs = calculateEVCost(car, state.userProfile);
  byId('resultContent').innerHTML = `<div class="ev-confidence"><div>${carSummary(car, 'RAIO-X DA SUA ESCOLHA')}</div><div><span class="eyebrow">${escapeHTML(carName(car))} · NA SUA ROTINA</span><h3>Você abastece diferente.</h3><ul class="metric-list">${metric('Energia estimada por mês', money(costs.energyCost), 'energyCost')}${metric('Recargas equivalentes / mês', `≈ ${number(costs.charges, 1)}`)}${metric('Autonomia de referência', `${number(car.rangeKm)} km`)}${metric('Assinatura de referência', money(car.subscriptionPrice))}${metric('Assinatura + energia / mês', money(costs.total), 'evTotal')}</ul></div></div>${rangeBar(car, costs)}<div class="confidence-arguments"><article><span>01</span><h3>${costs.rangeRatio <= SIMULATION_CONFIG.goodDailyRangeRatio ? 'Você roda com folga na média.' : 'Você pode planejar cada recarga.'}</h3><p>${number(costs.dailyKm, 1)} km por dia frente a ${number(car.rangeKm)} km de autonomia estimada. Reserve margem para os dias fora da rotina.</p></article><article><span>02</span><h3>Você sabe onde procurar recarga.</h3><p>Explore os pontos próximos e confirme quais atendem seus caminhos e seu carro.</p><button class="text-button" data-scroll="recarga">Ver pontos próximos ↓</button></article><article><span>03</span><h3>Você dirige com apoio.</h3><p>Documentação, manutenção e suporte Localiza Assinatura, conforme as condições do seu plano.</p></article></div>`;
}
function renderAnalysis() {
  const car = selectedCar(), ev = electricCar();
  if (!car || !ev) return;
  const fit = calculateEVFit(ev, state.userProfile);
  const isEV = car.drivetrain === 'ev';
  byId('resultEyebrow').textContent = isEV ? '03 · RAIO-X DA SUA ESCOLHA' : '03 · SUA COMPARAÇÃO PERSONALIZADA';
  byId('fitTitle').textContent = fit.title;
  byId('fitSubtitle').textContent = `${carName(ev)}: ${fit.description}`;
  byId('fitLevel').textContent = fit.level;
  byId('fitLevel').dataset.level = fit.level;
  if (isEV) renderEVConfidenceResult(car); else renderComparison(car, ev);
  const reference = isEV ? getCar(ev.co2ReferenceId) : car;
  const co2 = reference ? calculateCO2Impact(reference, ev, state.userProfile) : null;
  byId('co2Heading').textContent = co2?.annual < 0 ? 'Neste cenário, a emissão operacional estimada aumenta' : 'Quanto sua rotina deixaria de emitir operacionalmente';
  byId('co2Avoided').textContent = co2 ? `≈ ${number(Math.abs(co2.annual))} kg de CO₂ ${co2.annual < 0 ? 'a mais' : 'a menos'} por ano` : 'Referência de emissões não cadastrada';
  byId('co2Contract').textContent = co2 ? `≈ ${number(Math.abs(co2.contractTonnes), 1)} t ${co2.annual < 0 ? 'a mais' : 'evitadas'} em ${SIMULATION_CONFIG.contractMonths} meses` : '';
  byId('co2Reference').textContent = reference ? `Referência operacional: ${carName(reference)}, movido a gasolina, na mesma quilometragem. ${isEV ? 'Usado apenas como base de emissões; sua escolha continua sendo o elétrico.' : ''}` : '';
  byId('calculationNote').textContent = `Estimativa baseada no perfil informado e em parâmetros médios de consumo. Energia: ${number(state.userProfile.homeCharging ? SIMULATION_CONFIG.homeEnergyPrice : SIMULATION_CONFIG.publicEnergyPrice, 2)} R$/kWh (${state.userProfile.homeCharging ? 'casa/trabalho' : 'recarga pública'}). CO₂: ${number(SIMULATION_CONFIG.gasolineCO2KgPerLiter, 2)} kg/L de gasolina e ${number(SIMULATION_CONFIG.electricityCO2KgPerKwh, 3)} kg/kWh de energia; não inclui fabricação. Recargas equivalentes a uma bateria completa. Mensalidades e parâmetros são valores de referência para o protótipo.`;
  byId('chargingBridge').textContent = fit.level === 'EXIGE PLANEJAMENTO' ? 'A recarga é parte importante da sua decisão.' : 'Sua média diária cabe na autonomia de referência.';
  byId('chargingIntro').textContent = `Veja onde você poderia carregar o ${carName(ev)} nos seus caminhos.`;
  byId('finalTitle').textContent = `Seu próximo passo com o ${carName(ev)}.`;
  byId('finalSubtitle').textContent = 'Confira o plano, tire as últimas dúvidas e peça seu orçamento.';
  byId('ctaElectric').textContent = isEV ? `Quero assinar o ${carName(ev)}` : `Quero conhecer o ${carName(ev)}`;
  byId('ctaElectric').dataset.carId = ev.id;
  byId('resultado').hidden = false;
  document.querySelectorAll('[data-after-analysis]').forEach((section) => { section.hidden = false; });
}

// 5. RECARGA — Google Maps + Places (New). Nenhum endpoint REST manual.
let googleMapsPromise;
let googleAuthFailed = false;
let chargingMap = null;
let infoWindow = null;
let chargingMarkers = new Map();
let originMarker = null;
function hasGoogleMapsKey() {
  return Boolean(GOOGLE_MAPS_CONFIG.apiKey.trim() && !GOOGLE_MAPS_CONFIG.apiKey.includes('COLOQUE_SUA_CHAVE'));
}
function withTimeout(promise, message) {
  let timer;
  return Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(message)), GOOGLE_MAPS_CONFIG.timeoutMs); })]).finally(() => clearTimeout(timer));
}
function loadGoogleMaps() {
  if (!hasGoogleMapsKey()) return Promise.reject(new Error('Configure a chave do Google Maps para visualizar pontos reais.'));
  if (googleAuthFailed) return Promise.reject(new Error('A chave do Google Maps não foi autorizada.'));
  if (window.google?.maps?.importLibrary) return Promise.resolve();
  if (googleMapsPromise) return googleMapsPromise;
  // Carregamento async oficial; cada biblioteca é importada no momento do uso.
  googleMapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const callbackName = '__localizaGoogleMapsReady';
    const timeout = setTimeout(() => fail(new Error('O Google Maps demorou para responder.')), GOOGLE_MAPS_CONFIG.timeoutMs);
    function fail(error) {
      clearTimeout(timeout);
      script.remove();
      window[callbackName] = () => {}; // Uma resposta atrasada não altera o estado da tela.
      reject(error);
    }
    window[callbackName] = () => { clearTimeout(timeout); resolve(); };
    window.gm_authFailure = () => {
      googleAuthFailed = true;
      fail(new Error('Não foi possível autorizar a chave do Google Maps.'));
      if (state.charging.mode === 'demo') renderOfflineMap();
      else if (state.charging.mode === 'real') void activateDemoMode('O Google Maps não autorizou esta configuração.', false);
    };
    script.src = `https://maps.googleapis.com/maps/api/js?${new URLSearchParams({ key: GOOGLE_MAPS_CONFIG.apiKey, v: 'weekly', loading: 'async', callback: callbackName, language: 'pt-BR', region: 'BR' })}`;
    script.async = true;
    script.onerror = () => fail(new Error('Não foi possível carregar o Google Maps.'));
    document.head.append(script);
  }).catch((error) => { googleMapsPromise = null; throw error; });
  return googleMapsPromise;
}
function requestUserLocation() {
  const fixed = window.APP_CONFIG?.FIXED_LOCATION;
  if (fixed && Number.isFinite(fixed.lat) && Number.isFinite(fixed.lng)) {
    return Promise.resolve({ lat: fixed.lat, lng: fixed.lng });
  }
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject(new Error('Localização indisponível neste navegador.'));
    navigator.geolocation.getCurrentPosition(({ coords }) => resolve({ lat: coords.latitude, lng: coords.longitude }), reject,
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
  });
}
function calculateDistance(a, b) {
  const rad = (value) => value * Math.PI / 180;
  const h = Math.sin(rad(b.lat - a.lat) / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(rad(b.lng - a.lng) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(Math.min(1, h)));
}
async function searchNearbyChargingStations(position) {
  const { Place, SearchNearbyRankPreference } = await withTimeout(google.maps.importLibrary('places'), 'Não foi possível carregar a busca de pontos.');
  const { places } = await withTimeout(Place.searchNearby({
    fields: ['id', 'displayName', 'location', 'formattedAddress', 'googleMapsURI'],
    locationRestriction: { center: position, radius: GOOGLE_MAPS_CONFIG.searchRadiusMeters },
    includedPrimaryTypes: ['electric_vehicle_charging_station'],
    maxResultCount: GOOGLE_MAPS_CONFIG.maxResults,
    rankPreference: SearchNearbyRankPreference.DISTANCE,
  }), 'A busca de pontos demorou para responder.');
  return (places || []).filter((place) => place.location).map((place) => ({
    id: place.id, name: place.displayName || 'Ponto de recarga', address: place.formattedAddress || '',
    lat: place.location.lat(), lng: place.location.lng(), url: place.googleMapsURI,
  })).map((station) => ({ ...station, distance: calculateDistance(position, station) })).sort((a, b) => a.distance - b.distance);
}
function clearGoogleMap() {
  infoWindow?.close();
  chargingMarkers.forEach((marker) => { marker.map = null; });
  if (originMarker) originMarker.map = null;
  if (chargingMap && window.google?.maps?.event) google.maps.event.clearInstanceListeners(chargingMap);
  chargingMarkers = new Map();
  chargingMap = infoWindow = originMarker = null;
  byId('chargingMap').replaceChildren();
  byId('chargingMap').classList.remove('offline-map');
}
function setMapPlaceholder(title, description = '') {
  clearGoogleMap();
  const wrapper = document.createElement('div'); wrapper.className = 'map-placeholder';
  const icon = document.createElement('span'); icon.textContent = '↯'; icon.setAttribute('aria-hidden', 'true');
  const strong = document.createElement('strong'); strong.textContent = title;
  const p = document.createElement('p'); p.textContent = description;
  wrapper.append(icon, strong, p); byId('chargingMap').append(wrapper);
}
function googleMapsURL(station) {
  if (state.charging.mode === 'demo') return null; // Não apresentar um local fictício como estabelecimento real.
  if (station.url) {
    try {
      const url = new URL(station.url);
      if (url.protocol === 'https:' && (url.hostname === 'maps.google.com' || url.hostname === 'www.google.com' || url.hostname === 'maps.google')) return url.href;
    } catch { /* usa o link por coordenadas abaixo */ }
  }
  return `https://www.google.com/maps/search/?${new URLSearchParams({ api: '1', query: `${station.lat},${station.lng}`, ...(station.id ? { query_place_id: station.id } : {}) })}`;
}
function stationDetails(station, includeTitle = true) {
  const content = document.createElement('div');
  if (includeTitle) { const title = document.createElement('strong'); title.textContent = station.name; content.append(title); }
  [station.address, `≈ ${number(station.distance, 1)} km em linha reta`, station.charger].filter(Boolean).forEach((text) => {
    const p = document.createElement('p'); p.textContent = text; content.append(p);
  });
  const url = googleMapsURL(station);
  if (url) { const link = document.createElement('a'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Abrir no Google Maps ↗'; content.append(link); }
  return content;
}
async function renderGoogleMap(position, requestId) {
  const [{ Map: GoogleMap, InfoWindow }, { AdvancedMarkerElement }] = await withTimeout(Promise.all([
    google.maps.importLibrary('maps'), google.maps.importLibrary('marker'),
  ]), 'Não foi possível carregar o mapa.');
  if (requestId !== state.charging.requestId || googleAuthFailed) return;
  clearGoogleMap();
  chargingMap = new GoogleMap(byId('chargingMap'), { center: position, zoom: 13, mapId: GOOGLE_MAPS_CONFIG.mapId,
    mapTypeControl: false, streetViewControl: false, fullscreenControl: true, gestureHandling: 'cooperative' });
  infoWindow = new InfoWindow();
  const demo = state.charging.mode === 'demo';
  const originLabel = demo ? 'Referência da demonstração · Centro de BH' : window.APP_CONFIG?.FIXED_LOCATION ? `Localização fixa: ${window.APP_CONFIG.FIXED_LOCATION.address}` : 'Você está aqui';
  originMarker = new AdvancedMarkerElement({ map: chargingMap, position, title: originLabel, gmpClickable: true });
  originMarker.addEventListener('gmp-click', () => {
    const label = document.createElement('div');
    label.textContent = originLabel;
    infoWindow.setContent(label);
    infoWindow.open({ map: chargingMap, anchor: originMarker });
  });
  state.charging.stations.forEach((station, index) => {
    const content = document.createElement('span'); content.className = 'google-station-marker'; content.textContent = index + 1;
    const marker = new AdvancedMarkerElement({ map: chargingMap, position: { lat: station.lat, lng: station.lng }, title: station.name, gmpClickable: true });
    marker.append(content);
    marker.addEventListener('gmp-click', () => focusChargingStation(station.id, true));
    chargingMarkers.set(station.id, marker);
  });
  byId('mapNote').textContent = demo ? 'Demonstração com posições ilustrativas em Belo Horizonte. A referência é o Centro de BH, não sua localização.' : 'Distâncias aproximadas em linha reta. Mova ou amplie o mapa para explorar os pontos; a busca não é refeita automaticamente.';
}
function renderChargingStations() {
  const demo = state.charging.mode === 'demo';
  const stations = state.charging.stations;
  byId('chargingStats').hidden = false;
  byId('chargingCount').textContent = number(stations.length);
  byId('chargingCountLabel').textContent = demo ? 'pontos ilustrativos em Belo Horizonte' : 'pontos encontrados nesta busca';
  byId('chargingMode').textContent = demo ? 'DEMONSTRAÇÃO COM DADOS ILUSTRATIVOS' : 'GOOGLE MAPS · PONTOS PRÓXIMOS';
  byId('chargingShown').textContent = demo ? 'Locais fictícios para explorar a experiência.' : `Busca em até ${number(GOOGLE_MAPS_CONFIG.searchRadiusMeters / 1000)} km, limitada a ${GOOGLE_MAPS_CONFIG.maxResults} resultados. Não representa o total da cidade.`;
  byId('chargingNote').textContent = demo ? 'Demonstração com dados ilustrativos. Os locais e conectores não representam infraestrutura confirmada.' : 'Confirme acesso, horários, conector, preço e funcionamento com o operador. Um resultado não garante disponibilidade.';
  byId('chargingListPanel').hidden = stations.length === 0;
  byId('chargingList').replaceChildren(...stations.map((station, index) => {
    const li = document.createElement('li'); li.dataset.stationId = station.id;
    const button = document.createElement('button'); button.className = 'station-focus'; button.type = 'button';
    button.textContent = `${index + 1}. ${station.name}`; button.setAttribute('aria-label', `Ver ${station.name} no mapa`); button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => focusChargingStation(station.id));
    li.append(button, stationDetails(station, false));
    li.addEventListener('click', (event) => { if (!event.target.closest('a, button')) focusChargingStation(station.id); });
    return li;
  }));
}
function focusChargingStation(id, fromMarker = false) {
  const station = state.charging.stations.find((item) => item.id === id);
  if (!station) return;
  state.charging.activeId = id;
  document.querySelectorAll('[data-station-id]').forEach((li) => {
    const active = li.dataset.stationId === id;
    li.classList.toggle('active', active);
    li.querySelector('button').setAttribute('aria-pressed', String(active));
    if (active && fromMarker) {
      // Deslocar apenas a lista; não tirar o mapa da tela no celular.
      byId('chargingList').scrollTop = li.offsetTop - byId('chargingList').offsetTop;
    }
  });
  if (chargingMap && chargingMarkers.has(id)) {
    chargingMap.panTo({ lat: station.lat, lng: station.lng });
    infoWindow.setContent(stationDetails(station));
    infoWindow.open({ map: chargingMap, anchor: chargingMarkers.get(id) });
  } else {
    byId('offlineDetails')?.replaceChildren(stationDetails(station));
    document.querySelectorAll('.offline-marker').forEach((marker) => marker.classList.toggle('active', marker.dataset.id === id));
  }
}
function renderOfflineMap() {
  clearGoogleMap();
  const map = byId('chargingMap'); map.classList.add('offline-map');
  const label = document.createElement('strong'); label.className = 'offline-label'; label.textContent = 'BELO HORIZONTE · ESQUEMA ILUSTRATIVO'; map.append(label);
  state.charging.stations.forEach((station, index) => {
    const marker = document.createElement('button'); marker.type = 'button'; marker.className = 'offline-marker'; marker.dataset.id = station.id;
    marker.textContent = index + 1; marker.setAttribute('aria-label', station.name);
    marker.style.left = `${12 + ((station.lng + 43.985) / 0.085) * 76}%`;
    marker.style.top = `${16 + ((-19.84 - station.lat) / 0.145) * 43}%`;
    marker.addEventListener('click', () => focusChargingStation(station.id, true)); map.append(marker);
  });
  const detail = document.createElement('div'); detail.className = 'offline-detail'; detail.id = 'offlineDetails'; detail.setAttribute('aria-live', 'polite');
  detail.textContent = 'Selecione um ponto no esquema ou na lista para ver os detalhes.'; map.append(detail);
  byId('mapNote').textContent = 'Esquema demonstrativo sem internet. Distâncias a partir de uma referência no Centro de BH, não da sua localização.';
}
function setChargingBusy(busy) {
  state.charging.busy = busy;
  byId('findCharging').disabled = byId('showDemo').disabled = busy;
  byId('chargingMap').setAttribute('aria-busy', String(busy));
}
async function activateDemoMode(reason = '', tryGoogle = true) {
  const requestId = ++state.charging.requestId;
  state.charging.mode = 'demo'; state.charging.activeId = null;
  state.charging.stations = DEMO_CHARGING_POINTS.map((station) => ({ ...station, distance: calculateDistance(DEMO_ORIGIN, station) })).sort((a, b) => a.distance - b.distance);
  byId('chargingStatus').textContent = `${reason}${reason ? ' ' : ''}Explore uma demonstração de Belo Horizonte.`;
  renderChargingStations();
  renderOfflineMap(); // A demo já funciona enquanto o Google carrega, se configurado.
  setChargingBusy(false);
  if (tryGoogle && hasGoogleMapsKey() && !googleAuthFailed) {
    try {
      await loadGoogleMaps();
      if (requestId === state.charging.requestId) await renderGoogleMap(DEMO_ORIGIN, requestId);
    } catch { if (requestId === state.charging.requestId) renderOfflineMap(); }
  }
}
async function findNearbyCharging() {
  if (state.charging.busy) return;
  if (FORCE_DEMO_MODE) { await activateDemoMode(); return; }
  if (!hasGoogleMapsKey()) {
    byId('chargingStatus').textContent = 'Configure a chave do Google Maps para visualizar pontos reais. Você pode explorar a demonstração abaixo.';
    if (state.charging.mode !== 'demo') setMapPlaceholder('A demonstração está pronta para explorar.', 'Use “Visualizar demonstração” para conhecer a experiência sem uma chave.');
    return;
  }
  const requestId = ++state.charging.requestId;
  state.charging.mode = 'loading'; state.charging.activeId = null; state.charging.stations = [];
  setChargingBusy(true);
  byId('chargingStats').hidden = byId('chargingListPanel').hidden = true;
  byId('chargingList').replaceChildren();
  byId('chargingMode').textContent = 'CONSULTANDO INFRAESTRUTURA';
  byId('chargingStatus').textContent = 'Buscando pontos de recarga próximos...';
  byId('chargingNote').textContent = 'Aguarde a localização e a consulta ao Google Places.';
  setMapPlaceholder('Buscando pontos de recarga próximos...', 'Isso pode levar alguns segundos.');
  let stage = 'location';
  try {
    const position = await requestUserLocation();
    state.location = position;
    stage = 'maps';
    await loadGoogleMaps();
    const stations = await searchNearbyChargingStations(position);
    if (requestId !== state.charging.requestId) return;
    state.charging.mode = 'real'; state.charging.stations = stations;
    renderChargingStations();
    await renderGoogleMap(position, requestId);
    if (requestId !== state.charging.requestId) return;
    byId('chargingStatus').textContent = stations.length === 0 ? 'Não encontramos pontos de recarga nesta busca. Amplie seu planejamento antes de depender da rede pública.'
      : stations.length < 3 ? `Encontramos ${stations.length} ${stations.length === 1 ? 'opção próxima' : 'opções próximas'}. São poucas opções nesta busca; confirme se atendem sua rotina.`
        : `Encontramos ${stations.length} pontos de recarga próximos de você. Veja os mais próximos no mapa e confirme quais atendem seus caminhos.`;
  } catch (error) {
    if (requestId !== state.charging.requestId) return;
    await activateDemoMode(stage === 'location' ? error.code === 1 ? 'A localização não foi compartilhada. Você ainda pode visualizar uma demonstração.' : 'Não conseguimos obter sua localização.' : 'Não conseguimos consultar a infraestrutura de recarga agora.', false);
  } finally { if (requestId === state.charging.requestId || state.charging.mode === 'demo') setChargingBusy(false); }
}

// 6. EVENTOS E INICIALIZAÇÃO
let toastTimer;
function showInterest() {
  const car = electricCar();
  if (!car || !state.hasAnalysis) return;
  byId('toast').textContent = `Seu interesse no ${carName(car)} foi registrado nesta demonstração. Em uma implementação real, seguiríamos para orçamento. Nenhum dado foi enviado.`;
  byId('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => byId('toast').classList.remove('show'), 6500);
}
byId('categoryFilters').innerHTML = Object.entries(CATEGORIES).map(([id, label]) => `<button class="category-filter" data-category="${id}" aria-pressed="${id === state.category}">${label}</button>`).join('');
document.addEventListener('click', (event) => {
  const select = event.target.closest('[data-select-car]');
  if (select) selectCar(select.dataset.selectCar);
  const category = event.target.closest('[data-category]');
  if (category) filterCars(category.dataset.category);
  const scroll = event.target.closest('[data-scroll]');
  if (scroll) goTo(scroll.dataset.scroll);
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'choose') chooseAnotherCar();
  if (action === 'start-routine') { byId('simulador').hidden = false; goTo('simulador', 'routineTitle'); }
  const step = Number(event.target.closest('[data-step]')?.dataset.step);
  if (step === 1) chooseAnotherCar();
  if (step === 2 && state.selectedCarId) {
    continueWithSelectedCar();
    byId('simulador').hidden = false;
  }
  if (step === 3 && state.hasAnalysis) {
    byId('catalogo').hidden = byId('inicio').hidden = true;
    state.step = 3; renderAnalysis(); renderProgress(); goTo('resultado', 'fitTitle');
  }
});
// Se um asset configurado não existir, não mostrar foto de outro veículo nem imagem quebrada.
document.addEventListener('error', (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.src.endsWith('car-placeholder.svg')) return;
  image.src = 'assets/car-placeholder.svg'; image.alt = 'Imagem do modelo indisponível';
  const visual = image.closest('.vehicle-visual');
  if (visual && !visual.querySelector('span')) { const note = document.createElement('span'); note.textContent = 'Imagem do modelo em breve'; visual.classList.add('pending-image'); visual.append(note); }
}, true);
byId('continueCar').addEventListener('click', continueWithSelectedCar);
byId('profileForm').addEventListener('input', () => {
  byId('monthlyKmOutput').value = `${number(Number(byId('monthlyKm').value))} km`;
  if (!byId('profileForm').checkValidity()) return;
  readUserProfile();
  if (state.hasAnalysis) renderAnalysis();
});
byId('profileForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!electricCar() || !byId('profileForm').reportValidity()) return;
  readUserProfile(); state.hasAnalysis = true; state.step = 3;
  renderAnalysis(); renderProgress(); goTo('resultado', 'fitTitle');
  if (FORCE_DEMO_MODE && state.charging.mode === 'idle') void activateDemoMode();
});
byId('findCharging').addEventListener('click', findNearbyCharging);
byId('showDemo').addEventListener('click', () => { void activateDemoMode(); });
byId('ctaElectric').addEventListener('click', showInterest);
if (window.APP_CONFIG?.FIXED_LOCATION) {
  byId('locationNotice').textContent = `Localização fixa da busca: ${window.APP_CONFIG.FIXED_LOCATION.address}. As distâncias são calculadas a partir desse endereço, sem solicitar localização ao navegador.`;
}
byId('electricVehicles').textContent = `Mais de ${number(LOCALIZA_ELECTRIC_IMPACT.electricVehicles)}`;
byId('avoidedCO2Tonnes').textContent = `≈ ${number(LOCALIZA_ELECTRIC_IMPACT.avoidedCO2Tonnes)}`;
if (!hasGoogleMapsKey() && !FORCE_DEMO_MODE) byId('chargingStatus').textContent = 'Configure a chave do Google Maps para visualizar pontos reais. A demonstração já está disponível.';
renderCarCatalog();
renderProgress();
