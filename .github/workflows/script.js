/* =======================================================================
   UN MOMENTO CON DIOS — Logica del libro interactivo
   -----------------------------------------------------------------------
   Secciones:
   1. Datos del contenido (capitulos, versiculos, oraciones)
   2. Iconos SVG tematicos
   3. Constructores de paginas (HTML)
   4. Controlador del libro (navegacion + animacion de pasar paginas)
   5. Indice, teclado, gestos tactiles, sonido y herramientas de escritura
   -----------------------------------------------------------------------
   COMO MODIFICAR EL CONTENIDO:
   · Edita el arreglo CHAPTERS para cambiar textos, versiculos o preguntas.
   · La traduccion biblica usada se define en BIBLE_VERSION.
   · Los colores se cambian en styles.css (variables :root).
   ======================================================================= */
'use strict';

/* Traduccion biblica de referencia, usada de forma consistente en todo el libro */
const BIBLE_VERSION = 'Reina-Valera 1960 (RVR1960)';

/* ------------------------------------------------------------------ *
 * 1. DATOS DEL CONTENIDO                                             *
 * ------------------------------------------------------------------ */
const CHAPTERS = [
  {
    id: 'cap1', num: 1, icon: 'heartMind',
    title: 'Cuando no entiendo lo que siento',
    desc: 'Reconocer y nombrar las emociones sin juzgarse.',
    verseMain: {
      ref: 'Salmo 139:1-4',
      paraphrase: 'Señor, tú me examinas y me conoces; sabes cuándo me siento y cuándo me levanto, y comprendes mis pensamientos aun antes de que encuentre las palabras.'
    },
    verseOthers: ['Salmo 42:11', 'Proverbios 4:23', 'Santiago 1:5'],
    verseExplain: 'Este salmo recuerda que Dios nos conoce por completo, incluso cuando nosotros mismos estamos tratando de comprender lo que sentimos. No tenemos que llegar con las ideas ordenadas: podemos acercarnos tal como estamos.',
    reflection: [
      'A veces sentimos muchas cosas al mismo tiempo y no sabemos cómo llamarlas. Podemos sentir tristeza sin entender por qué, enojo cuando algo nos duele o preocupación por situaciones que todavía no sabemos resolver.',
      'Dios conoce nuestro corazón incluso cuando nosotros mismos estamos tratando de comprenderlo. Reconocer una emoción no significa dejarse dominar por ella. Significa detenerse, escuchar lo que ocurre en nuestro interior y preguntarnos qué necesitamos.',
      'No tienes que juzgarte por lo que sientes. Puedes hablar con Dios con sinceridad y pedirle sabiduría para comprender lo que estás viviendo.'
    ],
    pullQuote: 'Lo que sientes merece ser escuchado; no tienes que comprenderlo todo de inmediato.',
    questions: [
      '¿Qué emoción ha estado más presente en mí durante los últimos días?',
      '¿Hay algo que me cuesta reconocer o admitir sobre lo que siento?',
      '¿Qué situaciones suelen despertar esa emoción?',
      'Si mi corazón pudiera hablar sin miedo a ser juzgado, ¿qué diría?',
      '¿Qué necesito en este momento: descanso, comprensión, compañía, orientación o tiempo?',
      '¿Qué puedo contarle hoy a Dios con mis propias palabras?'
    ],
    deepen: 'Identificar una emoción empieza por ponerle nombre: ¿es tristeza, miedo, enojo, vergüenza o una mezcla? Conviene separar lo que siento (una emoción en el cuerpo) de lo que pienso (una interpretación de la situación). Detrás de cada emoción suele haber una necesidad: la tristeza puede pedir consuelo, el enojo puede señalar un límite y el miedo puede pedir seguridad. Preguntarte “¿qué necesito ahora?” ayuda a dar el siguiente paso.',
    toLife: 'Hoy intenta nombrar una sola emoción en voz baja o por escrito, sin juzgarla. Luego pregunta: ¿qué necesita esta emoción de mí?',
    step: 'Escribe en una nota el nombre de lo que sientes y una necesidad concreta que puedas pedir hoy.',
    prayer: 'Dios, ayúdame a reconocer lo que siento sin avergonzarme. Dame sabiduría para comprender mi corazón y valor para expresar lo que llevo dentro. Amén.'
  },
  {
    id: 'cap2', num: 2, icon: 'family',
    title: 'Cuando tengo problemas en mi familia',
    desc: 'Cuidar de ti en medio de las dificultades familiares.',
    verseMain: {
      ref: 'Salmo 34:18',
      paraphrase: 'El Señor está cerca de los que tienen el corazón quebrantado y sostiene a los que se sienten abatidos.'
    },
    verseOthers: ['Salmo 46:1', 'Colosenses 3:13', 'Proverbios 15:1'],
    verseExplain: 'Cuando la casa se vuelve un lugar de tensión, este versiculo recuerda que Dios se acerca justo a quien tiene el corazón herido. No estamos solos ni somos responsables de sostenerlo todo.',
    reflection: [
      'Los problemas familiares pueden afectarnos profundamente porque en la familia buscamos amor, seguridad y comprensión. Cuando hay discusiones, distanciamiento o palabras que duelen, es normal sentir tristeza, enojo, confusión o impotencia.',
      'Recuerda que no eres responsable de resolver todos los problemas de los adultos ni de mantener a toda tu familia feliz. Puedes amar a las personas y, al mismo tiempo, reconocer que una situación te está haciendo daño.',
      'Perdonar no significa justificar las ofensas, aceptar malos tratos ni renunciar a tus límites. Dios puede acompañarte mientras buscas fortaleza, claridad y apoyo. Hablar con un adulto de confianza o un orientador escolar también es una forma de cuidar de ti.'
    ],
    pullQuote: 'No tienes que cargar tú solo con problemas que necesitan la ayuda de otras personas.',
    questions: [
      '¿Qué situación de mi familia me está afectando emocionalmente?',
      '¿Qué es lo que más me duele de lo que está ocurriendo?',
      '¿Hay algo que quisiera expresar, pero no sé cómo decirlo?',
      '¿Qué cosas están fuera de mi control y cuáles sí puedo hacer?',
      '¿Con qué adulto de confianza podría hablar sin sentirme juzgado?',
      '¿Qué necesito para sentirme acompañado y protegido?'
    ],
    deepen: 'Hay cosas que no puedes controlar: las decisiones de los adultos, su estado de ánimo o el pasado. Y hay cosas que sí están en tus manos: pedir ayuda, poner palabras a lo que sientes, buscar un espacio seguro y cuidar tu descanso. Para expresar una necesidad con respeto puedes usar frases en primera persona: “Me siento... cuando... y necesito...”. Esto ayuda a comunicar sin acusar.',
    toLife: 'Dibuja mentalmente dos columnas: “lo que puedo cambiar” y “lo que no depende de mí”. Enfócate hoy solo en algo pequeño de la primera.',
    step: 'Elige a un adulto de confianza y piensa una frase sencilla para iniciar una conversación esta semana.',
    prayer: 'Señor, tú conoces lo que vivo en mi familia. Dame fortaleza para afrontar lo que no puedo cambiar, sabiduría para actuar con respeto y confianza para pedir ayuda cuando la necesite. Amén.'
  },
  {
    id: 'cap3', num: 3, icon: 'friends',
    title: 'Cuando tengo problemas con mis amistades',
    desc: 'Amistades sanas, límites y reconciliación.',
    verseMain: {
      ref: 'Efesios 4:32',
      paraphrase: 'Sed bondadosos y compasivos unos con otros, perdonándoos mutuamente, así como Dios os perdonó.'
    },
    verseOthers: ['Proverbios 17:17', 'Proverbios 13:20', 'Romanos 12:18'],
    verseExplain: 'La bondad y el perdón abren la puerta a reparar un vínculo. Al mismo tiempo, ser bondadoso no significa aceptar cualquier trato: también podemos poner límites con respeto.',
    reflection: [
      'Las amistades pueden regalarnos momentos hermosos, pero también pueden producir decepción, inseguridad y tristeza. A veces una palabra, un rumor, una exclusión o una promesa incumplida nos hace preguntarnos si realmente somos importantes para los demás.',
      'Una amistad saludable no exige que renuncies a tu identidad para ser aceptado. La bondad, la empatía y el diálogo pueden ayudar a resolver conflictos, pero también es necesario reconocer cuándo una relación necesita límites.',
      'Puedes disculparte si has causado daño, escuchar otra perspectiva y buscar una reconciliación cuando sea posible. Sin embargo, no tienes que aceptar humillaciones ni permanecer en una relación que te lastima repetidamente para demostrar que eres un buen amigo.'
    ],
    pullQuote: 'Pertenecer a un grupo nunca debería exigirte dejar de ser tú mismo.',
    questions: [
      '¿Qué situación con mis amistades me ha dolido últimamente?',
      '¿Me he sentido escuchado, respetado y valorado?',
      '¿Hay algo que necesito decir con honestidad y respeto?',
      '¿He lastimado a alguien y necesito reconocerlo?',
      '¿Qué límites necesito establecer para cuidar mi tranquilidad?',
      '¿Qué cualidades quiero ofrecer y recibir en una amistad?'
    ],
    deepen: 'Comunicación asertiva es decir lo que piensas y sientes con respeto, sin agredir ni callarte. Un ejemplo: “Me dolio que contaran algo que te dije en privado. Me gustaria que habláramos de ello”. Para resolver un conflicto ayuda escuchar la otra versión antes de responder. Un límite saludable suena así: “Quiero seguir siendo tu amigo, pero no estoy bien con que me traten de esa manera”.',
    toLife: 'Piensa en una conversación pendiente. ¿Cómo la iniciarías usando “yo siento” en lugar de “tú siempre”?',
    step: 'Escribe una cualidad que quieres ofrecer en tus amistades y una que necesitas recibir.',
    prayer: 'Dios, enséñame a ser un amigo que escucha, comprende y respeta. Dame valor para reconocer mis errores y sabiduría para identificar las relaciones que me ayudan a crecer. Amén.'
  },
  {
    id: 'cap4', num: 4, icon: 'brokenHeart',
    title: 'Cuando sufro por amor o una decepción',
    desc: 'Tu valor no depende de que alguien te elija.',
    verseMain: {
      ref: 'Salmo 147:3',
      paraphrase: 'Él sana a los que tienen el corazón quebrantado y cuida con ternura cada una de sus heridas.'
    },
    verseOthers: ['Proverbios 4:23', 'Eclesiastés 3:1-4', '1 Corintios 13:4-7'],
    verseExplain: 'Ante una decepción amorosa, este versiculo ofrece una imagen de cuidado: Dios no ignora el dolor, lo atiende. Sanar lleva tiempo, y está bien necesitarlo.',
    reflection: [
      'Cuando alguien nos decepciona o una relación cambia, podemos sentir que perdimos algo importante. Tal vez aparecen preguntas, recuerdos, tristeza o la sensación de que no fuimos suficientes. Es válido necesitar tiempo para comprender lo sucedido.',
      'Una decepción no define tu valor ni determina todo lo que podrás vivir en el futuro. Que una persona no corresponda a tus sentimientos, que una relación termine o que alguien no cumpla tus expectativas no significa que tengas menos valor.',
      'El amor saludable no se construye desde la presión, el miedo o la necesidad de demostrar constantemente que merecemos ser elegidos. También implica respeto, libertad, sinceridad y cuidado mutuo.',
      'No tienes que sanar de inmediato. Puedes reconocer lo que extrañas, aprender de la experiencia y volver poco a poco a las actividades y relaciones que te hacen bien.'
    ],
    pullQuote: 'Una decepción puede doler profundamente, pero no tiene el poder de definir quién eres.',
    questions: [
      '¿Qué es exactamente lo que me duele de esta situación?',
      '¿Estoy extrañando a una persona, una expectativa o la manera en que imaginaba que serían las cosas?',
      '¿Qué pensamientos sobre mí mismo han aparecido después de esta decepción?',
      '¿Estoy confundiendo el rechazo de alguien con mi propio valor?',
      '¿Qué aprendí sobre mis necesidades, mis límites y mis expectativas?',
      '¿Qué pequeño gesto de cariño y respeto puedo tener hoy conmigo mismo?'
    ],
    deepen: 'El duelo emocional también existe cuando termina una relación o una ilusión: puede haber negación, tristeza, enojo y, poco a poco, aceptación. No hay un plazo “correcto”. La paciencia contigo mismo es parte del proceso. Amar a alguien no te obliga a aceptar cualquier trato: el respeto mutuo es la base. Distinguir entre “extraño a la persona” y “extraño la idea que tenía” ayuda a ver la situación con más claridad.',
    toLife: 'Hoy ten un gesto amable contigo: descansar, escuchar música que te gusta o hablar con alguien que te hace bien.',
    step: 'Retoma una actividad sencilla que disfrutabas antes y dedicale unos minutos hoy.',
    prayer: 'Dios, acompáñame mientras comprendo esta decepción. Ayúdame a sanar con paciencia, a recordar mi valor y a construir relaciones donde existan respeto, sinceridad y cuidado mutuo. Amén.'
  },
  {
    id: 'cap5', num: 5, icon: 'calm',
    title: 'Cuando siento ansiedad, miedo o ira',
    desc: 'Hacer una pausa y dar el siguiente paso posible.',
    verseMain: {
      ref: 'Filipenses 4:6-7',
      paraphrase: 'No os inquietéis por nada; en cambio, presentad a Dios vuestras peticiones con oración y gratitud, y su paz, que sobrepasa todo entendimiento, guardará vuestro corazón.'
    },
    verseOthers: ['Salmo 56:3', 'Isaías 26:3', 'Santiago 1:19-20'],
    verseExplain: 'Este pasaje no promete que la preocupación desaparezca al instante; invita a llevar lo que sentimos a Dios y a buscar una paz que nos sostiene mientras afrontamos la situación.',
    reflection: [
      'Hay momentos en los que la mente parece no descansar. Nos preocupamos por lo que podría ocurrir, por los errores que cometimos o por situaciones que todavía no podemos resolver. Otras veces, el miedo nos paraliza o el enojo aparece porque sentimos que algo es injusto.',
      'La fe no significa que nunca sentirás miedo ni que siempre tendrás tranquilidad. Significa que puedes buscar a Dios en medio de tus preocupaciones y encontrar compañía mientras aprendes a afrontarlas.',
      'Cuando una emoción sea muy intensa, puedes hacer una pausa, respirar lentamente, identificar lo que necesitas y evitar tomar decisiones apresuradas. La oración puede acompañarte, y conversar con alguien de confianza puede ayudarte a encontrar soluciones.',
      'No todo está bajo tu control, pero sí puedes aprender a reconocer tus necesidades y elegir el siguiente paso posible.'
    ],
    pullQuote: 'No necesitas resolver toda tu vida en un solo día; empieza por el siguiente paso.',
    questions: [
      '¿Qué situación me está preocupando más en este momento?',
      '¿Qué temo que ocurra y qué sé realmente sobre esa situación?',
      '¿Hay algo que pueda hacer hoy para afrontar mi preocupación?',
      '¿Qué señales me indican que necesito hacer una pausa?',
      '¿Cómo suelo reaccionar cuando estoy enojado y qué alternativa más saludable puedo intentar?',
      '¿A quién puedo acudir si estas emociones se vuelven difíciles de manejar?'
    ],
    breathing: true,
    deepen: 'Una pausa de un minuto puede ayudarte a recuperar calma. No es una cura ni elimina la ansiedad, pero te da un momento para elegir con más claridad tu siguiente paso.',
    toLife: 'La próxima vez que notes el cuerpo tenso, haz una pausa breve antes de responder o decidir.',
    step: 'Identifica una señal de tu cuerpo que te avisa que necesitas parar (respiración rápida, hombros tensos, calor en la cara).',
    prayer: 'Señor, pongo ante ti mis preocupaciones, mis temores y mi enojo. Ayúdame a encontrar calma, a pensar antes de actuar y a reconocer cuándo necesito acompañamiento. Dame sabiduría para afrontar lo que está en mis manos. Amén.'
  },
  {
    id: 'cap6', num: 6, icon: 'hope',
    title: 'Cuando me siento solo o pierdo la esperanza',
    desc: 'Pedir compañía también es una forma de esperanza.',
    verseMain: {
      ref: 'Isaías 41:10',
      paraphrase: 'No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré, y te sostendré con mi mano.'
    },
    verseOthers: ['Deuteronomio 31:8', 'Salmo 23:4', 'Romanos 15:13', 'Gálatas 6:2'],
    verseExplain: 'Frente a la soledad, este versiculo repite una promesa de compañía. No elimina la dificultad de golpe, pero recuerda que no la enfrentamos solos.',
    reflection: [
      'Hay momentos en los que podemos sentirnos solos incluso cuando estamos rodeados de personas. Tal vez creemos que nadie comprende lo que nos sucede o que debemos aparentar estar bien para no preocupar a los demás.',
      'Pero no tienes que demostrar fortaleza todo el tiempo. Necesitar compañía no te hace débil, y pedir ayuda no significa que hayas perdido la fe.',
      'La esperanza no siempre aparece como una solución inmediata; a veces comienza con una conversación sincera, una persona que escucha o la decisión de no enfrentar una dificultad en soledad.',
      'Tu historia no se reduce al momento difícil que estás atravesando. Aunque hoy no veas con claridad lo que viene, puedes avanzar poco a poco, buscando apoyo y permitiéndote recibir el cuidado de otras personas.',
      'Si la tristeza o la desesperanza se vuelven persistentes, habla con un adulto de confianza o con un profesional que pueda acompañarte.'
    ],
    pullQuote: 'Pedir compañía también es una forma de encontrar esperanza.',
    questions: [
      '¿En qué momentos me siento más solo, incluso cuando hay personas a mi alrededor?',
      '¿Qué me gustaría que alguien comprendiera sobre lo que estoy viviendo?',
      '¿Hay alguien con quien pueda ser sincero sin tener que aparentar que todo está bien?',
      '¿Qué personas o actividades me ayudan a encontrar tranquilidad?',
      '¿Qué significa para mí tener esperanza en este momento?',
      '¿Qué paso pequeño puedo dar hoy para acercarme a alguien que pueda apoyarme?'
    ],
    deepen: 'Algunas acciones pequeñas para conectar con otras personas: enviar un mensaje a alguien de confianza, sentarte cerca de alguien en clase, participar en una actividad que te gusta o pedirle a un adulto un momento para hablar. Adultos seguros pueden ser un familiar, un profesor, un orientador escolar o un líder de tu comunidad. Pedir ayuda puede empezar con una frase sencilla: “¿Podemos hablar un momento? No me he sentido bien últimamente”.',
    toLife: 'Elige a una persona segura y piensa un primer mensaje breve para acercarte esta semana.',
    step: 'Anota el nombre de un adulto de confianza y una actividad que te ayuda a sentirte mejor.',
    prayer: 'Dios, acompáñame cuando me cueste encontrar esperanza. Recuérdame que no tengo que enfrentar cada dificultad en soledad y ayúdame a reconocer a las personas que pueden brindarme apoyo, cariño y orientación. Amén.'
  }
];
/*__AFTER_CHAPTERS__*/

