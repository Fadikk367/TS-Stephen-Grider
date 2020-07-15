import { MatchReader } from './MatchReader';
// import { CsvFileReader }  from './CsvFileReader';
import { Summary } from './Summary';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HTMLReport } from './reportTargets/HTMLReport';




// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCSV('football.csv');

// const summary = new Summary(
//   new WinsAnalysis('Liverpool'),
//   new HTMLReport()
// )

const summary = Summary.winsAnalysisWithHTMLReport('Liverpool');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);





