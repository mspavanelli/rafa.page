import React, { useEffect, useMemo, useRef, useState } from 'react';

const photos = [
  new URL('../assets/photo_2026-06-01_18-38-09.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-06.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-07.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-08.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-10.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-11.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-12.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-13.jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-13 (2).jpg', import.meta.url).href,
  new URL('../assets/photo_2026-06-01_18-38-14.jpg', import.meta.url).href,
];

const tabs = [
  'Compilado Supremo',
  'Trajetória da Lenda',
  'Gerador de Memes',
  'Quiz Sobre Rafa',
  'Templo de Devoção',
  'Setor Escola Pública',
  'Central de Falência',
  'Memorial dos Boats',
  'Simulador Sales Engineer',
  'Futuro da Rafa',
];

const facts = [
  'Namora Elizeu',
  'Melhor amiga de Luiza',
  'Zoa os boats',
  'Gosta de ganhar 3 folhinhas de papel higiênico',
  'Trabalhou em escola pública',
  'Conheceu o professor Rafael',
  'Sofreu preconceito pela Ameinda',
  'Fez estágio na IBM',
  'É Sales Engineer na Loggi',
  'Odeia a Loggi porque tem EBITDA negativo',
  'Ama Avenged Sevenfold',
  'Foi ao show do AC/DC',
  'Ex-jogadora de League of Legends',
  'Diplomada em Física pela USP',
  'Levou Física na USP nas coxas',
  'Pós-graduanda na UFABC',
  'Especialista em Python',
  'Melhor Sales Engineer do Brasil',
  'Fluente em inglês, espanhol e chinês',
  'Lida com clientes chineses',
  'Lida diariamente com colegas desprovidos de inteligência',
  'Quer sair da Loggi',
  'Sonha trabalhar na Amazon ou Google',
  'Aspira ganhar R$ 30.000 por mês',
];

const timeline = [
  {
    year: '13/02/2001',
    title: 'Nasce Rafaela',
    body: 'O calendário corporativo ainda não sabia, mas o onboarding da lenda tinha começado.',
    metric: 'Poder inicial: 9.001',
  },
  {
    year: '2019',
    title: 'UNIFESP Diadema',
    body: 'Conhece Yoshi, o japonês que a acusa de viver na bolha. A bolha, segundo auditoria, tinha Wi-Fi melhor.',
    metric: 'Bolha detectada: 87%',
  },
  {
    year: '2020',
    title: 'Física USP',
    body: 'Ingressa em Física, conhece seus amigos e prova que o caos também pode passar em cálculo.',
    metric: 'Integral resolvida por deboche',
  },
  {
    year: '2022',
    title: 'Museu Catavento',
    body: 'Estágio heroico. Salário de R$ 800 e dignidade preservada por força bruta.',
    metric: 'ROI emocional: negativo',
  },
  {
    year: '2022',
    title: 'Ioggi',
    body: 'A primeira travessia logística. Ninguém sabe se era typo, destino ou profecia.',
    metric: 'Pacotes místicos: 42',
  },
  {
    year: '2023',
    title: 'Elizeu entra em cena',
    body: 'Tudo sai dos eixos. Conhece o amor e deixa para trás o ex-namorado Tadeu no arquivo morto da timeline.',
    metric: 'Romance: deploy em produção',
  },
  {
    year: '2024',
    title: 'Loggi e Sales Engineering',
    body: 'Vira sucesso explicando coisas complexas para clientes e coisas simples para planilhas misteriosas.',
    metric: 'Demos vencidas: 999+',
  },
  {
    year: '2026',
    title: 'Novos caminhos',
    body: 'Fim da Loggi? A contagem regressiva fictícia apita enquanto Amazon e Google atualizam o LinkedIn.',
    metric: 'Destino: carregando...',
  },
];

