import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// HSK1 Character Data Models - Organized by thematic categories
const numerosBasicosData = {
    characters: [
        { hanzi: '一', pinyin: 'yi1', meaning: 'uno' },
        { hanzi: '二', pinyin: 'er4', meaning: 'dos' },
        { hanzi: '三', pinyin: 'san1', meaning: 'tres' },
        { hanzi: '四', pinyin: 'si4', meaning: 'cuatro' },
        { hanzi: '五', pinyin: 'wu3', meaning: 'cinco' },
        { hanzi: '六', pinyin: 'liu4', meaning: 'seis' },
        { hanzi: '七', pinyin: 'qi1', meaning: 'siete' },
        { hanzi: '八', pinyin: 'ba1', meaning: 'ocho' },
        { hanzi: '九', pinyin: 'jiu3', meaning: 'nueve' },
        { hanzi: '十', pinyin: 'shi2', meaning: 'diez' },
        { hanzi: '零', pinyin: 'ling2', meaning: 'cero' },
        { hanzi: '百', pinyin: 'bai3', meaning: 'cien' },
        { hanzi: '千', pinyin: 'qian1', meaning: 'mil' },
        { hanzi: '个', pinyin: 'ge4', meaning: 'medida universal' },
        { hanzi: '岁', pinyin: 'sui4', meaning: 'años de edad' },
        { hanzi: '本', pinyin: 'ben3', meaning: 'medida libros' },
        { hanzi: '块', pinyin: 'kuai4', meaning: 'yuan (dinero)' },
        { hanzi: '钱', pinyin: 'qian2', meaning: 'dinero' },
        { hanzi: '多', pinyin: 'duo1', meaning: 'mucho' },
        { hanzi: '少', pinyin: 'shao3', meaning: 'poco' },
        { hanzi: '几', pinyin: 'ji3', meaning: 'cuántos' },
        { hanzi: '些', pinyin: 'xie1', meaning: 'algunos' },
        { hanzi: '点', pinyin: 'dian3', meaning: 'punto, hora' },
        { hanzi: '半', pinyin: 'ban4', meaning: 'mitad' },
        { hanzi: '大', pinyin: 'da4', meaning: 'grande' },
        { hanzi: '小', pinyin: 'xiao3', meaning: 'pequeño' },
        { hanzi: '高', pinyin: 'gao1', meaning: 'alto' },
        { hanzi: '好', pinyin: 'hao3', meaning: 'bueno' },
        { hanzi: '冷', pinyin: 'leng3', meaning: 'frío' },
        { hanzi: '热', pinyin: 're4', meaning: 'caliente' },
        { hanzi: '新', pinyin: 'xin1', meaning: 'nuevo' },
        { hanzi: '对', pinyin: 'dui4', meaning: 'correcto' },
        { hanzi: '不', pinyin: 'bu4', meaning: 'no, negación' },
        { hanzi: '没', pinyin: 'mei2', meaning: 'no tener' }
    ]
};

const personasRelacionesData = {
    characters: [
        { hanzi: '我', pinyin: 'wo3', meaning: 'yo' },
        { hanzi: '你', pinyin: 'ni3', meaning: 'tú' },
        { hanzi: '他', pinyin: 'ta1', meaning: 'él' },
        { hanzi: '她', pinyin: 'ta1', meaning: 'ella' },
        { hanzi: '们', pinyin: 'men5', meaning: 'plural' },
        { hanzi: '人', pinyin: 'ren2', meaning: 'persona' },
        { hanzi: '名', pinyin: 'ming2', meaning: 'nombre' },
        { hanzi: '字', pinyin: 'zi4', meaning: 'carácter' },
        { hanzi: '爸', pinyin: 'ba4', meaning: 'papá' },
        { hanzi: '妈', pinyin: 'ma1', meaning: 'mamá' },
        { hanzi: '儿', pinyin: 'er2', meaning: 'hijo' },
        { hanzi: '子', pinyin: 'zi5', meaning: 'sufijo' },
        { hanzi: '女', pinyin: 'nv3', meaning: 'mujer' },
        { hanzi: '男', pinyin: 'nan2', meaning: 'hombre' },
        { hanzi: '孩', pinyin: 'hai2', meaning: 'niño' },
        { hanzi: '家', pinyin: 'jia1', meaning: 'familia, casa' },
        { hanzi: '朋', pinyin: 'peng2', meaning: 'amigo' },
        { hanzi: '友', pinyin: 'you3', meaning: 'amigo' },
        { hanzi: '医', pinyin: 'yi1', meaning: 'médico' },
        { hanzi: '生', pinyin: 'sheng1', meaning: 'nacer, vida' },
        { hanzi: '老', pinyin: 'lao3', meaning: 'viejo' },
        { hanzi: '师', pinyin: 'shi1', meaning: 'maestro' },
        { hanzi: '先', pinyin: 'xian1', meaning: 'primero' },
        { hanzi: '学', pinyin: 'xue2', meaning: 'estudiar' },
        { hanzi: '校', pinyin: 'xiao4', meaning: 'escuela' },
        { hanzi: '同', pinyin: 'tong2', meaning: 'mismo' },
        { hanzi: '谁', pinyin: 'shei2', meaning: 'quién' },
        { hanzi: '什', pinyin: 'shen2', meaning: 'qué' },
        { hanzi: '么', pinyin: 'me5', meaning: 'qué (partícula)' },
        { hanzi: '的', pinyin: 'de5', meaning: 'partícula posesiva' },
        { hanzi: '和', pinyin: 'he2', meaning: 'y' },
        { hanzi: '都', pinyin: 'dou1', meaning: 'todo, todos' }
    ]
};

