// Aare API Base URL: 'https://aareguru.existenz.ch/v2018/today?app=ipt-dashboard&version=1.0.42&city=bern';
// Aare API Response Documentation: https://aareguru.existenz.ch/openapi/#/v2018/get_v2018_today

export interface AareData {
  aare: number;
  aare_prec: number;
  text: string;
  text_short: string;
  time: number;
  name: string;
  longname: string;
}
