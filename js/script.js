const buttonCalculate = document.getElementById("button");


// data
const numerologyData = {
    1: {
      id: '1',
      numberTitle: 'The Leader',
      keywords: 'Original, Individual, Master Creator, Leader, Pioneer, Dominance, The Beginning',
      meaning: '1 symbolizes a pioneering spirit, independent nature, and innate leadership capabilities. On a bad day, 1 can be a bit bossy or boastful, hiding any insecurities behind over-developed self-importance. 1 must remember that although it is first, it can very quickly become the loneliest number. Even the most autonomous 1s need the support of their friends, family, and lovers.'
    },
    2: {
      id: '2',
      numberTitle: 'The Mediator',
      keywords: 'Compassion, Diplomacy, Tireless Service, Guidance and Nurturing.',
      isDeveloper: 'Within numerology, the 2 vibration assumes the role of the mediator, creating harmony by bringing together dissonant forces through compassion, empathy, and kindness. 2 is linked to psychic abilities and intuition, and if this number appears as a Life Path or Destiny Number, the individual will be astute to subtle energy shifts and emotional nuances. Because 2 is so sensitive, it is very conflict-averse, and can end up feeling under-appreciated or unacknowledged. 2 must avoid seeking external validation and, instead, realize that perfect equilibrium needed already exists within.'
    },
    3: {
        id: '3',
        numberTitle: 'The Creator',
        keywords: 'Divine Spark Within, Creative, Social, Bringer of Change',
        isDeveloper: 'Within numerology, the 2 vibration assumes the role of the mediator, creating harmony by bringing together dissonant forces through compassion, empathy, and kindness. 2 is linked to psychic abilities and intuition, and if this number appears as a Life Path or Destiny Number, the individual will be astute to subtle energy shifts and emotional nuances. Because 2 is so sensitive, it is very conflict-averse, and can end up feeling under-appreciated or unacknowledged. 2 must avoid seeking external validation and, instead, realize that perfect equilibrium needed already exists within.'
      },
    4: {
        id: '4',
        numberTitle: 'The Emperor',
        keywords: 'Organized, Stable, Resolute, Practical and Disciplined',
        isDeveloper: 'In numerology, 4 has an earthy-energy and is centered around fortifying its roots. 4 adamantly believes in the physical world and knows that investing in a solid infrastructure is necessary for building a lasting legacy. Practical, hardworking, and responsible, the vibration of the number 4 is focused on creating logical systems that can support scalable growth.'
      },
    5: {
        id: '5',
        numberTitle: 'The Traveller',
        keywords: 'Adventurous, Seeker and Teacher of Esoteric Wisdom, Sensual, Addictive Traits',
        isDeveloper: 'Free-thinking, adventurous, and progressive, 5 is defined by freedom. 5 needs to experience the world by engaging its five senses: For 5, life lessons are acquired through spontaneous acts of bravery. Akin to Sagittarius energy within astrology, 5 is known for its playful, impulsive, and vivacious spirit.'
      },
    6: {
        id: '6',
        numberTitle: 'The Harmonic',
        keywords: 'All You Need Is Love, Empathic, Charismatic',
        isDeveloper: 'Number 6 is recognized for its nurturing, supportive, and empathic nature. A true healer, 6 has the ability to problem solve in both the emotional and physical realms, helping others through its straightforward, yet gentle, approach. 6 has a strong sense of responsibility and cares deeply for its friends, family, and lovers.'
      },
    7: {
        id: '7',
        numberTitle: 'The Hermit',
        keywords: 'Seeker, Reclusive, Philosophical, Mystic, Silent',
        isDeveloper: 'The detectives of numerology, 7 is known for its investigative abilities and analytical skills. Astrologically, the number 7 can be thought of as a blend of Virgo and Scorpio energy: 7 is extremely detail-oriented, but is driven by inner-wisdom as opposed to tangible realities. '
      },
    8: {
        id: '8',
        numberTitle: 'The Ambitious',
        keywords: 'Drive, Ambition, Karma, Eternal Spirit',
        isDeveloper: '8 is all about abundance. Within numerology, this number is linked to material wealth and financial success. Ambitious and goal-oriented, 8 can effortlessly assume leadership positions through its natural magnetism. 8 applies big-picture thinking to broaden its scope, racing up the top of any ladder to reach extraordinary heights.'
      },
    9: {
        id: '9',
        numberTitle: 'The Ambitious',
        keywords: 'patience, kindness, compassion, understanding, awareness, intuitive knowing, Minister of God',
        isDeveloper: 'The mission for 9 is to reach its highest state of consciousness, and to help others also achieve this spiritual awareness. 9 is not afraid to transform, and its malleable spirit inspires others to explore their own ranges of motion. Since 9, in many ways, has transcended the physical plane, it must constantly remember to anchor itself.'
      }
  };

 


// button event
buttonCalculate.onclick = function (e) {
        e.preventDefault();
        separateName();
        console.log(separateName());
}


function compareLetters(name) {


        // letter to number
        const letterToNumbers = [
            {a: 1, j: 1, s: 1},
            {b: 2, k: 2, t: 2},
            {c: 3, l: 3, u: 3},
            {d: 4, m: 4, v: 4},
            {e: 5, n: 5, w: 5},
            {f: 6, o: 6, x: 6},
            {g: 7, p: 7, y: 7},
            {h: 8, q: 8, z: 8},
            {i: 9, r: 9}
        ];

        [...letterToNumbers];

/*         for(let i = 0; i < arguments.length; i++) {

            if(name[i] == letterToNumbers.a) {
                return 1;
            }

        } */



    console.log(letterToNumbers);
    
    console.log(letterToNumbers.a, "xgsss")
    return letterToNumbers.a;
    

}


function separateName() {

    let inputName = document.getElementById("input").value;
    let nameSplit = [...inputName];
    let compare = compareLetters(nameSplit);
    return compare;
}