/* ------------------------------------------------------------------ *
 * 2. ICONOS SVG TEMATICOS (ilustraciones de capitulo)                *
 * ------------------------------------------------------------------ */
const ICONS = {
  heartMind: '<svg viewBox="0 0 64 64"><path d="M32 54 C 10 38 8 22 20 18 C 27 16 31 22 32 24 C 33 22 37 16 44 18 C 56 22 54 38 32 54 Z" fill="#24563D"/><circle cx="32" cy="30" r="6" fill="#FFFEF7"/></svg>',
  family: '<svg viewBox="0 0 64 64"><circle cx="22" cy="22" r="7" fill="#24563D"/><circle cx="42" cy="22" r="7" fill="#4D8B57"/><path d="M12 50 C 12 38 32 38 32 50 Z" fill="#24563D"/><path d="M32 50 C 32 38 52 38 52 50 Z" fill="#4D8B57"/><circle cx="32" cy="40" r="4" fill="#D8BD71"/></svg>',
  friends: '<svg viewBox="0 0 64 64"><circle cx="24" cy="26" r="8" fill="#4D8B57"/><circle cx="42" cy="30" r="6" fill="#24563D"/><path d="M20 34 L40 40" stroke="#D8BD71" stroke-width="3" stroke-linecap="round"/></svg>',
  brokenHeart: '<svg viewBox="0 0 64 64"><path d="M32 54 C 10 38 8 22 20 18 C 27 16 31 22 32 24 L 28 32 L 34 36 L 30 44 Z" fill="#24563D"/><path d="M32 24 C 33 22 37 16 44 18 C 56 22 54 38 32 54 L 36 44 L 30 40 L 34 32 Z" fill="#4D8B57"/></svg>',
  calm: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="18" fill="none" stroke="#4D8B57" stroke-width="3"/><circle cx="32" cy="32" r="9" fill="#CDEBDD"/><circle cx="32" cy="32" r="3" fill="#D8BD71"/></svg>',
  hope: '<svg viewBox="0 0 64 64"><path d="M32 52 V30" stroke="#24563D" stroke-width="3"/><path d="M32 36 C 20 32 18 20 26 16 C 30 22 32 30 32 36 Z" fill="#4D8B57"/><path d="M32 32 C 44 28 46 16 38 12 C 34 18 32 26 32 32 Z" fill="#24563D"/><circle cx="32" cy="10" r="5" fill="#D8BD71"/></svg>'
};