const memeBank = {
  corporate: [
    'Rafa abriu o PowerPoint e o EBITDA pediu demissão antes do slide 2.',
    'LinkedIn da Rafa: parabéns pela promoção para Entidade Multilíngue de Receita.',
    'Quando a call começa com "rapidinho", Rafa já cria uma branch chamada fuga.',
  ],
  loggi: [
    'Loggi: onde o prejuízo não é bug, é feature premium.',
    'O gráfico caiu tanto que pediu reembolso de frete.',
    'Salvar a empresa? Rafa tentou, mas o EBITDA estava fora da área de cobertura.',
  ],
  boats: [
    'Boat avistado. Rafa riu. A marinha corporativa foi acionada.',
    'Este boat foi considerado suspeito por 9 em cada 10 planilhas.',
    'O boat era tão inútil que virou KPI.',
  ],
  physics: [
    'Rafa levou Física nas coxas, mas as coxas tinham peer review.',
    'A segunda lei de Newton foi substituída por: cliente chinês em repouso exige reunião.',
    'USP confirmou: a constante universal agora é a vontade de sair da Loggi.',
  ],
  china: [
    'Cliente chinês perguntou em mandarim. Rafa respondeu em Python.',
    'A Grande Muralha caiu de joelhos diante da demo técnica.',
    'Rafa traduziu "escopo indefinido" para três idiomas e ainda sorriu.',
  ],
};

const questions = [
  ['O que Rafaela mais deseja?', ['Comprar um barco', 'Trabalhar na Amazon', 'Virar astronauta', 'Criar uma startup de EBITDA negativo'], 1],
  ['Qual é a formação lendária da Rafa?', ['Física pela USP', 'Medicina submarina', 'Moda medieval', 'Astrologia logística'], 0],
  ['Qual valor mensal habita o sonho corporativo?', ['R$ 3,50', 'R$ 30.000', 'R$ 800 eternos', 'Um cupom de frete'], 1],
  ['Quem é o namorado da Rafa?', ['Elizeu', 'Yoshi', 'Professor Rafael', 'EBITDA'], 0],
  ['Qual banda Rafa ama?', ['Avenged Sevenfold', 'Roupa Nova', 'KPI Boys', 'The Negative Margins'], 0],
  ['Qual show histórico ela foi?', ['AC/DC', 'Mozart holográfico', 'Planilha Ao Vivo', 'Call de sábado'], 0],
  ['Qual cargo ela exerce na Loggi?', ['Sales Engineer', 'Capitã de barcos', 'Auditora de memes', 'CEO do recreio'], 0],
  ['O que Rafa zoa?', ['Boats', 'Vulcões', 'Sinos', 'Cafeteiras'], 0],
  ['Qual linguagem ela domina?', ['Python', 'COBOL emocional', 'HTML de guardanapo', 'Latim fiscal'], 0],
  ['Qual amiga ocupa o posto lendário?', ['Luiza', 'Ameinda', 'Alexa', 'Siri'], 0],
  ['Qual universidade aparece na pós?', ['UFABC', 'Hogwarts Business School', 'USPTO', 'Loggi Academy'], 0],
  ['Qual obstáculo diário ela enfrenta?', ['Colegas sem inteligência', 'Dragões fiscais', 'Impressoras dóceis', 'Boats úteis'], 0],
  ['Qual item ela gosta de ganhar em quantidade precisa?', ['3 folhinhas de papel higiênico', '17 canetas azuis', '1 EBITDA positivo', '8 boletos'], 0],
  ['Qual cliente ela atende com bravura?', ['Chinês', 'Marciano', 'Pirata', 'Medieval'], 0],
  ['O que o botão de salário faz?', ['Aumenta R$ 1000 por clique', 'Abre Excel', 'Apaga o site', 'Chama Tadeu'], 0],
  ['Quem acusou Rafa de viver na bolha?', ['Yoshi', 'Elizeu', 'Luiza', 'Um KPI'], 0],
  ['Qual estágio aparece na saga?', ['Museu Catavento', 'Museu do Frete', 'Parque dos Boats', 'Templo do EBITDA'], 0],
  ['Qual ranking Rafa domina?', ['Sales Engineers do Brasil', 'Pilotos de kart', 'Astronautas acústicos', 'Barcos infláveis'], 0],
  ['Qual empresa é alvo de desejo futuro?', ['Google', 'Ioggi 2', 'Bolha SA', 'Tadeu Corp'], 0],
  ['Qual frase define a experiência?', ['Museu, meme e religião ao mesmo tempo', 'Manual de geladeira', 'Relatório normal', 'Silêncio corporativo'], 0],
];

const achievementsBase = [
  'Troféu LinkedIn Em Chamas',
  'Medalha Boat Zoador',
  'Certificado Trilingue Plus Chinês',
  'Coroa Python Supremo',
];

