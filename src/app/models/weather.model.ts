// Weather API Key: '48debabaf0b5cb3e9333c46a1c17f631';
// Weather API Base URL: 'http://api.openweathermap.org/data/2.5/weather';
// Weather API Response Documentation: https://openweathermap.org/current#current_JSON

export interface WeatherData {
  weather: Weather[];
  main: MainData;
}

interface Weather {
  icon: string;
}

interface MainData {
  temp: number;
  feels_like: number;
}

export type TemperatureUnit = 'metric' | 'imperial' | 'kelvin';