/* Escapar texto para insertarlo de forma segura como HTML */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* Decoracion de esquinas reutilizable (hojas SVG locales) */
function corners(which) {
  const map = { tl: 'decor--tl', br: 'decor--br', tr: 'decor--tr', bl: 'decor--bl' };
  return (which || ['tl', 'br']).map(function (k) {
    return '<img class="decor ' + map[k] + '" src="assets/corner-leaves.svg" alt="" aria-hidden="true">';
  }).join('');
}
const SPRIG = '<img class="sprig" src="assets/leaf-sprig.svg" alt="" aria-hidden="true">';

/* Recuadro de versiculo con paraphrasis claramente identificada */
function verseCard(v, others) {
  const list = (others && others.length)
    ? '<ul class="verse-list" aria-label="Versiculos complementarios">'
        + others.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('')
        + '</ul>'
    : '';
  return '<div class="verse-card">'
    + '<img class="leaf-corner tl" src="assets/corner-leaves.svg" alt="" aria-hidden="true">'
    + '<img class="leaf-corner br" src="assets/corner-leaves.svg" alt="" aria-hidden="true">'
    + '<p class="verse-ref">' + esc(v.ref) + '</p>'
    + '<p class="verse-text">“' + esc(v.paraphrase) + '”</p>'
    + '<span class="verse-tag">Paráfrasis · consulta tu Biblia (' + esc(BIBLE_VERSION) + ')</span>'
    + list + '</div>';
}

