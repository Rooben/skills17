'use strict';
/**
 * @ngdoc function
 * @name rolandApp.mainPages:carouselData-service
 * @description
 * # carouselData-service
 * A service of the rolandApp
 */
module.exports = function () {
  return {
    titles: ['Professional', 'Work Related', 'Managerial', 'Extracurricular', 'Team Spirit', 'Composure'],
    baseImages: ['images/prof.png', 'images/customers.png', 'images/management.jpg', 'images/extracuricular.jpg', 'images/team.jpg', 'images/pressure.jpg'],
    details: [
      [
        'I am a Web Developer by profession.',
        'I have General computer programming skills.',
        'Designer Skills (Adobe CS5 Master Suit).',
        'I have \'Think-out-of-the-box\' (Creative) skills.'
      ],
      [
        'A Stake holder\'s success is my success as well.',
        'Customer satisfaction = business success.',
        ' I don\'t only respect date lines, I also develop assuring strategies towards that.'
      ],
      [
        'I can be a good manager, because I know what can be a limiting factor to corporate success.',
        'I do my work according to specific priorities.',
        'I have a Masters Degree in Management.',
        'I have a registered Corporation.'
      ],
      [
        'I have fun repairing household things.',
        'I like involvement in community development.',
        'I like to watch and play Soccer.',
        'I like Music, movies and traveling.',
        'I love and admire Nature.'
      ],
      [
        'I have an excellent team spirit.',
        'I listen to other colleagues\' opinions.',
        'What works well for a team, works well for the Company.',
        'I help bring my colleagues up to standard.'
      ],
      [
        'I stay on track in stressful times.',
        'I Respect Company objectives at all times.',
        'I Put on a smile even under pressure.',
        'I strive to be at work in time and not just on time.'
      ]
    ]
  };
};