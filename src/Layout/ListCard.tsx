import React, { useEffect, useState } from 'react';
import CurrencyCard from './CurrencyCard';

interface ExchangeRate {
    cc: string;
    rate: number;
}

const ListCard: React.FC = () => {
    const [rates, setRates] = useState<ExchangeRate[]>([]);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
                const data = await response.json();
                setRates(data);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };
        fetchRates();
    }, []);

    return (

        <div className="container mx-auto p-4 bg-cover bg-center m-0 auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {rates.map(rate => (
                    <CurrencyCard key={rate.cc} currency={rate.cc} rate={rate.rate} />
                ))}
            </div>
        </div>
    );
};

export default ListCard;