/*__BUILDERS__*/

/* Panel desplegable accesible (details/summary nativo) */
function panel(summary, bodyHTML) {
  return '<details class="panel"><summary>' + esc(summary) + '</summary>'
    + '<div class="panel__body">' + bodyHTML + '</div></details>';
}
function prayerBox(text) {
  const t = esc(text).replace(/\s*Amén\.?$/, '');
  return '<div class="prayer-box">“' + t + '”<span class="amen">Amén</span></div>';
}
function paras(arr) {
  return arr.map(function (p) { return '<p class="body-text">' + esc(p) + '</p>'; }).join('');
}

/* ------------------------------------------------------------------ *
 * 3. CONSTRUCTORES DE PAGINAS DE CAPITULO                            *
 * ------------------------------------------------------------------ */
/* Cada capitulo ocupa 4 paginas: presentacion, versiculo, reflexion, interactiva */
function chapterPages(ch) {
  const pages = [];

  // 3.1 Presentacion con ilustracion tematica
  pages.push({ chapterId: ch.id, label: 'Cap. ' + ch.num + ' · Presentación', html:
    corners(['tl', 'br', 'tr', 'bl'])
    + '<div class="inner-frame"></div>'
    + '<p class="chapter-num">Capítulo ' + ch.num + '</p>'
    + '<div class="chapter-illu">' + ICONS[ch.icon] + '</div>'
    + '<h2 class="page-title" style="text-align:center">' + esc(ch.title) + '</h2>'
    + '<p class="page-sub" style="text-align:center">' + esc(ch.desc) + '</p>'
    + SPRIG
    + '<p class="body-text text-muted" style="text-align:center">Un espacio para detenerte, leer con calma y hablar con Dios desde tu propia realidad.</p>'
  });

  // 3.2 Versiculo principal + explicacion
  pages.push({ chapterId: ch.id, label: 'Cap. ' + ch.num + ' · Versículo', html:
    corners(['tl'])
    + '<p class="kicker">Versículo para este capítulo</p>'
    + verseCard(ch.verseMain, ch.verseOthers)
    + '<h3 class="page-sub">¿Qué nos dice?</h3>'
    + '<p class="body-text">' + esc(ch.verseExplain) + '</p>'
    + SPRIG
  });

  // 3.3 Reflexion profunda + frase destacada
  pages.push({ chapterId: ch.id, label: 'Cap. ' + ch.num + ' · Reflexión', html:
    corners(['br'])
    + '<p class="kicker">Reflexión</p>'
    + '<h2 class="page-title">' + esc(ch.title) + '</h2>'
    + paras(ch.reflection)
    + '<blockquote class="pull-quote">' + esc(ch.pullQuote) + '</blockquote>'
  });

  // 3.4 Pagina interactiva: preguntas + acordeones (ventanas para profundizar)
  const breath = ch.breathing
    ? '<div class="breath" aria-hidden="true"><div class="breath__circle"></div>'
      + '<p class="breath__label">Inhala al crecer · exhala al reducir (8 s por ciclo)</p></div>'
      + '<p class="body-text">Respira lentamente mientras observas tu entorno: nombra tres cosas que ves, dos que escuchas y una que sientes. Luego repite en voz baja: “Dios, estoy aquí contigo”. Esta pausa no es una cura ni elimina la ansiedad, pero te ayuda a elegir tu siguiente paso con más calma.'
    : '';
  pages.push({ chapterId: ch.id, label: 'Cap. ' + ch.num + ' · Mi corazón', html:
    corners(['tr', 'bl'])
    + '<p class="kicker">Una pregunta para mi corazón</p>'
    + '<h2 class="page-title">Para escribir y pensar</h2>'
    + '<ol class="question-list">' + ch.questions.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ol>'
    + '<div class="accordions">'
      + panel('Quiero profundizar más', '<p>' + esc(ch.deepen) + '</p>')
      + panel('Llévalo a tu vida', '<p>' + esc(ch.toLife) + '</p>')
      + panel('Una oración para este momento', prayerBox(ch.prayer))
      + panel('Un pequeño paso que puedo dar', '<p>' + esc(ch.step) + '</p>' + breath)
      + panel('Ver otros versículos relacionados', '<ul>' + ch.verseOthers.map(function (r) { return '<li>' + esc(r) + ' <span class="text-muted">(' + esc(BIBLE_VERSION) + ')</span></li>'; }).join('') + '</ul>')
    + '</div>'
  });

  return pages;
}

