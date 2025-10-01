(() => {
  const container = document.querySelector('.container');
  const progressBar = document.querySelector('.progress__bar');

  const firstBlock = document.querySelector('[data-step="0"]');
  const nameInput = document.getElementById('name');
  const firstNextBtn = firstBlock.querySelector('.btn');

  const overlay = document.getElementById('videoOverlay');
  const video = document.getElementById('explodeVideo');

  // Шаги
  const steps = [
    {
      type: 'text',
      title: 'Спасибо, что уделяешь время моим начинаниям',
      paragraphs: [
        'Привет, {{name}}!',
        'Листать назад можно свободно, вперёд — только по кнопке «Далее».'
      ]
    },
    {
      type: 'text',
      title: 'А что это вообще и зачем?',
      paragraphs: [
        'Я обратился к замечательному человеку — Андрею, чтобы он помог мне стать кем-то в программировании.',
        'Он сказал выбрать профессию по душе и дал ссылки на ознакомительные курсы'
      ]
    },
    {
      type: 'image',
      title: 'Небольшая иллюстрация моего состояния после прохождения курса по профориентации',
      src: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY24zZDE3bzg0OXpwNWw0bDBvMjVucnc4MTk3a3pjNnFocmZrZDh5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pPhyAv5t9V8djyRFJH/giphy.gif'
    },
    {
      type: 'text',
      title: '1 Python',
      image: {
        src: 'https://media2.giphy.com/media/gG9fVWJdN41NeiHhzk/giphy.gif',
        alt: 'Логотип Python'
      },
      paragraphs: [
        'Пройден вступительный курс для разработки 20 часов и Data Analyst 20 часов, спойлер: из всего бэка понравился только python.',
        '1. Если я не вижу визуальный результат, мне становится дико скучно.',
        '2. Конкретно в практикуме — была разработка календаря, еле прошёл до конца.',
        '3. Циклы, ветвления — дали прикурить, но судя по всему они везде, нужно разбираться',
        '4. В дата-аналитике интереснее, но удручает, что я мало умею'
      ]
    },
    {
      type: 'text',
      title: '2 Frontend',
      image: {
        src: 'https://media3.giphy.com/media/QyAQb5yxGabwtx1rhx/giphy.gif',
        alt: 'Frontend'
      },
      paragraphs: [
        'Прошёл вступительный курс Frontend 20 часов',
        '1. HTML и CSS — понятно что куда зачем',
        '2. JavaScript — понравился больше, чем Python',
        '4. Здесь ссылка: <a href="https://falconbl44.github.io/test1/" target="_blank">тык</a>'
      ]
    },
    {
      type: 'text',
      title: '7 Сисадмин',
      paragraphs: ['В колледже проходили основы — фу, не очень.']
    },
    {
      type: 'text',
      title: '8 Data Analyst',
      images: [
        { src: 'assets/pooping.png', alt: 'poop' },
        { src: 'assets/sleep.jpg', alt: 'sleep' },
        { src: 'assets/activities.png', alt: 'activities' },
        { src: 'assets/amorim.jpg', alt: 'amorim' }
      ],
      paragraphs: [
        '1. Я люблю статистику и таблички',
        '2. Excel конечно привычнее и понятнее, но тут больше вариативности',
        '3. Мне нравится аналитика доходов, расходов, топов, ключевых действий в футболе и т.д',
        '4. Я люблю затыкать людей на основе объективных фактов и я душнила'
      ]
    },
    {
      type: 'text',
      title: '8 Финальный блок',
      paragraphs: [
        'Подытоживая топ у нас следующий:',
        '1 Аналитик данных',
        '2 Frontend (JavaScript)',
        '3 Python - разработчик',
        ' ',
        'Факт в том, что мне было интересно заниматься этим и это практика',
        '<strong>Спасибо за внимание!</strong>'
      ],
      isLast: true
    }
  ];

  const state = { unlockedIndex: 0, data: { name: '' } };

  // Утилиты
  function substitute(text) {
    return text.replaceAll('{{name}}', state.data.name || '');
  }
  function updateProgress() {
    const total = 1 + steps.length;
    const current = Math.min(state.unlockedIndex + 1, total);
    const pct = Math.round((current / total) * 100);
    progressBar.style.width = `${pct}%`;
  }
  function createBlock({ title }) {
    const sec = document.createElement('section');
    sec.className = 'block';
    const h = document.createElement('h2');
    h.textContent = title;
    sec.appendChild(h);
    return sec;
  }
  function createNextButton(text = 'Далее') {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn';
    btn.textContent = text;
    return btn;
  }

  // Рендер шага
  function renderStep(index) {
    const stepDef = steps[index - 1];
    if (!stepDef) return;

    let sec = createBlock({ title: stepDef.title });

    if (stepDef.type === 'text') {
      if (stepDef.images) {
        const carousel = document.createElement('div');
        carousel.className = 'carousel';

        const img = document.createElement('img');
        img.src = stepDef.images[0].src;
        img.alt = stepDef.images[0].alt || '';
        img.className = 'fade-img visible';
        carousel.appendChild(img);

        const prevBtn = document.createElement('button');
        prevBtn.className = 'prev';
        prevBtn.textContent = '←';

        const nextBtn = document.createElement('button');
        nextBtn.className = 'next';
        nextBtn.textContent = '→';

        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);

        let currentIndex = 0;
        function showImage(i) {
          currentIndex = (i + stepDef.images.length) % stepDef.images.length;
          img.src = stepDef.images[currentIndex].src;
          img.alt = stepDef.images[currentIndex].alt || '';
        }

        prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
        nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

        sec.appendChild(carousel);
      } else if (stepDef.image) {
        const img = document.createElement('img');
        img.src = stepDef.image.src;
        img.alt = stepDef.image.alt || '';
        img.className = 'fade-img visible';
        sec.appendChild(img);
      }

      if (stepDef.paragraphs) {
        stepDef.paragraphs.forEach(pText => {
          const p = document.createElement('p');
          p.innerHTML = substitute(pText);
          sec.appendChild(p);
        });
      }
    } else if (stepDef.type === 'image') {
      const img = document.createElement('img');
      img.src = stepDef.src;
      img.alt = stepDef.title || '';
      img.className = 'fade-img visible';
      sec.appendChild(img);
    }

    if (!stepDef.isLast) {
      const nextBtn = createNextButton();
      nextBtn.addEventListener('click', () => {
        state.unlockedIndex++;
        updateProgress();
        renderStep(state.unlockedIndex);
      });
      sec.appendChild(nextBtn);
    } else {
      sec.classList.add('final');

      const controls = document.createElement('div');
      controls.className = 'controls';

      const explodeBtn = createNextButton('Эпичный взрыв');
      explodeBtn.classList.add('explode');
      explodeBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        video.currentTime = 0;
        video.play();
      });

      const restartBtn = createNextButton('Начать сначала');
      restartBtn.classList.add('restart');
      restartBtn.addEventListener('click', () => {
        container.innerHTML = '';
        state.unlockedIndex = 0;
        state.data.name = '';
        nameInput.value = '';
        updateProgress();
        container.appendChild(firstBlock);
        firstBlock.classList.add('visible');
      });

      controls.appendChild(explodeBtn);
      controls.appendChild(restartBtn);
      sec.appendChild(controls);
    }

    container.appendChild(sec);
    requestAnimationFrame(() => sec.classList.add('visible'));
  }

  // init
  updateProgress();
  firstBlock.classList.add('visible');

  firstNextBtn.addEventListener('click', () => {
    state.data.name = nameInput.value.trim();
    state.unlockedIndex = 1;
    updateProgress();
    renderStep(state.unlockedIndex);
  });

  // Закрытие оверлея
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      video.pause();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      video.pause();
    }
  });
})();
