import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();


let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HOME_WIN) manUnitedWins++;
  else if (match[2] === 'Man United' && match[5] === MatchResult.AWAY_WIN) manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games!`);