/*__STATIC_PAGES__*/

/* ------------------------------------------------------------------ *
 * 3b. PAGINAS PRELIMINARES Y FINALES (contenido fijo)                *
 * ------------------------------------------------------------------ */
function welcomePage() {
  return { label: 'Bienvenida', html:
    corners(['tl', 'br', 'tr', 'bl'])
    + '<div class="inner-frame"></div>'
    + '<p class="kicker">Bienvenida</p>'
    + '<h2 class="page-title">Querido estudiante</h2>'
    + paras([
        'Quizás llegas aquí con muchas preguntas, con una preocupación que no sabes cómo expresar o con una emoción que te cuesta comprender. Tal vez estás viviendo una situación en tu familia, una dificultad con tus amistades o una decepción que te ha dejado triste.',
        'Este espacio es para ti.',
        'No tienes que esconder lo que sientes ni encontrar las palabras perfectas. Puedes hacer una pausa, leer con tranquilidad y hablar con Dios desde tu propia realidad.',
        'Sentir tristeza, miedo, confusión o enojo no te hace una mala persona. Tus emociones merecen ser escuchadas y comprendidas.',
        'Lee sin afán. No tienes que responder todas las preguntas ni solucionar todo hoy. Permítete reconocer lo que sientes y recuerda que puedes acudir a Dios y a personas de confianza cuando necesites apoyo.'
      ])
    + '<blockquote class="pull-quote">Este libro es un espacio para ti. No tienes que aparentar que todo está bien.</blockquote>'
  };
}

function howtoPage() {
  return { label: 'Cómo usar este libro', html:
    corners(['tr', 'bl'])
    + '<p class="kicker">Cómo utilizar este libro</p>'
    + '<h2 class="page-title">Un camino, a tu ritmo</h2>'
    + '<ul class="question-list">'
      + '<li>Pasa las páginas con los botones <b>Anterior</b> y <b>Siguiente</b>, con las flechas del teclado o deslizando en pantallas táctiles.</li>'
      + '<li>Abre las <b>ventanas desplegables</b> (“Quiero profundizar más”, “Una oración para este momento”…) para descubrir más contenido sin cambiar de página.</li>'
      + '<li>Usa el <b>Índice</b> para saltar directamente a cualquiera de los seis capítulos.</li>'
      + '<li>Escribe en el <b>Diario del corazón</b> y en la <b>oración personal</b>. Tus palabras quedan solo en tu dispositivo.</li>'
      + '<li>Si prefieres menos movimiento, activa el botón <b>Movimiento</b> para transiciones sencillas.</li>'
    + '</ul>'
    + '<div class="soft-note"><strong>Sobre los versículos:</strong> este libro usa como referencia la traducción ' + esc(BIBLE_VERSION) + '. Los textos se muestran como <strong>paráfrasis claramente identificadas</strong> junto a su referencia, para que puedas confirmarlos en tu propia Biblia. No se presentan reflexiones como si fueran palabras bíblicas.</div>'
    + '<div class="soft-note"><strong>Un recordatorio importante:</strong> la oración acompaña y da sentido, pero no sustituye la ayuda de personas de confianza ni de profesionales. Si lo que sientes se vuelve difícil de manejar, busca apoyo.</div>'
  };
}

