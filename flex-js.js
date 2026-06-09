hljs.highlightAll();

const activateBtn = document.querySelector('.btn-flex');
const bottomNav = document.querySelector('.bottom-nav');
const catImg = document.querySelector('.cat-img');
const speechBubble = document.querySelector('.speech-bubble');
const sushiPlate = document.querySelector('.sushi-plate');
const textBox = document.querySelector('.text-box');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentScene = 0;

prevBtn.addEventListener('click', () => {
    if (currentScene > 0) {
        currentScene--;
        loadScene(currentScene);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentScene < scenes.length - 1) {
        currentScene++;
        loadScene(currentScene);
    }
});

activateBtn.addEventListener('click', () => {
    bottomNav.classList.remove('hidden-nav');
    bottomNav.scrollIntoView({ behavior: 'smooth' });
    loadScene(1);
});

function setJustify(value) {
    sushiPlate.className = 'sushi-plate';
    sushiPlate.style.display = 'flex';
    sushiPlate.style.justifyContent = value;
    sushiPlate.style.alignItems = 'flex-start';
}
function setAlign(value) {
    sushiPlate.className = 'sushi-plate';
    sushiPlate.style.display = 'flex';
    sushiPlate.style.justifyContent = 'center';
    sushiPlate.style.alignItems = value;
}

const scenes = [

    {
        plate: 'scene-0',
        catClass: '',
        cat: 'assets-flex/flex-cat.webp',
        speech: 'Hi! I\'m Flex! These sushi are a mess!<br> Set me to display: flex and I\'ll sort them out!',
        text: `<p>In CSS, a parent element controls its children.</p>
        <p>Add <strong>Flex-box</strong>,and the parent gets superpowers.</p>
        <p>Imagine the plate is the parent, the sushi pieces are the children.</p>
        <pre><code>.plate {
        display: flex;
        }</code></pre>`,
    },

    {
        plate: 'scene-row',
        catClass: 'cat-row',
        cat: 'assets-flex/row-cat.webp',
        speech: 'Get in line children! You are now under my command!',
        text: `<p>When you set<strong>display:flex</strong>, the children automatically line up in a row.</p>
        <p>That's because <strong>flex-direction: row</strong> is the default. You don't even need to write it!</p>
        <pre><code>.plate {
        display: flex;
        flex-direction:row;
        }</code></pre>`,
    },

    {
        plate: 'scene-justify',
        catClass: 'cat-justify',
        cat: 'assets-flex/justify-cat.webp',
        speech: 'Get in line children! You are now under my command!',
        text: `<p><strong>Justify-content</strong>, controls where the children sit horizontally.</p>
        <p>Click to try it!</p>
        <pre><code>.plate {
        display: flex;
        flex-direction:row;
        }</code></pre>
        <button class="code-btn" onclick="setJustify('flex-start')">justify-content: flex-start</button>
        <button class="code-btn" onclick="setJustify('flex-end')">justify-content: flex-end</button>
        <button class="code-btn" onclick="setJustify('center')">justify-content: center</button>`,
    },

    {
        plate: 'scene-align',
        catClass: 'cat-align',
        cat: 'assets-flex/align-cat.webp',
        speech: 'Get in line children! You are now under my command!',
        text: `<p><strong>Align-items</strong>, controls where the children sit vertically. Top, middle or bottom.</p>
        <p>Click to try it!</p>
        <pre><code>.plate {
        display: flex;
        flex-direction:row;
        justify-content:center;
        }</code></pre>
        <button class="code-btn" onclick="setAlign('flex-start')">align-items: flex-start</button>
        <button class="code-btn" onclick="setAlign('flex-end')">align-items: flex-end</button>
        <button class="code-btn" onclick="setAlign('center')">align-items: center</button>`,
    },

    {
        plate: 'scene-gap',
        catClass: 'cat-gap',
        cat: 'assets-flex/gap-cat.webp',
        speech: 'And make some room between you!',
        text: `<p><strong>Gap</strong>, controls the space between children.</p>
        <p>Give them room to breathe!</p>
        <pre><code>.plate {
        display: flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap: 100px;
        }</code></pre>`,
    },

    {
        plate: 'scene-column',
        catClass: 'cat-column',
        cat: 'assets-flex/column-cat.webp',
        speech: 'Now... STACK UP!',
        text: `<p><strong>Flex-direction: column</strong>, stacks the children vertically instead of a row.</p>
        <p>Top to bottom!</p>
        <p>Plot twist! Switch to column and the axes flip on you. Justify goes vertical, align goes horizontal.</p>
        <pre><code>.plate {
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        }</code></pre>`,
    }
]

function loadScene(index) {
    const scene = scenes[index];
    sushiPlate.className = 'sushi-plate ' + scene.plate;
    sushiPlate.style = '';
    catImg.src = scene.cat;
    speechBubble.innerHTML = scene.speech;
    textBox.innerHTML = scene.text;
    hljs.highlightAll();
    activateBtn.style.display = 'none';
    catImg.src = scene.cat;
    catImg.className = 'cat-img ' + scene.catClass;
    document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.remove('active'));
    if (index > 0) {
        document.querySelectorAll('.topic-btn')[index - 1].classList.add('active');
    }
}