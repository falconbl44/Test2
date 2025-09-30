(() => {
    const container = document.querySelector('.container');
    const progressBar = document.querySelector('.progress__bar');

    const firstBlock = document.querySelector('[data-step="0"]');
    const nameInput = document.getElementById('name');
    const firstNextBtn = firstBlock.querySelector('.btn');

    // Список шагов
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
                src: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnBjYnZmaDlleDdnajV5aDJpYXkzeHh6MDU3d2F3Zm5od2xvdDh3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gG9fVWJdN41NeiHhzk/giphy.gif',
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
                src: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjN6NW1tNXk4d3ZtenZ5ZHk2NTh5c3o2am1nNjlwdjFxcjJyNWR6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QyAQb5yxGabwtx1rhx/giphy.gif',
                alt: 'Frontend'
            },
            paragraphs: [
                'Прошёл вступительный курс Frontend 20 часов',
                '1. HTML и CSS — понятно что куда зачем, я так понимаю даже за язык не считается',
                '2. JavaScript — понравился больше, чем Python, чем конкретно — не имею понятия, вайбовый.',
                '4. Здесь ссылка как я баловался после курса: <a href="https://falconbl44.github.io/test1/" target="_blank">тык</a>'
            ]
        },
        {
            type: 'text',
            title: '3 Fullstack',
            image: {
                src: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGxjMjFyeGZjbzIwMXF1aW05bWVoZ2RodHY0bWNvbXI5MzM3ZTd4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QBFxBmTpCDFTTg6f8r/giphy.gif',
                alt: 'Fullstack'
            },
            paragraphs: [
                '1. Как будто звучит здорово.',
                '2. Одновременно звучит как то, что очень долго изучать.',
                '3. Одновременно звучит как то кем я сейчас являюсь на ресепшн — всё везде и сразу, хорошо ли это?',
                '4. Начинать точно не с этого и судя по всему это невозможно. Но если брать конкретику, то Python + JS.'
            ]
        },
        {
            type: 'text',
            title: '4 Разработчик 1С',
            image: {
                src: 'https://memexpert.net/static/1c-predpriyatie-1c-prinyatie-1.jpg',
                alt: '1С'
            },
            paragraphs: [
                '1. Андрей, я не хочу умереть в одиночестве.',
                '2. Андрей, я не хочу умереть чтобы меня вспоминали как 1С-разработчика.',
                '3. Слишком узко, только в России, смысл?'
            ]
        },
        {
            type: 'text',
            title: '5 Java, мобильная, Go, C++',
            paragraphs: [
                'Я просто посмотрел как выглядит фраза Hello World — мне стало плохо.'
            ]
        },
        {
            type: 'text',
            title: '6 Тестировщик',
            paragraphs: [
                '1 Пробежался бегло по курсу в практикуме, не заинтересовало, но наверное самый легкий порог входа',
                '2 Мне иногда проще целиком снести всё, что сделал другой человек и сделать заново как мне надо.',
                '3 Ненавижу искать ошибки в чужой работе. Я в своей то их ненавижу искать.',
                '4 Понимаю, что заниматься этим всё равно придется — но не хочу это видеть как основное занятие.',
                '5 Инженер по безопасности как будто туда же.'
            ]
        },
        {
            type: 'text',
            title: '7 Сисадмин',
            paragraphs: [
                'В колледже проходили основы — фу, не очень.'
            ]
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
                'Писал ли я весь код этого сайта сам? Конечно нет. ChatGpt наше всё',
                ' ',
                'Факт в том, что мне было интересно заниматься этим и это фиксация результата и какая-никакая практика хотя бы понимания структуры документов',
                ' ',
                '<strong>Спасибо за внимание, даже если вы ничего не поняли!</strong>'
            ],
            isLast: true
        }
    ];

    const state = { unlockedIndex: 0, data: { name: '' } };

    // --- Утилиты ---
    function validateName(s) {
        const v = (s ?? '').trim();
        return v.length > 0 && v.length <= 30;
    }
    function substitute(text) {
        return text.replaceAll('{{name}}', state.data.name || '');
    }
    function updateProgress() {
        const total = 1 + steps.length;
        const current = Math.min(state.unlockedIndex + 1, total);
        const pct = Math.round((current / total) * 100);
        progressBar.style.width = `${pct}%`;
    }
    function smoothScrollTo(el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    function reveal(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
        el.style.transition = 'opacity .35s ease, transform .35s ease';
        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }

    // --- Рендер шага ---
    function renderStep(index) {
        const stepDef = steps[index - 1];
        if (!stepDef) return;

        let sec = createBlock({ title: stepDef.title });

        if (stepDef.type === 'text') {
            if (stepDef.image) {
                const img = document.createElement('img');
                img.src = stepDef.image.src;
                img.alt = stepDef.image.alt || '';
                img.loading = 'lazy';
                img.className = 'fade-img';
                sec.appendChild(img);

                img.addEventListener('load', () => {
                    requestAnimationFrame(() => img.classList.add('visible'));
                });
            }

            stepDef.paragraphs.forEach(p => {
                const para = document.createElement('p');
                para.className = 'lead';
                para.innerHTML = substitute(p);
                sec.appendChild(para);
            });
        }

        if (stepDef.type === 'image') {
            const img = document.createElement('img');
            img.src = stepDef.src;
            img.alt = stepDef.caption || '';
            img.loading = 'lazy';
            img.className = 'fade-img';
            sec.appendChild(img);

            if (stepDef.caption) {
                const cap = document.createElement('div');
                cap.style.fontSize = '14px';
                cap.style.color = '#9aa3ad';
                cap.textContent = stepDef.caption;
                sec.appendChild(cap);
            }

            img.addEventListener('load', () => {
                requestAnimationFrame(() => img.classList.add('visible'));
            });
        }

        if (!stepDef.isLast) {
            const controls = document.createElement('div');
            controls.style.marginTop = '14px';
            const nextBtn = createNextButton('Далее');
            nextBtn.addEventListener('click', () => unlockNext(index));
            controls.appendChild(nextBtn);
            sec.appendChild(controls);
        } else {
            sec.classList.add('final');

            const controls = document.createElement('div');
            controls.className = 'controls';

            const explodeBtn = createNextButton('Эпичный взрыв');
            explodeBtn.classList.add('explode');
            explodeBtn.addEventListener('click', () => {
                const overlay = document.getElementById('videoOverlay');
                const video = document.getElementById('explodeVideo');
                overlay.classList.add('active');
                video.currentTime = 0;
                video.play();
                overlay.addEventListener('click', () => {
                    overlay.classList.remove('active');
                    video.pause();
                }, { once: true });
            });
            controls.appendChild(explodeBtn);

            const restartBtn = createNextButton('Начать сначала');
            restartBtn.classList.add('restart');
            restartBtn.addEventListener('click', () => location.reload());
            controls.appendChild(restartBtn);

            sec.appendChild(controls);
        }

        container.appendChild(sec);
        reveal(sec);
        return sec;
    }

    function unlockNext(currentIndex) {
        const nextIndex = currentIndex + 1;
        if (currentIndex >= steps.length) return;
        if (state.unlockedIndex < nextIndex) {
            state.unlockedIndex = nextIndex;
            updateProgress();
        }
        const newBlock = renderStep(nextIndex);
        if (newBlock) smoothScrollTo(newBlock);
    }

    // --- Первый шаг ---
    function initFirstStep() {
        const syncButton = () => {
            firstNextBtn.disabled = !validateName(nameInput.value);
        };
        syncButton();

        nameInput.addEventListener('input', syncButton);
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && validateName(nameInput.value)) {
                firstNextBtn.click();
            }
        });

        firstNextBtn.addEventListener('click', () => {
            const val = nameInput.value.trim();
            if (!validateName(val)) return;
            state.data.name = val;

            // Проверка на Андрея
            if (val.toLowerCase() === 'андрей') {
                steps.unshift({
                    type: 'text',
                    title: 'Проверка на Андрея',
                    paragraphs: [
                        'Проверка на Андрея выполнена! Андрей обнаружен!',
                        'Если ты это читаешь, значит я до тебя дошел и ты скажешь мне что делать дальше!',
                        'Если ты не Андрей, то введи другое имя и получишь другой текст, зачем ты наврал?'
                    ]
                });
            }

            if (state.unlockedIndex < 1) state.unlockedIndex = 1;
            updateProgress();
            unlockNext(0);
        });
    }

    // --- Старт ---
    initFirstStep();
    firstBlock.classList.add('visible');
    updateProgress();
})();