function diaryPage() {
  const fields = [
    ['d1', 'Hoy me siento…'],
    ['d2', 'Quiero hablar con Dios sobre…'],
    ['d3', 'Algo que me está costando es…'],
    ['d4', 'Algo que necesito y que puedo expresar es…'],
    ['d5', 'Una persona con la que puedo hablar es…'],
    ['d6', 'Un paso que puedo dar para cuidar de mí es…'],
    ['d7', 'Una frase bíblica que quiero recordar es…']
  ];
  const html = fields.map(function (f) {
    return '<div class="field"><label for="' + f[0] + '">' + esc(f[1]) + '</label>'
      + '<textarea id="' + f[0] + '" name="' + f[0] + '" data-journal rows="2"></textarea></div>';
  }).join('');
  return { label: 'Mi corazón quiere hablar', html:
    corners(['tl'])
    + '<p class="kicker">Mi diario del corazón</p>'
    + '<h2 class="page-title">Mi corazón quiere hablar</h2>'
    + '<p class="body-text text-muted">Escribe lo que quieras, sin tener que responder todas las preguntas. Puedes dejar campos vacíos.</p>'
    + '<form id="journal-form" onsubmit="return false">' + html + '</form>'
    + '<p class="save-hint" id="journal-hint" role="status" aria-live="polite">Tus respuestas se guardan solo en este dispositivo.</p>'
    + '<div class="tool-row no-print">'
      + '<button class="tool-btn" type="button" data-journal-action="save">Guardar en este dispositivo</button>'
      + '<button class="tool-btn" type="button" data-journal-action="download">Descargar (.txt)</button>'
      + '<button class="tool-btn" type="button" data-journal-action="print">Imprimir</button>'
      + '<button class="tool-btn tool-btn--danger" type="button" data-journal-action="clear">Limpiar campos</button>'
    + '</div>'
    + '<div class="soft-note">Tus respuestas <strong>no se envían a ningún servidor</strong> ni a servicios externos, y nadie más puede leerlas desde aquí. Si usas “Guardar”, quedan almacenadas en este navegador y puedes borrarlas con “Limpiar campos”.</div>'
  };
}

/*__STATIC_PAGES_2__*/

function prayerPage() {
  const fields = [
    ['p1', 'Hoy quiero contarte…'],
    ['p2', 'Necesito fortaleza para…'],
    ['p3', 'Quisiera aprender a…'],
    ['p4', 'Esta semana daré este pequeño paso…']
  ];
  const html = fields.map(function (f) {
    return '<div class="field"><label for="' + f[0] + '">' + esc(f[1]) + '</label>'
      + '<textarea id="' + f[0] + '" name="' + f[0] + '" data-journal rows="3"></textarea></div>';
  }).join('');
  return { label: 'Mi oración personal', html:
    corners(['tl', 'br', 'tr', 'bl'])
    + '<div class="inner-frame"></div>'
    + '<p class="kicker" style="text-align:center">Mi oración personal</p>'
    + '<h2 class="page-title" style="text-align:center">Dios, hoy quiero contarte…</h2>'
    + '<p class="body-text">No necesitas una oración perfecta. Puedes hablar con Dios como eres, contarle lo que te preocupa, agradecer lo que te hace bien o expresar las preguntas que todavía no tienen respuesta.</p>'
    + '<form class="write-lines" onsubmit="return false">' + html + '</form>'
    + '<img class="leaf-float" src="assets/leaf-sprig.svg" alt="" aria-hidden="true">'
    + '<blockquote class="pull-quote">Puedes volver a estas páginas cada vez que necesites detenerte, escucharte y encontrar un momento de paz.</blockquote>'
  };
}

function commitmentsPage() {
  const fields = [
    ['c1', 'Un hábito pequeño para cuidar mi descanso'],
    ['c2', 'Algo que haré cuando me sienta sobrepasado'],
    ['c3', 'Una persona a la que puedo acudir'],
    ['c4', 'Una actividad que me hace bien']
  ];
  const html = fields.map(function (f) {
    return '<div class="field"><label for="' + f[0] + '">' + esc(f[1]) + '</label>'
      + '<input type="text" id="' + f[0] + '" name="' + f[0] + '" data-journal></div>';
  }).join('');
  return { label: 'Compromisos y autocuidado', html:
    corners(['tr', 'bl'])
    + '<p class="kicker">Compromisos y autocuidado</p>'
    + '<h2 class="page-title">Pequeños pasos para cuidarme</h2>'
    + '<p class="body-text text-muted">No se trata de hacerlo todo perfecto, sino de dar un paso a la vez.</p>'
    + '<form class="write-lines" onsubmit="return false">' + html + '</form>'
    + '<div class="soft-note"><strong>Si lo necesitas, pide ayuda.</strong> Hablar con un adulto de confianza, un orientador escolar o un profesional es una forma valiente de cuidarte.</div>'
    + SPRIG
  };
}

function backCoverPage() {
  return { label: 'Contraportada', cls: 'cover', html:
    '<img class="cover__leaf t" src="assets/corner-leaves.svg" alt="" aria-hidden="true">'
    + '<img class="cover__leaf b" src="assets/corner-leaves.svg" alt="" aria-hidden="true">'
    + '<div class="cover__frame"></div>'
    + '<div class="cover__inner">'
      + '<div class="cover__plate">'
        + '<span class="cover__title">Un momento con Dios</span>'
        + '<p class="cover__sub">Gracias por detenerte, respirar y escuchar tu corazón. Puedes regresar a estas páginas cuando lo necesites.</p>'
        + '<img class="sprig" src="assets/leaf-sprig.svg" alt="" aria-hidden="true">'
      + '</div>'
      + '<p class="cover__epigraph">“No necesitas tener todas las respuestas para acercarte a Dios”.</p>'
    + '</div>'
  };
}

/*__ASSEMBLE__*/

/* ------------------------------------------------------------------ *
 * 4. ENSAMBLADO DE PAGINAS Y CONSTRUCCION DEL DOM                    *
 * ------------------------------------------------------------------ */