const verbosData = {
    characters: [
        { hanzi: '是', pinyin: 'shi4', meaning: 'ser/estar' },
        { hanzi: '有', pinyin: 'you3', meaning: 'tener' },
        { hanzi: '在', pinyin: 'zai4', meaning: 'estar en' },
        { hanzi: '会', pinyin: 'hui4', meaning: 'saber hacer' },
        { hanzi: '能', pinyin: 'neng2', meaning: 'poder' },
        { hanzi: '想', pinyin: 'xiang3', meaning: 'querer, pensar' },
        { hanzi: '做', pinyin: 'zuo4', meaning: 'hacer' },
        { hanzi: '吃', pinyin: 'chi1', meaning: 'comer' },
        { hanzi: '喝', pinyin: 'he1', meaning: 'beber' },
        { hanzi: '看', pinyin: 'kan4', meaning: 'ver, mirar' },
        { hanzi: '读', pinyin: 'du2', meaning: 'leer' },
        { hanzi: '写', pinyin: 'xie3', meaning: 'escribir' },
        { hanzi: '说', pinyin: 'shuo1', meaning: 'hablar, decir' },
        { hanzi: '话', pinyin: 'hua4', meaning: 'palabra' },
        { hanzi: '听', pinyin: 'ting1', meaning: 'escuchar' },
        { hanzi: '来', pinyin: 'lai2', meaning: 'venir' },
        { hanzi: '去', pinyin: 'qu4', meaning: 'ir' },
        { hanzi: '回', pinyin: 'hui2', meaning: 'volver' },
        { hanzi: '买', pinyin: 'mai3', meaning: 'comprar' },
        { hanzi: '住', pinyin: 'zhu4', meaning: 'vivir' },
        { hanzi: '坐', pinyin: 'zuo4', meaning: 'sentarse' },
        { hanzi: '叫', pinyin: 'jiao4', meaning: 'llamarse' },
        { hanzi: '认', pinyin: 'ren4', meaning: 'reconocer' },
        { hanzi: '识', pinyin: 'shi2', meaning: 'conocer' },
        { hanzi: '爱', pinyin: 'ai4', meaning: 'amar' },
        { hanzi: '喜', pinyin: 'xi3', meaning: 'gustar' },
        { hanzi: '欢', pinyin: 'huan1', meaning: 'alegre' },
        { hanzi: '打', pinyin: 'da3', meaning: 'golpear, jugar' },
        { hanzi: '工', pinyin: 'gong1', meaning: 'trabajo' },
        { hanzi: '作', pinyin: 'zuo4', meaning: 'obra' },
        { hanzi: '开', pinyin: 'kai1', meaning: 'abrir' },
        { hanzi: '睡', pinyin: 'shui4', meaning: 'dormir' },
        { hanzi: '觉', pinyin: 'jiao4', meaning: 'sueño' }
    ]
};

