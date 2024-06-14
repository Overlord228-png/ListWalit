export interface ExchangeRate {
    currencyCodeL: string;
    rate: number;
  }
  
  export const fetchRates = async (): Promise<ExchangeRate[]> => {
    try {
      const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
      const data = await response.json();
      return data.map((item: any) => ({
        currencyCodeL: item.currencyCodeL,
        rate: item.amount,
      }));
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      return [];
    }
  };
