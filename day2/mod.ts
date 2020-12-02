/**
 * https://adventofcode.com/2020/day/2
 */

import puzzle from './puzzle.ts';

const solution1 = () => {
    let lines = puzzle.split(/\n/);
    let validPasswords = 0;

    lines.forEach((line) => {
        const parts = line.split(':');
        const instructions = parts[0].split(' ');
        const password = parts[1].trim();
        const minMax = instructions[0].split('-');
        const letter = instructions[1];
        const min = +minMax[0];
        const max = +minMax[1];
        const occurances = password.match(new RegExp(letter, 'g'))?.length || 0;

        validPasswords += min <= occurances && occurances <= max ? 1 : 0;
    });

    console.log(validPasswords);
};

solution1();