const sustantivosTiempoData = {
    characters: [
        { hanzi: '天', pinyin: 'tian1', meaning: 'día, cielo' },
        { hanzi: '年', pinyin: 'nian2', meaning: 'año' },
        { hanzi: '月', pinyin: 'yue4', meaning: 'mes, luna' },
        { hanzi: '日', pinyin: 'ri4', meaning: 'día, sol' },
        { hanzi: '今', pinyin: 'jin1', meaning: 'hoy, ahora' },
        { hanzi: '明', pinyin: 'ming2', meaning: 'mañana, claro' },
        { hanzi: '昨', pinyin: 'zuo2', meaning: 'ayer' },
        { hanzi: '上', pinyin: 'shang4', meaning: 'arriba, anterior' },
        { hanzi: '下', pinyin: 'xia4', meaning: 'abajo, siguiente' },
        { hanzi: '中', pinyin: 'zhong1', meaning: 'medio, dentro' },
        { hanzi: '午', pinyin: 'wu3', meaning: 'mediodía' },
        { hanzi: '前', pinyin: 'qian2', meaning: 'delante' },
        { hanzi: '后', pinyin: 'hou4', meaning: 'detrás' },
        { hanzi: '现', pinyin: 'xian4', meaning: 'presente' },
        { hanzi: '时', pinyin: 'shi2', meaning: 'tiempo, hora' },
        { hanzi: '候', pinyin: 'hou4', meaning: 'momento' },
        { hanzi: '分', pinyin: 'fen1', meaning: 'minuto, dividir' },
        { hanzi: '水', pinyin: 'shui3', meaning: 'agua' },
        { hanzi: '茶', pinyin: 'cha2', meaning: 'té' },
        { hanzi: '米', pinyin: 'mi3', meaning: 'arroz' },
        { hanzi: '饭', pinyin: 'fan4', meaning: 'comida' },
        { hanzi: '菜', pinyin: 'cai4', meaning: 'verdura, plato' },
        { hanzi: '桌', pinyin: 'zhuo1', meaning: 'mesa' },
        { hanzi: '椅', pinyin: 'yi3', meaning: 'silla' },
        { hanzi: '店', pinyin: 'dian4', meaning: 'tienda' },
        { hanzi: '东', pinyin: 'dong1', meaning: 'este' },
        { hanzi: '西', pinyin: 'xi1', meaning: 'oeste, cosa' },
        { hanzi: '车', pinyin: 'che1', meaning: 'coche' },
        { hanzi: '电', pinyin: 'dian4', meaning: 'electricidad' },
        { hanzi: '影', pinyin: 'ying3', meaning: 'sombra, película' },
        { hanzi: '视', pinyin: 'shi4', meaning: 'ver' },
        { hanzi: '国', pinyin: 'guo2', meaning: 'país' },
        { hanzi: '北', pinyin: 'bei3', meaning: 'norte' },
        { hanzi: '京', pinyin: 'jing1', meaning: 'capital' },
        { hanzi: '里', pinyin: 'li3', meaning: 'dentro' },
        { hanzi: '外', pinyin: 'wai4', meaning: 'fuera' },
        { hanzi: '书', pinyin: 'shu1', meaning: 'libro' },
        { hanzi: '汉', pinyin: 'han4', meaning: 'chino (etnia)' },
        { hanzi: '语', pinyin: 'yu3', meaning: 'idioma' },
        { hanzi: '衣', pinyin: 'yi1', meaning: 'ropa' },
        { hanzi: '服', pinyin: 'fu2', meaning: 'ropa' },
        { hanzi: '雨', pinyin: 'yu3', meaning: 'lluvia' }
    ]
};

const frasesHechasIData = {
    characters: [
        // 🗣️ Frases básicas de comunicación
        { hanzi: '你好', pinyin: 'ni3 hao3', meaning: 'Hola' },
        { hanzi: '谢谢', pinyin: 'xie4xie5', meaning: 'Gracias' },
        { hanzi: '非常谢谢', pinyin: 'fei1chang2 xie4xie5', meaning: 'Muchas gracias' },
        { hanzi: '不客气', pinyin: 'bu2 ke4qi5', meaning: 'De nada' },
        { hanzi: '对不起', pinyin: 'dui4bu5qi3', meaning: 'Perdón / Disculpe' },
        { hanzi: '没关系', pinyin: 'mei2 guan1xi5', meaning: 'No hay problema' },
        { hanzi: '对', pinyin: 'dui4', meaning: 'Sí / Correcto' },
        { hanzi: '不', pinyin: 'bu4', meaning: 'No' },
        { hanzi: '好', pinyin: 'hao3', meaning: 'Bueno / Está bien / Ok' },

        // 🛍️ Para comprar y pedir cosas
        { hanzi: '多少钱？', pinyin: 'duo1 shao3 qian2?', meaning: '¿Cuánto cuesta?' },
        { hanzi: '这个，请。', pinyin: 'zhe4ge5, qing3.', meaning: 'Esto, por favor' },
        { hanzi: '可以便宜一点吗？', pinyin: 'ke3yi3 pian2yi5 yi1dian3 ma5?', meaning: '¿Puede ser más barato?' },
        { hanzi: '我要这个', pinyin: 'wo3 yao4 zhe4ge5', meaning: 'Quiero esto' },
        { hanzi: '不要', pinyin: 'bu2 yao4', meaning: 'No quiero' },
        { hanzi: '没有', pinyin: 'mei2you3', meaning: 'No tengo' },

        // 🚕 Para moverse y orientarse
        { hanzi: '…在哪里？', pinyin: '...zai4 na3li3?', meaning: '¿Dónde está...?' },
        { hanzi: '我要去…', pinyin: 'wo3 yao4 qu4...', meaning: 'Quiero ir al...' },

        // 📸 Para interactuar con personas
        { hanzi: '请帮我拍照', pinyin: 'qing3 bang1 wo3 pai1zhao4', meaning: '¿Puedes ayudarme a sacar una foto?' },
        { hanzi: '你会说英语吗？', pinyin: 'ni3 hui4 shuo1 ying1yu3 ma5?', meaning: '¿Hablas inglés?' },
        { hanzi: '再见', pinyin: 'zai4jian4', meaning: 'Adiós' },
        { hanzi: '拜拜', pinyin: 'bai1bai1', meaning: 'Adiós (informal)' }
    ]
};

// Utility functions
const createCharacterToPinyinMap = (data) => {
    const map = new Map();
    data.characters.forEach(item => {
        map.set(item.hanzi, { pinyin: item.pinyin, meaning: item.meaning });
    });
    return map;
};

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Convert pinyin to tone emojis
const pinyinToToneEmojis = (pinyin) => {
    const toneMap = {
        '1': '➖',
        '2': '↗️',
        '3': '🔁',
        '4': '↘️',
        '5': '·'  // neutral tone
    };

    // Split by spaces and extract tone numbers
    const syllables = pinyin.split(/\s+/);
    const toneEmojis = syllables.map(syllable => {
        // Find the tone number (1-5) in the syllable
        const toneMatch = syllable.match(/[1-5]/);
        if (toneMatch) {
            return toneMap[toneMatch[0]] || '';
        }
        return ''; // No tone found
    }).filter(emoji => emoji !== '');

    return toneEmojis.join(' ');
};