function buildPages() {
  // Orden editorial (la portada ya existe como HTML estatico, indice 0)
  const defs = [];
  defs.push(welcomePage());
  defs.push(howtoPage());
  CHAPTERS.forEach(function (ch) {
    chapterPages(ch).forEach(function (p) { defs.push(p); });
  });
  defs.push(diaryPage());
  defs.push(prayerPage());
  defs.push(commitmentsPage());
  defs.push(backCoverPage());

  const viewport = document.getElementById('libro');
  defs.forEach(function (def) {
    const section = document.createElement('section');
    section.className = 'page' + (def.cls ? ' ' + def.cls : '');
    section.setAttribute('aria-label', def.label);
    if (def.chapterId) section.dataset.chapter = def.chapterId;

    const sheet = document.createElement('div');
    sheet.className = 'page__sheet';

    const front = document.createElement('div');
    front.className = 'page__face page__front';
    if (def.cls === 'cover') {
      front.innerHTML = def.html;
    } else {
      front.innerHTML = '<div class="page__content" tabindex="0">' + def.html + '</div>';
    }

    const back = document.createElement('div');
    back.className = 'page__face page__back';
    back.setAttribute('aria-hidden', 'true');

    sheet.appendChild(front);
    sheet.appendChild(back);
    section.appendChild(sheet);
    viewport.appendChild(section);
  });

  return Array.prototype.slice.call(viewport.querySelectorAll('.page'));
}

/*__CONTROLLER__*/

/* ------------------------------------------------------------------ *
 * 4b. CONTROLADOR DEL LIBRO (navegacion + animacion de volteo)       *
 * ------------------------------------------------------------------ */
function Book() {
  this.pages = buildPages();               // incluye la portada (indice 0)
  this.current = 0;
  this.animating = false;
  this.FLIP_MS = 680;
  this.soundOn = false;
  this.audioCtx = null;
}

Book.prototype.prefersReduced = function () {
  const sys = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const manual = document.body.classList.contains('reduce-motion');
  return sys || manual;
};

Book.prototype.go = function (target, viaIndex) {
  target = Math.max(0, Math.min(this.pages.length - 1, target));
  if (this.animating || target === this.current) return;
  const dir = target > this.current ? 'next' : 'prev';
  const from = this.pages[this.current];
  const to = this.pages[target];
  const self = this;

  // Sin animacion: intercambio directo
  if (this.prefersReduced()) {
    from.classList.remove('is-active');
    to.classList.add('is-active');
    this.current = target;
    this.afterNav(viaIndex);
    return;
  }

  this.animating = true;
  this.playFlip();

  if (dir === 'next') {
    to.classList.add('is-under');
    from.classList.remove('is-active');
    from.classList.add('is-flipping');
    // forzar reflow y disparar el giro
    void from.offsetWidth;
    from.classList.add('flip-next');
    this.onEnd(from, function () {
      from.classList.remove('is-flipping', 'flip-next');
      to.classList.remove('is-under');
      to.classList.add('is-active');
      self.current = target;
      self.animating = false;
      self.afterNav(viaIndex);
    });
  } else {
    from.classList.add('is-under');
    to.classList.remove('is-active');
    to.classList.add('is-flipping', 'prep-prev');
    void to.offsetWidth;                 // fija rotateY(-180) sin transicion
    to.classList.remove('prep-prev');
    void to.offsetWidth;
    to.classList.add('flip-prev');
    this.onEnd(to, function () {
      to.classList.remove('is-flipping', 'flip-prev');
      from.classList.remove('is-under', 'is-active');
      to.classList.add('is-active');
      self.current = target;
      self.animating = false;
      self.afterNav(viaIndex);
    });
  }
};

/* Espera el fin de la transicion del sheet, con respaldo por tiempo */
Book.prototype.onEnd = function (pageEl, cb) {
  const sheet = pageEl.querySelector('.page__sheet');
  let done = false;
  const finish = function () {
    if (done) return; done = true;
    sheet.removeEventListener('transitionend', handler);
    cb();
  };
  const handler = function (e) { if (e.target === sheet && e.propertyName === 'transform') finish(); };
  sheet.addEventListener('transitionend', handler);
  setTimeout(finish, this.FLIP_MS + 120);
};

Book.prototype.next = function () { this.go(this.current + 1); };
Book.prototype.prev = function () { this.go(this.current - 1); };

Book.prototype.afterNav = function (viaIndex) {
  this.updateChrome();
  // mover foco al contenido para lectores de pantalla / teclado
  const active = this.pages[this.current];
  const content = active.querySelector('.page__content') || active;
  if (!viaIndex) { try { content.focus({ preventScroll: true }); } catch (e) { content.focus(); } }
  const sc = active.querySelector('.page__content');
  if (sc) sc.scrollTop = 0;
};

Book.prototype.updateChrome = function () {
  const onCover = this.current === 0;
  const controls = document.getElementById('controls');
  controls.hidden = onCover;
  const total = this.pages.length;
  const ind = document.getElementById('indicator');
  ind.textContent = onCover ? 'Portada' : ('Página ' + this.current + ' de ' + (total - 1));
  document.getElementById('btn-prev').disabled = this.current <= 0;
  document.getElementById('btn-next').disabled = this.current >= total - 1;
};

/*__SOUND_EVENTS__*/

/* Sonido de papel sintetizado (sin archivos externos). Desactivado por defecto. */
Book.prototype.playFlip = function () {
  if (!this.soundOn) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!this.audioCtx) this.audioCtx = new Ctx();
    const ctx = this.audioCtx;
    if (ctx.state === 'suspended') ctx.resume();
    const dur = 0.28;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2.2);
    }
    const src = ctx.createBufferSource(); src.buffer = buffer;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1700; bp.Q.value = 0.8;
    const gain = ctx.createGain(); gain.gain.value = 0.12;
    src.connect(bp); bp.connect(gain); gain.connect(ctx.destination);
    src.start();
  } catch (e) { /* silencioso */ }
};

/* ------------------------------------------------------------------ *
 * 5. INDICE, TECLADO, GESTOS Y HERRAMIENTAS DE ESCRITURA             *
 * ------------------------------------------------------------------ */
const JOURNAL_KEY = 'umcd-journal-v1';

function chapterPageIndex(book, chapterId) {
  for (let i = 0; i < book.pages.length; i++) {
    if (book.pages[i].dataset.chapter === chapterId) return i;
  }
  return 1;
}

function buildIndexPanel(book) {
  const list = document.getElementById('index-list');
  list.innerHTML = CHAPTERS.map(function (ch) {
    return '<li><button class="index-item" type="button" data-goto-chapter="' + ch.id + '">'
      + '<span class="num">' + ch.num + '</span>'
      + '<span class="meta"><b>' + esc(ch.title) + '</b><span>' + esc(ch.desc) + '</span></span>'
      + '</button></li>';
  }).join('');
}