function money(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

function App() {
  const [active, setActive] = useState(0);
  const [salary, setSalary] = useState(30000);
  const [boats, setBoats] = useState(128);
  const [chinaClients, setChinaClients] = useState(88);
  const [meme, setMeme] = useState('Clique em um gerador para consultar o Oráculo Meme-Corporativo.');
  const [confetti, setConfetti] = useState([]);
  const [achievements, setAchievements] = useState(achievementsBase);
  const [soundOn, setSoundOn] = useState(false);
  const [secretClicks, setSecretClicks] = useState(0);
  const [admirers, setAdmirers] = useState(870421);
  const [publicScore, setPublicScore] = useState(0);
  const [salesScore, setSalesScore] = useState(0);
  const [future, setFuture] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizDone, setQuizDone] = useState(false);
  const [companySaved, setCompanySaved] = useState(false);
  const audioRef = useRef(null);
  const activeSectionRef = useRef(null);

  const score = useMemo(
    () => questions.reduce((total, question, index) => total + (quizAnswers[index] === question[2] ? 1 : 0), 0),
    [quizAnswers],
  );

  useEffect(() => {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let index = 0;

    function onKeyDown(event) {
      if (event.key === sequence[index]) {
        index += 1;
        if (index === sequence.length) {
          unlock('Konami Code: Modo Rafa Cósmica');
          burst(90);
          setSalary((value) => value + 10000);
          index = 0;
        }
      } else {
        index = event.key === sequence[0] ? 1 : 0;
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAdmirers((value) => value + Math.floor(Math.random() * 29) + 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  function unlock(name) {
    setAchievements((items) => (items.includes(name) ? items : [name, ...items]));
    playTone(740, 0.08);
  }

  function playTone(freq = 520, duration = 0.08) {
    if (!soundOn) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = audioRef.current || new AudioContext();
    audioRef.current = context;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'square';
    oscillator.frequency.value = freq;
    gain.gain.setValueAtTime(0.04, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
  }

  function burst(count = 45) {
    const bits = Array.from({ length: count }, (_, id) => ({
      id: `${Date.now()}-${id}`,
      left: Math.random() * 100,
      drift: Math.random() * 220 - 110,
      fall: Math.random() * 1.7 + 2.1,
      color: ['#00d5ff', '#ff2fd6', '#ffe156', '#7cff6b', '#ffffff'][Math.floor(Math.random() * 5)],
    }));
    setConfetti((items) => [...items, ...bits]);
    setTimeout(() => {
      setConfetti((items) => items.filter((item) => !bits.some((bit) => bit.id === item.id)));
    }, 4300);
  }

  function salaryClick() {
    setSalary((value) => value + 1000);
    setChinaClients((value) => value + 1);
    playTone(620, 0.06);
    if (salary >= 39000) unlock('Conquista Secreta: RH Perdeu o Controle');
    burst(24);
  }

  function hiddenClick() {
    const next = secretClicks + 1;
    setSecretClicks(next);
    if (next === 5) {
      unlock('Troféu Oculto: Clicou Onde Ninguém Olhava');
      burst(60);
    }
  }

  function selectTab(index) {
    setActive(index);
    playTone(380 + index * 35, 0.04);
    window.setTimeout(() => {
      activeSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  return (
    <div className="noise min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-8 top-24 h-72 w-72 rounded-full bg-neonPink/20 blur-3xl" />
        <div className="absolute right-8 top-52 h-96 w-96 rounded-full bg-neonBlue/20 blur-3xl" />
        <div className="scanline absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
      </div>

      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            className="rounded-full border border-neonPink/60 bg-neonPink/15 px-3 py-2 text-sm font-black shadow-pink"
            onClick={hiddenClick}
            aria-label="Logo secreto da Rafa"
          >
            RB
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-black uppercase tracking-[.24em] text-neonBlue">dossiê interativo</p>
            <p className="truncate text-sm font-bold text-white/85">Rafaela Bueno de Oliveira</p>
          </div>
          <button
            onClick={() => {
              setSoundOn((value) => !value);
              setTimeout(() => playTone(500, 0.06), 0);
            }}
            className="rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/80 transition hover:border-neonBlue hover:text-white"
          >
            Som {soundOn ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className="tab-scroll flex gap-2 overflow-x-auto px-4 pb-3">
          <div className="mx-auto flex min-w-max max-w-7xl gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => selectTab(index)}
                className={`rounded-full border px-4 py-2 text-sm font-extrabold transition ${
                  active === index
                    ? 'border-neonPink bg-neonPink text-void shadow-pink'
                    : 'border-white/15 bg-white/7 text-white/75 hover:border-neonBlue hover:text-white'
                }`}
              >
                {index + 1}. {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-36">
        <Hero salary={salary} hiddenClick={hiddenClick} />
        <FactTicker />
        <section ref={activeSectionRef} className="mt-8 scroll-mt-36 md:scroll-mt-40">
          {active === 0 && (
            <Dashboard
              salary={salary}
              salaryClick={salaryClick}
              boats={boats}
              setBoats={setBoats}
              chinaClients={chinaClients}
              achievements={achievements}
              unlock={unlock}
            />
          )}
          {active === 1 && <Timeline burst={burst} />}
          {active === 2 && <MemeGenerator meme={meme} setMeme={setMeme} burst={burst} playTone={playTone} />}
          {active === 3 && (
            <Quiz
              quizAnswers={quizAnswers}
              setQuizAnswers={setQuizAnswers}
              quizDone={quizDone}
              setQuizDone={setQuizDone}
              score={score}
              unlock={unlock}
              burst={burst}
            />
          )}
          {active === 4 && <Temple admirers={admirers} burst={burst} unlock={unlock} playTone={playTone} />}
          {active === 5 && <PublicSchool score={publicScore} setScore={setPublicScore} unlock={unlock} burst={burst} />}
          {active === 6 && <Bankruptcy companySaved={companySaved} setCompanySaved={setCompanySaved} burst={burst} />}
          {active === 7 && <BoatMemorial boats={boats} setBoats={setBoats} burst={burst} unlock={unlock} />}
          {active === 8 && <SalesGame score={salesScore} setScore={setSalesScore} unlock={unlock} burst={burst} />}
          {active === 9 && <Future future={future} setFuture={setFuture} burst={burst} unlock={unlock} />}
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/25 px-4 py-8 text-center text-sm font-semibold text-white/70">
        Rafaela Bueno de Oliveira — uma trajetória improvável entre a Física, o Python, os clientes chineses e a eterna busca pelos R$ 30 mil mensais.
      </footer>

      {confetti.map((bit) => (
        <span
          key={bit.id}
          className="confetti"
          style={{
            left: `${bit.left}%`,
            background: bit.color,
            '--drift': `${bit.drift}px`,
            '--fall': `${bit.fall}s`,
          }}
        />
      ))}
    </div>
  );
}

function Hero({ salary, hiddenClick }) {
  return (
    <header className="grid items-center gap-6 lg:grid-cols-[1.08fr_.92fr]">
      <div className="glass relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="inline-flex rounded-full border border-neonPink/50 bg-neonPink/10 px-4 py-2 text-xs font-black uppercase tracking-[.24em] text-neonPink">
            Wikipédia corporativa de fã-clube
          </p>
          <p className="rounded-full border border-neonBlue/50 bg-neonBlue/10 px-3 py-1 text-xs font-black uppercase tracking-[.2em] text-neonBlue">
            Breaking News
          </p>
        </div>
        <h1 className="neon-text max-w-4xl font-display text-4xl font-black leading-[.95] md:text-6xl">
          Docente e Sales Engineer Rafaela Bueno de Oliveira
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-bold text-white/80 md:text-2xl">
          A física que derrotou a academia, conquistou clientes chineses e sobreviveu à Loggi.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Badge label="Salário-alvo" value={money(salary)} />
          <Badge label="Gênero" value="docu-meme" />
          <Badge label="Status" value="lenda viva" />
        </div>
      </div>
      <div className="glass relative min-h-[520px] overflow-hidden rounded-[2rem] p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-neonPink/25 via-transparent to-neonBlue/25" />
        <img
          className="relative h-[520px] w-full rounded-[1.5rem] object-cover object-center saturate-150"
          src={photos[0]}
          alt="Rafaela Bueno de Oliveira em retrato documental satírico"
        />
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/55 p-4 backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[.24em] text-neonBlue">foto heroína corporativa</p>
          <p className="mt-1 text-2xl font-black">Nível de poder: 98.765</p>
          <button onClick={hiddenClick} className="mt-3 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80 hover:bg-neonPink hover:text-void">
            Inspecionar aura secreta
          </button>
        </div>
      </div>
    </header>
  );
}

function FactTicker() {
  const loop = [...facts, ...facts];
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30 py-3">
      <div className="flex min-w-max animate-ticker gap-4">
        {loop.map((fact, index) => (
          <span key={`${fact}-${index}`} className="rounded-full border border-neonBlue/30 bg-neonBlue/10 px-4 py-2 text-sm font-bold text-white/85">
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ salary, salaryClick, boats, setBoats, chinaClients, achievements, unlock }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
      <Panel title="Compilado Supremo" kicker="dashboard principal">
        <div className="grid gap-4 md:grid-cols-2">
          <Metric title="Medidor de paciência com colegas" value="3%" tone="pink" bar={3} />
          <Metric title="Ranking mundial de Sales Engineers" value="#1" tone="blue" bar={100} />
          <Metric title="Boats zoados" value={boats.toString()} tone="pink" bar={78} />
          <Metric title="Clientes chineses atendidos" value={chinaClients.toString()} tone="blue" bar={88} />
          <Metric title="EBITDA negativo detectado" value="R$ -∞" tone="pink" bar={96} />
          <Metric title="Poder Python + Física" value="OVER 9000" tone="blue" bar={91} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={salaryClick} className="rounded-2xl bg-neonPink px-6 py-4 text-lg font-black text-void shadow-pink transition hover:scale-[1.02]">
            Aumentar salário da Rafa +R$ 1000
          </button>
          <button
            onClick={() => {
              setBoats((value) => value + 1);
              unlock('Conquista: Mais Um Boat Humilhado');
            }}
            className="rounded-2xl border border-neonBlue bg-neonBlue/15 px-6 py-4 text-lg font-black text-neonBlue transition hover:bg-neonBlue hover:text-void"
          >
            Registrar boat zoado
          </button>
        </div>
      </Panel>
      <Panel title="Troféus Fictícios" kicker="hall da glória">
        <div className="grid gap-3">
          {achievements.map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neonPink to-neonBlue text-2xl font-black text-void">
                {index + 1}
              </span>
              <div>
                <p className="font-black text-white">{item}</p>
                <p className="text-sm text-white/60">Desbloqueado no multiverso do currículo.</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function Timeline({ burst }) {
  const [countdown, setCountdown] = useState(99);
  useEffect(() => {
    const timer = setInterval(() => setCountdown((value) => (value <= 0 ? 99 : value - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Panel title="Trajetória da Lenda" kicker="documentário histórico com dados suspeitos">
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Metric title="Contagem regressiva fictícia para o destino da empresa" value={`${countdown} dias`} tone="pink" bar={100 - countdown} />
        <Metric title="Marcos históricos auditados" value="8" tone="blue" bar={80} />
        <Metric title="Gráfico absurdo de ascensão" value="+4.204%" tone="pink" bar={94} />
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-neonPink via-neonBlue to-neonPink md:block" />
        <div className="space-y-5">
          {timeline.map((item, index) => (
            <article key={`${item.year}-${item.title}`} className="group relative grid gap-4 rounded-3xl border border-white/10 bg-black/25 p-5 md:grid-cols-[160px_1fr] md:pl-12">
              <button
                onClick={() => burst(20)}
                className="absolute -left-1 top-6 hidden h-10 w-10 rounded-full border-4 border-void bg-neonPink font-black text-void shadow-pink transition group-hover:scale-125 md:grid md:place-items-center"
                aria-label={`Explodir marco ${item.year}`}
              >
                {index + 1}
              </button>
              <div>
                <p className="text-3xl font-black text-neonBlue">{item.year}</p>
                <p className="mt-2 inline-block -rotate-1 rounded-lg bg-neonPink px-3 py-1 text-xs font-black uppercase text-void">{item.metric}</p>
              </div>
              <div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-white/75">{item.body}</p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-neonPink to-neonBlue" style={{ width: `${55 + index * 5}%` }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function MemeGenerator({ meme, setMeme, burst, playTone }) {
  function choose(type) {
    const list = memeBank[type];
    setMeme(list[Math.floor(Math.random() * list.length)]);
    playTone(300 + Math.random() * 500, 0.06);
    burst(12);
  }

  return (
    <Panel title="Gerador de Memes" kicker="inteligência artificial duvidosa">
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <div className="grid gap-3">
          {[
            ['Gerar meme corporativo', 'corporate'],
            ['Gerar meme da Loggi', 'loggi'],
            ['Gerar meme de boats', 'boats'],
            ['Gerar meme de física', 'physics'],
            ['Gerar meme de cliente chinês', 'china'],
          ].map(([label, type]) => (
            <button key={type} onClick={() => choose(type)} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-left text-lg font-black transition hover:border-neonPink hover:bg-neonPink hover:text-void">
              {label}
            </button>
          ))}
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-neonBlue/30 bg-gradient-to-br from-neonPink/25 to-neonBlue/20 p-7">
          <div className="absolute right-6 top-6 animate-spinSlow rounded-full border-4 border-dashed border-white/35 p-10" />
          <p className="text-xs font-black uppercase tracking-[.25em] text-neonBlue">meme renderizado</p>
          <h2 className="mt-10 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">{meme}</h2>
          <p className="mt-8 inline-block rounded-full bg-black/40 px-4 py-2 text-sm font-bold text-white/75">Formato: LinkedIn + caos + ata de reunião.</p>
        </div>
      </div>
    </Panel>
  );
}

function Quiz({ quizAnswers, setQuizAnswers, quizDone, setQuizDone, score, unlock, burst }) {
  const classification = score <= 9 ? 'Você conhece Rafa?' : score <= 16 ? 'Você é amigo da Rafa?' : 'Você é praticamente a Rafa?';

  function finish() {
    setQuizDone(true);
    unlock(`Certificado Quiz: ${classification}`);
    burst(70);
  }

  return (
    <Panel title="Quiz Sobre Rafa" kicker="20 perguntas para provar devoção">
      <div className="grid gap-4">
        {questions.map(([question, options, correct], index) => (
          <article key={question} className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="font-black text-white">{index + 1}. {question}</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {options.map((option, optionIndex) => {
                const selected = quizAnswers[index] === optionIndex;
                const reveal = quizDone && optionIndex === correct;
                return (
                  <button
                    key={option}
                    onClick={() => setQuizAnswers((answers) => ({ ...answers, [index]: optionIndex }))}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${
                      reveal
                        ? 'border-emerald-300 bg-emerald-300 text-void'
                        : selected
                          ? 'border-neonPink bg-neonPink text-void'
                          : 'border-white/10 bg-white/7 text-white/75 hover:border-neonBlue'
                    }`}
                  >
                    {String.fromCharCode(65 + optionIndex)}) {option}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <div className="sticky bottom-4 mt-6 rounded-3xl border border-neonPink/40 bg-void/90 p-4 shadow-pink backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-neonBlue">placar</p>
            <p className="text-2xl font-black">{score}/20 — {quizDone ? classification : 'responda e emita certificado'}</p>
          </div>
          <button onClick={finish} className="rounded-2xl bg-neonBlue px-6 py-3 font-black text-void">
            Emitir certificado
          </button>
        </div>
      </div>
    </Panel>
  );
}

function Temple({ admirers, burst, unlock, playTone }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <Panel title="Templo de Devoção à Rafa" kicker="página exageradamente épica">
        <div className="relative mx-auto grid aspect-[3/4] max-w-md place-items-center overflow-hidden rounded-[2rem] border border-neonPink/40 bg-gradient-to-b from-neonBlue/25 to-neonPink/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative animate-floaty rounded-t-[9rem] border-4 border-neonBlue bg-black/40 p-5 shadow-neon">
            <img className="h-80 w-64 rounded-t-[8rem] object-cover object-center grayscale contrast-125" src={photos[8]} alt="Estátua digital da Rafa" />
            <p className="mt-4 text-center text-2xl font-black text-neonPink">ESTÁTUA DIGITAL</p>
          </div>
        </div>
      </Panel>
      <Panel title="Hinos e Frases" kicker="coro angelical opcional">
        <div className="space-y-4">
          {[
            'Quando a call escurece, Rafa acende o Python.',
            'Nem todo EBITDA negativo é eterno, mas toda demo da Rafa vira lenda.',
            'Três folhinhas hoje, trinta mil amanhã.',
            'Se o cliente fala em chinês, Rafa responde em solução.',
          ].map((line) => (
            <blockquote key={line} className="rounded-2xl border-l-4 border-neonPink bg-white/8 p-4 text-xl font-black italic">
              {line}
            </blockquote>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-neonBlue/30 bg-neonBlue/10 p-5">
          <p className="text-sm font-black uppercase tracking-[.24em] text-neonBlue">contador global de admiradores</p>
          <p className="mt-2 text-5xl font-black">{admirers.toLocaleString('pt-BR')}</p>
        </div>
        <button
          onClick={() => {
            burst(120);
            unlock('Relíquia: Prestígio Oficial à Rafaela');
            playTone(880, 0.14);
          }}
          className="mt-6 w-full rounded-3xl bg-gradient-to-r from-neonPink to-neonBlue px-6 py-5 text-2xl font-black text-void shadow-neon"
        >
          Prestigiar Rafaela
        </button>
      </Panel>
    </div>
  );
}

function PublicSchool({ score, setScore, unlock, burst }) {
  const missions = [
    ['Sobreviver ao horário escolar', 10],
    ['Corrigir provas infinitas', 15],
    ['Encontrar recursos inexistentes', 20],
    ['Derrotar Burocracia Suprema', 35],
  ];
  return (
    <Panel title="Setor Escola Pública" kicker="minigame de sobrevivência">
      <div className="grid gap-4 md:grid-cols-2">
        {missions.map(([mission, points], index) => (
          <button
            key={mission}
            onClick={() => {
              setScore((value) => value + points);
              if (index === 3) {
                unlock('Chefão Derrotado: Burocracia Suprema');
                burst(80);
              }
            }}
            className="rounded-3xl border border-white/10 bg-white/8 p-5 text-left transition hover:-translate-y-1 hover:border-neonPink hover:bg-neonPink/20"
          >
            <p className="text-xs font-black uppercase tracking-[.2em] text-neonBlue">missão {index + 1}</p>
            <h3 className="mt-2 text-2xl font-black">{mission}</h3>
            <p className="mt-3 text-white/65">+{points} pontos de sobrevivência docente</p>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Metric title="Seu ranking de sobrevivência" value={`${score} pts`} tone="pink" bar={Math.min(100, score)} />
        <Metric title="Giz encontrado" value="0,5 un." tone="blue" bar={9} />
        <Metric title="Provas restantes" value="∞" tone="pink" bar={99} />
      </div>
    </Panel>
  );
}

function Bankruptcy({ companySaved, setCompanySaved, burst }) {
  const headlines = [
    'ALERTA: gráfico aponta para baixo e assusta planilha',
    'Fontes fictícias afirmam: EBITDA viu Rafa e fingiu reunião',
    'Mercado reage com sticker de desespero',
    'Botão de salvar empresa falha pelo 9.876º trimestre consecutivo',
  ];
  return (
    <Panel title="Central de Falência da Loggi" kicker="portal de notícias sensacionalistas">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-3xl border border-red-400/40 bg-red-500/10 p-5">
          <p className="animate-pulse text-sm font-black uppercase tracking-[.24em] text-red-300">alerta vermelho piscando</p>
          <h3 className="mt-2 text-4xl font-black">EBITDA fictício em queda livre</h3>
          <div className="relative mt-6 h-72 overflow-hidden rounded-2xl bg-black/50">
            <div className="chart-down absolute inset-0 bg-gradient-to-br from-neonPink to-red-500" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/30" />
            <div className="absolute bottom-8 right-6 rounded-xl bg-red-500 px-4 py-2 text-xl font-black">-R$ 999M</div>
          </div>
        </div>
        <div className="space-y-4">
          {headlines.map((headline) => (
            <article key={headline} className="rounded-2xl border border-white/10 bg-white/8 p-4">
              <p className="text-xs font-black uppercase text-neonPink">urgente</p>
              <h4 className="mt-1 text-xl font-black">{headline}</h4>
            </article>
          ))}
          <button
            onClick={() => {
              setCompanySaved(true);
              burst(12);
            }}
            className="w-full animate-shake rounded-2xl bg-red-500 px-6 py-5 text-2xl font-black text-white"
          >
            Salvar a empresa
          </button>
          {companySaved && <p className="rounded-2xl border border-red-300/40 bg-red-500/15 p-4 font-black">Erro 500: lucro não encontrado. Tente novamente após aquisição pela Rafa.</p>}
        </div>
      </div>
    </Panel>
  );
}

function BoatMemorial({ boats, setBoats, burst, unlock }) {
  return (
    <Panel title="Memorial dos Boats" kicker="museu digital dos barcos">
      <div className="grid gap-4 md:grid-cols-3">
        {photos.slice(1, 7).map((photo, index) => (
          <figure key={photo} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/8">
            <img className="h-60 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:saturate-150" src={photo} alt={`Galeria documental ${index + 1}`} />
            <figcaption className="p-4 font-black">Exhibit {index + 1}: evidência visual do culto anti-boat</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Metric title="Boat mais suspeito" value="Lancha KPI" tone="pink" bar={92} />
        <Metric title="Boat mais inútil" value="Barco sem escopo" tone="blue" bar={78} />
        <Metric title="Boat mais zoado" value="O EBITDA Náutico" tone="pink" bar={99} />
      </div>
      <button
        onClick={() => {
          setBoats((value) => value + 1);
          unlock('Memorial: Zueira Náutica Registrada');
          burst(55);
        }}
        className="mt-6 rounded-3xl bg-neonBlue px-7 py-5 text-2xl font-black text-void shadow-neon"
      >
        Zuar um boat ({boats})
      </button>
    </Panel>
  );
}

function SalesGame({ score, setScore, unlock, burst }) {
  const obstacles = [
    ['Cliente sem requisito definido', 12],
    ['Planilha misteriosa', 16],
    ['KPI inventado', 20],
    ['Diretor desesperado', 25],
    ['EBITDA negativo', 30],
  ];
  return (
    <Panel title="Simulador de Sales Engineer" kicker="sobreviva a reuniões corporativas">
      <div className="grid gap-4 md:grid-cols-5">
        {obstacles.map(([obstacle, points]) => (
          <button
            key={obstacle}
            onClick={() => {
              setScore((value) => value + points);
              if (score + points >= 120) {
                unlock('Sales Engineer Suprema do Brasil');
                burst(90);
              }
            }}
            className="min-h-40 rounded-3xl border border-neonBlue/25 bg-gradient-to-br from-white/10 to-neonBlue/10 p-4 text-left transition hover:-translate-y-2 hover:border-neonPink hover:shadow-pink"
          >
            <p className="text-xs font-black uppercase tracking-[.16em] text-neonPink">obstáculo</p>
            <h3 className="mt-2 text-xl font-black">{obstacle}</h3>
            <p className="mt-4 text-white/65">Resolver demo: +{points}</p>
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6">
        <p className="text-sm font-black uppercase tracking-[.24em] text-neonBlue">pontuação</p>
        <p className="mt-2 text-6xl font-black">{score}</p>
        <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-neonPink to-neonBlue" style={{ width: `${Math.min(100, score / 2)}%` }} />
        </div>
      </div>
    </Panel>
  );
}

function Future({ future, setFuture, burst, unlock }) {
  const futures = [
    ['VP da Amazon', 'Rafa entra na sala e o Alexa pede mentoria em Sales Engineering.'],
    ['Diretora do Google', 'O Google Agenda se organiza sozinho para não desperdiçar o tempo dela.'],
    ['Rainha da Engenharia de Vendas', 'Coroa feita de Python, demo e contrato assinado.'],
    ['Mestre Suprema do Python', 'Pandas, NumPy e clientes chineses em perfeita harmonia.'],
    ['CEO de empresa lucrativa', 'Pela primeira vez, o EBITDA sorri sem ironia.'],
    ['Domadora Oficial de Clientes Chineses', 'Escopo indefinido entra, proposta fechada sai.'],
  ];

  function generate() {
    const pick = futures[Math.floor(Math.random() * futures.length)];
    setFuture(pick);
    unlock(`Futuro Alternativo: ${pick[0]}`);
    burst(75);
  }

  return (
    <Panel title="Futuro da Rafa" kicker="simulador de futuros alternativos">
      <button onClick={generate} className="rounded-3xl bg-gradient-to-r from-neonPink to-neonBlue px-8 py-5 text-2xl font-black text-void shadow-neon">
        Gerar futuro
      </button>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {(future ? [future, ...futures.filter((item) => item[0] !== future[0]).slice(0, 5)] : futures).map(([title, body], index) => (
          <article key={title} className={`rounded-3xl border p-5 transition ${index === 0 && future ? 'scale-[1.02] border-neonPink bg-neonPink/20 shadow-pink' : 'border-white/10 bg-white/8'}`}>
            <p className="text-xs font-black uppercase tracking-[.2em] text-neonBlue">possibilidade {index + 1}</p>
            <h3 className="mt-3 text-2xl font-black">{title}</h3>
            <p className="mt-3 text-white/70">{body}</p>
          </article>
        ))}
      </div>
    </Panel>
  );
}

function Panel({ title, kicker, children }) {
  return (
    <section className="glass rounded-[2rem] p-5 md:p-7">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[.24em] text-neonPink">{kicker}</p>
          <h2 className="mt-2 font-display text-3xl font-black md:text-5xl">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Badge({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/8 p-4">
      <p className="text-xs font-black uppercase tracking-[.2em] text-white/50">{label}</p>
      <p className="mt-1 text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function Metric({ title, value, tone = 'blue', bar = 50 }) {
  const color = tone === 'pink' ? 'from-neonPink to-fuchsia-300' : 'from-neonBlue to-cyan-200';
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
      <p className="text-sm font-bold text-white/65">{title}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${bar}%` }} />
      </div>
    </div>
  );
}

export default App;