// Character Card Component
const CharacterCard = ({ charData, onAnswerCheck, characterSet }) => {
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const inputRef = useRef(null);

    const { hanzi, pinyin, meaning } = charData;

    const handleInputChange = (e) => {
        // Allow letters and numbers (for tones) in pinyin
        const value = e.target.value.toLowerCase();
        setInputValue(value);
    };

    const checkAnswer = () => {
        if (!inputValue.trim()) return;
        const correct = inputValue.toLowerCase() === pinyin.toLowerCase();
        setIsCorrect(correct);
        onAnswerCheck(hanzi, correct);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    };

    const handleBlur = () => {
        if (inputValue.trim()) checkAnswer();
    };

    const handleClick = () => {
        if (inputRef.current && isCorrect === null) inputRef.current.focus();
    };

    return (
        <div
            className={`hiragana-card ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}
            data-character={hanzi}
            onClick={handleClick}
        >
            <div className="hiragana-display">
                <div className="hanzi-char">{hanzi}</div>
                <div className="meaning-text">{meaning}</div>
            </div>
            <div className="input-container">
                {isCorrect === true ? (
                    <span className="romaji-answer">{pinyin}</span>
                ) : (
                    <>
                        <input
                            type="text"
                            className="romaji-input"
                            placeholder="pinyin..."
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            onBlur={handleBlur}
                            ref={inputRef}
                        />
                        <div className="tone-reference-small">
                            mā(1) má(2) mǎ(3) mà(4) ma(5)
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// Flashcard Mode Component
const FlashcardMode = ({ allCharacters }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [hintsRevealed, setHintsRevealed] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [showSolution, setShowSolution] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const inputRef = useRef(null);

    // Filter characters by category
    const getFilteredCharacters = () => {
        switch (selectedCategory) {
            case 'numeros':
                return numerosBasicosData.characters;
            case 'personas':
                return personasRelacionesData.characters;
            case 'verbos':
                return verbosData.characters;
            case 'sustantivos':
                return sustantivosTiempoData.characters;
            case 'all':
            default:
                return allCharacters;
        }
    };

    const filteredCharacters = getFilteredCharacters();
    const currentChar = filteredCharacters[currentIndex];
    const { hanzi, pinyin, meaning } = currentChar;

    const getHintText = () => {
        if (hintsRevealed === 0) return '';
        return pinyin.substring(0, hintsRevealed);
    };

    const handleHintClick = () => {
        if (hintsRevealed < pinyin.length) {
            setHintsRevealed(prev => prev + 1);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);

        // Auto-verify letter by letter as the user types
        if (value.trim()) {
            const correctPinyin = pinyin.toLowerCase();

            // Check if the current input matches the beginning of the correct pinyin
            const isMatching = correctPinyin.startsWith(value);

            if (value === correctPinyin) {
                // Complete and correct answer
                if (isCorrect !== true) {
                    setIsCorrect(true);
                    setCorrectCount(prev => prev + 1);
                }
            } else if (!isMatching && !showSolution) {
                // User typed a wrong letter (only show error if not in solution mode)
                setIsCorrect(false);
            } else {
                // User is typing correctly but not finished yet
                setIsCorrect(null);
            }
        } else {
            // Input is empty, reset state
            setIsCorrect(null);
        }
    };

    const handleKeyDown = (e) => {
        // Navigate to next card
        if (isCorrect === true) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
                e.preventDefault();
                handleNext();
            }
        }

        // Navigate to previous card
        if (e.key === 'ArrowLeft' || (e.shiftKey && e.key === ' ')) {
            e.preventDefault();
            handlePrevious();
        }
    };

    const handleNext = () => {
        if (currentIndex < filteredCharacters.length - 1) {
            setCurrentIndex(prev => prev + 1);
            resetCard();
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            resetCard();
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentIndex(0);
        setCorrectCount(0);
        resetCard();
    };

    const resetCard = () => {
        setInputValue('');
        setIsCorrect(null);
        setHintsRevealed(0);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setCorrectCount(0);
        resetCard();
    };

    // Add global keyboard listener
    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            // Only handle if not typing in input
            if (document.activeElement.tagName !== 'INPUT') {
                handleKeyDown(e);
            }
        };

        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }, [isCorrect, currentIndex]);

    // Always focus on input when card changes
    useEffect(() => {
        if (inputRef.current && isCorrect !== true) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        }
    }, [currentIndex, isCorrect]);

    return (
        <div className="flashcard-container">
            <div className="flashcard-header">
                <h2 className="flashcard-title">
                    <span>Modo Tarjetas</span>
                    <span className="flashcard-title-hanzi">学习模式</span>
                </h2>

                <div className="flashcard-category-selector">
                    <button
                        className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('all')}
                    >
                        Todas
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'numeros' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('numeros')}
                    >
                        Números
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'personas' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('personas')}
                    >
                        Personas
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'verbos' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('verbos')}
                    >
                        Verbos
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'sustantivos' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('sustantivos')}
                    >
                        Sustantivos
                    </button>
                </div>

                <div className="flashcard-mode-toggle">
                    <button
                        className={`mode-toggle-button ${showSolution ? 'active' : ''}`}
                        onClick={() => setShowSolution(!showSolution)}
                    >
                        {showSolution ? '📖 Modo Estudio' : '⌨️ Modo Memorización por Teclas'}
                    </button>
                </div>
                <div className="flashcard-progress">
                    Tarjeta {currentIndex + 1} / {filteredCharacters.length} | Correctas: {correctCount}
                </div>
            </div>

            <div className={`flashcard-card ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}>
                <div className="flashcard-hanzi-section">
                    <div className="flashcard-hanzi">{hanzi}</div>
                    <div className="flashcard-meaning">{meaning}</div>
                </div>

                <div className="flashcard-input-section">
                    {isCorrect === true ? (
                        <div className="flashcard-answer-correct">
                            <span className="checkmark">✓</span> {pinyin}
                        </div>
                    ) : (
                        <>
                            {showSolution && (
                                <div className="flashcard-solution-display">
                                    <div className="solution-label">Solución:</div>
                                    <div className="solution-pinyin">{pinyin}</div>
                                    <div className="solution-instruction">↓ Escribe para memorizar ↓</div>
                                </div>
                            )}
                            {!showSolution && (
                                <div className="flashcard-hint-container">
                                    {hintsRevealed > 0 && (
                                        <div className="flashcard-hint">
                                            Pista: <span className="hint-text">{getHintText()}</span>
                                            {hintsRevealed < pinyin.length && <span className="hint-dots">...</span>}
                                        </div>
                                    )}
                                </div>
                            )}
                            <input
                                ref={inputRef}
                                type="text"
                                className="flashcard-input"
                                placeholder={showSolution ? "Copia el pinyin..." : "Escribe el pinyin..."}
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                disabled={isCorrect === true}
                            />
                            <div className="tone-reference">
                                Tonos: <span className="tone-example">mā(1)</span> <span className="tone-example">má(2)</span> <span className="tone-example">mǎ(3)</span> <span className="tone-example">mà(4)</span> <span className="tone-example">ma(5)</span>
                            </div>
                            {isCorrect === false && !showSolution && (
                                <div className="flashcard-error">
                                    ❌ Incorrecto. Respuesta correcta: <strong>{pinyin}</strong>
                                </div>
                            )}
                            {!showSolution && (
                                <div className="flashcard-buttons">
                                    {isCorrect !== true && (
                                        <button
                                            className="hint-button"
                                            onClick={handleHintClick}
                                            disabled={hintsRevealed >= pinyin.length}
                                        >
                                            💡 Ayuda ({hintsRevealed}/{pinyin.length})
                                        </button>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="flashcard-navigation">
                <button
                    className="nav-button"
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                >
                    ← Anterior
                </button>
                {isCorrect !== null && (
                    <button className="nav-button next-button" onClick={handleNext}>
                        {currentIndex === allCharacters.length - 1 ? 'Finalizar' : 'Siguiente →'}
                    </button>
                )}
                <button className="nav-button reset-flashcard-button" onClick={handleReset}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

// Typing Mode Component (MonkeyType style)
const TypingMode = ({ allCharacters, customWords }) => {
    const [characters, setCharacters] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [completedCount, setCompletedCount] = useState(0);
    const [errors, setErrors] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const inputRef = useRef(null);

    // Get characters by category
    const getCharactersByCategory = (category) => {
        switch (category) {
            case 'numeros':
                return numerosBasicosData.characters;
            case 'personas':
                return personasRelacionesData.characters;
            case 'verbos':
                return verbosData.characters;
            case 'sustantivos':
                return sustantivosTiempoData.characters;
            case 'frases':
                return frasesHechasIData.characters;
            case 'personalizados':
                return customWords;
            case 'all':
            default:
                return allCharacters;
        }
    };

    useEffect(() => {
        // Shuffle and select random characters based on category
        const categoryCharacters = getCharactersByCategory(selectedCategory);
        const shuffled = [...categoryCharacters].sort(() => Math.random() - 0.5).slice(0, 20);
        setCharacters(shuffled);
        setCurrentIndex(0);
        setCompletedCount(0);
        setErrors(0);
        setInputValue('');
    }, [selectedCategory]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentIndex]);

    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);

        if (characters.length === 0 || currentIndex >= characters.length) return;

        const correctPinyin = characters[currentIndex].pinyin.toLowerCase();

        // Check if completed correctly
        if (value === correctPinyin) {
            // Correct! Move to next
            setCompletedCount(prev => prev + 1);
            setInputValue('');

            if (currentIndex < characters.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Finished all characters
                setTimeout(() => {
                    const categoryCharacters = getCharactersByCategory(selectedCategory);
                    const shuffled = [...categoryCharacters].sort(() => Math.random() - 0.5).slice(0, 20);
                    setCharacters(shuffled);
                    setCurrentIndex(0);
                    setCompletedCount(0);
                    setErrors(0);
                }, 1000);
            }
        } else if (value.length > correctPinyin.length) {
            // Typed too much - it's wrong
            setErrors(prev => prev + 1);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            // Reset
            const categoryCharacters = getCharactersByCategory(selectedCategory);
            const shuffled = [...categoryCharacters].sort(() => Math.random() - 0.5).slice(0, 20);
            setCharacters(shuffled);
            setCurrentIndex(0);
            setCompletedCount(0);
            setErrors(0);
            setInputValue('');
        }
    };

    const getCharStatus = (index) => {
        if (index < currentIndex) return 'completed';
        if (index === currentIndex) return 'current';
        return 'pending';
    };

    const isInputCorrect = () => {
        if (!inputValue || characters.length === 0) return null;
        const correctPinyin = characters[currentIndex].pinyin.toLowerCase();
        return correctPinyin.startsWith(inputValue);
    };

    return (
        <div className="typing-container">
            <div className="typing-header">
                <h2 className="typing-title">
                    <span>Teclea Seguido</span>
                    <span className="typing-title-hanzi">打字练习</span>
                </h2>

                <div className="flashcard-category-selector">
                    <button
                        className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        Todas
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'numeros' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('numeros')}
                    >
                        Números Básicos
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'personas' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('personas')}
                    >
                        Personas y Relaciones
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'verbos' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('verbos')}
                    >
                        Verbos Comunes
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'sustantivos' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('sustantivos')}
                    >
                        Sustantivos y Tiempo
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'frases' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('frases')}
                    >
                        FRASES HECHAS I: Básicas I
                    </button>
                    {customWords && customWords.length > 0 && (
                        <button
                            className={`category-button ${selectedCategory === 'personalizados' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('personalizados')}
                        >
                            📚 Personalizados ({customWords.length})
                        </button>
                    )}
                </div>

                <div className="typing-stats">
                    <span className="stat">Completados: {completedCount}</span>
                    <span className="stat">Errores: {errors}</span>
                    <span className="stat">Precisión: {completedCount > 0 ? Math.round((completedCount / (completedCount + errors)) * 100) : 100}%</span>
                </div>
                <div className="tone-reference">
                    Tonos: <span className="tone-example">mā(1)</span> <span className="tone-example">má(2)</span> <span className="tone-example">mǎ(3)</span> <span className="tone-example">mà(4)</span> <span className="tone-example">ma(5)</span>
                </div>
            </div>

            <div className="typing-characters">
                {characters.map((char, index) => (
                    <div key={index} className={`typing-char ${getCharStatus(index)}`}>
                        <div className="typing-hanzi">{char.hanzi}</div>
                        <div className="typing-meaning">{char.meaning}</div>
                        <div className="typing-pinyin-target">{char.pinyin}</div>
                        {index === currentIndex && (
                            <>
                                <div className="typing-user-input">{inputValue}</div>
                                <div className="typing-input-section">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className={`typing-input ${isInputCorrect() === false ? 'error' : ''}`}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Escribe el pinyin..."
                                        autoComplete="off"
                                        spellCheck="false"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className="typing-hint">
                Presiona <kbd>ESC</kbd> para reiniciar
            </div>
        </div>
    );
};

// Tone Practice Mode Component
const TonePracticeMode = ({ allCharacters, customWords }) => {
    const [characters, setCharacters] = useState([]);
    const [revealedPinyin, setRevealedPinyin] = useState(new Set());
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Get characters by category
    const getCharactersByCategory = (category) => {
        switch (category) {
            case 'numeros':
                return numerosBasicosData.characters;
            case 'personas':
                return personasRelacionesData.characters;
            case 'verbos':
                return verbosData.characters;
            case 'sustantivos':
                return sustantivosTiempoData.characters;
            case 'frases':
                return frasesHechasIData.characters;
            case 'personalizados':
                return customWords;
            case 'all':
            default:
                return allCharacters;
        }
    };

    useEffect(() => {
        // Shuffle and select random characters based on category
        const categoryCharacters = getCharactersByCategory(selectedCategory);
        const shuffled = [...categoryCharacters].sort(() => Math.random() - 0.5).slice(0, 20);
        setCharacters(shuffled);
        setRevealedPinyin(new Set());
    }, [selectedCategory]);

    const toggleRevealPinyin = (index) => {
        setRevealedPinyin(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const handleReset = () => {
        const categoryCharacters = getCharactersByCategory(selectedCategory);
        const shuffled = [...categoryCharacters].sort(() => Math.random() - 0.5).slice(0, 20);
        setCharacters(shuffled);
        setRevealedPinyin(new Set());
    };

    return (
        <div className="typing-container">
            <div className="typing-header">
                <h2 className="typing-title">
                    <span>Practicar Tonos 🎵</span>
                    <span className="typing-title-hanzi">声调练习</span>
                </h2>

                <div className="flashcard-category-selector">
                    <button
                        className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        Todas
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'numeros' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('numeros')}
                    >
                        Números Básicos
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'personas' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('personas')}
                    >
                        Personas y Relaciones
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'verbos' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('verbos')}
                    >
                        Verbos Comunes
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'sustantivos' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('sustantivos')}
                    >
                        Sustantivos y Tiempo
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'frases' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('frases')}
                    >
                        FRASES HECHAS I: Básicas I
                    </button>
                    {customWords && customWords.length > 0 && (
                        <button
                            className={`category-button ${selectedCategory === 'personalizados' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('personalizados')}
                        >
                            📚 Personalizados ({customWords.length})
                        </button>
                    )}
                </div>

                <div className="tone-reference">
                    Tonos: <span className="tone-example">➖ (1º)</span> <span className="tone-example">↗️ (2º)</span> <span className="tone-example">🔁 (3º)</span> <span className="tone-example">↘️ (4º)</span> <span className="tone-example">· (neutro)</span>
                </div>
            </div>

            <div className="typing-characters">
                {characters.map((char, index) => (
                    <div key={index} className="typing-char tone-practice-char">
                        <div className="typing-hanzi">{char.hanzi}</div>
                        <div className="typing-meaning">{char.meaning}</div>
                        <div className="tone-emojis">{pinyinToToneEmojis(char.pinyin)}</div>
                        <button
                            className="reveal-pinyin-button"
                            onClick={() => toggleRevealPinyin(index)}
                        >
                            {revealedPinyin.has(index) ? '🔒 Ocultar Pinyin' : '🔓 Mostrar Pinyin'}
                        </button>
                        {revealedPinyin.has(index) && (
                            <div className="revealed-pinyin">{char.pinyin}</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="typing-hint">
                <button className="nav-button reset-flashcard-button" onClick={handleReset}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

// File Upload Component
const FileUploadButton = ({ onWordsLoaded }) => {
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            const parsedWords = parseCustomWordsFile(text);
            if (parsedWords.length > 0) {
                onWordsLoaded(parsedWords);
                alert(`✅ ${parsedWords.length} palabras cargadas correctamente`);
            } else {
                alert('❌ No se pudieron cargar las palabras. Verifica el formato del archivo.');
            }
        };
        reader.readAsText(file);
    };

    const parseCustomWordsFile = (text) => {
        const lines = text.trim().split('\n');
        const words = [];

        for (let line of lines) {
            // Skip empty lines
            if (!line.trim()) continue;

            // Split by comma
            const parts = line.split(',').map(p => p.trim());

            if (parts.length >= 4) {
                // Format: Pinyin (simple), Pinyin (con tonos), Hanzi, Meaning
                const pinyinSimple = parts[0];
                const pinyinWithTones = parts[1];
                const hanzi = parts[2];
                const meaning = parts[3];

                words.push({
                    hanzi: hanzi,
                    pinyin: pinyinWithTones,
                    meaning: meaning
                });
            }
        }

        return words;
    };

    return (
        <div className="file-upload-container">
            <input
                ref={fileInputRef}
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
            />
            <button
                className="upload-button"
                onClick={() => fileInputRef.current?.click()}
            >
                📁 Subir Palabras Personalizadas
            </button>
        </div>
    );
};

// Tabs Component
const Tabs = ({ activeTab, onTabChange, score, total, showScore = true }) => {
    return (
        <div className="tabs-container">
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'typing' ? 'active' : ''}`}
                    onClick={() => onTabChange('typing')}
                >
                    <span className="tab-spanish">Teclea Seguido</span>
                    <span className="tab-hanzi">打字练习</span>
                </button>
                <button
                    className={`tab-button ${activeTab === 'flashcards' ? 'active' : ''}`}
                    onClick={() => onTabChange('flashcards')}
                >
                    <span className="tab-spanish">Modo Tarjetas</span>
                    <span className="tab-hanzi">学习模式</span>
                </button>
                <button
                    className={`tab-button ${activeTab === 'tonePractice' ? 'active' : ''}`}
                    onClick={() => onTabChange('tonePractice')}
                >
                    <span className="tab-spanish">Practicar Tonos 🎵</span>
                    <span className="tab-hanzi">声调练习</span>
                </button>
                <button
                    className={`tab-button ${activeTab === 'numerosBasicos' ? 'active' : ''}`}
                    onClick={() => onTabChange('numerosBasicos')}
                >
                    <span className="tab-spanish">Números y Básicos</span>
                    <span className="tab-hanzi">数字与基础</span>
                </button>
                <button
                    className={`tab-button ${activeTab === 'personasRelaciones' ? 'active' : ''}`}
                    onClick={() => onTabChange('personasRelaciones')}
                >
                    <span className="tab-spanish">Personas y Relaciones</span>
                    <span className="tab-hanzi">人物与关系</span>
                </button>
                <button
                    className={`tab-button ${activeTab === 'verbos' ? 'active' : ''}`}
                    onClick={() => onTabChange('verbos')}
                >
                    <span className="tab-spanish">Verbos Comunes</span>
                    <span className="tab-hanzi">常用动词</span>
                </button>
                <button
                    className={`tab-button ${activeTab === 'sustantivosTiempo' ? 'active' : ''}`}
                    onClick={() => onTabChange('sustantivosTiempo')}
                >
                    <span className="tab-spanish">Sustantivos y Tiempo</span>
                    <span className="tab-hanzi">名词与时间</span>
                </button>
            </div>
            {showScore && (
                <div className="score-display">
                    Puntos: {score}/{total}
                </div>
            )}
        </div>
    );
};

// Main App Component
const App = () => {
    const [characterSet, setCharacterSet] = useState(() => localStorage.getItem('characterSet') || 'numerosBasicos');
    const [shuffledCharacters, setShuffledCharacters] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showWinMessage, setShowWinMessage] = useState(false);
    const [customWords, setCustomWords] = useState(() => {
        const saved = localStorage.getItem('customWords');
        return saved ? JSON.parse(saved) : [];
    });

    const getCharacterData = () => {
        if (characterSet === 'numerosBasicos') return numerosBasicosData;
        if (characterSet === 'personasRelaciones') return personasRelacionesData;
        if (characterSet === 'verbos') return verbosData;
        if (characterSet === 'sustantivosTiempo') return sustantivosTiempoData;
        return numerosBasicosData;
    };

    const totalQuestions = getCharacterData().characters.length;
    const attemptsRef = useRef(new Map());

    const initializeGame = () => {
        const allCharacters = getCharacterData().characters;
        const shuffled = shuffleArray(allCharacters);
        setShuffledCharacters(shuffled);
        setCorrectAnswers(0);
        setShowWinMessage(false);
        const newAttempts = new Map();
        shuffled.forEach(charData => {
            newAttempts.set(charData.hanzi, { correct: false, attempts: 0 });
        });
        attemptsRef.current = newAttempts;
    };

    useEffect(() => {
        initializeGame();
    }, [characterSet]);

    const handleCharacterSetChange = (set) => {
        setCharacterSet(set);
        localStorage.setItem('characterSet', set);
    };

    const handleAnswerCheck = (character, isCorrect) => {
        const record = attemptsRef.current.get(character);
        record.attempts++;
        if (isCorrect && !record.correct) {
            record.correct = true;
            setCorrectAnswers(prev => prev + 1);
        }
        if (correctAnswers + 1 === totalQuestions) {
            setShowWinMessage(true);
        }
    };

    const handleReset = () => {
        initializeGame();
    };

    const focusNextEmptyOrIncorrect = () => {
        const cards = document.querySelectorAll('.hiragana-card');
        const activeElement = document.activeElement;
        const currentCard = activeElement ? activeElement.closest('.hiragana-card') : null;

        if (currentCard) {
            const currentIndex = Array.from(cards).indexOf(currentCard);
            for (let i = currentIndex + 1; i < cards.length; i++) {
                const input = cards[i].querySelector('.romaji-input');
                if (input && (!input.value.trim() || cards[i].classList.contains('incorrect'))) {
                    input.focus();
                    return;
                }
            }
        }

        for (let card of cards) {
            const input = card.querySelector('.romaji-input');
            if (input && (!input.value.trim() || card.classList.contains('incorrect'))) {
                input.focus();
                return;
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                const activeElement = document.activeElement;
                if (activeElement && activeElement.classList.contains('romaji-input')) {
                    e.preventDefault();
                    focusNextEmptyOrIncorrect();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [correctAnswers]);

    // Handle custom words loaded from file
    const handleCustomWordsLoaded = (words) => {
        setCustomWords(words);
        localStorage.setItem('customWords', JSON.stringify(words));
    };

    // Get all characters for flashcard mode
    const getAllCharacters = () => {
        return [
            ...numerosBasicosData.characters,
            ...personasRelacionesData.characters,
            ...verbosData.characters,
            ...sustantivosTiempoData.characters,
            ...frasesHechasIData.characters,
            ...customWords
        ];
    };

    return (
        <>
            <Tabs
                activeTab={characterSet}
                onTabChange={handleCharacterSetChange}
                score={correctAnswers}
                total={totalQuestions}
                showScore={characterSet !== 'flashcards' && characterSet !== 'typing' && characterSet !== 'tonePractice'}
            />
            <FileUploadButton onWordsLoaded={handleCustomWordsLoaded} />
            {characterSet === 'typing' ? (
                <TypingMode allCharacters={getAllCharacters()} customWords={customWords} />
            ) : characterSet === 'flashcards' ? (
                <FlashcardMode allCharacters={getAllCharacters()} />
            ) : characterSet === 'tonePractice' ? (
                <TonePracticeMode allCharacters={getAllCharacters()} customWords={customWords} />
            ) : (
                <>
                    <div className="container">
                        <div className="hiragana-area">
                            {shuffledCharacters.map((charData, index) => (
                                <CharacterCard
                                    key={index + characterSet}
                                    charData={charData}
                                    onAnswerCheck={handleAnswerCheck}
                                    characterSet={characterSet}
                                />
                            ))}
                        </div>
                    </div>
                    <button className="reset-button" onClick={handleReset}>
                        Reiniciar 重置
                    </button>
                    {showWinMessage && (
                        <div className="win-message">¡Felicidades! ¡Perfecto! 🎉</div>
                    )}
                </>
            )}
        </>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tab="home" />);