function openIndex() {
  document.getElementById('index-panel').classList.add('open');
  document.getElementById('index-panel').setAttribute('aria-hidden', 'false');
  document.getElementById('scrim').classList.add('open');
  const first = document.querySelector('#index-list .index-item');
  if (first) first.focus();
}
function closeIndex() {
  document.getElementById('index-panel').classList.remove('open');
  document.getElementById('index-panel').setAttribute('aria-hidden', 'true');
  document.getElementById('scrim').classList.remove('open');
}

/* -------- Diario: guardar / cargar / descargar / imprimir / limpiar -------- */
function journalFields() { return document.querySelectorAll('[data-journal]'); }

function saveJournal() {
  const data = {};
  journalFields().forEach(function (el) { if (el.value.trim()) data[el.id] = el.value; });
  try {
    localStorage.setItem(JOURNAL_KEY, JSON.stringify(data));
    flashHint('Guardado en este dispositivo ✓', 'saved');
  } catch (e) { flashHint('No se pudo guardar en este navegador.', ''); }
}
function loadJournal() {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(JOURNAL_KEY) || '{}'); } catch (e) { data = {}; }
  journalFields().forEach(function (el) { if (data[el.id] != null) el.value = data[el.id]; });
}
function clearJournal() {
  if (!window.confirm('¿Seguro que quieres borrar lo que escribiste? Esta acción no se puede deshacer.')) return;
  journalFields().forEach(function (el) { el.value = ''; });
  try { localStorage.removeItem(JOURNAL_KEY); } catch (e) {}
  flashHint('Campos borrados.', '');
}
function downloadJournal() {
  let txt = 'UN MOMENTO CON DIOS — Mis notas\n';
  txt += 'Fecha: ' + new Date().toLocaleString('es') + '\n\n';
  journalFields().forEach(function (el) {
    const lbl = (el.closest('.field') && el.closest('.field').querySelector('label'));
    const q = lbl ? lbl.textContent : el.id;
    txt += q + '\n' + (el.value.trim() ? el.value : '(sin respuesta)') + '\n\n';
  });
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'mis-notas-un-momento-con-dios.txt';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 500);
}
function flashHint(msg, state) {
  const hint = document.getElementById('journal-hint');
  if (!hint) return;
  hint.textContent = msg;
  hint.dataset.state = state || '';
  if (state === 'saved') setTimeout(function () {
    hint.textContent = 'Tus respuestas se guardan solo en este dispositivo.';
    hint.dataset.state = '';
  }, 2600);
}

/*__INIT__*/

/* ------------------------------------------------------------------ *
 * 6. INICIALIZACION Y EVENTOS                                        *
 * ------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function () {
  const book = new Book();
  window.__book = book;            // util para depurar desde la consola
  buildIndexPanel(book);
  loadJournal();
  book.updateChrome();

  // Botones de navegacion
  document.getElementById('btn-open').addEventListener('click', function () { book.next(); });
  document.getElementById('btn-prev').addEventListener('click', function () { book.prev(); });
  document.getElementById('btn-next').addEventListener('click', function () { book.next(); });
  document.getElementById('btn-cover').addEventListener('click', function () { book.go(0); });
  document.getElementById('btn-print').addEventListener('click', function () { window.print(); });

  // Indice (panel lateral)
  document.getElementById('btn-index').addEventListener('click', openIndex);
  document.getElementById('index-close').addEventListener('click', closeIndex);
  document.getElementById('scrim').addEventListener('click', closeIndex);
  document.getElementById('index-list').addEventListener('click', function (e) {
    const btn = e.target.closest('[data-goto-chapter]');
    if (!btn) return;
    closeIndex();
    book.go(chapterPageIndex(book, btn.dataset.gotoChapter), true);
  });

  // Boton de sonido (opcional)
  const btnSound = document.getElementById('btn-sound');
  btnSound.addEventListener('click', function () {
    book.soundOn = !book.soundOn;
    btnSound.setAttribute('aria-pressed', String(book.soundOn));
    btnSound.firstChild.textContent = book.soundOn ? '🔊 ' : '🔇 ';
    if (book.soundOn) book.playFlip();
  });

  // Boton de reducir movimiento
  const btnMotion = document.getElementById('btn-motion');
  btnMotion.addEventListener('click', function () {
    const on = document.body.classList.toggle('reduce-motion');
    btnMotion.setAttribute('aria-pressed', String(on));
  });

  // Herramientas del diario (delegacion de eventos)
  document.addEventListener('click', function (e) {
    const b = e.target.closest('[data-journal-action]');
    if (!b) return;
    const action = b.dataset.journalAction;
    if (action === 'save') saveJournal();
    else if (action === 'download') downloadJournal();
    else if (action === 'print') window.print();
    else if (action === 'clear') clearJournal();
  });
  // Autoguardado discreto al escribir (solo en este dispositivo)
  document.addEventListener('input', function (e) {
    if (e.target.matches && e.target.matches('[data-journal]')) {
      clearTimeout(window.__jt);
      window.__jt = setTimeout(saveJournal, 1200);
    }
  });

  // Teclado: flechas para pasar paginas; Esc cierra el indice
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeIndex(); return; }
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'textarea' || tag === 'input') return;   // no interferir al escribir
    if (document.getElementById('index-panel').classList.contains('open')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); book.next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); book.prev(); }
  });

  // Gestos tactiles: deslizar horizontal sin romper el scroll vertical
  let tsX = 0, tsY = 0, tracking = false;
  const vp = document.getElementById('libro');
  vp.addEventListener('touchstart', function (e) {
    const t = e.target;
    if (t.closest('textarea, input, .page__content')) {
      // permitir scroll dentro del texto; solo rastreamos para decidir luego
    }
    if (e.touches.length !== 1) { tracking = false; return; }
    tsX = e.touches[0].clientX; tsY = e.touches[0].clientY; tracking = true;
  }, { passive: true });
  vp.addEventListener('touchend', function (e) {
    if (!tracking) return; tracking = false;
    const dx = e.changedTouches[0].clientX - tsX;
    const dy = e.changedTouches[0].clientY - tsY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      if (dx < 0) book.next(); else book.prev();
    }
  }, { passive: true });
});







