import React from 'react';
import { useSidebar } from '../components/SidebarContext';

interface CurrencyCardProps {
    currency: string;
    rate: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ currency, rate }) => {
    const { toggleSidebar, setSelectedCurrency } = useSidebar();

    const handleConvert = () => {
        setSelectedCurrency(currency);
        toggleSidebar();
    };

    return (
        <div className="border-2 border-black/55 borderRadius-[15px] mt-8 p-4 backdrop-blur-md bg-white/50 rounded shadow-md flex flex-col justify-between h-full">
            <div className="flex justify-between items-center">
                <div>
                    <span className="block text-black-700 font-bold">Гривна</span>
                    <span className="block text-black-500">UAH</span>
                </div>
                <div>
                    <span className="block text-black-700 font-bold">{currency}</span>
                    <span className="block text-black-800">{rate.toFixed(4)}</span>
                </div>
            </div>
            <button onClick={handleConvert} className="bg-blue-500 text-white py-1 px-4 rounded self-end mt-auto hover:bg-blue-600 transition">
                Конвертировать
            </button>
        </div>
    );
};

export default CurrencyCard;
